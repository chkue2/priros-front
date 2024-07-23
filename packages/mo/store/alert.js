import { defineStore } from "pinia";

export const useAlertStore = defineStore("alert", {
  state: () => ({
    message: "",
    isOpen: false,
  }),
  actions: {
    open(text) {
      this.message = text;
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
});
