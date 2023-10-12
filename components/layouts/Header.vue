<template>
  <header id="header">
    <div class="brand">
      <NuxtLink to="/">
        <Brand size="30"/>
      </NuxtLink>
    </div>
    <ul class="nav">
      <li class="nav-item">
        <button type="button" class="btn-blank">
          <SvgIcon variant="alert" size="24"/>
        </button>
      </li>
      <li class="nav-item">
        <button type="button" class="btn-blank" @click="handleToggleMenu">
          <SvgIcon variant="menu" size="24"/>
        </button>
      </li>
    </ul>
  </header>
</template>
<script setup>

import SvgIcon from "~/components/icon/SvgIcon.vue";
import Brand from "~/components/icon/Brand.vue";

const emits = defineEmits(['toggle-menu']);

const handleToggleMenu = () => {
  emits('toggle-menu');
  console.log("o");
}

</script>
<style scoped lang="scss">

#header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 12px $grid-margin;
  background-color: $white;
  flex-wrap: wrap;
  align-items: center;
  z-index: $zi-fixed;

  .brand {
    display: flex;
    margin-right: auto;
  }
}
</style>