<template>
  <div class="common-modal">
    <div class="modal-container">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['handler-click-close'])

const handlerClickCloseButton = () => {
  emit('handler-click-close')
}

onMounted(() => {
  document.querySelector('body').style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  document.querySelector('body').removeAttribute('style')
})
</script>

<style scoped lang="scss">
  .common-modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: $zi-modal;
  }
  .modal-container {
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
  }
</style>