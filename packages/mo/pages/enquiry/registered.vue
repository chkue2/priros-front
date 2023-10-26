<template>
  <NuxtLayout name="dialog-header" headerTitle="등기필정보 조회">
    <div class="dialog-wrapper">
      <p class="top-text">
        부동산 고유번호와 등기필정보 일련번호의 일치 여부 및 사용 가능한 비밀번호를 조회할 수 있습니다.
      </p>
      <div class="wrapper-inner">
        <p class="success-text">인증완료 되었습니다</p>
        <div class="forms">
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">부동산 고유번호</label>
            </div>
            <div class="form-input">
              <input type="text" placeholder="고유번호">
            </div>
          </div>
          <div class="form-group">
            <div class="label">
              <label for="" class="form-label">등기필정보 일련번호</label>
            </div>
            <div class="form-input">
              <input type="text" placeholder="일련번호">
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p class="info">본 서비스는 인터넷등기소 조회결과를 단순제공하고 있으며,<br>문서의 진위여부를 보장하지는 않습니다.</p>
        <div>
          <CommonBottomButton
              id="btn-send"
              text="조회하기"
              backgroundColor="#000000" height="60px" width="100%" color="#fff"
              :font-weight="700"
              :disabled="false"
              @handler-click-button="handleBtnSendClick"
          />
        </div>
      </div>
    </div>
    <LoadingModal v-if="isLoading" text="조회중입니다.<br>잠시만 기다려주세요." />
  </NuxtLayout>
</template>
<script setup>
import { ref } from 'vue'
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'
import LoadingModal from '@priros/common/components/modal/LoadingModal.vue'
definePageMeta({
  layout: false
});

const isLoading = ref(false)

const handleBtnSendClick = () => {
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>
<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog';
.top-text {
  font-size: 14px;
  font-weight: $ft-medium;
  text-align: center;
  padding: 36px 30px 0;
}
.success-text {
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background-color: #f2f2f2;
  margin: 23px 0 35px;
  font-size: 16px;
  font-weight: $ft-semibold;
  color: #7b7b7b;
  visibility: hidden;
  &.active {
    visibility: visible;
  }
}
</style>