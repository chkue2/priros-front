<template>
  <div class="password-wrapper">
    <div class="password-form">
      <p class="form-help-text">프리로스 회원님의 소중한 개인정보를 안전하게 보호하기 위해 한번 더 비밀번호를 입력 해주세요.</p>
      <p class="form-warning-text">※ 비밀번호는 타인에게 노출되지 않도록 주의해 주세요.</p>
      <div class="form-title">비밀번호 재확인</div>
      <input type="password" autocomplete="off" placeholder="비밀번호를 입력해주세요">
      <button class="form-button" @click="handlerClickButton">확인</button>
    </div>
  </div>
</template>
<script setup>
const emits = defineEmits(['click-button'])
const handlerClickButton = () => {
  emits('click-button')
}
</script>

<style scoped lang="scss">
.password-wrapper {
  padding: 42px 16px 0;
  .password-form {
    padding: 34px 20px 20px;
    border: 1px solid #dbdbdb;
    background-color: #f8f8f8;
    border-radius: 12px;
    .form-help-text {
      font-size: 14px;
      color: #808080;
      text-align: center;
      word-break: keep-all;
      line-height: 20px;
    }
    .form-warning-text {
      font-size: 12px;
      color: #808080;
      text-align: center;
      margin: 40px 0 36px;
    }
    .form-title{
      font-size: 14px;
      font-weight: $ft-semibold;
      margin-bottom: 6px;
    }
    input {
      width: 100%;
      height: 47px;
      padding: 0 12px;
      border: 1px solid #bebebe;
      background-color: #ffffff;
      font-size: 14px;
      font-weight: $ft-medium;
    }
    .form-button {
      width: 100%;
      height: 48px;
      border: none;
      background-color: #000000;
      border-radius: 6px;
      font-size: 18px;
      font-weight: $ft-bold;
      color: #ffffff;
      margin-top: 24px;
    }
  }
}
</style>