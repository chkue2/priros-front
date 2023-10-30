<template>
  <CommonHeaderModal modal-id="additionalBuyerModal" modal-title="추가 매수인 정보" width="420px">
    <div class="buyer-form">
      <div class="form-column">
        <p class="form-title">매수인</p>
        <input type="text" class="form-input" placeholder="매수인의 이름을 입력하세요">
      </div>
      <div class="form-column">
        <p class="form-title">휴대폰번호 (알림수신용)</p>
        <input type="text" class="form-input" placeholder="매수인의 휴대폰번호를 -없이 입력하세요">
      </div>
      <div class="form-column">
        <p class="form-title">이메일주소</p>
        <input type="text" class="form-input" placeholder="매수인의 이메일을 입력하세요">
      </div>
      <div class="buyer-form-button">
        <button>저장하기</button>
      </div>
    </div>
  </CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'
</script>

<style scoped lang="scss">
.buyer-form {
  padding: 46px 32px 24px;
}
.form-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
  & + .form-column {
    margin-top: 46px;
  }
  .form-title {
    font-size: 14px;
  }
  .form-input {
    width: 100%;
    height: 48px;
    padding: 0 12px;
    border-radius: 6px;
    border: 1px solid #e5e5e5;
    background-color: #f2f2f2;
    font-size: 16px;
  }
}
.buyer-form-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  position: sticky;
  bottom: 0;
  & > button {
    width: 173px;
    height: 44px;
    border-radius: 4px;
    background-color: #000000;
    color: #ffffff;
    font-size: 16px;
    font-weight: $ft-bold;
    border: none;
  }
}
</style>