<template>
  <div class="notice-list">
    <NoticeListCard v-for="i in 10" :key="i" />
    <Pagination :margin-top="64" />
  </div>
</template>

<script setup>
import NoticeListCard from '~/components/card/NoticeListCard'
import Pagination from '~/components/paging/Pagination'
definePageMeta({
  layout: 'close-header'
})
</script>

<style scoped lang="scss">
.notice-list {
  padding: 16px 16px 24px;
}
</style>