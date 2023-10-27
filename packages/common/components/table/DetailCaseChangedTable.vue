<template>
  <div class="detail-case-common-table">
    <div class="detail-case-common-table-header">
      <div class="detail-case-common-table-small">변경일</div>
      <div class="detail-case-common-table-big">내용</div>
      <div class="detail-case-common-table-small">발신자</div>
    </div>
    <div class="detail-case-common-table-contents">
      <div class="detail-case-common-table-empty">변경 내역이 없습니다</div>
    </div>
    <div class="detail-case-common-table-contents">
      <div class="detail-case-common-table-small">2023-09-10 15:12:33</div>
      <div class="detail-case-common-table-big">요청사건 의뢰 상태로 변경, 이부분은 최대한 두줄로 유지가능한지 Q</div>
      <div class="detail-case-common-table-small">최대네자</div>
    </div>
    <Pagination :margin-top="50" />
  </div>
</template>
<script setup>
import Pagination from '@priros/common/components/paging/Pagination.vue'
</script>
<style scoped lang="scss">
@import '@priros/common/assets/scss/detail-case/table.scss';
</style>