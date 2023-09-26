<template>
  <div>
    <div
      class="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center"
      v-if="(listImages?.length || []) > 0"
    >
      <div
        v-for="image in listImages"
        :key="image.id"
        class="relative z-10 shadow-md cursor-pointer hover:shadow-xl transition duration-300 ease-in-out"
      >
        <img
          class="h-[315px] max-w-full rounded-lg object-cover"
          :src="image.url"
          :alt="image.title"
        />
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col items-center justify-center h-[85vh]">
        <img
          src="@/assets/images/illustration/no-data.jpg"
          alt="Upload Icon"
          class="max-h-[25rem] min-w-[200px] min-h-[200px] bg-contain object-contain"
        />
        <div class="text-gray-400 text-xl">
          Tidak ada gambar, tekan tombol upload untuk menambah gambar.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Vue
import { computed, onMounted } from "vue";

// Stores
import { useImageUpload } from "@/stores/image-upload";

const imageUploadStore = useImageUpload();

const listImages = computed(() => imageUploadStore.listImages);

onMounted(() => {
  try {
    imageUploadStore.listImages = JSON.parse(localStorage.getItem("image"));
  } catch (error) {
    imageUploadStore.listImages = [];
  }
});
</script>
