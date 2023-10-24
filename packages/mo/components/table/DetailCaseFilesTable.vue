<template>
  <div class="detail-case-common-table">
    <div class="detail-case-common-table-header">
      <div class="detail-case-common-table-small">등록일</div>
      <div class="detail-case-common-table-big">문서명</div>
      <div class="detail-case-common-table-small">첨부파일</div>
    </div>
    <div class="detail-case-common-table-contents">
      <div class="detail-case-common-table-empty">첨부된 파일이 없습니다</div>
    </div>
    <div class="detail-case-common-table-contents">
      <div class="detail-case-common-table-small">2023-09-10 15:12:33</div>
      <div class="detail-case-common-table-big">주민등록등본_김선</div>
      <div class="detail-case-common-table-small">PDF</div>
    </div>
  </div>
  <Pagination :margin-top="50" />
</template>
<script setup>
import Pagination from '~/components/paging/Pagination'
</script>
<style scoped lang="scss">
@import '@priros/common/assets/scss/detail-case/table.scss';
</style>