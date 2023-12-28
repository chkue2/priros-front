<template>
  <div class="join-container">
    <p class="join-title">아이디 찾기</p>
    <div class="join-form">
      <p class="join-form-title">이름 *</p>
      <div class="join-form-input-container">
        <input type="text" class="join-form-input" placeholder="이름을 입력하세요" >
      </div>
      <p class="join-form-title">휴대전화번호 *</p>
      <div class="join-form-input-container">
        <input type="tel" class="join-form-input" placeholder="-없이 숫자만 입력하세요" >
      </div>
    </div>
  </div>
  <div class="join-bottom-buttons sticky">
    <CommonBottomButton id="generalApplyButton" width="100%" text="아이디 찾기" height="60px" />
  </div>
</template>

<script setup>
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'
</script>

<style lang="scss" scoped>
@import '@priros/common/assets/scss/join/common.scss';
.join-title {
  margin-bottom: 40px;
}
.join-bottom-buttons {
  margin-top: 300px;
}
</style>