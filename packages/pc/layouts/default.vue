<template>
  <Header />
  <div id="wrapper" class="logined">
    <slot />
  </div>
  <CommonCalendarModal v-if="isCalendarShow" />
</template>
<script setup>
import { ref } from 'vue'
import Header from '~/components/layout/Header.vue'
import CommonCalendarModal from '~/components/modal/CommonCalendarModal.vue'

const isCalendarShow = ref(false)
</script>
<style scoped lang="scss">
#wrapper {
  padding-top: 100px;
  &.logined {
    padding-top: 167px;
  }
}
</style>