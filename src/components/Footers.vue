<template>
  <footer class="bottom-0 w-full p-6 text-gray-300 bg-gray-900">
    <div class="flex justify-center w-full max-w-screen-xl mx-auto">
      <div class="flex flex-row items-center text-poppins">
        <span class="text-2xl font-bold text-purple-500">nyan</span
        ><span class="text-2xl font-bold text-white">code</span>
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
