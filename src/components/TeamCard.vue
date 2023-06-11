<template>
  <div
    class="relative w-64 bg-gray-400 border border-transparent rounded-lg opacity-95 h-80"
  >
    <div
      class="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    >
      <div class="flex flex-col items-center justify-center scale-125">
        <img :src="src" :alt="name" />
        <p class="text-base text-white text-poppins">
          {{ name }}
        </p>
        <p class="text-base text-white text-poppins">{{ nrp }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    nrp: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
