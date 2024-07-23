<template>
  <NuxtLayout name="dialog-header" headerTitle="사용자정보">
    <MypagePasswordForm v-if="depth === 1" @click-button="nextDepth" />
    <MypageUpdateForm v-if="depth === 2" />
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";

import { myPageStore } from "~/store/user/myPage.js";
import { useAlertStore } from "~/store/alert.js";

import MypagePasswordForm from "~/views/user/MypagePasswordForm.vue";
import MypageUpdateForm from "~/views/user/MypageUpdateForm.vue";
definePageMeta({
  layout: false,
});

const alertStore = useAlertStore();
const myPage = myPageStore();

const depth = ref(1);
const nextDepth = () => {
  myPage
    .requestVertifyPassword()
    .then(() => {
      myPage.setVertifyPassword("");
      depth.value++;
    })
    .catch((e) => {
      alertStore.open("비밀번호를 다시 확인해주세요.");
    });
};
</script>
