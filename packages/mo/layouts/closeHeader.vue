<template>
  <header class="close-header">
    <p class="close-header-title">{{ headerTitleText }}</p>
    <button class="close-button" @click="handlerClickCloseButton"></button>
  </header>
  <div id="wrapper">
    <slot />
  </div>
  <CustomAlertModal v-if="alertStore.isOpen" />
</template>
<script setup>
import { onMounted, watch, ref } from "vue";
import { useRouter } from "vue-router";
import { useAlertStore } from "~/store/alert.js";

const router = useRouter();
const alertStore = useAlertStore();

const handlerClickCloseButton = () => {
  router.back();
};

let headerTitleText = ref("");
onMounted(() => {
  headerTitleText.value = returnTitle(window.location.pathname);
});
watch(
  () => router,
  () => {
    headerTitleText.value = returnTitle(router.options.history.location);
  },
  { deep: true }
);

// 해당 레이아웃 사용하는 페이지 추가시 아래 switch에 case 추가.
const returnTitle = (path) => {
  switch (path) {
    case "/notice/list":
      return "공지사항";
    case "/request/transfer":
      return "송금요청";
    default:
      return "";
  }
};
</script>
<style scoped lang="scss">
.close-header {
  height: 60px;
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
  padding-top: 60px;
}
</style>
