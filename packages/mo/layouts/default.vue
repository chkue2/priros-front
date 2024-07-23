<template>
  <Gnb />
  <Header />
  <div id="wrapper">
    <main id="main" :class="{ bt: isNotMain }">
      <slot />
    </main>
    <Footer />
    <div class="main-bottom-buttons" v-if="!auth.user && !isNotMain">
      <CommonBottomButton
        id="mainBottomButtonHelpCenter"
        text="헬프센터"
        backgroundColor="#c7c7c7"
        height="72px"
        width="50%"
        :font-weight="700"
        @handler-click-button="handlerClickHelpCenter"
      />
      <CommonBottomButton
        id="mainBottomButtonLogin"
        text="로그인"
        backgroundColor="#000000"
        height="72px"
        width="50%"
        :font-weight="700"
        @handler-click-button="handlerClickLoginButton"
      />
    </div>
  </div>
  <PersonalTermModal v-if="termsStore.isPersonalTerm" />
  <ServiceTermModal v-if="termsStore.isServiceTerm" />
  <CustomAlertModal v-if="alertStore.isOpen" />
</template>
<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref, watch } from "vue";

import { useAuthStore } from "@priros/common/store/auth.js";
import { useGnbStore } from "~/store/gnbState.js";
import { useTermsStore } from "~/store/termsState.js";
import { useAlertStore } from "~/store/alert.js";

import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
import Gnb from "~/components/layout/Gnb.vue";
import CommonBottomButton from "@priros/common/components/button/CommonBottomButton.vue";
import PersonalTermModal from "~/components/modal/PersonalTermModal.vue";
import ServiceTermModal from "~/components/modal/ServiceTermModal.vue";
import CustomAlertModal from "~/components/modal/CustomAlertModal.vue";

const router = useRouter();
const auth = useAuthStore();
const gnbStore = useGnbStore();
const termsStore = useTermsStore();
const alertStore = useAlertStore();

let isNotMain = ref(false);

const handlerClickLoginButton = () => {
  gnbStore.toggle();
};
const handlerClickHelpCenter = () => {
  router.push("/faq/list");
};

onMounted(() => {
  isNotMain.value = window.location.pathname !== "/";
});
watch(
  () => router,
  () => {
    isNotMain.value = router.options.history.location !== "/";
  },
  { deep: true }
);
</script>
<style lang="scss">
#wrapper {
  padding-top: 60px;
  height: 100vh;
  position: relative;
  /* overflow: auto; */
  &.locked {
    overflow: hidden;
  }

  .bt {
    border-top: $border-bottom-between-header;
  }

  .bm {
    margin-bottom: 72px;
  }
}

.main-bottom-buttons {
  display: flex;
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: $zi-sticky;
}
</style>
