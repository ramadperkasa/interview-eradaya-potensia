<template>
  <div>
    <layout-navbar />

    <base-container class="p-4">
      <RouterView />
    </base-container>
  </div>
</template>

<script setup>
// Vue
import { onMounted } from "vue";

// Flowbite
import { initFlowbite } from "flowbite";

// Components
import LayoutNavbar from "@/components/layouts/LayoutNavbar.vue";

onMounted(() => {
  initFlowbite();
});
</script>
