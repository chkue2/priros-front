<template>
	<p
		class="state-tab"
		:class="{ error: props.isError }"
		@click="handlerClickTab"
	>
		<span :style="{ color: color }">{{ props.title }} {{ props.state }}</span>
		<img v-if="props.isError" src="/img/icon/arrow-upside-circle-black.svg" />
	</p>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
	title: {
		type: String,
		default: '',
	},
	state: {
		type: String,
		default: '',
	},
	isError: {
		type: Boolean,
		default: false,
	},
});

const color = computed(() =>
	props.state === '진행중'
		? '#00BA34'
		: props.state === '완료'
			? '#000000'
			: '#CECECE',
);

const handlerClickTab = e => {
	e.preventDefault();
	e.stopPropagation();
};
</script>

<style scoped lang="scss">
.state-tab {
	display: inline-flex;
	position: relative;
	align-items: center;
	cursor: pointer;
	& > span {
		font-size: 14px;
		font-weight: $ft-bold;
		line-height: 22px;
	}
	& > img {
		width: 18px;
		height: 18px;
		margin-left: 3px;
	}
	&.error::after {
		content: '';
		width: 100%;
		height: 2px;
		background-color: #000000;
		position: absolute;
		bottom: -5px;
		left: 0;
	}
}
</style>
