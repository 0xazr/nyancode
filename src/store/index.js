import { io } from "socket.io-client";
import { defineStore } from "pinia";
import Config from "../config/setup.json";
import Algo from "../config/algo.json";

export const useApp = defineStore({
  id: "app",
  state: () => ({
    req: {
      text: "",
      algo: [],
    },
    respon: "",
    temp: {
      selected_types: [],
      keys: [],
    },
    algo: Algo,
  }),
  actions: {},
});

export const useSocketIO = defineStore({
  id: "socket-io",
  state: () => ({
    socket: null,
    emitter: {
      fe2be: "fe2be",
      be2fe: "be2fe",
    },
  }),
  actions: {
    setupSocketConnection() {
      this.socket = io(`http://localhost:${Config.websocket_port}`);
    },
    emitUIToServer(emitter, data) {
      const THAT = this;
      const EMITTER = emitter;
      const DATA = data;
      THAT.socket.emit(EMITTER, DATA);
    },
    disconnect() {
      if (this.socket) {
        this.socket.disconnect();
      }
    },
  },
});
