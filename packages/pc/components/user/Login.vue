<template>
	<BorderGrayBoxCard
		:title="title"
		:sub-title="subTitle"
		button-text="로그인"
		@click-button="handlerClickLoginButton"
	>
		<div class="join-form-input-container mb-11">
			<input
				v-model="credentials.userName"
				type="text"
				name="user_name"
				class="join-form-input"
				placeholder="아이디를 입력해주세요"
			/>
		</div>
		<div class="join-form-input-container">
			<input
				id="passwordInput"
				v-model="credentials.password"
				type="password"
				name="user_password"
				class="join-form-input"
				placeholder="비밀번호를 입력해주세요"
			/>
			<i class="login-toggle-password" @click="handlerClickPasswordToggle"></i>
		</div>
		<div class="login-form-middle-container">
			<div class="login-form-middle-left">
				<div
					class="login-form-middle-toggle"
					:class="{ active: isSwitchToggle }"
					@click="handlerClickSwitchToggle"
				>
					<i></i>
				</div>
				<p class="login-form-middle-toggle-text">아이디 기억하기</p>
			</div>
			<NuxtLink to="/" class="login-form-middle-find-password"
				>비밀번호를 잊으셨나요?</NuxtLink
			>
		</div>
	</BorderGrayBoxCard>
	<div class="login-form-button-container">
		<NuxtLink to="/user/join/expert">회원가입</NuxtLink>
		<span>|</span>
		<NuxtLink to="/">아이디찾기</NuxtLink>
		<span>|</span>
		<NuxtLink to="/faq/list">헬프센터</NuxtLink>
	</div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@priros/common/store/auth.js';
import BorderGrayBoxCard from '~/components/card/BorderGrayBoxCard.vue';

const props = defineProps({
	title: {
		type: String,
		default: '',
	},
	subTitle: {
		type: String,
		default: '',
	},
});

const auth = useAuthStore();

// 비밀번호 확인 토글
let isPasswordToggle = ref(false);
watch(
	() => isPasswordToggle.value,
	() => {
		const target = document.querySelector('#passwordInput');
		if (isPasswordToggle.value) {
			target.setAttribute('type', 'text');
		} else {
			target.setAttribute('type', 'password');
		}
	},
);

const handlerClickPasswordToggle = () => {
	isPasswordToggle.value = !isPasswordToggle.value;
};

let isSwitchToggle = ref(false);
const handlerClickSwitchToggle = () => {
	isSwitchToggle.value = !isSwitchToggle.value;
};

const credentials = ref({
	userName: '',
	password: '',
});

const router = useRouter();

const handlerClickLoginButton = async () => {
	const isSuccess = await auth.login(credentials.value);
	if (isSuccess) {
		router.push('/');
	} else {
		alert('실패');
	}
};
</script>
<style scoped lang="scss">
@import '@priros/common/assets/scss/join/common.scss';

.login-toggle-password {
	width: 16px;
	height: 11px;
	background: url(/img/icon/eye-gray.svg) no-repeat center/cover;
	cursor: pointer;
	z-index: 11;
	position: absolute;
	top: 50%;
	right: 16px;
	transform: translateY(-50%);
}

.login-form-middle-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 34px 0 39px;

	.login-form-middle-left {
		display: flex;
		align-items: center;
	}

	.login-form-middle-toggle {
		width: 40px;
		height: 20px;
		border-radius: 37px;
		border: 0.5px solid #e5e5e5;
		background-color: #f2f2f2;
		position: relative;
		transition: background-color 0.3s ease-in-out;

		&.active {
			background-color: #235bed;

			i {
				transform: translateX(20px);
			}
		}

		i {
			display: inline-block;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			background-color: #ffffff;
			box-shadow: 1px 1px 2px -1px #3333334d;
			position: absolute;
			top: 1px;
			left: 0;
			transform: translateX(2px);
			transition: transform 0.3s ease-in-out;
		}
	}

	.login-form-middle-toggle-text {
		font-size: 12px;
		color: #7a7a7a;
		margin-left: 8px;
	}

	.login-form-middle-find-password {
		font-size: 12px;
		color: #007aff;
		text-decoration: none;
	}
}

.login-form-button-container {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 21px;
	a {
		font-size: 14px;
		color: #5b5b5b;
		text-decoration: none;
	}
	& > span {
		margin: 0 20px;
		color: #d0d0d0;
		font-size: 12px;
	}
}
</style>
