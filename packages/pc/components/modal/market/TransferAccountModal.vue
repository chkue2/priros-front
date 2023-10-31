<template>
  <CommonHeaderModal modal-id="transferAccountModal" modal-title="송금요청" width="605px">
    <div class="transfer-top-container">
      <div class="transfer-top-amount">
        <div>
          <p class="transfer-top-title">대출금</p>
          <div class="transfer-top-input">
            <input type="text">
            <span>원</span>
          </div>
        </div>
        <div>
          <p class="transfer-top-title">대출실행금</p>
          <div class="transfer-top-input">
            <input type="text">
            <span>원</span>
          </div>
        </div>
      </div>
      <label class="transfer-top-intro">
        <input v-if="!isTransferApply" v-model="isChecked" type="checkbox">
        금융기관의 설정비용(채권/인지)을 공제하지 않고 대출금 전액을 송금요청 합니다.
      </label>
    </div>
    <div class="transfer-account-container">
      <TransferAccountCard v-for="(t, index) in transferStore.transfer" :key="index" :idx="index" :is-saved="isSaved" :is-pc="true" />
      <button v-if="isPlusButton && !isSaved" class="account-edit-button" :class="{active: isAccountValidation}" @click="handlerClickAccountPlusButton">
        <i class="account-edit-icon"></i>
        계좌 추가를 원할 경우 눌러주세요
      </button>
    </div>
    <div class="transfer-memo-container pt-0">
      <p class="transfer-memo-title">송금메모</p>
      <textarea class="transfer-memo-area" placeholder="메모가 없습니다" :readonly="isSaved"></textarea>
    </div>
    <div class="transfer-warning-container">
      <span class="title-green-box">송금요청전 확인</span>
      <p class="transfer-warning-text">
        위 내용으로 송금요청을 전송하려고 합니다. 문제발생시 고객센터 <a href="tel:070-0778-5751">070-0778-5751</a>로 문의해주세요.
      </p>
    </div>
    <div v-if="isTransferApply" class="transfer-result">
      <p class="transfer-result-title">담당자가 서류검토중 입니다</p>
      <p class="transfer-result-content">담당자 확인까지 최대 30분정도 소요될 수 있습니다.</p>
    </div>
    <div class="transfer-approval-container">
      <p class="approval-title">인증번호</p>
      <div class="approval-input">
        <div class="approval-warning flex-end">
          <p v-if="false" class="approval-help-text">인증번호가 일치하지않습니다</p>
          <button v-if="isApprovalSend && !isApprovalApply" class="approval-resend">재전송</button>
        </div>
        <input type="tel" placeholder="인증번호 입력" :readonly="!isApprovalSend || isApprovalApply">
        <span v-if="isApprovalSend && !isApprovalApply" class="approval-timer">2분 33초</span>
        <button v-if="!isApprovalSend" :class="{active: isSaved}" @click="handlerClickApprovalSendButton">인증번호 발송</button>
        <button v-if="isApprovalSend" :class="{active: !isApprovalApply}" @click="handlerClickApprovalApplyButton">확인</button>
      </div>
    </div>
    <div v-if="!isTransferApply" class="transfer-buttons">
      <button v-if="!isSaved" class="button--blue" @click="handlerClickSaveButton">저장</button>
      <button v-if="isSaved" class="button--white" @click="handlerClickEditButton">수정하기</button>
      <button class="button--gray" @click="handlerClickTransferApplyButton">송금요청</button>
    </div>
    <CommonAlertModal v-if="isApprovalSendAlarmModalShow" :is-body-lock="false" text="매수인에게 승인번호가 발송되었습니다.<br>프리로스 알림톡을 확인해주세요" @handler-click-button="toggleApprovalSendAlarmModalShow" />
    <CommonAlertModal v-if="false" :is-body-lock="false" text="송금요청은<br>잔금시간 30분 전부터 가능합니다.<br>잠시후 이용해주세요!" />
    <CommonAlertModal v-if="isTransferApplyModalShow" :is-body-lock="false" text="송금요청이 완료되었습니다.<br>담당자 확인까지 <b>최대 30분</b> 소요됩니다." @handler-click-button="toggleTransferApplyModalShow" />
  </CommonHeaderModal>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTransferStore } from '@priros/common/store/transfer.js'
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'
import TransferAccountCard from '@priros/common/components/card/TransferAccountCard.vue'
import CommonAlertModal from '@priros/common/components/modal/CommonAlertModal.vue'

const transferStore = useTransferStore()
const isChecked = ref(false)
const isSaved = ref(false)
const isApprovalSend = ref(false)
const isApprovalApply = ref(false)
const isTransferApply = ref(false)
const isApprovalSendAlarmModalShow = ref(false)
const isTransferApplyModalShow = ref(false)

const isPlusButton = computed(() => {
  return transferStore.transfer.length === 1
})
const isAccountValidation = computed(() => {
  for(const t of transferStore.transfer) {
    for(const v of transferStore.validate){
      if(t[v] === undefined || t[v] === '' || t[v] === '0') return false
    }
  }
  return true
})

const toggleApprovalSendAlarmModalShow = () => {
  isApprovalSendAlarmModalShow.value = !isApprovalSendAlarmModalShow.value
}
const toggleTransferApplyModalShow = () => {
  isTransferApplyModalShow.value = !isTransferApplyModalShow.value
}

const handlerClickAccountPlusButton = () => {
  if(!isAccountValidation.value) {
    alert('계좌1의 정보를 모두 입력해주세요.')
    return
  }

  transferStore.setTransferDataPlus()
}

const handlerClickSaveButton = () => {
  if(!isAccountValidation.value) {
    alert('계좌의 정보를 모두 입력해주세요.')
    return
  }

  isSaved.value = true
}

const handlerClickApprovalSendButton = () => {
  if(!isSaved.value) {
    alert('계좌 정보를 먼저 저장해주세요.')
    return
  }
  
  toggleApprovalSendAlarmModalShow()
  isApprovalSend.value = true
}

const handlerClickApprovalApplyButton = () => {
  isApprovalApply.value = true
}


const handlerClickEditButton = () => {
  isSaved.value = false
  isApprovalSend.value = false
}

const handlerClickTransferApplyButton = () => {
  if(!isChecked.value) {
    alert('대출금 전액 송금요청 항목에 동의해주세요.')
    return
  }
  if(!isApprovalApply.value) {
    alert('인증을 완료해주세요.')
    return
  }
  toggleTransferApplyModalShow()
  isTransferApply.value = true
}
</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/transfer/common.scss';
.transfer-top-container{
  padding: 22px 26px 20px;
}
.transfer-top-amount {
  display: flex;
  gap: 16px;
  & > div {
    flex: 1;
    max-width: calc(50% - 8px);
  }
  .transfer-top-title {
    font-weight: $ft-bold;
    margin-bottom: 9px;
  }
  .transfer-top-input {
    position: relative;
    & > input[type=text] {
      border-radius: 4px;
      background-color: #f9f9f9;
      color: #4f4f4f;
      border: none;
      padding: 10px 30px 10px 10px;
      width: 100%;
      font-size: 16px;
    }
    & > span {
      position: absolute;
      top: 45%;
      transform: translateY(-50%);
      right: 12px;
      font-size: 14px;
      color: #4f4f4f;
      font-weight: $ft-bold;
    }
  }
}
.transfer-top-intro {
  margin-top: 13px;
  font-size: 12px;
  line-height: 17px;
  word-break: keep-all;
  display: flex;
  align-items: center;
  gap: 8px;
  & > input {
    width: 18px;
    height: 18px;
  }
}
.transfer-account-container {
  padding: 0px 26px 10px;
  display: flex;
  grid-gap: 17px;
}
.account-edit-button {
  width: 284px;
  height: 383px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px dotted #a7a7a7;
  border-radius: 4px;
  font-size: 14px;
  color: #c6c6c6;
  background-color: #ffffff;
  &.edit--minus {
    .account-edit-icon {
      background: url(/img/icon/minus-white.svg) no-repeat center/11px;
      background-color: #ff4d4d;
    }  
  }
  &.active {
    .account-edit-icon {
      background-color: #7EF422;
    }  
  }
  .account-edit-icon {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: url(/img/icon/plus-white.svg) no-repeat center/14px;
    background-color: #d8d8d8;
  }
}
.transfer-warning-container {
  padding: 17px 26px 104px;
  display: flex;
  align-items: center;
  gap: 4px;
  .transfer-warning-text {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.5px;
    a {
      font-weight: $ft-bold;
      color: #000000;
      text-decoration: none;
    }
  }
}
.transfer-approval-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-bottom: 24px;
  .approval-title {
    font-size: 18px;
    font-weight: $ft-bold;
  }
  .approval-input {
    position: relative;
    input {
      width: 324px;
      height: 51px;
      border: 1px solid #bebebe;
      padding: 0 12px;
    }
    .approval-warning {
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: -25px;
      &.flex-end {
        justify-content: flex-end;
      }
      .approval-help-text {
        color: #e92c2c;
        font-size: 12px;
        font-weight: $ft-medium;
      }
      .approval-resend {
        font-size: 14px;
        font-weight: $ft-medium;
        color: #606060;
        text-decoration: underline;
        background-color: #ffffff;
        border: none;
        cursor: pointer;
      }
    }
    & > button {
      height: 32px;
      border-radius: 5px;
      background-color: #b5b5b5;
      font-size: 12px;
      font-weight: $ft-medium;
      color: #ffffff;
      border: none;
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      padding: 0 18px;
      cursor: pointer;
      &.active {
        background-color: #235bed;
      }
    }
    .approval-timer {
      font-size: 12px;
      font-weight: $ft-medium;
      color: #e92c2c;
      position: absolute;
      right: 80px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.transfer-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 24px 0;
  & > button {
    width: 173px;
    height: 44px;
    border-radius: 4px;
    background-color: #000000;
    border: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: $ft-bold;
    cursor: pointer;
    &.button--blue {
      background-color: #235bed;
    }
    &.button--gray {
      background-color: #989898;
    }
    &.button--white {
      border: 1px solid #000000;
      color: #000000;
      background-color: #ffffff;
    }
  }
}
.transfer-result {
  margin: 38px 0 74px;
  text-align: center;
  .transfer-result-title {
    width: 226px;
    line-height: 31px;
    border: 1px solid #000000;
    border-radius: 22.5px;
    font-weight: $ft-bold;
    margin: 0 auto;
  }
  .transfer-result-content {
    margin-top: 6px;
    font-size: 14px;
    font-weight: $ft-medium;
  }
}
</style>