<template>
  <div class="join-container">
    <p class="join-title">반갑습니다.<br>아래 정보를 입력해주세요.</p>
    <p class="join-subtitle">*는 필수 입력 항목입니다.</p>
    <div class="join-form">
      <p class="join-form-title">회원유형 *</p>
      <div class="join-form-input-container">
        <select class="join-form-input"><option value="">선택해주세요</option></select>
      </div>
      <p class="join-form-title">직책 *</p>
      <div class="join-form-input-container">
        <input type="text" class="join-form-input w-60" placeholder="직책을 입력해주세요">
      </div>
      <p class="join-form-title">대표자 *</p>
      <div class="join-form-input-container">
        <input type="text" class="join-form-input w-60" placeholder="본인인증이 필요합니다">
        <button class="join-form-gray-button">본인확인</button>
      </div>
      <p class="join-form-title">휴대전화번호 *</p>
      <div class="join-form-input-container">
        <input type="tel" class="join-form-input" placeholder="본인인증 후 자동입력" readonly>
      </div>
      <p class="join-form-title">사업장 대표 전화번호 *</p>
      <div class="join-form-input-container">
        <input type="tel" class="join-form-input" placeholder="사업장 대표 전화번호를 입력해주세요" >
      </div>
      <p class="join-form-title">사업장 대표 이메일</p>
      <div class="join-form-input-container">
        <input type="email" class="join-form-input" placeholder="사업장 대표 이메일을 입력해주세요" >
      </div>
      <p class="join-form-title">사업장 등록증 *</p>
      <div class="join-form-input-container">
        <button class="join-form-input-file">등록증을 업로드해주세요</button>
        <input type="file">
      </div>
      <p class="join-form-title">전문가 등록증 *</p>
      <div class="join-form-input-container">
        <button class="join-form-input-file">등록증을 업로드해주세요</button>
        <input type="file">
      </div>
      <div class="join-form-double-container">
        <div class="join-form-double-left">
          <p class="join-form-title">만료예정일 *</p>
          <div class="join-form-input-container">
            <input type="date" class="join-form-input">
          </div>
        </div>
        <div class="join-form-double-right">
          <p class="join-form-title">공제증서 또는 보험증권 *</p>
          <div class="join-form-input-container">
            <button class="join-form-input-file">파일을 업로드해주세요</button>
            <input type="file" class="join-form-input">
          </div>
        </div>
      </div>
      <label class="join-form-label">
        <input type="checkbox">
        <p>상기 정보를 제공하여 회원가입에 동의하며 가입승인 후 가입절차에 필요한 정보수집에 동의합니다.</p>
      </label>
    </div>
  </div>
  <div class="join-bottom-buttons sticky">
    <CommonBottomButton id="generalCancelButton" text="취소" width="35%" height="60px" backgroundColor="#d8d9db" @handler-click-button="handlerClickCancelButton" />
    <CommonBottomButton id="generalApplyButton" text="가입완료" width="65%" height="60px" @handler-click-button="handlerClickApplyButton" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'

const router = useRouter()
const handlerClickCancelButton = () => {
  router.back()
}

const handlerClickApplyButton = () => {
  alert('validation check')
  router.push('/user/join/expert-success')
}
</script>

<style lang="scss" scoped>
@import '@priros/common/assets/scss/join/common.scss';
.join-form {
  margin-top: 40px;
}
.join-form-double-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 4px;
  .join-form-double-left {
    grid-column: span 2;
  }
  .join-form-double-right {
    grid-column: span 3;
  }
}
.join-form-label {
  margin-bottom: 24px;
}
</style>