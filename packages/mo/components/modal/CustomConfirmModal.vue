<template>
  <div class="common-alert-modal">
    <div class="alert-modal-container">
      <img src="/img/icon/logo-mo-03.svg" alt="" class="alert-modal-logo" />
      <p class="alert-modal-text" v-html="alertStore.message"></p>
      <div class="alert-modal-buttons">
        <button
          class="alert-modal-bottom-button"
          @click="handlerClickCancelButton"
        >
          취소
        </button>
        <button class="alert-modal-bottom-button" @click="handlerClickOkButton">
          확인
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from "vue";
import { useAlertStore } from "~/store/alert.js";

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
const emit = defineEmits(["click-button"]);

const alertStore = useAlertStore();

const handlerClickCancelButton = () => {
  alertStore.confirmClose();
};

const handlerClickOkButton = () => {
  emit("click-button");
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
  .alert-modal-text {
    margin: 40px 0;
    font-size: 14px;
    line-height: 19px;
    font-weight: $ft-medium;
    text-align: center;
    color: #1a1a1a;
    padding: 0 24px;
    word-break: keep-all;
  }
  .alert-modal-buttons {
    display: flex;
    align-items: center;
  }
  .alert-modal-bottom-button {
    flex: 1;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-top: 1px solid #dfdfdf;
    font-size: 16px;
    font-weight: $ft-medium;
    background-color: #ffffff;
    & + .alert-modal-bottom-button {
      border-left: 1px solid #dfdfdf;
    }
  }
}
</style>
