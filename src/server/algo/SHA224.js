class SHA224 {
  constructor() {
    this.blockSize = 512; // Block size in bits
    this.digestSize = 224; // Digest size in bits

    // Initialize constants
    this.H = new Uint32Array([
      0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511,
      0x64f98fa7, 0xbefa4fa4,
    ]);

    this.K = new Uint32Array([
      0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1,
      0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
      0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786,
      0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
      0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
      0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
      0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
      0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
      0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a,
      0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
      0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
    ]);

    this.reset();
  }

  reset() {
    this.state = new Uint32Array([
      0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511,
      0x64f98fa7, 0xbefa4fa4,
    ]);

    this.buffer = new Uint8Array(64);
    this.bufferLength = 0;
    this.messageLength = 0;
  }

  update(data) {
    const input = new Uint8Array(data);
    let index = 0;

    while (index < input.length) {
      this.buffer[this.bufferLength++] = input[index++];

      if (this.bufferLength === 64) {
        this.processBlock();
      }
    }

    this.messageLength += input.length * 8;
  }

  finalize() {
    const padding = new Uint8Array([
      0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
    ]);

    if (this.bufferLength >= 56) {
      this.buffer.set(padding, this.bufferLength);
      this.processBlock();
      this.buffer.fill(0);
    } else {
      this.buffer.set(
        padding.subarray(0, 56 - this.bufferLength),
        this.bufferLength
      );
    }

    // Append message length
    const messageLengthBits = this.messageLength.toString(2).padStart(64, "0");
    const messageLengthBytes = new Uint8Array(8);

    for (let i = 0; i < 8; i++) {
      messageLengthBytes[i] = parseInt(messageLengthBits.substr(i * 8, 8), 2);
    }

    this.buffer.set(messageLengthBytes, 56);
    this.processBlock();
  }

  processBlock() {
    const W = new Uint32Array(64);

    // Prepare message schedule
    for (let t = 0; t < 16; t++) {
      W[t] =
        (this.buffer[t * 4] << 24) |
        (this.buffer[t * 4 + 1] << 16) |
        (this.buffer[t * 4 + 2] << 8) |
        this.buffer[t * 4 + 3];
    }

    for (let t = 16; t < 64; t++) {
      const s0 =
        this.rightRotate(W[t - 15], 7) ^
        this.rightRotate(W[t - 15], 18) ^
        (W[t - 15] >>> 3);
      const s1 =
        this.rightRotate(W[t - 2], 17) ^
        this.rightRotate(W[t - 2], 19) ^
        (W[t - 2] >>> 10);
      W[t] = (W[t - 16] + s0 + W[t - 7] + s1) & 0xffffffff;
    }

    // Initialize working variables
    let [a, b, c, d, e, f, g, h] = this.state;

    // Compression function
    for (let t = 0; t < 64; t++) {
      const S1 =
        this.rightRotate(e, 6) ^
        this.rightRotate(e, 11) ^
        this.rightRotate(e, 25);
      const ch = (e & f) ^ (~e & g);
      const temp1 = (h + S1 + ch + this.K[t] + W[t]) & 0xffffffff;
      const S0 =
        this.rightRotate(a, 2) ^
        this.rightRotate(a, 13) ^
        this.rightRotate(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) & 0xffffffff;

      h = g;
      g = f;
      f = e;
      e = (d + temp1) & 0xffffffff;
      d = c;
      c = b;
      b = a;
      a = (temp1 + temp2) & 0xffffffff;
    }

    // Update state
    this.state[0] = (this.state[0] + a) & 0xffffffff;
    this.state[1] = (this.state[1] + b) & 0xffffffff;
    this.state[2] = (this.state[2] + c) & 0xffffffff;
    this.state[3] = (this.state[3] + d) & 0xffffffff;
    this.state[4] = (this.state[4] + e) & 0xffffffff;
    this.state[5] = (this.state[5] + f) & 0xffffffff;
    this.state[6] = (this.state[6] + g) & 0xffffffff;
    this.state[7] = (this.state[7] + h) & 0xffffffff;

    this.bufferLength = 0;
  }

  rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }

  hexString() {
    let result = "";

    for (let i = 0; i < 8; i++) {
      result += this.state[i].toString(16).padStart(8, "0");
    }

    return result;
  }

  digest(data) {
    this.reset();
    this.update(data);
    this.finalize();
    return this.hexString();
  }
}

module.exports = new SHA224();
