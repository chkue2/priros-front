<template>
  <div class="common-full-screen-fade-modal" :class="{'modal--open': isShow}">
    <slot />
  </div>
</template>
<script setup>
import { watch } from 'vue'

const props = defineProps({
  isShow: Boolean,
})

watch(() => props.isShow, () => {
  if(props.isShow) {
    // modal open시 body scroll disable
    document.querySelector('body').style.overflow = 'hidden'
  } else {
    // modal close시 body scroll enable
    document.querySelector('body').removeAttribute('style')
  }
})

</script>

<style scoped lang="scss">
@import '~/assets/scss/_variables.scss';
.common-full-screen-fade-modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: .3s all ease-in-out;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #ffffff;
  z-index: $zi-modal;
  &.modal--open {
    opacity: 1;
    visibility: visible;
  }
}
</style>