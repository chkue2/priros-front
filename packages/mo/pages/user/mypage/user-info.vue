<template>
  <NuxtLayout name="dialog-header" headerTitle="사용자정보">
    <MypagePasswordForm v-if="depth === 1" @click-button="nextDepth" />
    <MypageUpdateForm v-if="depth === 2" />
  </NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'
import MypagePasswordForm from '~/views/user/MypagePasswordForm.vue'
import MypageUpdateForm from '~/views/user/MypageUpdateForm.vue'
definePageMeta({
  layout: false,
})

const depth = ref(1)
const nextDepth = () => {
  depth.value++
}
</script>