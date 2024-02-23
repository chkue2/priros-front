<template>
	<CommonHeaderModal
		modal-id="paymentPasswordModal"
		modal-title="PIN 비밀번호 변경 / 재설정"
		width="509px"
		@close-modal="handlerClickCloseModal"
	>
		<div class="payment-password-form">
			<div class="payment-password-input">
				<p class="password-input-title">기존 PIN 비밀번호</p>
				<input
					type="password"
					autocomplete="off"
					placeholder="기존 PIN 비밀번호 6자리를 입력하세요"
				/>
			</div>
			<div class="payment-password-input">
				<p class="password-input-title">변경할 PIN 비밀번호</p>
				<input
					type="password"
					autocomplete="off"
					placeholder="변경할 PIN 비밀번호 6자리를 입력하세요"
				/>
			</div>
			<p class="password-forgot">비밀번호를 잊으셨나요?</p>
			<div class="password-apply-button">
				<button>변경하기</button>
			</div>
		</div>
	</CommonHeaderModal>
</template>
<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue';

const emits = defineEmits(['close-modal']);
const handlerClickCloseModal = () => {
	emits('close-modal');
};
</script>
<style scoped lang="scss">
.payment-password-form {
	padding: 32px 20px;
	.payment-password-input {
		& + .payment-password-input {
			margin-top: 32px;
		}
		.password-input-title {
			font-size: 16px;
			font-weight: $ft-bold;
			margin-bottom: 10px;
		}
		& > input {
			width: 100%;
			height: 48px;
			padding: 0 12px;
			border-radius: 8px;
			border: 1px solid #000000;
			font-size: 16px;
		}
	}
	.password-forgot {
		margin-top: 95px;
		font-size: 14px;
		color: #235bed;
		cursor: pointer;
		text-align: center;
	}
	.password-apply-button {
		margin-top: 11px;
		display: flex;
		justify-content: center;
		& > button {
			width: 173px;
			height: 44px;
			border-radius: 4px;
			border: none;
			background-color: #000000;
			font-size: 16px;
			font-weight: $ft-bold;
			color: #ffffff;
			cursor: pointer;
		}
	}
}
</style>
