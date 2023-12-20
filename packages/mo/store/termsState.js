import {defineStore} from 'pinia';

export const useTermsStore = defineStore('terms', {
  state: () => ({
    isPersonalTerm: false,
    isServiceTerm: false
  }),
  actions: {
    togglePersonalTerm() {
      this.isPersonalTerm = !this.isPersonalTerm
    },
    toggleServiceTerm() {
      this.isServiceTerm = !this.isServiceTerm
    }
  }
});