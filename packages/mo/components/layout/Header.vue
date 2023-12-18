<template>
  <header id="header">
    <div class="brand">
      <NuxtLink to="/" @click="gnbStore.deactivate()">
        <IconBrand size="30"/>
      </NuxtLink>
    </div>
    <ul class="nav">
      <li v-if="false" class="nav-item">
        <button type="button" class="btn-blank">
          <IconSvgIcon variant="alert" size="24"/>
        </button>
      </li>
      <li class="nav-item">
        <button type="button" class="btn-blank" @click="handleToggleMenu">
          <IconSvgIcon :variant="variantType" size="24"/>
        </button>
      </li>
    </ul>
  </header>
</template>
<script setup>
import {useGnbStore} from "~/store/gnbState.js";


const gnbStore = useGnbStore();
const variantType = computed(() => gnbStore.isActive ? 'close' : 'menu');

const handleToggleMenu = () => {
  gnbStore.toggle();
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