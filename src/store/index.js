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
      text: "",
    },
    algo: Algo,
    search: "",
  }),
  actions: {
    setAlgo(name) {
      let algo = this.temp.selected_types.find((item) => item == name);
      if (algo == undefined) {
        this.temp.selected_types.push({ name });
      } else {
        this.temp.selected_types = this.temp.selected_types.filter(
          (item) => item != name
        );
      }
    },
    findKey(name) {
      let bool = false;
      let algo = this.algo.find((item) => item.name == name);
      if (algo.key == true) {
        bool = true;
      }
      return bool;
    },
    findAlgo(name) {
      let bool = false;
      let algo = this.temp.selected_types.find((item) => item.name == name);
      if (algo != undefined) {
        bool = true;
      }
      return bool;
    },
    deleteAlgo(index) {
      this.temp.selected_types.splice(index, 1);
    },
    hideAlgo(name) {},
  },
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
