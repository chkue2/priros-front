<template>
  <p class="transfer-account-confirm-title">송금 요청 <span class="title-green-box">송금요청전 확인</span></p>
  <p class="transfer-account-confirm-content">아래의 내용으로 송금요청을 전송하려고 합니다.<br>확인하시고 절차를 진행해주세요.</p>
  <div class="transfer-account-text-card-container">
    <div class="transfer-edit-button">
      <button @click="transferStore.firstDepth">수정하기</button>
    </div>
    <TransferAccountTextCard />
    <TransferAccountTextCard />
    <div class="transfer-memo-container">
      <p class="transfer-memo-title">송금메모</p>
      <textarea v-model="transferStore.memo" class="transfer-memo-area"></textarea>
    </div>
  </div>
  <div class="transfer-account-confirm-approval-container">
    <div v-if="!isApplyApprolval" class="approval-warning">
      <p class="approval-warning-text">인증번호가 일치하지 않습니다.</p>
      <button class="approval-re-send-button">재전송</button>
    </div>
    <p v-if="isApplyApprolval" class="approval-apply-text">인증 완료</p>
    <div :class="{'read-only': isApplyApprolval}">
      <input v-model="approvalNumber" type="tel" placeholder="인증번호를 입력해주세요" :readonly="isApplyApprolval">
      <span v-if="isSendApprovalNumber && !isApplyApprolval" class="approval-timer">2분 33초</span>
      <button v-if="isSendApprovalNumber" class="approval-apply-button" @click="handlerClickApplyApproval">확인</button>
    </div>
  </div>
  <p class="transfer-account-confirm-warning">
    문제발생시 고객센터 <a href="tel:070-0778-5751">070-0778-5751</a>로 문의부탁드립니다.
  </p>
  <div class="transfer-account-confirm-bottom-button">
    <CommonBottomButton v-if="!isApplyApprolval" id="transferAccoutnConfirmButton" text="인증번호 발송" height="60px" width="100%" :font-weight="700" :background-color="bottomButtonBackgroundColor" @handler-click-button="handlerClickApprovalSendButton" />
    <CommonBottomButton v-if="isApplyApprolval" id="transferAccoutnConfirmButton" text="송금요청" height="60px" width="100%" :font-weight="700" @handler-click-button="handlerClickApplyApprovalButton" />
  </div>
  <CommonAlertModal v-if="false" text="송금요청은<br>잔금시간 30분 전부터 가능합니다.<br>잠시후 이용해주세요!" />
  <CommonAlertModal v-if="isApplyApprovalSuccessModalShow" text="송금요청이 완료되었습니다.<br>담당자 확인까지 <b>최대 30분</b> 소요됩니다." @handler-click-button="handlerClickApprovalSuccessModalOkButton" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTransferStore } from '~/store/transfer.js'
import TransferAccountTextCard from '~/components/card/TransferAccountTextCard.vue'
import CommonAlertModal from '~/components/modal/CommonAlertModal.vue'
import CommonBottomButton from '~/components/button/CommonBottomButton.vue'

const transferStore = useTransferStore()
const isSendApprovalNumber = ref(false)
const isApplyApprolval = ref(false)
const approvalNumber = ref('')
const isApplyApprovalSuccessModalShow = ref(false)

const handlerClickApprovalSendButton = () => {
  isSendApprovalNumber.value = true
  window.scrollTo({top: 9999, behavior: 'smooth'})
}
const bottomButtonBackgroundColor = computed(() => isSendApprovalNumber.value ? '#d8d9db' : '#000000')

const handlerClickApplyApproval = () => {
  isApplyApprolval.value = true
}

const handlerClickApplyApprovalButton = () => {
  isApplyApprovalSuccessModalShow.value = true
}
const handlerClickApprovalSuccessModalOkButton = () => {
  isApplyApprovalSuccessModalShow.value = false
  transferStore.nextDepth()
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/transfer/common.scss';
.transfer-account-confirm-title {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  font-size: 20px;
  font-weight: $ft-semibold;
  padding: 21px 16px 0;
}
.transfer-account-confirm-content {
  font-size: 14px;
  color: #808080;
  margin-top: 16px;
  padding: 0 16px;
  line-height: 20px;
}
.transfer-account-text-card-container {
  padding: 0 32px;
}
.transfer-account-confirm-button {
  padding: 95px 16px 26px;
  & > button {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 22.5px;
    background-color: #000000;
    color: #ffffff;
    font-weight: $ft-bold;
    border: none;
  }
}
.transfer-account-confirm-approval-container {
  padding: 95px 16px 26px;
  & > div:not(.approval-warning) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    border: 1px solid #bebebe;
    padding-left: 15px;
    padding-right: 7px;
    position: relative;
    &.read-only {
      background-color: #f0f0f0;
      & > .approval-apply-button {
        background-color: #b5b5b5;
      }
    }
    & > input[type=tel] {
      font-weight: $ft-semibold;
      border: none;
      background-color: transparent;
    }
    & > .approval-timer {
      font-size: 12px;
      font-weight: $ft-medium;
      color: #e92c2c;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 80px;
    }
    & > .approval-apply-button{
      width: 55px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      background-color: #235bed;
      color: #ffffff;
      font-weight: $ft-medium;
      font-size: 12px;
      border: none;
    }
  }
  .approval-warning {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    .approval-warning-text {
      font-size: 14px;
      font-weight: $ft-medium;
      color: #e92c2c;
    }
    .approval-re-send-button {
      border: none;
      font-size: 14px;
      font-weight: $ft-medium;
      color: #606060;
      text-decoration: underline;
      background-color: transparent;
    }
  }
}
.transfer-account-confirm-warning {
  padding-bottom: 50px;
  font-size: 12px;
  font-weight: $ft-medium;
  color: #9f9f9f;
  text-align: center;
  a {
    font-size: 12px;
    font-weight: $ft-bold;
    color: #9f9f9f;
  }
}
.transfer-account-confirm-bottom-button {
  position: sticky;
  bottom: 0;
}
.approval-apply-text{
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: $ft-medium;
  color: #235bed;
}
</style>