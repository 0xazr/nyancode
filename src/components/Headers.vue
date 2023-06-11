<template>
  <header class="top-0 h-20 p-6 bg-gray-900">
    <div class="flex flex-row items-center justify-between">
      <div class="flex flex-row text-3xl font-bold font-poppins">
        <span class="text-purple-500">nyan</span
        ><span class="text-white">code</span>
        <img class="meong" src="../assets/meong.png" alt="meong" />
      </div>
      <div class="flex flex-row items-center justify-center space-x-6">
        <MenuCard
          title="Home"
          to="/"
          :class="{
            'text-white border-b-2 border-white': $route.path == `/`,
          }"
        />
        <MenuCard
          title="Tools"
          to="/tools"
          :class="{
            'text-white border-b-2 border-white': $route.path == `/tools`,
          }"
        />
        <MenuCard
          title="About Us"
          to="/about"
          :class="{
            'text-white border-b-2 border-white': $route.path == `/about`,
          }"
        />
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
