<template>
  <NuxtLayout name="dialog-header" headerTitle="공지사항">
    <div v-if="noticeList.length > 0" class="notice-list">
      <NoticeListCard v-for="(notice, index) in noticeList" :key="index" :notice="notice" />
      <Pagination :margin-top="64" />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import NoticeListCard from '~/components/card/NoticeListCard'
import Pagination from '@priros/common/components/paging/Pagination'
import { notice } from "~/services/notice.js";
definePageMeta({
  layout: false
})

const noticeList = ref([])
onMounted(() => {
  notice.list().then(({data}) => {
    noticeList.value = data.value.noticeList
  })
  .catch(e => {
    console.log(e)
  })
})
</script>

<style scoped lang="scss">
.notice-list {
  padding: 16px 16px 24px;
}
</style>