<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <label for="">TEXT</label>
  <input type="text" name="" v-model="app.text.text" id="" />
  <label for="">TYPE</label>
  <input type="text" name="" v-model="app.text.type" id="" />
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
  },
  watch: {
    "app.text": {
      handler() {
        this.socket.emitUIToServer(this.socket.emitter.fe2be, this.app.text);
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
