<template>
	<p class="join-title">회원가입</p>
	<div class="join-container">
		<div class="general-profile-container">
			<img
				src="/img/join/profile-empty.png"
				alt="프로필 사진 미리보기"
				class="general-profile-preview"
			/>
			<button class="general-profile-upload-button">
				<img src="/img/icon/upload-gray.svg" aria-hidden />
				<span>프로필사진 업로드</span>
			</button>
			<p class="general-profile-intro">
				증명사진 또는 여권 사진으로<br /><b>네모</b> 안에 얼굴 전체가 나오도록
				프로필<br />첨부 바랍니다.
			</p>
		</div>
		<i class="join-container-line"></i>
		<div class="join-form">
			<p class="join-subtitle">
				<span class="red-point">*</span>는 필수 입력 항목입니다.
			</p>
			<p class="join-form-title">아이디<span class="red-point"> *</span></p>
			<div class="join-form-input-container">
				<input
					type="text"
					class="join-form-input w-60"
					placeholder="아이디를 입력해주세요"
				/>
				<button class="join-form-gray-button">중복확인</button>
			</div>
			<p class="join-form-title">비밀번호<span class="red-point"> *</span></p>
			<div class="join-form-input-container">
				<input
					type="password"
					class="join-form-input"
					placeholder="영문/숫자/특수문자 혼합 8자 이상"
				/>
			</div>
			<p class="join-form-title">
				비밀번호 확인<span class="red-point"> *</span>
			</p>
			<div class="join-form-input-container">
				<input
					type="password"
					class="join-form-input"
					placeholder="영문/숫자/특수문자 혼합 8자 이상"
				/>
			</div>
			<p class="join-form-title">이름<span class="red-point"> *</span></p>
			<div class="join-form-input-container">
				<input
					type="text"
					class="join-form-input w-60"
					placeholder="이름을 입력해주세요"
				/>
			</div>
			<p class="join-form-title">휴대폰번호<span class="red-point"> *</span></p>
			<div class="join-form-input-container">
				<input
					type="tel"
					class="join-form-input"
					placeholder="휴대폰번호를 입력해주세요"
				/>
			</div>
			<p class="join-form-title">이메일주소</p>
			<div class="join-form-input-container mb-44">
				<input
					type="email"
					class="join-form-input"
					placeholder="이메일주소를 입력해주세요"
				/>
			</div>
		</div>
	</div>
	<div class="join-form-buttons">
		<button
			class="join-form-button button--gray"
			@click="handlerClickCancelButton"
		>
			취소
		</button>
		<button class="join-form-button" @click="handlerClickApplyButton">
			가입완료
		</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const handlerClickCancelButton = () => {
	router.back();
};

const handlerClickApplyButton = () => {
	alert('validation check');
	router.push('/user/join/general-success');
};
</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/join/container.scss';
</style>
