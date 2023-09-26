<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center justify-center w-full" @drop.prevent="onDrop">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <template v-if="!fileUrl">
            <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              PNG, JPG or GIF (MAX. 2 MB)
            </p>
          </template>
          <div v-else class="mt-4">
            <div class="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                :src="fileUrl"
                alt="Uploaded Image"
                class="max-h-[13rem] min-w-[200px] min-h-[200px] bg-contain object-contain"
              />

              <div
                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full flex justify-center items-center overflow-hidden bg-fixed opacity-0 transition duration-700 ease-in-out hover:rounded-lg hover:opacity-100 hover:cursor-pointer hover:bg-gray-900 hover:bg-opacity-50"
              >
                <span class="text-white p-5 text-center"
                  >Klik gambar untuk mengganti
                </span>
              </div>
            </div>
          </div>
        </div>
        <input
          id="dropzone-file"
          type="file"
          class="hidden"
          @change="onChange"
        />
      </label>
    </div>

    <div class="flex items-center justify-center">
      <div v-if="errorMessage" class="text-red-500 text-sm">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
// Vue
import { ref, onMounted, onUnmounted, watch, inject } from "vue";

// Stores
import { useImageUpload } from "@/stores/image-upload";

const imageUploadStore = useImageUpload();

watch(
  () => imageUploadStore.imageUploadSuccess,
  (file) => {
    if (file) {
      removeFile();
    }
  }
);

const file = ref(null);
const fileUrl = ref(null);

const errorMessage = ref(null);

const events = ["dragenter", "dragover", "dragleave", "drop"];

/**
 * @description
 * Prevent default
 */
function preventDefaults(e) {
  e.preventDefault();
}

onMounted(() => {
  events.forEach((eventName) => {
    document.body.addEventListener(eventName, preventDefaults);
  });
});

onUnmounted(() => {
  events.forEach((eventName) => {
    document.body.removeEventListener(eventName, preventDefaults);
  });
});

/**
 * @description
 * On drop file
 */
const onDrop = (event) => {
  file.value = event.dataTransfer.files[0];
};

/**
 * @description
 * On change file
 */
const onChange = (event) => {
  file.value = event.target.files[0];

  validateFile();
};

/**
 * @description
 * remove file
 */
const removeFile = () => {
  file.value = null;
  fileUrl.value = null;
};

/**
 * @description
 * Validate file
 */
const validateFile = () => {
  if (file.value) {
    const allowedFormats = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/gif",
    ];

    const maxFileSize = 2 * 1024 * 1024;

    if (!allowedFormats.includes(file.value.type)) {
      errorMessage.value =
        "Harap menggunakan file gambar berupa format PNG, JPG, or GIF.";
      file.value = null;
      fileUrl.value = null;
    } else if (file.value.size > maxFileSize) {
      errorMessage.value = "File terlalu besar! File harus dibawah 2 MB.";
      file.value = null;
      fileUrl.value = null;
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        fileUrl.value = reader.result;
      };
      reader.readAsDataURL(file.value);

      errorMessage.value = null;
    }
  }
};

/**
 * @description
 * Inject file data to parent component
 */
const parentComponent = inject("fileData");

if (parentComponent) {
  watch(file, () => {
    parentComponent.file = file.value;
  });

  watch(fileUrl, () => {
    parentComponent.fileUrl = fileUrl.value;
  });
}
</script>
