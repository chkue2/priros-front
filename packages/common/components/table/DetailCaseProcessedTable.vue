<template>
  <div class="detail-case-common-table">
    <div class="detail-case-common-table-header">
      <div class="detail-case-common-table-small">수신일</div>
      <div class="detail-case-common-table-big">내용</div>
      <div class="detail-case-common-table-small">발신자</div>
    </div>
    <div v-if="detailCaseStore.fetchedProcessedList.length === 0" class="detail-case-common-table-contents">
      <div class="detail-case-common-table-empty">처리 내역이 없습니다</div>
    </div>
    <div v-if="detailCaseStore.fetchedProcessedList.length > 0">
      <div v-for="(p, index) in detailCaseStore.fetchedProcessedList" :key="index" class="detail-case-common-table-contents">
        <div class="detail-case-common-table-small" v-html="changeDateFormat(p.created)"></div>
        <div class="detail-case-common-table-big">{{ p.comment }}</div>
        <div class="detail-case-common-table-small">{{ p.actorName }}</div>
      </div>
    </div>
  </div>
  <Pagination :paging="detailCaseStore.fetchedPaging" :margin-top="50" @click-page="handlerClickPage" />
</template>
<script setup>
import { useDetailCaseStore } from '@priros/common/store/case/detail.js'

import Pagination from '@priros/common/components/paging/Pagination.vue'

const props = defineProps({tradeCaseId: String})
const detailCaseStore = useDetailCaseStore()

const changeDateFormat = (date) => {
  return date?.replace('T', '<br>')
}

const handlerClickPage = (page) => {
  detailCaseStore.fetchHistoryTr(props.tradeCaseId, page)
}
</script>
<style scoped lang="scss">
@import '@priros/common/assets/scss/detail-case/table.scss';
</style>