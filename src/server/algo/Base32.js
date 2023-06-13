class Base32 {
  encode(text) {
    const base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let bits = "";
    let encoded = "";

    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      bits += this.decimalToBinary(charCode, 8);
    }

    while (bits.length % 5 !== 0) {
      bits += "0";
    }

    for (let i = 0; i < bits.length; i += 5) {
      const index = parseInt(bits.substr(i, 5), 2);
      encoded += base32chars[index];
    }

    return encoded;
  }

  decode(encoded) {
    const base32chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
    let bits = "";

    for (let i = 0; i < encoded.length; i++) {
      const charIndex = base32chars.indexOf(encoded.charAt(i));
      bits += this.decimalToBinary(charIndex, 5);
    }

    let decoded = "";

    for (let i = 0; i < bits.length; i += 8) {
      const byte = parseInt(bits.substr(i, 8), 2);
      decoded += String.fromCharCode(byte);
    }

    return decoded;
  }

  decimalToBinary(decimal, padding) {
    let binary = decimal.toString(2);

    while (binary.length < padding) {
      binary = "0" + binary;
    }

    return binary;
  }
}

module.exports = new Base32();
