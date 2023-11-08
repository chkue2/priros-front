<template>
  <NuxtLayout name="dialog-header" headerTitle="공지사항">
    <div v-if="noticeList.length > 0" class="notice-list">
      <NoticeListCard v-for="(notice, index) in noticeList" :key="index" :notice="notice" />
      <Pagination :margin-top="64" :paging="paging" @click-page="fetchNoticeList" />
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
const paging = ref({})
onMounted(() => {
  fetchNoticeList(1)
})


const fetchNoticeList = (page) => {
  notice.list(page).then(({data}) => {
    noticeList.value = data.value.noticeList
    paging.value = data.value.paging
  })
  .catch(e => {
    console.log(e)
  })
}
</script>

<style scoped lang="scss">
.notice-list {
  padding: 16px 16px 24px;
}
</style>