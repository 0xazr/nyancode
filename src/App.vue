<template>
  <router-view />
</template>

<script>
import { useApp, useSocketIO } from "./store/index";

export default {
  setup() {
    const app = useApp();
    const socket = useSocketIO();

    return {
      app,
      socket,
    };
  },
  async beforeMount() {
    this.socket.setupSocketConnection();

    const EMITTER = this.socket.emitter;
    this.socket.socket.on(EMITTER.be2fe, (data) => {
      this.app.respon = data;
    });
  },
  watch: {
    "app.temp": {
      handler() {
        let algo = [];
        if (this.app.temp.selected_types.length != 0) {
          for (let i = 0; i < this.app.temp.selected_types.length; i++) {
            if (this.app.findKey(this.app.temp.selected_types[i].name)) {
              if (this.app.temp.selected_types[i] && this.app.temp.keys[i]) {
                algo.push({
                  name: this.app.temp.selected_types[i].name,
                  type: this.app.temp.selected_types[i].type,
                  key: this.app.temp.keys[i],
                });
              }
            } else {
              if (this.app.temp.selected_types[i]) {
                algo.push({
                  name: this.app.temp.selected_types[i].name,
                  type: this.app.temp.selected_types[i].type,
                });
              }
            }
          }
        }
        this.app.req.algo = algo;
        this.app.req.text = this.app.temp.text;
        if (this.app.req.text != "") {
          console.log(this.app.req);
          this.socket.emitUIToServer(this.socket.emitter.fe2be, this.app.req);
        }
      },
      deep: true,
    },
    "app.req.text": {
      handler() {
        if (this.app.req.text == "") {
          this.app.respon = "";
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
