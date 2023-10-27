<template>
  <div class="side-nav-container">
    <div class="side-nav">
      <div class="side-nav-menu menu--bg">
        <img src="/img/icon/dock-green.svg">
      </div>
      <div class="side-nav-menu">
        <img src="/img/icon/bar-chart-gray.svg">
      </div>
      <div class="side-nav-menu" @click="handlerClickOpenCalendar">
        <img src="/img/icon/calendar-gray.svg">
      </div>
      <div class="side-nav-line"></div>
      <div class="side-nav-menu">
        <img src="/img/icon/call-gray.svg">
      </div>
      <div class="side-nav-menu">
        <img src="/img/icon/settings-gray.svg">
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['handler-click-open-calendar'])
const handlerClickOpenCalendar = () => {
  emits('handler-click-open-calendar')
}
</script>

<style scoped lang="scss">
.side-nav-container{
  width: $wrapper-width;
  position: fixed;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
}
.side-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  background-color: #262633;
  position: fixed;
  right: -140px;
  gap: 12px;
  .side-nav-menu {
    width: 63px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.menu--bg {
      background-color: #000000;
      border-radius: 8px;
    }
  }
  .side-nav-line {
    width: 100%;
    height: 1px;
    background-color: #545454;
  }
}
</style>