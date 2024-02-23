<template>
	<p class="signup-title">회원가입</p>
	<p class="signup-subtitle">회원님의 유형을 선택해주세요</p>
	<div class="signup-container">
		<div class="join-form-select-buttons">
			<button
				class="join-gray-select-button"
				:class="{ selected: joinType === 'general' }"
				@click="handlerClickTypeSelectButton('general')"
			>
				일반 회원가입
			</button>
			<button
				class="join-gray-select-button"
				:class="{ selected: joinType === 'expert' }"
				@click="handlerClickTypeSelectButton('expert')"
			>
				전문가 회원가입
			</button>
		</div>
		<button class="signup-button" @click="handlerClickNextButton">다음</button>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let joinType = ref('');
const router = useRouter();

const handlerClickTypeSelectButton = type => {
	joinType.value = type;
};

const handlerClickNextButton = () => {
	if (joinType.value === '') {
		alert('회원가입 유형을 선택해주세요.');
		return;
	}

	router.push(`/user/join/${joinType.value}`);
};
</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/join/common.scss';
.signup-title {
	font-size: 22px;
	font-weight: $ft-bold;
	line-height: 55px;
	margin: 72px 0 12px;
	text-align: center;
}
.signup-subtitle {
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	color: #808080;
}
.signup-container {
	width: 402px;
	margin: 0 auto;
	.signup-button {
		width: 100%;
		height: 48px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 6px;
		background-color: #000000;
		cursor: pointer;
		border: none;
		margin-top: 77px;
		color: #ffffff;
		font-size: 18px;
		font-weight: $ft-bold;
	}
}
.join-form-select-buttons {
	margin-top: 70px;
	display: flex;
	flex-direction: column;
	gap: 16px;
}
</style>
