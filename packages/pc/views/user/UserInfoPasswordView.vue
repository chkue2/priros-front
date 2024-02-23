<template>
	<BorderGrayBoxCard
		background-color="#f8f8f8"
		button-text="확인"
		@click-button="handlerClickApplyButton"
	>
		<p class="user-info-text">
			프리로스 회원님의 소중한 개인정보를 안전하게 보호하기 위해<br />한번 더
			비밀번호를 입력 해주세요.
		</p>
		<p class="user-info-text">
			※ 비밀번호는 타인에게 노출되지 않도록 주의해 주세요.
		</p>
		<p class="user-info-title">비밀번호 재확인</p>
		<input type="password" class="user-info-input" autocomplete="off" />
	</BorderGrayBoxCard>
</template>

<script setup>
import BorderGrayBoxCard from '~/components/card/BorderGrayBoxCard.vue';

const emits = defineEmits(['handler-click-apply-button']);
const handlerClickApplyButton = () => {
	emits('handler-click-apply-button');
};
</script>

<style scoped lang="scss">
.user-info-text {
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	color: #808080;
	& + .user-info-text {
		margin-top: 25px;
	}
}
.user-info-title {
	margin: 24px 0 6px;
	font-size: 14px;
	font-weight: $ft-semibold;
	line-height: 20px;
}
.user-info-input {
	width: 100%;
	height: 47px;
	padding-left: 8px;
	background-color: #ffffff;
	border: 1px solid #bebebe;
	margin-bottom: 23px;
}
</style>
