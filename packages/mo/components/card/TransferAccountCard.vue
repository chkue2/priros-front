<template>
  <div class="transfer-account-card" :class="[{'bd': idx > 0 || isSaved}, {'saved': isSaved}]">
    <p class="transfer-account-card-title">계좌 {{ idx + 1 }}</p>
    <button v-if="idx > 0 && !isSaved" class="transfer-account-delete-button" @click="transferStore.setTransferDataMinus">
      삭제<img src="/img/icon/delete-black.svg">
    </button>
    <div class="transfer-account-amount">
      <p class="transfer-account-amount-title">이체금액</p>
      <div class="transfer-account-amount-input">
        <input v-model="accountInfoSelectedValue['amount']" type="text" :readonly="isSaved">
        <span>원</span>
      </div>
    </div>
    <p class="transfer-account-card-title ft-16">계좌 정보</p>
    <DropDown placeholder="계좌 선택하기" :is-readonly="isSaved" :options="cardOptions" :selected-text="selectedText" @click-option="handlerSelectValue"/>
    <p class="transfer-account-card-title ft-14 mt-12">은행명</p>
    <DropDown placeholder="은행 선택하기" :is-readonly="isReadonly" :options="bankOptions" :selected-text="bankSelectedText" @click-option="handlerBankSelectValue"/>
    <div class="transfer-account-card-double-block">
      <div class="transfer-account-card-block">
        <p class="transfer-account-card-title ft-14">예금주</p>
        <input v-model="accountInfoSelectedValue['holder']" type="text" :readonly="isReadonly">
      </div>
      <div class="transfer-account-card-block">
        <p class="transfer-account-card-title ft-14">계좌번호</p>
        <input v-model="accountInfoSelectedValue['account']" type="tel" :readonly="isReadonly">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useTransferStore } from '~/store/transfer.js'
import DropDown from '~/components/form/DropDown'
const cardOptions = [
  {
    text: '직접 입력하기',
    value: {
      bank: '직접 입력하기',
      account: '',
    }
  },
  {
    text: '기업은행 31242441123',
    value: {
      bank: '기업은행',
      account: '31242441123',
      holder: '조성화'
    }
  },
  {
    text: '카카오뱅크 3333014582945839',
    value: {
      bank: '카카오뱅크',
      account: '3333014582945839',
      holder: '최한규'
    }
  },
]

const bankOptions = [
  {
    text: '카카오뱅크',
    value: '카카오뱅크',
  },
  {
    text: '기업은행',
    value: '기업은행',
  },
  {
    text: '케이뱅크',
    value: '케이뱅크',
  },
  {
    text: '경남은행',
    value: '경남은행',
  },
]

const props = defineProps({
  idx: Number,
  isSaved: Boolean,
})
const transferStore = useTransferStore()

const selectedValue = ref({})
const accountInfoSelectedValue = ref(transferStore.transfer[props.idx])

const handlerSelectValue = ({value}) => {
  selectedValue.value = value
  if(value.account !== '') {
    accountInfoSelectedValue.value['bank'] = value.bank
    accountInfoSelectedValue.value['account'] = value.account
    accountInfoSelectedValue.value['holder'] = value.holder
  }
  else {
    accountInfoSelectedValue.value['bank'] = ''
    accountInfoSelectedValue.value['account'] = ''
    accountInfoSelectedValue.value['holder'] = ''
  }
}
const selectedText = computed(() => {
  return selectedValue.value['bank'] === undefined ? '' : `${selectedValue.value['bank']} ${selectedValue.value['account']}`
})

const isReadonly = computed(() => {
  return selectedValue.value['bank'] !== '직접 입력하기' || props.isSaved
})
const handlerBankSelectValue = ({value}) => {
  accountInfoSelectedValue.value['bank'] = value
}
const bankSelectedText = computed(() => {
  return accountInfoSelectedValue.value['bank']
})

watch(() => accountInfoSelectedValue, () => {
  transferStore.setTransferData({value: accountInfoSelectedValue.value, idx: props.idx})
}, {deep: true})

</script>

<style lang="scss" scoped>
.transfer-account-card {
  padding: 16px 7px 27px 7px;
  border-top: $border-bottom-between-header;
  position: relative;
  &.bd {
    padding: 16px 7px 27px;
    border: 1px dotted #2d2d2d;
    border-radius: 4px;
  }
  &.saved {
    background-color: #f8f8f8;
  }
}
.transfer-account-card-title {
  font-size: 19px;
  font-weight: $ft-bold;
  color: #181818;
  margin-bottom: 8px;
  &.ft-16 {
    font-size: 16px;
  }
  &.ft-14 {
    font-size: 14px;
  }
  &.mt-12 {
    margin-top: 12px;
  }
}
.transfer-account-delete-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 3px;
  border-radius: 5px;
  border: 1px solid #000000;
  background-color: #ffffff;
  font-size: 12px;
  font-weight: $ft-medium;
  gap: 4px;
  position: absolute;
  top: 10px;
  right: 13px;
  & > img {
    width: 13px;
    height: 13px;
  }
}
.transfer-account-amount {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  .transfer-account-amount-title {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 13px;
    font-size: 14px;
    color: #4f4f4f;
    border-radius: 4px 0 0 4px;
    background-color: #f2f2f2;
  }
  .transfer-account-amount-input {
    flex: 1;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 0 4px 4px 0;
    border: 1px solid #e5e5e5;
    padding: 0 12px 0 11px;
    & > input[type=text] {
      font-size: 16px;
      font-weight: $ft-bold;
      border: none;
      text-align: right;
      background-color: transparent;
    }
    & > span {
      font-size: 16px;
      font-weight: $ft-bold;
      margin-bottom: 4px;
    }
  }
}
.transfer-account-card-double-block{
  display: flex;
  margin-top: 12px;
  gap: 14px;
  width: 100%;
  .transfer-account-card-block {
    &:first-child {
      width: calc(35% - 7px);
    }
    &:last-child {
      width: calc(65% - 7px);

    }
    input {
      width: 100%;
      max-width: 100%;
      height: 40px;
      background-color: #ffffff;
      border: 1px solid #bfbfbf;
      font-size: 16px;
      font-weight: $ft-bold;
      border-radius: 4px;
      padding: 0 12px;
      &:read-only {
        background-color: #f2f2f2;
        border: none;
        color: #6a6a6a;
      }
    }
  }
}
</style>