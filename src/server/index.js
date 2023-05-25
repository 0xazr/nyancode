const WEBSOCKET = require("./class/Websocket");

const EMITTER = {
  fe2be: "fe2be",
  be2fe: "be2fe",
};

WEBSOCKET.socket.on("connection", (status) => {
  status.on(EMITTER.fe2be, (item) => {
    WEBSOCKET.setDataFromUI(item);
  });
});
