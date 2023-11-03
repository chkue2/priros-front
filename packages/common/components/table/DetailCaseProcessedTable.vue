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
        <div class="detail-case-common-table-small">{{ p.date }}</div>
        <div class="detail-case-common-table-big">{{ p.comment }}</div>
        <div class="detail-case-common-table-small">{{ p.sender }}</div>
      </div>
    </div>
  </div>
  <Pagination :margin-top="50" />
</template>
<script setup>
import { useDetailCaseStore } from '@priros/common/store/case/detail.js'

import Pagination from '@priros/common/components/paging/Pagination.vue'

const detailCaseStore = useDetailCaseStore()
</script>
<style scoped lang="scss">
@import '@priros/common/assets/scss/detail-case/table.scss';
</style>