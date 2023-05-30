<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <label for="">TEXT</label>
  <input type="text" name="" v-model="app.req.text" id="" />
  <br />
  <div v-for="(algorithm, index) in app.algo" :key="index">
    <label :for="'algo' + (index + 1)">Algorithm {{ algorithm.name }}:</label>
    <select :id="'algo' + (index + 1)" v-model="app.temp.selected_types[index]">
      <option
        v-for="(type, index) in algorithm.type"
        :value="type"
        :key="index"
      >
        {{ type }}
      </option>
    </select>
    <input type="text" name="" v-model="app.temp.keys[index]" id="" />
  </div>
  <label for="">Respon</label>
  <div>{{ app.respon }}</div>
  <hr />
  <div>{{ app.temp.selected_types }}</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { useApp, useSocketIO } from "./store/index";

export default {
  components: {
    HelloWorld,
  },
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
      // console.log(data);
      this.app.respon = data;
    });
  },
  watch: {
    "app.temp": {
      handler() {
        let algo = [];
        for (let i = 0; i < this.app.algo.length; i++) {
          if (this.app.temp.selected_types[i] && this.app.req.text != "") {
            if (this.app.algo[i].key) {
              console.log(this.app.algo[i].key);
              algo.push({
                name: this.app.algo[i].name,
                type: this.app.temp.selected_types[i],
                key: this.app.temp.keys[i],
              });
            } else {
              algo.push({
                name: this.app.algo[i].name,
                type: this.app.temp.selected_types[i],
              });
            }
          }
        }
        this.app.req.algo = algo;
        this.socket.emitUIToServer(this.socket.emitter.fe2be, this.app.req);
      },
      deep: true,
    },
    "app.req": {
      handler() {
        if (this.app.req.algo.length != 0) {
          this.socket.emitUIToServer(this.socket.emitter.fe2be, this.app.req);
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
