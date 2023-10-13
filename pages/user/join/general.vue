<template>
  <div class="join-container">
    <p class="join-title">반갑습니다.<br>아래 정보를 입력해주세요.</p>
    <p class="join-subtitle">*는 필수 입력 항목입니다.</p>
    <div class="general-profile-container">
      <img src="/img/join/profile-empty.png" alt="프로필 사진 미리보기" class="general-profile-preview">
      <button class="general-profile-upload-button">
        <img src="/img/icon/upload-gray.svg" aria-hidden />
        <span>프로필사진 업로드</span>
      </button>
      <p class="general-profile-intro">
        증명사진 또는 여권 사진으로<br><b>네모</b> 안에 얼굴 전체가 나오도록 프로필 첨부 바랍니다.
      </p>
    </div>
    <div class="join-form">
      <p class="join-form-title">아이디 *</p>
      <div class="join-form-input-container">
        <input type="text" class="join-form-input w-60" placeholder="아이디를 입력해주세요">
        <button class="join-form-gray-button">중복확인</button>
      </div>
      <p class="join-form-title">비밀번호 *</p>
      <div class="join-form-input-container">
        <input type="password" class="join-form-input" placeholder="영문/숫자/특수문자 혼합 8자 이상">
      </div>
      <p class="join-form-title">비밀번호 확인 *</p>
      <div class="join-form-input-container">
        <input type="password" class="join-form-input" placeholder="영문/숫자/특수문자 혼합 8자 이상">
      </div>
      <p class="join-form-title">이름 *</p>
      <div class="join-form-input-container">
        <input type="text" class="join-form-input w-60" placeholder="이름을 입력해주세요">
      </div>
      <p class="join-form-title">휴대폰번호 *</p>
      <div class="join-form-input-container">
        <input type="tel" class="join-form-input" placeholder="휴대폰번호를 입력해주세요">
      </div>
      <p class="join-form-title">이메일주소</p>
      <div class="join-form-input-container mb-44">
        <input type="email" class="join-form-input" placeholder="이메일주소를 입력해주세요">
      </div>
    </div>
  </div>
  <div class="join-bottom-buttons sticky">
    <CommonBottomButton id="generalCancelButton" text="취소" width="35%" height="60px" backgroundColor="#d8d9db" @handler-click-button="handlerClickCancelButton" />
    <CommonBottomButton id="generalApplyButton" text="가입완료" width="65%" height="60px" @handler-click-button="handlerClickApplyButton" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import CommonBottomButton from '~/components/button/CommonBottomButton.vue'

const router = useRouter()
const handlerClickCancelButton = () => {
  router.back()
}

const handlerClickApplyButton = () => {
  alert('validation check')
}

</script>

<style scoped lang="scss">
@import '~/assets/scss/join/common.scss';
.general-profile-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 0 40px;
  border-bottom: 1px solid #dadada;
  margin-bottom: 28px;
  .general-profile-preview {
    width: 125px;
    height: 148px;
  }
  .general-profile-upload-button {
    width: 100%;
    height: 48px;
    margin: 20px 0 15px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px solid #dadada;
    background-color: #ffffff;
    color: $gray;
    font-size: 15px;
  }
  .general-profile-intro {
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    color: #959595;
    font-weight: $ft-medium;
    b {
      color: #7ef422;
      font-weight: $ft-bold;
    }
  }
}
</style>