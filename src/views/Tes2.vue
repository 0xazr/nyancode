<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <hr />
  <div>{{ app.temp.selected_types }}</div>
  <div>{{ app.temp.keys }}</div>
  <hr />
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
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import { useApp, useSocketIO } from "../store/index";

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
      this.app.respon = data;
    });
  },
};
</script>
