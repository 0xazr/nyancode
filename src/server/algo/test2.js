const CryptoJS = require("crypto-js");

// let ciphertext = CryptoJS.RC4.encrypt(
//   "my message",
//   "secret key 123"
// ).toString();

// console.log(ciphertext);

// // Decrypt
// let bytes = CryptoJS.RC4.decrypt(ciphertext, "secret key 123");
// let originalText = bytes.toString(CryptoJS.enc.Utf8);

// console.log(originalText);

let ciphertext2 = CryptoJS.MD5("hai");
console.log(`md5: ${ciphertext2}`);

let cip3 = CryptoJS.HmacMD5("hai", "message");
console.log(`hmac md5: ${cip3}`);
