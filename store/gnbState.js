import {defineStore} from 'pinia';

export const useGnbStore = defineStore('gnb', {
    state: () => ({
        isActive: false
    }),
    actions: {
        activate() {
            this.isActive = true;
        },
        deactivate() {
            this.isActive = false;
        },
        toggle() {
            this.isActive = !this.isActive;
        }
    }
});