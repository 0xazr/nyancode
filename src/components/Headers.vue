<template>
  <header class="bg-gray-900 p-6">
    <div class="flex flex-row justify-between">
      <div class="flex flex-row text-3xl font-bold font-poppins">
        <span class="text-purple-500">nyan</span
        ><span class="text-white">code</span>
        <img class="meong" src="../assets/meong.png" alt="meong" />
      </div>
      <div>
        <a href="#" class="text-gray-300 hover:text-white mr-4">Home</a>
        <a href="#" class="text-gray-300 hover:text-white mr-4">Encoded</a>
        <a href="#" class="text-gray-300 hover:text-white">Decoded</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
/* Opsional: Anda dapat menambahkan gaya khusus untuk header di sini */
</style>
