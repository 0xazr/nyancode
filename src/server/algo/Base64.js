class Base64 {
  encode(input) {
    return Buffer.from(input).toString("base64");
  }

  decode(input) {
    return Buffer.from(input, "base64").toString("ascii");
  }
}

module.exports = new Base64();
