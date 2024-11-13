<template>
  <div class="common-black-title-modal">
    <div class="black-title-modal-container">
      <div class="black-title-container">
        <p class="black-title">{{ title }}</p>
        <button class="black-close" @click="handlerClickCloseButton"></button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["handler-click-close"]);

const handlerClickCloseButton = () => {
  emit("handler-click-close");
};

onMounted(() => {
  document.querySelector("body").style.overflow = "hidden";
});
onBeforeUnmount(() => {
  document.querySelector("body").removeAttribute("style");
});
</script>

<style scoped lang="scss">
.common-black-title-modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: $zi-modal;
}
.black-title-modal-container {
  width: calc(100% - 18px);
  max-width: 640px;
  max-height: 80vh;
  background-color: #ffffff;
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  overflow-x: hidden;
  .black-title-container {
    width: 100%;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: #000000;
    position: sticky;
    top: 0;
    z-index: $zi-sticky;
    .black-title {
      font-weight: $ft-bold;
      color: #ffffff;
    }
    .black-close {
      width: 15px;
      height: 15px;
      background: url(/img/icon/close-white.svg) no-repeat center/cover;
      border: none;
    }
  }
}
</style>
