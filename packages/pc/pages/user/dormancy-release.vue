<template>
  <BorderGrayBoxCard title="아이디 휴면 해제" sub-title="최근까지 로그인 이력이 없어 휴면상태에 들어간 아이디입니다." button-text="아이디 잠금 해제" @click-button="handlerClickReleaseButton">
    <div class="join-form-input-container mb-30">
        <input type="text" name="user_id" class="join-form-input t-center"
              placeholder="이름은 본인인증 후 자동입력됩니다." readonly>
    </div>
    <div class="join-form-input-container mb-11">
        <input type="text" name="user_id" class="join-form-input"
              placeholder="아이디를 입력해주세요">
    </div>
    <div class="join-form-input-container mb-80">
        <input type="tel" name="user_phone" class="join-form-input w-60"
              placeholder="휴대폰번호를 입력해주세요">
        <button class="auth-button">본인확인</button>
    </div>
  </BorderGrayBoxCard>
</template>
<script setup>
import BorderGrayBoxCard from '~/components/card/BorderGrayBoxCard.vue'

const handlerClickReleaseButton = () => {
  alert('잠금 해제')
}
</script>
<style scoped lang="scss">
@import '@priros/common/assets/scss/join/common.scss';
.auth-button {
  flex: 1;
  height: 48px;
  background-color: #0075e1;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: $ft-bold;
  color: #ffffff;
  cursor: pointer;
}
</style>