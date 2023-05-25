function encode(input) {
  return Buffer.from(input).toString("base64");
}

console.log(encode("hai"));
