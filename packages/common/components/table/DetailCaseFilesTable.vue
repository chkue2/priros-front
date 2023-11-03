<template>
  <div class="detail-case-common-table">
    <div class="detail-case-common-table-header">
      <div class="detail-case-common-table-small">등록일</div>
      <div class="detail-case-common-table-big">문서명</div>
      <div class="detail-case-common-table-small">첨부파일</div>
    </div>
    <div v-if="detailCaseStore.fetchedFilesList.length === 0" class="detail-case-common-table-contents">
      <div class="detail-case-common-table-empty">첨부된 파일이 없습니다</div>
    </div>
    <div v-if="detailCaseStore.fetchedFilesList.length > 0">
      <div v-for="(f, index) in detailCaseStore.fetchedFilesList" :key="index" class="detail-case-common-table-contents">
        <div class="detail-case-common-table-small">{{ f.date }}</div>
        <div class="detail-case-common-table-big">{{ f.name }}</div>
        <div class="detail-case-common-table-small">{{ f.file }}</div>
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