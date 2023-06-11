class VigenereCipher {
  constructor(key) {
    this.key = key.toUpperCase();
  }

  encrypt(plaintext) {
    plaintext = plaintext.toUpperCase();
    let ciphertext = "";
    let keyIndex = 0;

    for (let i = 0; i < plaintext.length; i++) {
      let plaintextChar = plaintext.charCodeAt(i);
      if (plaintextChar >= 65 && plaintextChar <= 90) {
        let keyChar = this.key.charCodeAt(keyIndex % this.key.length);
        let encryptedChar = (plaintextChar - 65 + (keyChar - 65)) % 26;
        ciphertext += String.fromCharCode(encryptedChar + 65);
        keyIndex++;
      } else {
        ciphertext += plaintext.charAt(i);
      }
    }

    return ciphertext;
  }

  decrypt(ciphertext) {
    ciphertext = ciphertext.toUpperCase();
    let plaintext = "";
    let keyIndex = 0;

    for (let i = 0; i < ciphertext.length; i++) {
      let ciphertextChar = ciphertext.charCodeAt(i);
      if (ciphertextChar >= 65 && ciphertextChar <= 90) {
        let keyChar = this.key.charCodeAt(keyIndex % this.key.length);
        let decryptedChar = (ciphertextChar - 65 - (keyChar - 65) + 26) % 26;
        plaintext += String.fromCharCode(decryptedChar + 65);
        keyIndex++;
      } else {
        plaintext += ciphertext.charAt(i);
      }
    }

    return plaintext;
  }
}

// Contoh penggunaan
let key = "KEY";
let vigenere = new VigenereCipher(key);

let plaintext = "HELLO";
let ciphertext = vigenere.encrypt(plaintext);
console.log("Ciphertext:", ciphertext);

let decryptedText = vigenere.decrypt(ciphertext);
console.log("Decrypted text:", decryptedText);
