<template>
  <div class="loading-modal">
    <div class="loading-container">
      <span class="loader"></span>
      <p class="loading-text" v-html="text"></p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
  text: String,
})

onMounted(() => {
  document.querySelector('body').style.overflow = 'hidden'
})
onBeforeUnmount(() => {
  document.querySelector('body').removeAttribute('style')
})
</script>

<style scoped lang="scss">
.loading-modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: $zi-fixed;
}
.loading-container { 
  width: 276px;
  height: 276px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .loading-text {
    margin-top: 50px;
    line-height: 20px;
    font-size: 14px;
    font-weight: $ft-medium;
    text-align: center;
  }
}
.loader {
  font-size: 10px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.1s infinite ease;
  transform: translateZ(0);
}
@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow: 0em -2em 0em 0em #000000, 1.4em -1.4em 0 0em rgba(0, 0, 0, 0.2), 2em 0em 0 0em rgba(0, 0, 0, 0.2), 1.3em 1.3em 0 0em rgba(0, 0, 0, 0.2), 0em 1.8em 0 0em rgba(0, 0, 0, 0.2), -1.3em 1.3em 0 0em rgba(0, 0, 0, 0.2), -2em 0em 0 0em rgba(0, 0, 0, 0.5), -1.4em -1.4em 0 0em rgba(0, 0, 0, 0.7);
  }
  12.5% {
    box-shadow: 0em -2em 0em 0em rgba(0, 0, 0, 0.7), 1.4em -1.4em 0 0em #000000, 2em 0em 0 0em rgba(0, 0, 0, 0.2), 1.3em 1.3em 0 0em rgba(0, 0, 0, 0.2), 0em 1.8em 0 0em rgba(0, 0, 0, 0.2), -1.3em 1.3em 0 0em rgba(0, 0, 0, 0.2), -2em 0em 0 0em rgba(0, 0, 0, 0.2), -1.4em -1.4em 0 0em rgba(0, 0, 0, 0.5);
  }
  25% {
    box-shadow: 0em -2em 0em 0em rgba(0, 0, 0, 0.5), 1.4em -1.4em 0 0em rgba(0, 0, 0, 0.7), 2em 0em 0 0em #000000, 1.3em 1.3em 0 0em rgba(0, 0, 0, 0.2), 0em 1.8em 0 0em rgba(0, 0, 0, 0.2), -1.3em 1.3em 0 0em rgba(0, 0, 0, 0.2), -2em 0em 0 0em rgba(0, 0, 0, 0.2), -1.4em -1.4em 0 0em rgba(0, 0, 0, 0.2);
  }
  37.5% {
    box-shadow: 0em -2em 0em 0em rgba(0, 0, 0, 0.2), 1.4em -1.4em 0 0em rgba(0, 0, 0, 0.5), 2em 0em 0 0em rgba(0, 0, 0, 0.7), 1.3em 1.3em 0 0em #000000, 0em 1.8em 0 0em rgba(0, 0, 0, 0.2), -1.3em 1.3em 0 0em rgba(0, 0, 0, 0.2), -2em 0em 0 0em rgba(0, 0, 0, 0.2), -1.4em -1.4em 0 0em rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0em -2em 0em 0em rgba(0, 0, 0, 0.2), 1.4em -1.4em 0 0em rgba(0, 0, 0, 0.2), 2em 0em 0 0em rgba(0, 0, 0, 0.5), 1.3em 1.3em 0 0em rgba(0, 0, 0, 0.7), 0em 1.8em 0 0em #000000, -1.3em 1.3em 0 0em rgba(0, 0, 0, 0.2), -2em 0em 0 0em rgba(0, 0, 0, 0.2), -1.4em -1.4em 0 0em rgba(0, 0, 0, 0.2);
  }
  62.5% {
    box-shadow: 0em -2em 0em 0em rgba(0, 0, 0, 0.2), 1.4em -1.4em 0 0em rgba(0, 0, 0, 0.2), 2em 0em 0 0em rgba(0, 0, 0, 0.2), 1.3em 1.3em 0 0em rgba(0, 0, 0, 0.5), 0em 1.8em 0 0em rgba(0, 0, 0, 0.7), -1.3em 1.3em 0 0em #000000, -2em 0em 0 0em rgba(0, 0, 0, 0.2), -1.4em -1.4em 0 0em rgba(0, 0, 0, 0.2);
  }
  75% {
    box-shadow: 0em -2em 0em 0em rgba(0, 0, 0, 0.2), 1.4em -1.4em 0 0em rgba(0, 0, 0, 0.2), 2em 0em 0 0em rgba(0, 0, 0, 0.2), 1.3em 1.3em 0 0em rgba(0, 0, 0, 0.2), 0em 1.8em 0 0em rgba(0, 0, 0, 0.5), -1.3em 1.3em 0 0em rgba(0, 0, 0, 0.7), -2em 0em 0 0em #000000, -1.4em -1.4em 0 0em rgba(0, 0, 0, 0.2);
  }
  87.5% {
    box-shadow: 0em -2em 0em 0em rgba(0, 0, 0, 0.2), 1.4em -1.4em 0 0em rgba(0, 0, 0, 0.2), 2em 0em 0 0em rgba(0, 0, 0, 0.2), 1.3em 1.3em 0 0em rgba(0, 0, 0, 0.2), 0em 1.8em 0 0em rgba(0, 0, 0, 0.2), -1.3em 1.3em 0 0em rgba(0, 0, 0, 0.5), -2em 0em 0 0em rgba(0, 0, 0, 0.7), -1.4em -1.4em 0 0em #000000;
  }
}
</style>