<template>
  <div class="terms-container">
    <p class="terms-title">이용약관</p>
    <div class="terms-content-title">
      <p>회원가입약관</p>
      <label>
        <input v-model="agreeUse" type="checkbox" />
        <i></i>
        <span>동의</span>
      </label>
    </div>
    <div class="terms-content mb42">
      <ServiceTerm :is-title-show="false" :is-padding="false" />
    </div>
    <div class="terms-content-title">
      <p>개인정보 처리방침</p>
      <label>
        <input v-model="agreePrivacy" type="checkbox" />
        <i></i>
        <span>동의</span>
      </label>
    </div>
    <div class="terms-content">
      <PersonalTerm :is-title-show="false" :is-padding="false" />
    </div>
    <label class="terms-all" @click="handlerClickAgreeAll">
      <input v-model="agreeAll" type="checkbox" />
      <i></i>
      <span>이용약관 전체동의</span>
    </label>
  </div>
  <div class="join-bottom-buttons sticky">
    <CommonBottomButton
      id="joinTermsNextButton"
      text="다음"
      width="100%"
      height="60px"
      @handler-click-button="handlerClickNextButton"
    />
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

import PersonalTerm from "@priros/common/components/card/PersonalTerm.vue";
import ServiceTerm from "@priros/common/components/card/ServiceTerm.vue";
import CommonBottomButton from "@priros/common/components/button/CommonBottomButton.vue";

import { useAlertStore } from "~/store/alert.js";

const emit = defineEmits(["next-button"]);

const alertStore = useAlertStore();

const agreeUse = ref(false);
const agreePrivacy = ref(false);
const agreeAll = ref(false);

watch([agreeUse, agreePrivacy], () => {
  agreeAll.value = agreeUse.value && agreePrivacy.value;
});

const isValidate = computed(() => agreeUse.value && agreePrivacy.value);

const handlerClickAgreeAll = (e) => {
  e.preventDefault();

  if (agreeUse.value && agreePrivacy.value) {
    agreeUse.value = false;
    agreePrivacy.value = false;
    agreeAll.value = false;
  } else {
    agreeUse.value = true;
    agreePrivacy.value = true;
    agreeAll.value = true;
  }
};

const handlerClickNextButton = () => {
  if (!isValidate.value) {
    if (!agreeUse.value) {
      alertStore.open("회원가입약관에 동의해주세요");
    } else if (!agreePrivacy.value) {
      alertStore.open("개인정보 처리방침에 동의해주세요");
    }
    return false;
  }
  emit("next-button");
};
</script>

<style lang="scss" scoped>
.terms-container {
  padding: 35px 20px;
}
.terms-title {
  font-size: 22px;
  font-weight: $ft-bold;
  margin-bottom: 30px;
}
.terms-content-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    font-size: 14px;
    font-weight: $ft-semibold;
  }
  & > label {
    display: flex;
    align-items: center;
    gap: 8px;
    & > input[type="checkbox"] {
      display: none;
      & + i {
        display: block;
        width: 14px;
        height: 14px;
        border: 1px solid #e1e1e1;
      }
      &:checked + i {
        border: none;
        background: url("/img/icon/check-blue.svg") no-repeat center/cover;
      }
    }
    & > span {
      font-size: 14px;
    }
  }
}
.terms-content {
  padding: 16px;
  font-size: 14px;
  height: 160px;
  background-color: #f2f2f2;
  margin-top: 10px;
  border-radius: 19px;
  overflow-x: hidden;
  overflow-y: auto;
}
.terms-all {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  gap: 8px;
  & > input[type="checkbox"] {
    display: none;
    & + i {
      display: block;
      width: 14px;
      height: 14px;
      border: 1px solid #e1e1e1;
    }
    &:checked + i {
      border: none;
      background: url("/img/icon/check-blue.svg") no-repeat center/cover;
    }
  }
  & > span {
    font-size: 14px;
  }
}
</style>
