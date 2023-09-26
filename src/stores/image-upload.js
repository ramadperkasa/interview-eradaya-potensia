// Import pinia
import { defineStore } from "pinia";

// Import axios
import axios from "@/composable/axios";

export const useImageUpload = defineStore("imageUpload", {
  state: () => ({
    listImages: [],
    image: null,
    imageUrl: null,
    imagePreview: null,
    imageUploadProgress: 0,
    imageUploadError: null,
    imageUploadSuccess: false,
  }),

  actions: {
    uploadImage() {
      this.imageUploadProgress = 0;
      this.imageUploadError = null;
      this.imageUploadSuccess = false;

      const formData = new FormData();
      formData.append("image", this.image);

      return new Promise((resolve, reject) => {
        axios
          .post("/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
              this.imageUploadProgress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
            },
          })
          .then((response) => {
            this.imageUploadSuccess = true;
            this.imageUrl = response.data.data.url;

            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            this.imageUploadError = error;
            reject(error);
          });
      });
    },
  },
});
