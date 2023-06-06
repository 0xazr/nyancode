<template>
  <footer class="bg-gray-900 text-gray-300 h-20 p-6 py-4 bottom-0 w-full">
    <div class="w-full max-w-screen-xl mx-auto flex justify-center">
      <div class="items-center flex flex-row text-poppins">
        <span class="text-purple-500 font-bold text-2xl">nyan</span
        ><span class="text-white font-bold text-2xl">code</span>
        <img class="meong" src="../assets/meong.png" alt="meong" />
        <span
          class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© 2023
          <router-link to="/" class="hover:underline">nyancode</router-link> -
          Multiple Decoder</span
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>
