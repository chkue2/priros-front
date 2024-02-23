<template>
	<div class="market-bottom-tabs">
		<p
			class="bottom-tab"
			:class="{ active: props.tab === 'review' }"
			@click="handlerClickTab('review')"
		>
			리뷰관리
		</p>
		<p
			class="bottom-tab"
			:class="{ active: props.tab === 'rate' }"
			@click="handlerClickTab('rate')"
		>
			평점관리
		</p>
	</div>
</template>

<script setup>
const props = defineProps({
	tab: {
		type: String,
		default: 'processed',
	},
});
const emits = defineEmits(['click-tab']);
const handlerClickTab = v => {
	emits('click-tab', v);
};
</script>
<style scoped lang="scss">
@import '~/assets/scss/market/write.scss';
</style>
