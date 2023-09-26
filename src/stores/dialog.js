// Import Pinia
import { defineStore } from "pinia";

export const useDialog = defineStore("dialog", {
  state: () => ({
    dialog: false,
    dialogComponent: null,
    dialogProps: {},
  }),

  actions: {
    openDialog(component, props = {}) {
      this.dialog = true;
      this.dialogComponent = component;
      this.dialogProps = props;
    },

    closeDialog() {
      this.dialog = false;
      this.dialogComponent = null;
      this.dialogProps = {};
    },
  },
});
