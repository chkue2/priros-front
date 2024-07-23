import { defineStore } from "pinia";

export const useAlertStore = defineStore("alert", {
  state: () => ({
    message: "",
    isOpen: false,
    isConfirmOpen: false,
  }),
  actions: {
    open(text) {
      this.message = text;
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    confirmOpen(text) {
      this.message = text;
      this.isConfirmOpen = true;
    },
    confirmClose() {
      this.isConfirmOpen = false;
    },
  },
});
