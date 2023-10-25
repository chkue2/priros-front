<template>
  <NuxtLayout name="mypage" now-page="expert-management">
    <div class="expert-management">
      <div class="expert-search-container">
        <select><option value="">전체</option></select>
        <div class="search-input">
          <input type="text"><img src="/img/icon/search-black.svg">
        </div>
      </div>
      <div class="expert-list">
        <div class="table-column">
          <div class="table-header expert-type">기관구분</div>
          <div class="table-header expert-name">기관명</div>
          <div class="table-header expert-address">소재지</div>
          <div class="table-header expert-representative">대표자</div>
          <div class="table-header expert-qualified-count">자격자수</div>
          <div class="table-header expert-clerk-count">자격자수</div>
          <div class="table-header expert-submit">수행</div>
          <div class="table-header expert-cancel">철회</div>
          <div class="table-header expert-state">기관상태</div>
          <div class="table-header expert-phone">휴대전화번호</div>
        </div>
        <div class="table-column column-box">
          <div class="table-contents expert-type">법무사법인</div>
          <div class="table-contents expert-name">주식회사 다이렉트로 법무사무소</div>
          <div class="table-contents expert-address">서울특별시 관악구 관락로6길 37 주소가 길면 두줄로 갑니다</div>
          <div class="table-contents expert-representative">홍길동</div>
          <div class="table-contents expert-qualified-count">4</div>
          <div class="table-contents expert-clerk-count">2</div>
          <div class="table-contents expert-submit">100</div>
          <div class="table-contents expert-cancel">9</div>
          <div class="table-contents expert-state">승인</div>
          <div class="table-contents expert-phone">010123412344</div>
        </div>
      </div>
      <Pagination />
    </div>
  </NuxtLayout>
</template>

<script setup>
import Pagination from '@priros/common/components/paging/Pagination.vue'
definePageMeta({
  layout: false
})
</script>

<style scoped lang="scss">
@import '~/assets/scss/common/table.scss';
.expert-search-container {
  display: flex;
  align-items: center;
  gap: 9px;
  & > select {
    width: 144px;
    height: 43px;
    appearance: none;
    border: 1px solid #bebebe;
    border-radius: 5px;
    padding: 0 12px;
    font-size: 14px;
    background-image: url(/img/icon/expand-down-black.svg);
    background-repeat: no-repeat;
    background-position-x: calc(100% - 12px);
    background-position-y: center;
  }
  .search-input {
    width: 315px;
    height: 43px;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #bebebe;
    & > input {
      width: 100%;
      padding: 0 50px 0 12px;
      border: none;
      font-size: 14px;
    }
    & > img {
      width: 23px;
      height: 23px;
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
}
.expert-list {
  width: 994px;
  margin: 52px 0;
  .expert-type {
    width: 130px;
  }
  .expert-name {
    width: 130px;
  }
  .expert-address {
    width: 230px;
  }
  .expert-representative {
    width: 80px;
  }
  .expert-qualified-count {
    width: 70px;
  }
  .expert-clerk-count {
    width: 70px;
  }
  .expert-submit {
    width: 60px;
  }
  .expert-cancel {
    width: 60px;
  }
  .expert-state {
    width: 70px;
  }
  .expert-phone {
    width: 130px;
  }
}
</style>