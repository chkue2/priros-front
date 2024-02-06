<template>
	<div class="market-bottom-tabs">
		<p
			class="bottom-tab"
			:class="{ active: props.tab === 'processed' }"
			@click="handlerClickTab('processed')"
		>
			처리내역
		</p>
		<p
			class="bottom-tab"
			:class="{ active: props.tab === 'memo' }"
			@click="handlerClickTab('memo')"
		>
			메모
		</p>
		<p
			class="bottom-tab"
			:class="{ active: props.tab === 'files' }"
			@click="handlerClickTab('files')"
		>
			첨부파일
		</p>
	</div>
</template>

<script setup>
import { ref } from 'vue';
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
