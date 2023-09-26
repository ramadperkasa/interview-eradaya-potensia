<template>
  <section id="layout-navbar fixed top-0">
    <nav
      class="bg-white border-gray-200 dark:bg-gray-900 relative z-10 drop-shadow-sm"
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="https://erapotensia.com/" class="flex items-center">
          <img
            src="https://erapotensia.com/wp-content/uploads/2020/01/logoOfficial.png"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Era Daya Potensia</span
          >
        </a>
        <div class="flex md:order-2">
          <base-button
            @click="onClickUpload()"
            :icon="uploadIcon"
            icon-class="text-white"
          >
            Upload Gambar
          </base-button>
        </div>
      </div>
    </nav>

    <dialog-upload-image />
  </section>
</template>

<script setup>
// Icons
import uploadIcon from "@/assets/images/icons/ic_upload.svg";

// Components
import DialogUploadImage from "@/components/modules/DialogUploadImage.vue";

// Stores
import { useDialog } from "@/stores/dialog";

const { openDialog } = useDialog();

/**
 * @description
 * Open dialog to upload image
 */
const onClickUpload = () => {
  openDialog("UploadImage");
};
</script>
