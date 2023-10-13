<template>
  <Gnb :isActive="isGnbActive"/>
  <Header @toggle-menu="toggleMenu"/>
  <div id="wrapper">
    <main id="main">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import Header from "~/components/layouts/Header.vue";
import Footer from "~/components/layouts/Footer.vue";
import Gnb from "~/components/layouts/Gnb.vue";

const isGnbActive = ref(false);
const toggleMenu = () => {
  isGnbActive.value = !isGnbActive.value;
}

</script>
<style lang="scss">

#wrapper {
  padding-top: 68px;
  height: 100vh;
  overflow: auto;
  position: relative;

  &.locked {
    overflow: hidden;
  }
}
</style>