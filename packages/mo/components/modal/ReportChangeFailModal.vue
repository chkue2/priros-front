<template>
  <div class="common-alert-modal">
    <div class="alert-modal-container">
      <p v-if="props.title !== ''" class="alert-modal-title">
        {{ props.title }}
      </p>
      <p class="alert-modal-text">
        매수인, 소유형태 등 대출승인의 전제가 되는 정보는 현장수정이 불가하고
        기존 계약내용으로 등기업무가 진행되어야합니다.<br />
        대출승계 등 말소할 수 없는 권리가 있는 경우에는 대출승인이 취소될 수
        있습니다.<br />
        즉시, 설정대리인 또는 금융기관을 통해 계속 진행가능 여부를 반드시
        확인하세요.
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
  title: {
    type: String,
    default: "",
  },
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
  width: calc(100% - 48px);
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
  .alert-modal-title {
    color: #e92c2c;
    font-size: 14px;
    margin-bottom: 8px;
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
