<template>
  <div class="detail-case-common-table">
    <div class="apply-memo">
      <textarea class="apply-memo-textarea" placeholder="메모를 등록하세요 (한글 최대 50자 이내)" maxlength="50"></textarea>
      <button class="apply-memo-button">
        <img src="/img/icon/apply-white.svg">
        등록
      </button>
    </div>
    <div class="detail-case-common-table-header">
      <div class="detail-case-common-table-small">수신일</div>
      <div class="detail-case-common-table-big">내용</div>
      <div class="detail-case-common-table-small">발신자</div>
    </div>
    <div class="detail-case-common-table-contents">
      <div class="detail-case-common-table-empty">등록된 메모가 없습니다</div>
    </div>
    <Pagination :margin-top="50" />
  </div>
</template>
<script setup>
import Pagination from '~/components/paging/Pagination'
</script>
<style scoped lang="scss">
@import '@priros/common/assets/scss/detail-case/table.scss';
.apply-memo {
  display: flex;
  margin-bottom: 15px;
  .apply-memo-textarea {
    flex: 1;
    resize: none;
    border: 1px solid #d9d9d9;
    padding: 8px;
  }
  .apply-memo-button {
    width: 70px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    background-color: #000000;
    color: #ffffff;
    font-size: 12px;
    border: none;
  }
}
</style>