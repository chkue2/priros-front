<template>
  <div class="join-container">
    <p class="join-title">회원가입</p>
    <p class="join-subtitle">회원가입 유형을 선택해주세요</p>
    <div class="join-form-select-buttons">
      <button class="join-gray-select-button" :class="{selected: joinType === 'general'}" @click="handlerClickTypeSelectButton('general')">일반 회원가입</button>
      <button class="join-gray-select-button" :class="{selected: joinType === 'expert'}" @click="handlerClickTypeSelectButton('expert')">전문가 회원가입</button>
    </div>
    <div class="join-bottom-buttons">
      <CommonBottomButton id="joinBottomButton" text="다음" width="100%" height="60px" @handler-click-button="handlerClickNextButton" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'

let joinType = ref('')
const router = useRouter()

const handlerClickTypeSelectButton = (type) => {
  joinType.value = type
}

const handlerClickNextButton = () => {
  if(joinType.value === '') {
    alert('회원가입 유형을 선택해주세요.')
    return
  }

  router.push(`/user/join/${joinType.value}`)
}
</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/join/common.scss';
.join-form-select-buttons {
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>