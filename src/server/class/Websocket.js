const { TEXT } = require("../utils/init");
const Config = require("../../config/setup.json");

class WebSocket {
  socket;
  port = Config.websocket_port;

  // output
  data = {
    ...TEXT,
  };

  EMITTER = {
    fe2be: "fe2be",
    be2fe: "be2fe",
  };

  constructor() {
    const THAT = this;
    const EXPRESS = require("express");
    const APP = EXPRESS();
    const HTTP = require("http");
    const SERVER = HTTP.createServer(APP);
    const { Server } = require("socket.io");
    THAT.socket = new Server(SERVER, {
      cors: {
        origins: ["*"],
      },
    });
    SERVER.listen(THAT.port, () => {
      console.log(`listening on port socket: ${THAT.port}`);
    });
  }

  emitData(emitter, data) {
    this.socket.emit(emitter, data);
  }

  setDataFromUI(item) {
    console.log(item);
    this.data = { ...item };
  }
}

module.exports = new WebSocket();
