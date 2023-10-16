<template>
  <div class="detail-case-common-table">
    <div class="detail-case-common-table-header">
      <div class="detail-case-common-table-small">수신일</div>
      <div class="detail-case-common-table-big">내용</div>
      <div class="detail-case-common-table-small">발신자</div>
    </div>
    <div class="detail-case-common-table-contents">
      <div class="detail-case-common-table-empty">처리 내역이 없습니다</div>
    </div>
    <div class="detail-case-common-table-contents">
      <div class="detail-case-common-table-small">2023-09-10 15:12:33</div>
      <div class="detail-case-common-table-big">송금요청이 수정되었습니다 (사용자 아이디)</div>
      <div class="detail-case-common-table-small">정준하</div>
    </div>
  </div>
  <Pagination :margin-top="50" />
</template>
<script setup>
import Pagination from '~/components/paging/Pagination'
</script>
<style scoped lang="scss">
@import '~/assets/scss/detail-case/table.scss';
</style>