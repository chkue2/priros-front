import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', {
	state: () => ({
		isActive: false,
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
		},
	},
});
