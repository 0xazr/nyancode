class Blowfish {
  constructor(key) {
    // Key setup
    this.P = [];
    this.S = [];

    for (let i = 0; i < 18; i++) {
      this.P[i] ^= key[i % key.length];
    }

    let data = new Array(2).fill(0);
    for (let i = 0; i < 18; i += 2) {
      this.encrypt(data);

      this.P[i] = data[0];
      this.P[i + 1] = data[1];
    }

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 256; j += 2) {
        this.encrypt(data);

        this.S[i][j] = data[0];
        this.S[i][j + 1] = data[1];
      }
    }
  }

  encrypt(data) {
    let l = data[0];
    let r = data[1];

    for (let i = 0; i < 16; i++) {
      l ^= this.P[i];
      r ^= this.F(l);

      [l, r] = [r, l];
    }

    l ^= this.P[16];
    r ^= this.P[17];

    data[0] = r;
    data[1] = l;
  }

  decrypt(data) {
    let l = data[0];
    let r = data[1];

    for (let i = 17; i > 1; i--) {
      l ^= this.P[i];
      r ^= this.F(l);

      [l, r] = [r, l];
    }

    l ^= this.P[1];
    r ^= this.P[0];

    data[0] = r;
    data[1] = l;
  }

  F(x) {
    let h = this.S[0][x >>> 24] + this.S[1][(x >>> 16) & 0xff];
    h ^= this.S[2][(x >>> 8) & 0xff] + this.S[3][x & 0xff];
    return h;
  }
}

// Contoh penggunaan
let key = [0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef];
let plaintext = [0x01, 0x23, 0x45, 0x67];

let blowfish = new Blowfish(key);

blowfish.encrypt(plaintext);
console.log("Ciphertext:", plaintext);

blowfish.decrypt(plaintext);
console.log("Decrypted text:", plaintext);
