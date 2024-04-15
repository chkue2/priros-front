<template>
  <p class="kakao-remit-title">
    송금요청 후, 대출금 지급까지는<br><b>약1~2분이 소요</b>됩니다.
  </p>
  <p class="kakao-remit-subtitle">입금이 지연되는 경우 카카오뱅크에 문의하세요</p>
  <div class="kakao-remit-form">
    <div class="kakao-remit-form-title">
      <p class="form-title-text">송금승인번호</p>
      <p v-if="isApprovalSend && !isApprovalSuccess" class="form-title-resend" @click="handlerClickApprovalSend">재전송</p>
    </div>
    <div class="kakao-remit-form-input" :class="{disabled: isApprovalSuccess}">
      <input v-model="approvalNumber" type="tel" :readonly="isApprovalSuccess">
      <p v-if="isApprovalSend && !isApprovalSuccess" class="form-timer">{{ timerMin }}분 {{ timerSec }}초</p>
      <button v-if="!isApprovalSend" @click="handlerClickApprovalSend">승인번호요청</button>
      <button v-if="isApprovalSend" @click="handlerClickApprovalCheck">확인</button>
    </div>
    <p v-if="isApprovalFail && !isApprovalSuccess" class="kakao-remit-warning-text">인증번호가 일치하지 않습니다</p>
  </div>
  <div class="kakao-remit-buttons">
    <button @click="handlerClickCloseModal">닫기</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { tradeCaseRemit } from '~/services/tradeCaseRemit'

const props = defineProps({tradeCaseId: String})
const emits = defineEmits([
  'close-modal',
  'open-success-modal'
])

const isApprovalSend = ref(false)
const isApprovalFail = ref(false)
const isApprovalSuccess = ref(false)

const seq = ref(null)
const approvalNumber = ref('')

onMounted(() => {
  // 모달 오픈시 seq 생성
  tradeCaseRemit.getKakao(props.tradeCaseId)
    .then(({data}) => {
      seq.value = data.seq
    })
    .catch(e => {
      alert(e.response.data.message)
    })
})

const timer = ref(0)
const timerMin = ref(0)
const timerSec = ref(0)
const timerInterval = ref(null)

const handlerClickApprovalSend = () => {
  tradeCaseRemit.auth(props.tradeCaseId, {seq: seq.value})
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
    })
    .catch(e => {
      alert(e.response.data.message)
    })
}

const handlerClickApprovalCheck = () => {
  if(approvalNumber.value === '') {
    alert('송금승인번호를 입력해주세요')
    return false
  }

  tradeCaseRemit.authCheck(props.tradeCaseId, {
    seq: seq.value,
    authNum: approvalNumber.value
  })
  .then(() => {
    isApprovalFail.value = false
    isApprovalSuccess.value = true
    clearInterval(timerInterval.value)
    timerInterval.value = null
    emits('open-success-modal')
    emits('close-modal')
  })
  .catch(e => {
    alert(e.response.data.message)
    isApprovalFail.value = true
    isApprovalSuccess.value = false
  })
}

const handlerClickApplyRemit = () => {
  if(!isApprovalSend.value) {
    alert('승인번호 요청이 필요합니다')
    return false
  }
  if(!isApprovalSuccess.value) {
    alert('승인번호 확인이 필요합니다')
    return false
  }

  tradeCaseRemit.postKakao(props.tradeCaseId, {
    // tradeCaseId: props.tradeCaseId,
    seq: seq.value
  })
  .then(() => {
    emits('open-success-modal')
    emits('close-modal')
  })
  .catch(e => {
    console.log(e)
    alert(e.response.data.message)
  })
}

const handlerClickCloseModal = () => {
  emits('close-modal')
}
</script>

<style lang="scss" scoped>
.kakao-remit-title {
  font-size: 14px;
  line-height: 18px;
  margin: 24px 0;
  text-align: center;
}
.kakao-remit-subtitle {
  font-size: 12px;
  line-height: 15px;
}
.kakao-remit-form {
  margin: 65px 0 37px;
  padding: 0 24px; 
  .kakao-remit-form-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }
  .form-title-text {
    font-size: 14px;
    font-weight: $ft-bold;
  } 
  .form-title-resend {
    font-size: 12px;
    font-weight: ft-medium;
    color: #606060;
    text-decoration: underline;
  }
  .kakao-remit-form-input {
    position: relative;
    padding: 15px 8px;
    border: 1px solid #bebebe;
    text-align: left;
    &.disabled {
      background-color: #f0f0f0;
      & > button {
        background-color: #b5b5b5;
      }
    }
    & > input[type=tel]{
      width: 50%;
      font-size: 14px;
      font-weight: $ft-medium;
      border: none;
      background-color: transparent;
    }
    & > button {
      height: 32px;
      padding: 0 12px;
      border: none;
      background-color: #235bed;
      border-radius: 5px;
      font-size: 12px;
      font-weight: $ft-medium;
      color: #ffffff;
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
    }
  }
  .kakao-remit-warning-text {
    margin-top: 2px;
    color: #e92c2c;
    font-size: 12px;
    font-weight: $ft-medium;
    text-align: left;
  }
  .form-timer {
    position: absolute;
    top: 50%;
    right: 80px;
    transform: translateY(-50%);
    font-size: 12px;
    font-weight: $ft-medium;
    color: #e92c2c;
  }
}
.kakao-remit-buttons {
  margin-top: 35px;
  display: flex;
  border-top: 1px solid #dfdfdf;
  & > button {
    flex: 1;
    height: 60px;
    background-color: #ffffff;
    border: none;
    font-size: 16px;
    font-weight: $ft-medium;
    & + button {
      border-left: 1px solid #dfdfdf;
    }
    &.disabled {
      font-weight: $ft-bold;
      color: #bfbfbf;
      &.apply {
        background-color: #235bed;
        color: #ffffff;
      }
    }
  }
}
</style>