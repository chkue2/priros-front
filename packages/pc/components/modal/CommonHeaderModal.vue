<template>
  <div class="common-header-modal">
    <div class="common-header-modal-bg" @click="handlerClickCloseModal"></div>
    <div :id="modalId" class="common-header-modal-container">
      <div class="common-modal-header">
        <p class="common-modal-title">{{ modalTitle }}</p>
        <img class="common-modal-close" src="/img/icon/close-gray.svg" alt="모달 닫기" @click="handlerClickCloseModal">
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
  modalId: {
    type: String,
    defualt: 'commonHeaderModal'
  },
  modalTitle: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '500px'
  }
})

const emits = defineEmits(['close-modal'])
const handlerClickCloseModal = () => {
  emits('close-modal')
}

onMounted(() => {
  document.querySelector('body').style.overflow = 'hidden'
  document.querySelector(`#${props.modalId}`).style.width = props.width
})

onBeforeUnmount(() => {
  document.querySelector('body').removeAttribute('style')
})
</script>

<style scoped lang="scss">
.common-header-modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: $zi-modal;
  .common-header-modal-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .common-header-modal-container {
    width: 500px;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
    box-shadow: 3px 3px 8px 0px #00000040;
    background-color: #ffffff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    .common-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 73px;
      position: sticky;
      top: 0;
      z-index: $zi-sticky;
      padding: 0 20px;
      background-color: #ffffff;
      border-bottom: 1px solid #e6e6e6;
    }
    .common-modal-title {
      font-size: 20px;
      font-weight: $ft-bold;
      color: #1a1a1a;
    }
    .common-modal-close {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
}
</style>