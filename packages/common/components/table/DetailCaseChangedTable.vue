<template>
  <div class="detail-case-common-table">
    <div class="detail-case-common-table-header">
      <div class="detail-case-common-table-small">변경일</div>
      <div class="detail-case-common-table-big">내용</div>
      <div class="detail-case-common-table-small">발신자</div>
    </div>
    <div v-if="detailCaseStore.fetchedChangedList.length === 0" class="detail-case-common-table-contents">
      <div class="detail-case-common-table-empty">변경 내역이 없습니다</div>
    </div>
    <div v-if="detailCaseStore.fetchedChangedList.length > 0">
      <div v-for="(c, index) in detailCaseStore.fetchedChangedList" :key="index" class="detail-case-common-table-contents">
        <div class="detail-case-common-table-small">{{ changeDateFormat(c.created) }}</div>
        <div class="detail-case-common-table-big">{{ c.comment }}</div>
        <div class="detail-case-common-table-small">{{ c.actorName }}</div>
      </div>
    </div>
    <Pagination :paging="detailCaseStore.fetchedPaging" :margin-top="50" @click-page="handlerClickPage" />
  </div>
</template>
<script setup>
import { useDetailCaseStore } from '@priros/common/store/case/detail.js'

import Pagination from '@priros/common/components/paging/Pagination.vue'

const props = defineProps({
  tradeCaseId: String,
})
const detailCaseStore = useDetailCaseStore()

const changeDateFormat = (date) => {
  return date?.split('T')[0]
}

const handlerClickPage = (page) => {
  detailCaseStore.fetchHistory(props.tradeCaseId, page)
}
</script>
<style scoped lang="scss">
@import '@priros/common/assets/scss/detail-case/table.scss';
</style>