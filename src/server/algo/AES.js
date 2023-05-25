class AES {
  constructor() {
    this.key = "0123456789abcdef";
    this.iv = "abcdef9876543210";
  }

  encrypt(data) {
    let key = CryptoJS.enc.Utf8.parse(this.key);
    let iv = CryptoJS.enc.Utf8.parse(this.iv);
    let encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  }

  decrypt(data) {
    let key = CryptoJS.enc.Utf8.parse(this.key);
    let iv = CryptoJS.enc.Utf8.parse(this.iv);
    let decrypted = CryptoJS.AES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}

module.exports = new AES();
