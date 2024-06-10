<template>
  <NuxtLayout name="dialog-header" headerTitle="프로필카드 보내기">
    <div class="send-profile-form">
      <p class="send-profile-title">매수인 정보</p>
      <input v-model="form.name" type="text" class="send-profile-input" placeholder="매수인 이름을 입력하세요">
      <input v-model="form.phone" type="tel" class="send-profile-input" placeholder="매수인 휴대폰번호를 입력하세요 (-제외)">
    </div>
    <div class="send-profile-intro">
      <p><b>'프로필카드 보내기' 란?</b><br>
: 직접 관리하는 계약을 등기소다에 등록하여 편하게 안내 및 관리할 수 있는 서비스<br><br></p>
 
<p>- 우리 사무소와 계약을 진행하는 매수인에게 사무소의 프로필카드를 보내 매수인의 계약정보 입력을 요청해 주세요.<br></p>
<p>- 매수인이 발송된 프로필카드를 확인하고 계약정보를 입력하면 사건을 수임하여 확정해 주세요.<br></p>
<p>- 수임을 확정하면 매수인은 실시간으로 업무의 현황을 확인할 수 있어 별도의 안내를 드리지 않아도 돼요!<br></p>
<p>- 계약에 성공한 경우 내부평점에 가산점(+10점)이 있습니다.</p>
    </div>
    <div class="send-profile-buttons">
      <CommonBottomButton id="close-button" text="닫기" background-color="#b5b5b5" color="#ffffff" height="60px" width="50%" @handler-click-button="handlerClickCloseButton" />
      <CommonBottomButton id="send-button" text="보내기" background-color="#000000" color="#ffffff" height="60px" width="50%" @handler-click-button="handlerClickSendButton" />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue';

definePageMeta({
  layout: false
});

const router = useRouter();

const form = ref({
  name: '',
  phone: '',
})

const isValidate = computed(() => form.value.name !== '' && form.value.phone !== '')

const handlerClickSendButton = () => {
  if(!isValidate.value) {
    if(form.value.name === '') {
      alert('매수인 이름을 입력해주세요')
    } else if(form.value.phone === '') {
      alert('매수인 휴대폰번호를 입력해주세요')
    }
    return false;
  }

  console.log("call api");
}

const handlerClickCloseButton = () => {
  router.go(-1);
}
</script>

<style lang="scss" scoped>
.send-profile-form {
  padding: 34px 16px 340px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.send-profile-title {
  color: #181818;
}
.send-profile-input {
  width: 100%;
  padding: 0 12px;
  height: 48px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  font-weight: $ft-semibold;
}
.send-profile-intro {
  padding: 9px 8px;
  width: calc(100% - 32px);
  position: fixed;
  bottom: 88px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f6f6f6;
  font-size: 12px;
  & > b {
    font-size: 14px;
    font-weight: $ft-bold;
  }
  & > p + p {
    margin-top: 8px;
  }
}
.send-profile-buttons {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>