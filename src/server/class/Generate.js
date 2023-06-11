// const ALGO = require("../../config/algo.json");
const CryptoJS = require("crypto-js");
const algo = require("../algo/algo.js");
class Generate {
  web_socket = require("./Websocket");

  data = {
    text: "",
    algo: [],
  };

  setData(input) {
    console.log(input);
    this.data = { ...input };
    this.readData();
  }

  bytesString(input) {
    return input.toString(CryptoJS.enc.Utf8);
  }

  readData() {
    const ALGO_LEN = this.data.algo.length;
    const ALGO = this.data.algo;
    const MESSAGE = this.data.text;
    let respon = "";

    for (let i = 0; i < ALGO_LEN; i++) {
      let key = ALGO[i].key;

      switch (ALGO[i].name) {
        case "aes":
          if (ALGO[i].type == "encrypt") {
            respon = CryptoJS.AES.encrypt(MESSAGE, key).toString();
          } else {
            let bytes = CryptoJS.AES.decrypt(MESSAGE, key);
            respon = bytes.toString(CryptoJS.enc.Utf8);
          }
          break;

        case "des":
          if (ALGO[i].type == "encrypt") {
            respon = CryptoJS.DES.encrypt(MESSAGE, key).toString();
          } else {
            let bytes = CryptoJS.DES.decrypt(MESSAGE, key);
            respon = bytes.toString(CryptoJS.enc.Utf8);
          }
          break;

        case "triple des":
          if (ALGO[i].type == "encrypt") {
            respon = CryptoJS.TripleDES.encrypt(MESSAGE, key).toString();
          } else {
            let bytes = CryptoJS.TripleDES.decrypt(MESSAGE, key);
            respon = bytes.toString(CryptoJS.enc.Utf8);
          }
          break;

        case "rabbit":
          if (ALGO[i].type == "encrypt") {
            respon = CryptoJS.Rabbit.encrypt(MESSAGE, key).toString();
          } else {
            let bytes = CryptoJS.Rabbit.decrypt(MESSAGE, key);
            respon = bytes.toString(CryptoJS.enc.Utf8);
          }
          break;

        case "md5":
          console.log(MESSAGE);
          respon = CryptoJS.MD5(MESSAGE).toString();
          break;

        case "SHA1":
          respon = CryptoJS.SHA1(MESSAGE).toString();
          break;

        case "SHA256":
          respon = CryptoJS.SHA256(MESSAGE).toString();
          break;

        case "SHA512":
          respon = CryptoJS.SHA512(MESSAGE).toString();
          break;

        case "SHA3":
          respon = CryptoJS.SHA3(MESSAGE).toString();
          break;

        case "RIPEMD-160":
          respon = CryptoJS.RIPEMD160(MESSAGE).toString();
          break;

        case "RC4":
          if (ALGO[i].type == "encrypt") {
            respon = CryptoJS.RC4.encrypt(MESSAGE, key).toString();
          } else {
            let bytes = CryptoJS.RC4.decrypt(MESSAGE, key);
            respon = bytes.toString(CryptoJS.enc.Utf8);
          }
          break;

        case "RC4Drop":
          if (ALGO[i].type == "encrypt") {
            respon = CryptoJS.RC4Drop.encrypt(MESSAGE, key).toString();
          } else {
            let bytes = CryptoJS.RC4Drop.decrypt(MESSAGE, key);
            respon = bytes.toString(CryptoJS.enc.Utf8);
          }
          break;

        case "hmac md5":
          respon = CryptoJS.HmacMD5(MESSAGE, key).toString();
          break;

        case "hmac SHA1":
          respon = CryptoJS.HmacSHA1(MESSAGE, key).toString();
          break;

        case "hmac SHA256":
          respon = CryptoJS.HmacSHA256(MESSAGE, key).toString();
          break;

        case "hmac SHA512":
          respon = CryptoJS.HmacSHA512(MESSAGE, key).toString();
          break;
        case "hmac SHA3":
          respon = CryptoJS.HmacSHA3(MESSAGE, key).toString();
          break;

        case "hmac RIPEMD-160":
          respon = CryptoJS.HmacRIPEMD160(MESSAGE, key).toString;
          break;

        case "hex string":
          if (ALGO[i].type == "toStr") {
            respon = algo.HexString.hex2string(MESSAGE);
          } else {
            respon = algo.HexString.string2hex(MESSAGE);
          }
          break;

        case "Base64":
          if (ALGO[i].type == "encrypt") {
            respon = algo.Base64.encode(MESSAGE);
          } else {
            respon = algo.Base64.decode(MESSAGE);
          }
          break;

        case "Rot 13":
          if (ALGO[i].type == "encrypt") {
            respon = algo.Rot13.encode(MESSAGE);
          } else {
            respon = algo.Rot13.decode(MESSAGE);
          }
          break;

        case "Hexdump":
          if (ALGO[i].type == "encrypt") {
            respon = algo.Hexdump.toHexdump(MESSAGE);
          } else {
            respon = algo.Hexdump.fromHexdump(MESSAGE);
          }
          break;

        default:
          break;
      }
    }
    console.log(respon);
    this.web_socket.emitData(this.web_socket.EMITTER.be2fe, respon);
  }
}

module.exports = new Generate();
