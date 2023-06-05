<template>
  <headers />
  <div class="bg-container">
    <img class="bg-image" src="../assets/bg.png" alt="background" />
  </div>
  <footers />
</template>

<script>
import Headers from "../components/Headers.vue";
import Footers from "../components/Footers.vue";

export default {
  name: "Header",
  components: {
    Headers,
    Footers,
  },
};
</script>

<style>
/* Opsional: Anda dapat menambahkan gaya khusus untuk header di sini */
</style>
