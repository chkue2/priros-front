<template>
  <div id="gnb" :class="{active: gnbStore.isActive}">
    <UserMyPage v-if="auth.user"/>
    <UserLogin v-else/>
  </div>
</template>
<script setup>
import {useAuthStore} from "@priros/common/store/auth.js";
import {useGnbStore} from "~/store/gnbState.js";
import { onMounted, watch } from 'vue';

const gnbStore = useGnbStore();
const auth = useAuthStore();

onMounted(() => {
  auth.initialize();
});

watch(() => gnbStore.isActive, () => {
  if(gnbStore.isActive) {
    document.querySelector('body').style.overflow = 'hidden'
  } else {
    document.querySelector('body').removeAttribute('style')
  }
}, {deep: true})
</script>
<style lang="scss">
#gnb {
  position: fixed;
  width: 100%;
  height: calc(100vh - $mobile-header-height);
  border-top: 8px solid $body-bg;
  background: $white;
  z-index: $zi-offcanvas;
  transform: translateY(-120%); /* 메뉴를 초기에 위로 이동 */
  transition: transform 0.3s ease-in-out; /* 애니메이션 효과 설정 */
  overflow: auto;

  &.active {
    transform: translateY($mobile-header-height); /* active 클래스가 추가되면 메뉴를 원래 위치로 */
  }
}

</style>