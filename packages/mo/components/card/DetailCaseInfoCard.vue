<template>
  <div class="detail-case-info-card">
    <div class="detail-case-info-column">
      <p class="detail-case-info-title">상호</p>
      <p class="detail-case-info-content">일박이일법무소</p>
    </div>
    <div class="detail-case-info-column">
      <p class="detail-case-info-title">대표자</p>
      <p class="detail-case-info-content">조성화</p>
    </div>
    <div class="detail-case-info-column">
      <p class="detail-case-info-title">소재지</p>
      <p class="detail-case-info-content">경기도 과천시 별양상가 1로 18, 4층 B-2호 (별양동, 과천오피스텔)</p>
    </div>
    <div class="detail-case-info-column">
      <p class="detail-case-info-title">연락처</p>
      <p class="detail-case-info-content">010-1234-1234</p>
    </div>
    <div class="detail-case-info-column">
      <p class="detail-case-info-title">담당자</p>
      <p class="detail-case-info-content">김프리 법무사</p>
    </div>
    <div class="detail-case-info-column">
      <p class="detail-case-info-title">연락처</p>
      <p class="detail-case-info-content">010-4567-4567</p>
    </div>
  </div>  
</template>
<script setup></script>

<style scoped lang="scss">
.detail-case-info-card {
  padding: 68px 12px;
  .detail-case-info-column {
    display: flex;
    align-items: flex-start;
    & + .detail-case-info-column {
      margin-top: 12px;
    }
  }
  .detail-case-info-title {
    width: 50px;
    font-size: 14px;
    line-height: 18px;
    color: #acacac;
    text-align: left;
  }
  .detail-case-info-content {
    flex: 1;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    word-break: keep-all;
  }
}
</style>