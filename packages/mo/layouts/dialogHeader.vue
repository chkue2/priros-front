<template>
  <header class="close-header">
    <div class="close-header-title">{{ headerTitleText }}</div>
    <button class="close-button" @click="handlerClickCloseButton"></button>
  </header>
  <div id="wrapper">
    <slot />
  </div>
  <CustomAlertModal v-if="alertStore.isOpen" />
</template>
<script setup>
import { useRouter } from "vue-router";
import CustomAlertModal from "~/components/modal/CustomAlertModal.vue";
import { useAlertStore } from "~/store/alert.js";

const router = useRouter();

const props = defineProps({
  headerTitle: String,
});
const alertStore = useAlertStore();

const headerTitleText = computed(() => props.headerTitle || "팝업");
const handlerClickCloseButton = () => {
  document.querySelector("body").removeAttribute("style");
  if (window.history.length > 0) {
    router.back();
  } else {
    router.push("/");
  }
};
</script>
<style scoped lang="scss">
.close-header {
  height: 68px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-bottom: $border-bottom-between-header;
  z-index: $zi-fixed;
}

.close-header-title {
  font-size: 20px;
  font-weight: $ft-semibold;
}

.close-button {
  display: block;
  width: 24px;
  height: 24px;
  background: url(/img/icon/close-black.svg) no-repeat center/16px;
  border: none;
}

#wrapper {
  padding-top: 68px;
  height: 100vh;
  // overflow: auto;
  position: relative;

  &.locked {
    overflow: hidden;
  }
}
</style>
