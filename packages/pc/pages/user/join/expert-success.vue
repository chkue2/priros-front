<template>
  <BorderGrayBoxCard title="회원가입 완료" sub-title="프리로스의 소중한 고객님이 되신것을 진심으로 축하합니다!" background-color="#f8f8f8" button-text="홈으로" @click-button="handlerClickHomeButton">
    <p class="success-content">회원가입을 신청해주셔서 감사합니다.</p>
    <p class="success-content">지금부터 <b>가입심사(1~3일 소요)가 진행</b>됩니다.</p>
    <p class="success-content">등록하신 휴대전화로 <b>알림톡</b>이 발송됩니다.</p>
    <p class="success-help-center">고객센터 070-4466-7062</p>
  </BorderGrayBoxCard>
</template>

<script setup>
import BorderGrayBoxCard from '~/components/card/BorderGrayBoxCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const handlerClickHomeButton = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
.success-content {
  font-size: 14px;
  line-height: 20px;
  color: #808080;
  text-align: center;
  b {
    font-weight: $ft-bold;
    color: #000000;
  }
}
.success-help-center {
  width: 304px;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #efefef;
  background-color: #fafafa;
  margin: 24px auto 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #808080;
}
</style>