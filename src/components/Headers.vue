<template>
  <header class="bg-gray-900 p-6 h-20 top-0">
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row text-3xl font-bold font-poppins">
        <span class="text-purple-500">nyan</span
        ><span class="text-white">code</span>
        <img class="meong" src="../assets/meong.png" alt="meong" />
      </div>
      <div class="flex flex-row items-center justify-center space-x-4">
        <MenuCard title="Home" to="/" />
        <MenuCard title="Encoded" to="/encoded" />
        <MenuCard title="Decoded" to="/dncoded" />
      </div>
    </div>
  </header>
</template>

<script>
import MenuCard from "./MenuCard.vue";

export default {
  name: "Header",
  components: {
    MenuCard,
  },
};
</script>

<style>
/* Opsional: Anda dapat menambahkan gaya khusus untuk header di sini */
</style>
