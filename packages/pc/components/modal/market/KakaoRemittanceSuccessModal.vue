<template>
	<CommonHeaderModal
		modal-id="kakoRemittanceRequestModal"
		modal-title="송금요청"
		width="420px"
		height="360px"
	>
		<div class="modal-image">
			<img :src="modalImage" />
		</div>
		<p class="modal-title">{{ modalTitle }}</p>
		<p class="modal-subtitle">입금이 지연되는 경우 카카오뱅크에 문의하세요</p>
		<div class="modal-button">
			<button>닫기</button>
		</div>
	</CommonHeaderModal>
</template>

<script setup>
import { computed } from 'vue';
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue';

const props = defineProps({
	isReSend: {
		type: Boolean,
		default: false,
	},
});

const modalImage = computed(() =>
	props.isReSend ? '/img/cha/cha-01.png' : '/img/cha/cha-02.png',
);
const modalTitle = computed(() =>
	props.isReSend ? '송금요청완료' : '송금재요청완료',
);
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/success-modal.scss';
</style>
