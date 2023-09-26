<template>
  <div class="container mx-auto" :class="props.class">
    <slot />
  </div>
</template>

<script setup>
// Vue
import { defineProps } from "vue";

const props = defineProps({
  class: {
    type: String,
    default: "",
  },
});
</script>
