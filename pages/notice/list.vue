<template>
  <NuxtLayout name="dialog-header" headerTitle="공지사항">
    <div class="notice-list">
      <NoticeListCard v-for="i in 10" :key="i" />
      <Pagination :margin-top="64" />
    </div>
  </NuxtLayout>
</template>

<script setup>
import NoticeListCard from '~/components/card/NoticeListCard'
import Pagination from '~/components/paging/Pagination'
definePageMeta({
  layout: false
})
</script>

<style scoped lang="scss">
.notice-list {
  padding: 16px 16px 24px;
}
</style>