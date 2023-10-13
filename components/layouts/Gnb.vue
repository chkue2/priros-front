<template>
  <div id="gnb" :class="{active: gnbStore.isActive}">
    <UserMyPage v-if="auth.user"/>
    <UserLogin v-else/>
  </div>
</template>
<script setup>
import {useAuthStore} from "~/store/auth.js";
import {useGnbStore} from "~/store/gnbState.js";

const gnbStore = useGnbStore();
const auth = useAuthStore();

</script>
<style lang="scss">
@import "gnb";
</style>