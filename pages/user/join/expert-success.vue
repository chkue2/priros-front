<template>
  <div class="join-container">
    <p class="join-title">회원가입 요청완료</p>
    <p class="join-subtitle">
      회원가입을 신청해 주셔서 감사합니다.<br>
      지금부터 <strong>가입심사(1~3일 소요)가 진행</strong>됩니다.<br>
      등록하신 휴대전화로 <strong>알림톡</strong>이 발송됩니다.
    </p>
    <a href="tel:070-4466-7062" class="join-gray-select-button">고객센터 070-4466-7062</a>
  </div>
  <div class="join-bottom-buttons">
    <CommonBottomButton id="joinBottomButton" text="홈으로" width="100%" height="60px" @handler-click-button="handlerClickHomeButton" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import CommonBottomButton from '~/components/button/CommonBottomButton.vue'

const router = useRouter()
const handlerClickHomeButton = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/join/common.scss';
.join-subtitle {
  strong {
    font-weight: $ft-bold;
    color: #ff1779;
  }
}
.join-gray-select-button {
  margin-top: 42px;
  text-decoration: none;
}
</style>