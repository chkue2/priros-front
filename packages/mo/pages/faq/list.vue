<template>
  <NuxtLayout name="dialog-header" headerTitle="헬프센터">
    <div class="faq-list">
      <NoticeListCard v-for="i in 10" :key="i" />
      <Pagination :margin-top="64" />
    </div>
  </NuxtLayout>
</template>

<script setup>
import NoticeListCard from '~/components/card/NoticeListCard'
import Pagination from '@priros/common/components/paging/Pagination'
definePageMeta({
  layout: false
})
</script>

<style scoped lang="scss">
.faq-list {
  padding: 16px 16px 24px;
}
</style>