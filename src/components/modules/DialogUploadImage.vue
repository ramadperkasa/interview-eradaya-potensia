<!-- eslint-disable no-empty -->
<template>
  <div>
    <base-dialog v-model="isOpen" title="Upload Image Anda">
      <form class="space-y-6" @submit.prevent="onSubmit">
        <base-drop-upload />

        <base-button
          :disabled="isLoading || !fileData.file"
          :loading="isLoading"
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Upload Image
        </base-button>
      </form>
    </base-dialog>

    <base-alert
      v-model="alert.show"
      :variant="alert.variant"
      :title="alert.title"
      :message="alert.message"
    />
  </div>
</template>

<script setup>
// Vue
import { computed, reactive, provide, ref } from "vue";

// Stores
import { useDialog } from "@/stores/dialog";
import { useImageUpload } from "@/stores/image-upload";

const dialog = useDialog();
const imageUploadStore = useImageUpload();

const isLoading = ref(false);

const fileData = reactive({
  file: null,
  fileUrl: null,
});

const alert = ref({
  show: false,
  title: "",
  message: "",
  variant: "",
});

/**
 * @description
 * Handle change file
 */
provide("fileData", fileData);

/**
 * @description
 * Show Dialog
 */
const isOpen = computed({
  get() {
    return dialog.dialog && dialog.dialogComponent == "UploadImage";
  },
  set(value) {
    if (value) {
      dialog.openDialog("UploadImage");
    } else {
      dialog.closeDialog();
    }
  },
});

/**
 * @description
 * Handle submit
 */
const onSubmit = async () => {
  isLoading.value = true;

  if (fileData.file) {
    imageUploadStore.image = fileData.file;

    try {
      const response = await imageUploadStore.uploadImage();

      if (response.data.success) {
        try {
          imageUploadStore.listImages.push(response.data.data);
        } catch (error) {
          imageUploadStore.listImages = [response.data.data];
        }

        localStorage.setItem(
          "image",
          JSON.stringify(imageUploadStore.listImages)
        );

        fileData.file = null;
        fileData.fileUrl = null;

        alert.value.show = true;
        alert.value.title = "Success";
        alert.value.message = "Gambar Berhasil Di Upload";
        alert.value.variant = "green";

        isOpen.value = false;
      } else {
        alert.value.show = true;
        alert.value.title = "Error";
        alert.value.message = imageUploadStore.imageUploadError;
        alert.value.variant = "red";
      }
    } catch (error) {
      console.log(error);
      alert.value.show = true;
      alert.value.title = "Error";
      alert.value.message = "Terjadi Kesalahan";
      alert.value.variant = "red";
    } finally {
      isLoading.value = false;
    }
  }
};
</script>
