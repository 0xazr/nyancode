<template>
  <router-link
    :to="to"
    class="text-gray-300 hover:text-white hover:border-b-2 hover:border-white"
    >{{ title }}</router-link
  >
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
