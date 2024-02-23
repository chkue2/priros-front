import { defineStore } from 'pinia';

export const useCalendarStore = defineStore('calendar', {
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
