<template>
  <CommonHeaderModal modal-id="retroactivePaymentModal" modal-title="취소분 소급결제" width="509px" @close-modal="handlerClickCloseModal">
    <div class="retroactive-payment-container">
      <p class="retroactive-payment-title">결제내용</p>
      <div class="retroactive-payment-list">
        <div class="retroactive-payment-column">
          <div class="retroactive-payment-header retroactive-date">결제일</div>
          <div class="retroactive-payment-header retroactive-method">결제수단</div>
          <div class="retroactive-payment-header retroactive-info">결제정보</div>
          <div class="retroactive-payment-header retroactive-price">금액</div>
          <div class="retroactive-payment-header retroactive-cancel">취소전표</div>
        </div>
        <div class="retroactive-payment-column column-box">
          <div class="retroactive-payment-contents retroactive-date">2023-04-05<br>10:27:40</div>
          <div class="retroactive-payment-contents retroactive-method">계좌번호</div>
          <div class="retroactive-payment-contents retroactive-info">110****984445</div>
          <div class="retroactive-payment-contents retroactive-price">15,000</div>
          <div class="retroactive-payment-contents retroactive-cancel">
            <button class="cancel-button">취소전표</button>
          </div>
        </div>
      </div>
      <p class="retroactive-payment-title mt">결제수단</p>
      <select class="retroactive-payment-method">
        <option value="">선택</option>
      </select>
      <p class="retroactive-payment-title mt">총 결제금액</p>
      <input class="retroactive-payment-price" type="text" readonly placeholder="0">
      <div  class="retroactive-payment-apply-button">
        <button>결제 요청</button>
      </div>
    </div>
  </CommonHeaderModal>
</template>
<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'

const emits = defineEmits(['close-modal'])
const handlerClickCloseModal = () => {
  emits('close-modal')
}
</script>
<style scoped lang="scss">
.retroactive-payment-container {
  padding: 30px 20px;
}
.retroactive-payment-title {
  font-weight: $ft-bold;
  &.mt {
    margin-top: 37px;
  }
}
.retroactive-payment-column {
  display: flex;
  background-color: #000000;
  &.column-box {
    box-shadow: 2px 3px 12px 0px #00000026;
    background-color: #ffffff;
  }
  .retroactive-payment-header {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    font-size: 14px;
    font-weight: $ft-bold;
    text-align: center;
    color: #ffffff;
  }
  .retroactive-payment-contents {
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    text-align: center;
  }
  .retroactive-date {
    width: 100px;
  }
  .retroactive-method {
    width: 80px;
  }
  .retroactive-info {
    width: 140px;
  }
  .retroactive-price {
    width: 90px;
  }
  .retroactive-cancel {
    width: 90px;
    .cancel-button {
      width: 64px;
      height: 33px;
      border-radius: 5px;
      border: 1px solid #000000;
      font-size: 14px;
      font-weight: $ft-medium;
      background-color: #ffffff;
      cursor: pointer;
    }
  }
}
.retroactive-payment-method {
  width: 100%;
  height: 48px;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 16px;
  font-weight: $ft-semibold;
  appearance: none;
  background-image: url(/img/icon/expand-down-black.svg);
  background-repeat: no-repeat;
  background-position-x: calc(100% - 12px);
  background-position-y: center;
}
.retroactive-payment-price {
  width: 100%;
  height: 48px;
  border: 1px solid #c6c6c6;
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 16px;
  font-weight: $ft-semibold;
}
.retroactive-payment-apply-button {
  margin-top: 52px;
  display: flex;
  justify-content: center;
  & > button {
    width: 173px;
    height: 44px;
    background-color: #000000;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    font-size: 16px;
    font-weight: $ft-bold;
    cursor: pointer;
  }
}
</style>