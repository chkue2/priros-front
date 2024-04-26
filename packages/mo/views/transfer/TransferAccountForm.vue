<template>
  <div v-if="isEdit" class="transfer-result-container">
    <p class="transfer-result-title" :class="[{'fail': transferStore.remitState === 'N'}, {'success': transferStore.remitState === 'Y'}]">{{ resultContents.title }}</p>
    <p class="transfer-result-content">{{ resultContents.content }}</p>
  </div>
  <div class="transfer-top-container">
    <div class="transfer-top-amount">
      <div>
        <p class="transfer-top-title">대출금</p>
        <div class="transfer-top-input">
          <input v-model="transferStore.mortgageLoan" type="text" readonly>
          <span>원</span>
        </div>
      </div>
      <div>
        <p class="transfer-top-title">대출실행금</p>
        <div class="transfer-top-input">
          <input v-model="transferStore.mortgageExecution" type="text" readonly>
          <span>원</span>
        </div>
      </div>
    </div>
    <label class="transfer-top-intro">
      <input v-if="!isTransferApply && !isEdit" v-model="transferStore.deductionYn" type="checkbox" @click="handlerClickDeducationCheckbox">
      금융기관의 설정비용(채권/인지)을 공제하지 않고 대출금 전액을 송금요청 합니다.
    </label>
  </div>
  <div v-if="isLoadingSuccess" class="transfer-account-container">
    <TransferAccountCard v-for="(t, index) in transferStore.transfer" :key="index" :idx="index" :is-saved="isSaved || isSuccess" />
  </div>
  <div class="transfer-account-button-container">
    <button v-if="isPlusButton && !isSaved && !isSuccess" class="account-edit-button" :class="{active: isAccountValidation}" @click="handlerClickAccountPlusButton">
      <i class="account-edit-icon"></i>
      계좌 추가를 원할 경우 눌러주세요
    </button>
  </div>
  <div class="transfer-memo-container">
    <p class="transfer-memo-title">송금메모</p>
    <textarea v-model="transferStore.memo" class="transfer-memo-area" placeholder="송금메모를 입력해주세요. (최대 50자 이내)" :readonly="isSaved" maxlength="50"></textarea>
  </div>
  <div class="transfer-warning-container">
    <span class="title-green-box">송금요청전 확인</span>
    <p class="transfer-warning-text">
      송금 사건별로 순차 진행되므로 <b>약 10~20분이</b> 소요됩니다.<br>
      송금요청장애 문의전화 <a href="tel:1670-2361">1670-2361</a>
    </p>
  </div>
  <div v-if="!isSuccess" class="transfer-approval-container">
    <p class="approval-title">
      인증번호
      <button v-if="isApprovalSend && !isApprovalApply" class="approval-re-send" @click="handlerClickApprovalSendButton">재전송</button>
    </p>
    <div class="approval-input">
      <input v-model="authNum" :maxlength="MAX_LENGTH" type="tel" :readonly="!isApprovalSend || isApprovalApply">
      <span v-if="isApprovalSend && !isApprovalApply" class="approval-timer">{{ timerMin }}분 {{ timerSec }}초</span>
      <button v-if="!isApprovalSend" :class="{active: isSaved}" @click="handlerClickApprovalSendButton">인증번호발송</button>
      <button v-if="isApprovalSend" :class="{active: !isApprovalApply}" @click="handlerClickApprovalApplyButton">확인</button>
    </div>
  </div>
  <div v-if="!isSuccess" class="transfer-account-bottom-button">
    <CommonBottomButton v-if="!isSaved" id="transferAccountSaveButton" text="저장" height="60px" width="50%" :background-color="isAccountValidation ? '#235BED' : '#d8d9db'" :font-weight="700" @handler-click-button="handlerClickSaveButton" />
    <CommonBottomButton v-if="isSaved" id="transferAccountEditButton" text="수정하기" height="60px" width="50%" background-color="#ffffff" border="1px solid #000000" :font-weight="700" color="#000000" @handler-click-button="handlerClickEditButton" />
    <CommonBottomButton id="transferAccountSuccessButton" text="닫기" height="60px" width="50%" :font-weight="700" @handler-click-button="handlerClickSuccessButton" />
  </div>
  <div v-if="isSuccess" class="transfer-account-bottom-button">
    <CommonBottomButton id="transferAccountSuccessButton" text="닫기" height="60px" width="100%" :font-weight="700" @handler-click-button="handlerClickSuccessButton" />
  </div>
  <CommonAlertModal v-if="isApprovalSendAlarmModalShow" text="매수인에게 승인번호가 발송되었습니다.<br>프리로스 알림톡을 확인해주세요" @handler-click-button="toggleApprovalSendAlarmModalShow" />
  <CommonAlertModal v-if="false" text="송금요청은<br>잔금시간 30분 전부터 가능합니다.<br>잠시후 이용해주세요!" />
  <CommonAlertModal v-if="isTransferApplyModalShow" text="송금요청이 완료되었습니다.<br>담당자 확인까지 <b>최대 30분</b> 소요됩니다." @handler-click-button="toggleTransferApplyModalShow" />
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTransferStore } from '~/store/case/transfer.js'
import TransferAccountCard from '~/components/card/TransferAccountCard.vue'
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'
import CommonAlertModal from '@priros/common/components/modal/CommonAlertModal.vue'
 
const router = useRouter()
const route = useRoute()
const tradeCaseId = route.params.id

const transferStore = useTransferStore()
const isSaved = ref(false)
const isApprovalSend = ref(false)
const isApprovalApply = ref(false)
const isTransferApply = ref(false)
const isApprovalSendAlarmModalShow = ref(false)
const isTransferApplyModalShow = ref(false)

const isLoadingSuccess = ref(false)
onMounted(() => {
  Promise.all([transferStore.fetchRemit(tradeCaseId)])
    .catch(e => {
      alert(e.response.data.message.replace(/<br>/gi, '\n'))
      router.back()
    })
    .finally(() => {
      isLoadingSuccess.value = true
    })
})

watch(() => transferStore.remitState, () => {
  if(transferStore.remitRequestFlag !== null) {
    isSaved.value = true
  }
  if(transferStore.remitRequestFlag === 'Y') {
    isTransferApply.value = true
  }
  if(transferStore.approveYn === 'Y') {
    isApprovalSend.value = true
    isApprovalApply.value = true
  }
})
const isEdit = computed(() => 
  ['W', 'Y', 'N'].includes(transferStore.remitState) && transferStore.remitRequestFlag === 'Y'
)
const isSuccess = computed(() => 
  ['W', 'Y'].includes(transferStore.remitState) && transferStore.remitRequestFlag === 'Y'
)

const resultContents = computed(() => {
  return transferStore.remitState === 'W' ? {
    title: '담당자가 서류검토중 입니다',
    content: '담당자 확인까지 최대 30분정도 소요될 수 있습니다.'
  } : transferStore.remitState === 'Y' ? {
    title: '승인완료',
    content: '고객님의 송금요청이 승인완료되었습니다.'
  } : {
    title: '승인거절',
    content: transferStore.rejectMessage
  }
})

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

  transferStore.postRemit(tradeCaseId)
    .then(() => {
      isSaved.value = true
      transferStore.fetchRemit(tradeCaseId)
    })
    .catch(e => {
      alert(e.response.data.message)
    })
}

const timer = ref(0)
const timerMin = ref(0)
const timerSec = ref(0)
const timerInterval = ref(null)
const handlerClickApprovalSendButton = () => {
  if(!isSaved.value) {
    alert('계좌 정보를 먼저 저장해주세요.')
    return
  }

  transferStore.postAuth(tradeCaseId)
    .then(() => {
      clearInterval(timerInterval.value)
      timerInterval.value = null
      timer.value = 300
      timerInterval.value = setInterval(() => {
        timer.value -= 1
        timerMin.value = Math.floor(timer.value / 60)
        timerSec.value = timer.value % 60

        if(timer.value === 0) {
          clearInterval(timerInterval.value)
          timerInterval.value = null
          isApprovalSend.value = false
        }
      }, 1000)
      isApprovalSend.value = true
      toggleApprovalSendAlarmModalShow()
    })
    .catch(e => {
      alert(e.response.data.message)
    })
}

const authNum = ref('')
const MAX_LENGTH = 6
const handlerClickApprovalApplyButton = () => {
  if(authNum.value.length < MAX_LENGTH) {
    alert('인증번호 6자리를 입력해주세요.')
    return false
  }

  transferStore.postAuthCheck(tradeCaseId, authNum.value) 
    .then(() => {
      clearInterval(timerInterval.value)
      timerInterval.value = null
      isApprovalApply.value = true
      alert('송금요청이 전송되었습니다.')
      window.scrollTo({top: 0, behavior: 'smooth'})
    })
    .catch(e => {
      alert(e.response.data.message.replace(/<br>/gi, '\n'))
    })
}

const handlerClickEditButton = () => {
  isSaved.value = false
  isApprovalSend.value = false
  isApprovalApply.value = false
}

const handlerClickTransferApplyButton = () => {
  if(!isApprovalApply.value) {
    alert('인증을 완료해주세요.')
    window.scrollTo({top: 9999, behavior: 'smooth'})
    return
  }
  transferStore.requestRemit(tradeCaseId)
    .then(() => {
      toggleTransferApplyModalShow()
      transferStore.fetchRemit(tradeCaseId)
    })
    .catch(e => {
      alert(e.response.data.message.replace(/<br>/gi, '\n'))
    })
}

const handlerClickSuccessButton = () => {
  router.back()
}

const handlerClickDeducationCheckbox = e => {
  if(isSaved.value) {
    e.preventDefault()
    return false
  }
}

</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/transfer/common.scss';
.transfer-top-container{
  padding: 40px 16px 26px;
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
      max-width: 100%;
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
  margin-top: 30px;
  font-size: 12px;
  line-height: 17px;
  word-break: keep-all;
  display: flex;
  align-items: center;
  gap: 8px;
  & > input {
    width: 23px;
    height: 23px;
  }
}
.transfer-account-container {
  padding: 0px 9px;
}
.transfer-account-button-container {
  padding: 0 16px 0;
}
.account-edit-button {
  width: 100%;
  height: 48px;
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
  padding: 19px 16px 30px;
  .transfer-warning-text {
    font-size: 13px;
    color: #252525;
    margin-top: 10px;
    line-height: 25px;
    a {
      font-weight: $ft-bold;
      color: #252525;
    }
  }
}
.transfer-approval-container {
  padding: 26px 16px 80px;
  border-top: $border-bottom-between-header;
  .approval-title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 19px;
    font-weight: $ft-bold;
    margin-bottom: 6px;
    .approval-re-send {
      border: none;
      background-color: transparent;
      font-size: 14px;
      font-weight: $ft-medium;
      color: #606060;
      text-decoration: underline;
    }
  }
  .approval-input {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #bebebe;
    background-color: #ffffff;
    padding: 0 9px;
    position: relative;
    & > input {
      border: none;
      font-size: 16px;
    }
    & > button {
      min-width: 105px;
      padding: 7.5px 20px;
      font-size: 12px;
      font-weight: $ft-medium;
      color: #ffffff;
      border-radius: 5px;
      background-color: #b5b5b5;
      border: none;
      &.active {
        background-color: #235bed;
      }
    }
    .approval-timer {
      position: absolute;
      top: 50%;
      right: 130px;
      transform: translateY(-50%);
      font-size: 12px;
      font-weight: $ft-medium;
      color: #e92c2c;
    }
  }
}
.transfer-account-bottom-button {
  position: sticky;
  bottom: 0;
  display: flex;
}
.transfer-result-container {
  padding: 20px 16px;
  text-align: center;
  border-bottom: $border-bottom-between-header;
  .transfer-result-title {
    display: inline-block;
    padding: 4px 20px 5px;
    line-height: 16px;
    font-weight: $ft-semibold;
    border-radius: 22.5px;
    border: 1px solid #000000;
    text-align: center;
    margin: 0 auto;
    &.fail {
      background-color: #e92c2c;
      color: #ffffff;
      border: none;
    } 
    &.success {
      background-color: #235bed;
      color: #ffffff;
      border: none;
    }
  }
  .transfer-result-content {
    margin-top: 6px;
    font-size: 14px;
    font-weight: $ft-medium;
    text-align: center;
  }
}
</style>