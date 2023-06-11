class Hexdump {
  toHexdump(text) {
    let hexdump = "";
    for (let i = 0; i < text.length; i++) {
      let char = text.charCodeAt(i).toString(16).toUpperCase().padStart(2, "0");
      hexdump += char + " ";
    }

    return hexdump.trim();
  }

  fromHexdump(hexdump) {
    let hexValues = hexdump.split(" ");
    let text = "";
    for (let i = 0; i < hexValues.length; i++) {
      let hex = hexValues[i].trim();
      if (hex !== "") {
        let charCode = parseInt(hex, 16);
        text += String.fromCharCode(charCode);
      }
    }

    return text;
  }
}

module.exports = new Hexdump();
