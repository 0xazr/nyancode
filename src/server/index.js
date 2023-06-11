const GENERATE = require("./class/Generate");

const WEBSOCKET = GENERATE.web_socket;
const EMITTER = GENERATE.web_socket.EMITTER;

WEBSOCKET.socket.on("connection", (status) => {
  status.on(EMITTER.fe2be, (item) => {
    // WEBSOCKET.setDataFromUI(item);
    GENERATE.setData(item);
  });
});
