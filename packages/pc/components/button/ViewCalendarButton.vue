<template>
	<button
		class="view-calendar"
		:style="{
			marginTop: marginTop + 'px',
			marginBottom: marginBottom + 'px',
			marginLeft: marginLeft + 'px',
			marginRight: marginRight + 'px',
		}"
		@click="calendarStore.toggle"
	>
		<img class="icon--calendar" src="/img/icon/calendar-white.svg" />
		<span>달력보기</span>
		<img class="icon--arrow" src="/img/icon/arrow-upside-circle-white.svg" />
	</button>
</template>

<script setup>
import { useCalendarStore } from '~/store/calendarModalState.js';

const calendarStore = useCalendarStore();

const props = defineProps({
	marginTop: {
		type: Number,
		default: 0,
	},
	marginBottom: {
		type: Number,
		default: 0,
	},
	marginLeft: {
		type: Number,
		default: 0,
	},
	marginRight: {
		type: Number,
		default: 0,
	},
});
</script>

<style scoped lang="scss">
.view-calendar {
	display: flex;
	align-items: center;
	gap: 4px;
	background-color: #000000;
	border: 1px solid #d9d9d9;
	padding: 10px;
	cursor: pointer;
	& > span {
		font-size: 14px;
		font-weight: 700;
		color: #ffffff;
		margin-bottom: 1px;
	}
}
.icon--calendar {
	width: 20px;
	height: 20px;
}
.icon--arrow {
	width: 18px;
	height: 18px;
	margin-left: 10px;
}
</style>
