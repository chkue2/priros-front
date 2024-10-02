<template>
  <div class="join-container">
    <form action="niceForm" id="niceForm">
      <input type="hidden" id="m" name="m" value="checkplusService" />
      <input type="hidden" id="token_version_id" name="token_version_id" />
      <input type="hidden" id="enc_data" name="enc_data" />
      <input type="hidden" id="integrity_value" name="integrity_value" />
    </form>
    <p class="join-title">비밀번호 찾기</p>
    <div class="join-help-container">
      <p class="join-help-text">
        • 등록하신 휴대전화로 임시비밀번호를 발송해드립니다.
      </p>
      <p class="join-help-text">
        • 임시비밀번호로 로그인 한 후, 새로운 비밀번호를 설정하세요.
      </p>
    </div>
    <div class="join-form">
      <p class="join-form-title">아이디 *</p>
      <div class="join-form-input-container">
        <input
          v-model="form['userId']"
          type="text"
          class="join-form-input"
          placeholder="아이디를 입력하세요"
        />
      </div>
      <p class="join-form-title">이름 *</p>
      <div class="join-form-input-container">
        <input
          v-model="form['name']"
          type="tel"
          class="join-form-input w-60"
          placeholder="본인인증 후 자동입력"
          readonly
        />
        <button
          class="join-form-gray-button"
          @click="handlerClickSelfIdentification"
        >
          본인확인
        </button>
      </div>
      <p class="join-form-title">휴대전화번호 *</p>
      <div class="join-form-input-container">
        <input
          v-model="form['mobileNo']"
          type="tel"
          class="join-form-input"
          placeholder="본인인증 후 자동입력"
          readonly
        />
      </div>
    </div>
  </div>
  <div class="join-bottom-buttons sticky">
    <CommonBottomButton
      id="generalApplyButton"
      width="100%"
      text="임시비밀번호 발급하기"
      height="60px"
      @click="handlerClickApplyButton"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { join } from "~/services/join.js";
import { user } from "~/services/user.js";
import { useAlertStore } from "~/store/alert.js";

import CommonBottomButton from "@priros/common/components/button/CommonBottomButton.vue";

const alertStore = useAlertStore();

const actionUrl = ref("");

const form = ref({});

onMounted(() => {
  const receiveData = async (e) => {
    if (e.data.name) {
      form.value.name = e.data.name;
      form.value.mobileNo = e.data.phone;
    }
  };

  window.addEventListener("message", receiveData, false);
});

const handlerClickSelfIdentification = () => {
  join
    .getNice({
      checkId: true,
      return_url: `/nice/decrypt/priros/v2`,
    })
    .then(({ data }) => {
      const wnd = window.open(undefined, "new window", "width=500, height=600");
      wnd.document.write(data);
    })
    .catch((e) => {
      console.log(e);
      alertStore.open(e.response.data.message);
    });
};

const handlerClickApplyButton = () => {
  user
    .findPw(form.value)
    .then(() => {
      alertStore.open("SMS로 임시 비밀번호가 발송되었습니다.");
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
    });
};
</script>

<style lang="scss" scoped>
@import "@priros/common/assets/scss/join/common.scss";
.join-title {
  margin-bottom: 17px;
}
.join-help-container {
  margin-bottom: 34px;
  .join-help-text {
    font-size: 12px;
    font-weight: $ft-medium;
    color: #959595;
    line-height: 18px;
  }
}
.join-bottom-buttons {
  margin-top: 300px;
}
</style>
