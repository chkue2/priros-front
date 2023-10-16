<template>
  <p class="join-title success-title">회원가입 완료</p>
  <p class="join-subtitle success-content">프리로스의 소중한 고객님이 되신것을<br>진심으로 축하합니다!</p>
  <div class="join-bottom-buttons">
    <CommonBottomButton id="generalSuccessBottomButton" text="홈으로" width="100%" height="60px" @handler-click-button="handlerClickHomeButton" />
  </div>
</template>

<script setup>
import { useRouter } from  'vue-router'
import CommonBottomButton from '~/components/button/CommonBottomButton'

const router = useRouter()
const handlerClickHomeButton = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/join/common.scss';
.success-title {
  padding-top: 180px;
  text-align: center;
}
.success-content {
  margin-top: 7px;
  text-align: center;
}
</style>