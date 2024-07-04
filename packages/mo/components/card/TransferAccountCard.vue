<template>
  <div class="transfer-account-card" :class="[{ pc: isPc }]">
    <p class="transfer-account-card-title">
      {{ idx === 0 ? "상환금" : "지급금" }}
      <span v-if="idx === 0">상환금 요청계좌는 가상계좌 외 직접입력 불가</span>
    </p>
    <div class="transfer-account-amount">
      <p class="transfer-account-amount-title">요청금액</p>
      <div class="transfer-account-amount-input">
        <input
          v-model="accountInfoSelectedValue['amount']"
          type="text"
          :readonly="isSaved"
        />
        <span>원</span>
      </div>
    </div>
    <p class="transfer-account-card-title">계좌 정보</p>
    <DropDown
      placeholder="계좌 선택하기"
      :is-readonly="isSaved"
      :options="transferStore.cardOptions"
      :selected-text="selectedText"
      :is-body-lock="!isPc"
      @click-option="handlerSelectValue"
    />
    <p class="transfer-account-card-title mt-12">은행명</p>
    <DropDown
      placeholder="은행 선택하기"
      :is-readonly="isReadonly"
      :options="transferStore.bankOptions"
      :selected-text="bankSelectedText"
      :is-body-lock="!isPc"
      @click-option="handlerBankSelectValue"
    />
    <div class="transfer-account-card-double-block">
      <div class="transfer-account-card-block">
        <p class="transfer-account-card-title">예금주</p>
        <input
          v-model="accountInfoSelectedValue['holder']"
          type="text"
          :readonly="isReadonly"
          placeholder="예금주 명"
        />
      </div>
      <div class="transfer-account-card-block">
        <p class="transfer-account-card-title">
          계좌번호<span>- 없이 계좌번호 입력 바랍니다.</span>
        </p>
        <input
          v-model="accountInfoSelectedValue['account']"
          type="tel"
          :readonly="isReadonly"
          placeholder="계좌번호를 입력해주세요"
          @keyup="replaceSpace"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import DropDown from "@priros/common/components/form/DropDown.vue";
import { computed, ref, watch } from "vue";
import { useTransferStore } from "~/store/case/transfer.js";

const props = defineProps({
  idx: Number,
  isSaved: Boolean,
  isPc: {
    type: Boolean,
    default: false,
  },
});
const transferStore = useTransferStore();

const selectedValue = ref({});
const accountInfoSelectedValue = ref(transferStore.transfer[props.idx]);

const handlerSelectValue = ({ value }) => {
  selectedValue.value = value;
  if (value.account !== "") {
    accountInfoSelectedValue.value["bank"] = value.bank;
    accountInfoSelectedValue.value["bankCode"] = value.bankCode;
    accountInfoSelectedValue.value["account"] = value.account;
    accountInfoSelectedValue.value["holder"] = value.holder;
  }
};
const selectedText = computed(() => {
  return selectedValue.value["bank"] === undefined
    ? ""
    : `${selectedValue.value["bank"]} ${selectedValue.value["account"]}`;
});

const isReadonly = computed(() => {
  return selectedValue.value["bank"] !== "직접 입력하기" || props.isSaved;
});
const handlerBankSelectValue = ({ value }) => {
  accountInfoSelectedValue.value["bank"] = value.bank;
  accountInfoSelectedValue.value["bankCode"] = value.bankCode;
};
const bankSelectedText = computed(() => {
  return accountInfoSelectedValue.value["bank"];
});

const replaceSpace = (e) => {
  e.target.value = e.target.value.replaceAll(" ", "");
};

watch(
  () => accountInfoSelectedValue,
  () => {
    accountInfoSelectedValue.value.amount = Number(
      accountInfoSelectedValue.value?.amount?.replace(/[^0-9]/g, "")
    ).toLocaleString();
    transferStore.setTransferData({
      value: accountInfoSelectedValue.value,
      idx: props.idx,
    });
  },
  { deep: true }
);
</script>

<style lang="scss" scoped>
.transfer-account-card {
  padding: 16px 7px 27px 7px;
  position: relative;
  &.pc {
    width: calc(50% - 24px);
    flex: 1;
  }
  &.bd {
    padding: 16px 7px 27px;
    border: 1px dotted #2d2d2d;
    border-radius: 4px;
  }
  &.saved {
    background-color: #f8f8f8;
  }
  &.pc:not(.bd) {
    border-top: none;
  }
  & + .transfer-account-card {
    border-top: 1px dotted #e1e1e1;
  }
}
.transfer-account-card-title {
  font-weight: $ft-bold;
  color: #000000;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  &.mt-12 {
    margin-top: 12px;
  }
  & > span {
    font-size: 11px;
    color: #676767;
    font-weight: $ft-regular;
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
    min-width: 70px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 18px;
    font-size: 14px;
    color: #4f4f4f;
    border-radius: 4px 0 0 4px;
    background-color: #f2f2f2;
  }
  .transfer-account-amount-input {
    flex: 1;
    width: 70%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 0 4px 4px 0;
    border: 1px solid #e5e5e5;
    padding: 0 12px 0 11px;
    & > input[type="text"] {
      font-size: 16px;
      font-weight: $ft-bold;
      border: none;
      text-align: right;
      background-color: transparent;
    }
    & > span {
      font-size: 16px;
      font-weight: $ft-bold;
    }
  }
}
.transfer-account-card-double-block {
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
