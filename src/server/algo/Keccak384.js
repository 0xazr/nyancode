class Keccak384 {
  static hash(message) {
    const blockSize = 104;
    const rate = 832;
    const capacity = blockSize - rate;

    // Padding
    const paddedMessage = this.padMessage(message, rate);

    // Initialization
    const state = new Uint8Array(blockSize);
    const hash = new Uint8Array(48);
    state.fill(0);

    // Absorbing phase
    for (let i = 0; i < paddedMessage.length; i += rate) {
      const block = paddedMessage.subarray(i, i + rate);
      this.xorState(state, block);
      this.permutation(state);
    }

    // Squeezing phase
    hash.set(state.subarray(0, 48));

    return hash;
  }

  static padMessage(message, rate) {
    const paddedMessage = new Uint8Array(
      Math.ceil((message.length + 1) / rate) * rate
    );
    paddedMessage.set(message);
    paddedMessage[message.length] = 0x06; // Append suffix byte
    paddedMessage[paddedMessage.length - 1] |= 0x80; // Set padding

    return paddedMessage;
  }

  static xorState(state, block) {
    for (let i = 0; i < state.length; i++) {
      state[i] ^= block[i];
    }
  }

  static permutation(state) {
    const roundConstants = [
      0x0000000000000001n,
      0x0000000000008082n,
      0x800000000000808an,
      0x8000000080008000n,
      0x000000000000808bn,
      0x0000000080000001n,
      0x8000000080008081n,
      0x8000000000008009n,
      0x000000000000008an,
      0x0000000000000088n,
      0x0000000080008009n,
      0x000000008000000an,
      0x000000008000808bn,
      0x800000000000008bn,
      0x8000000000008089n,
      0x8000000000008003n,
      0x8000000000008002n,
      0x8000000000000080n,
      0x000000000000800an,
      0x800000008000000an,
      0x8000000080008081n,
      0x8000000000008080n,
      0x0000000080000001n,
      0x8000000080008008n,
    ];

    const rounds = 24;
    const stateSize = state.length / 8;
    const words = new Array(stateSize);

    for (let r = 0; r < rounds; r++) {
      // θ step
      const c = new Array(5);
      const d = new Array(5);
      for (let x = 0; x < 5; x++) {
        c[x] =
          state[x] ^
          state[5 + x] ^
          state[10 + x] ^
          state[15 + x] ^
          state[20 + x];
      }
      for (let x = 0; x < 5; x++) {
        d[x] =
          c[(x + 4) % 5] ^ ((c[(x + 1) % 5] << 1n) | (c[(x + 1) % 5] >> 7n));
      }
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
          state[x + 5 * y] ^= d[x];
        }
      }

      // ρ and π steps
      let x = 1n;
      let y = 0n;
      let current = state[1];
      for (let t = 0; t < 24; t++) {
        const tempX = x;
        x = y;
        y = (2n * tempX + 3n * y) % 5n;

        const temp = state[x + 5n * y];
        state[x + 5n * y] =
          ((current << (((t + 1n) * (t + 2n)) / 2n)) |
            (current >> (64n - ((t + 1n) * (t + 2n)) / 2n))) &
          0xffffffffffffffffn;
        current = temp;
      }

      // χ step
      for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
          words[x] = state[x + 5 * y];
        }
        for (let x = 0; x < 5; x++) {
          state[x + 5 * y] =
            words[x] ^ (~words[(x + 1) % 5] & words[(x + 2) % 5]);
        }
      }

      // ι step
      state[0] ^= roundConstants[r];
    }
  }
}

module.exports = new Keccak384();
