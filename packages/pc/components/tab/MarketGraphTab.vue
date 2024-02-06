<template>
	<div class="graph-tab">
		<i class="graph-dot" :style="{ backgroundColor: props.color }"></i>
		<span>{{ props.title }} ({{ props.count }})건</span>
		<i
			v-if="!isAll"
			class="graph-bar"
			:style="{ width: barWidth + '%', backgroundColor: props.color }"
		></i>
	</div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	title: {
		type: String,
		default: '',
	},
	totalCount: {
		type: Number,
		default: 0,
	},
	count: {
		type: Number,
		default: 0,
	},
	color: {
		type: String,
		default: '#000000',
	},
});

const barWidth = computed(() => (props.count / props.totalCount / 2) * 100);
const isAll = computed(() => props.title === '전체');
</script>

<style lang="scss" scoped>
.graph-tab {
	padding: 12px;
	background-color: #f2f3f8;
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
	& + .graph-tab {
		margin-top: 9px;
	}
	& > span {
		font-size: 14px;
		font-weight: 700;
		color: #202020;
		width: 110px;
	}
}
.graph-dot {
	display: block;
	width: 9px;
	height: 9px;
	border-radius: 50%;
}
.graph-bar {
	display: block;
	min-width: 2px;
	height: 10px;
	margin-left: 5px;
}
</style>
