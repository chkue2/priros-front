<template>
  <SideMenu />
  <div class="middle-bar"></div>
  <div class="header-nav">
    <p>마켓의뢰 / 매칭</p>
  </div>
  <div id="wrapper">
    <slot />
  </div>
</template>

<script setup>
import SideMenu from '~/components/layout/SideMenu.vue'
</script>

<style scoped lang="scss">
.middle-bar {
  width: 12px;
  height: 100vh;
  background-color: #fcfcfc;
  border-right: 1px solid #e8e8e8;
  float: left;
  position: sticky;
  top: 0;
  z-index: 2;
}
.header-nav {
  background-color: #ffffff;
  font-weight: $ft-medium;
  position: sticky;
  top: 0;
  z-index: 1;
  padding-left: 272px;
  & > p {
    padding: 16px 25px;
    font-size: 14px;
  }
}
#wrapper {
  padding-left: 272px;
  height: 2000px;
  background-image: linear-gradient(red, yellow);
}
</style>