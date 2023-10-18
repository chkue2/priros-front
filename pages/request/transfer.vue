<template>
  <NuxtLayout name="dialog-header" headerTitle="송금요청">
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
      <p class="transfer-top-intro">금융기관의 설정비용(채권/인지)을 공제하지 않고 대출금 전액을 송금요청 합니다.</p>
    </div>
    <div class="transfer-account-container">
      <TransferAccountCard v-for="(t, index) in transfer" :key="index" :idx="index" @change-data="setTransferData" />
    </div>
    <div class="transfer-account-button-container">
      <button v-if="isPlusButton" class="account-edit-button" @click="setTransferDataPlus">
        <i class="account-edit-icon"></i>
        계좌 추가를 원할 경우 눌러주세요
      </button>
      <button v-if="!isPlusButton" class="account-edit-button edit--minus" @click="setTransferDataMinus">
        <i class="account-edit-icon"></i>
        지우기
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import TransferAccountCard from '~/components/card/TransferAccountCard'

definePageMeta({
  layout: false
})

const transfer = ref([{}])

const setTransferData = ({value, idx}) => {
  transfer.value[idx] = value
}

const setTransferDataPlus = () => {
  transfer.value.push({})
  setTimeout(() => {
    window.scrollTo({top: 9999, behavior: 'smooth'})
  }, 100)
}

const setTransferDataMinus = () => {
  transfer.value.pop()
}

const isPlusButton = computed(() => {
  return transfer.value.length === 1
})

</script>

<style scoped lang="scss">
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
  padding-left: 35px;
  word-break: keep-all;
}
.transfer-account-button-container {
  padding: 0 16px;
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
  &.edit--minus {
    .account-edit-icon {
      background: url(/img/icon/minus-white.svg) no-repeat center/11px;
      background-color: #ff4d4d;
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
</style>