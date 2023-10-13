<template>
  <div id="gnb" :class="{active: isActive}">
    <UserMyPage v-if="user" />
    <UserLogin v-else />
  </div>
</template>

<script setup>
import {useAuthStore} from "~/store/auth.js";

const {isActive} = defineProps(['isActive']);
const auth = useAuthStore();
const {user} = auth;
</script>

<style scoped lang="scss">
@import "gnb";
</style>