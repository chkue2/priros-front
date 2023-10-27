<template>
  <Header />
  <div id="wrapper" class="logined">
    <slot />
  </div>
  <SideNav
    @handler-click-open-calendar="toggleCalendarShow" />
  <CommonCalendarModal v-if="isCalendarShow"
    @close-modal="toggleCalendarShow" />
</template>
<script setup>
import { ref } from 'vue'
import Header from '~/components/layout/Header.vue'
import SideNav from '~/components/layout/SideNav.vue'
import CommonCalendarModal from '~/components/modal/CommonCalendarModal.vue'

const isCalendarShow = ref(false)
const toggleCalendarShow = () => {
  isCalendarShow.value = !isCalendarShow.value
}
</script>
<style scoped lang="scss">
#wrapper {
  padding-top: 100px;
  &.logined {
    padding-top: 167px;
  }
}
</style>