<template>
  <p class="transfer-account-result-title">송금요청 진행중</p>
  <p class="transfer-account-result-subtitle">담당자 확인까지 <b>최대 30분</b> 소요될 수 있습니다</p>
  <div class="transfer-account-result-box">
    <p>담당자가 서류검토중 입니다</p>
  </div>
  <div class="transfer-memo-container">
    <p class="transfer-memo-title">송금거절 내용</p>
    <textarea  class="transfer-memo-area" readonly></textarea>
  </div>
  <div class="transfer-account-result-top-container">
    <span class="title-green-box">송금요청 내역</span>
    <div class="transfer-edit-button mb-0">
      <button @click="transferStore.firstDepth">수정하기</button>
    </div>
  </div>
  <div class="transfer-acocunt-card-container">
    <TransferAccountTextCard />
    <TransferAccountTextCard />
  </div>
  <div class="transfer-memo-container">
    <p class="transfer-memo-title">송금메모</p>
    <textarea v-model="transferStore.memo" class="transfer-memo-area" readonly></textarea>
  </div>
  <div class="transfer-account-result-bottom-button">
    <CommonBottomButton id="transferAccoutnResultButton" text="닫기" height="60px" width="100%" :font-weight="700" :background-color="bottomButtonBackgroundColor" @handler-click-button="handlerClickTransferCloseButton" />
  </div>
</template>

<script setup> 
import { useRouter } from 'vue-router'
import { useTransferStore } from '~/store/transfer.js'
import TransferAccountTextCard from '~/components/card/TransferAccountTextCard.vue'
import CommonBottomButton from '~/components/button/CommonBottomButton.vue'
const transferStore = useTransferStore()

const router = useRouter()
const handlerClickTransferCloseButton = () => {
  router.back()
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/transfer/common.scss';
.transfer-account-result-title {
  padding: 39px 0 5px;
  font-size: 22px;
  font-weight: $ft-bold;
  line-height: 30px;
  color: #1a1a1a;
  text-align: center;
}
.transfer-account-result-subtitle {
  font-size: 14px;
  line-height: 20px;
  color: #808080;
  text-align: center;
}
.transfer-account-result-box {
  padding: 0 16px;
  margin-top: 22px;
  & > p {
    border-radius: 22.5px;
    border: 1px solid #000000;
    font-weight: $ft-semibold;
    padding: 14px 0 15px;
    text-align: center;
  }
}
.transfer-account-result-top-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 21px 32px 0;
}
.transfer-acocunt-card-container {
  padding: 0 32px;
  margin-top: 9px;
}
.transfer-memo-container {
  padding: 0 32px;
}
.transfer-account-result-bottom-button {
  margin-top: 95px;
  position: sticky;
  bottom: 0;
}
</style>