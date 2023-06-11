class HexString {
  hex2string(input) {
    let output = "";
    for (let i = 0; i < input.length; i += 2) {
      output += String.fromCharCode(parseInt(input.substr(i, 2), 16));
    }
    return output;
  }

  string2hex(input) {
    let output = "";
    for (let i = 0; i < input.length; i++) {
      output += input.charCodeAt(i).toString(16);
    }
    return output;
  }
}

module.exports = new HexString();
