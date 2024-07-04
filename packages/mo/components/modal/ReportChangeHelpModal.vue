<template>
  <div class="common-alert-modal">
    <div class="alert-modal-container">
      <p class="alert-modal-text">
        매수인, 소유형태, 매매대금 등 대출심사 정보는 현장수정이 불가합니다.<br />변경없이
        등기업무를 수행하세요.<br />혹은 대출금 지급 전 대출은행과 먼저
        상의해야합니다.
      </p>
      <button class="alert-modal-bottom-button" @click="handlerClickOkButton">
        확인
      </button>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  isBodyLock: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["handler-click-button"]);

const handlerClickOkButton = () => {
  emit("handler-click-button");
};

onMounted(() => {
  if (props.isBodyLock === true)
    document.querySelector("body").style.overflow = "hidden";
});
onBeforeUnmount(() => {
  if (props.isBodyLock === true)
    document.querySelector("body").removeAttribute("style");
});
</script>

<style scoped lang="scss">
.common-alert-modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: $zi-modal;
}
.alert-modal-container {
  width: calc(100% - 84px);
  max-width: 640px;
  background-color: #ffffff;
  border: 1px solid #dfdfdf;
  padding-top: 50px;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .alert-modal-logo {
    width: 71px;
    height: auto;
  }
  .alert-modal-text {
    margin: 40px 0;
    padding: 0 16px;
    font-size: 14px;
    line-height: 19px;
    font-weight: $ft-medium;
    text-align: center;
    color: #1a1a1a;
  }
  .alert-modal-bottom-button {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-top: 1px solid #dfdfdf;
    font-size: 16px;
    font-weight: $ft-medium;
    background-color: #ffffff;
  }
}
</style>
