<template>
  <Header />
  <div id="wrapper" class="logined">
    <slot />
  </div>
</template>
<script setup>
import Header from '~/components/layout/Header.vue'
</script>
<style scoped lang="scss">
#wrapper {
  padding-top: 100px;
  &.logined {
    padding-top: 167px;
  }
}
</style>