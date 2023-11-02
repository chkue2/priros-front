<template>
  <div class="market-container">
    <div class="market-search">
      <button class="button--black">전체</button>
      <div class="search-date">
        <input type="date"> ~ <input type="date">
      </div>
      <select><option value="">지역 선택</option></select>
      <select><option value="">상품 전체</option></select>
      <select><option value="">정보 선택</option></select>
      <div class="search-text">
        <input type="text" placeholder="검색어를 입력해주세요">
        <img src="/img/icon/search-black.svg">
      </div>
    </div>
    <div class="market-filter">
      <div class="filter-buttons">
        <button class="button--blue">보완요청 <i>2</i></button>
      </div>
      <span class="active">검색결과 (9)</span>
      <span>완료 (9)</span>
      <span>취소 (9)</span>
    </div>
    <div class="market-table">
      <div class="table-column">
        <div class="table-header table-no">No.</div>
        <div class="table-header table-reg">등록일</div>
        <div class="table-header table-blance">잔금일</div>
        <div class="table-header table-repayment">상환</div>
        <div class="table-header table-bank">대출기관</div>
        <div class="table-header table-address">소재지</div>
        <div class="table-header table-buyer">매수인</div>
        <div class="table-header table-fagent">이전대리인</div>
        <div class="table-header table-sagent">설정대리인</div>
        <div class="table-header table-state">진행상태</div>
        <div class="table-header table-complete">완료일</div>
      </div>
      <div class="table-column column-box">
        <div class="table-contents table-no">1</div>
        <div class="table-contents table-reg">2023-07-06</div>
        <div class="table-contents table-blance">2023-07-14</div>
        <div class="table-contents table-repayment">N</div>
        <div class="table-contents contents-column table-bank">
          <span class="bank-name">카카오뱅크</span>
          <span class="bank-tag">#보금자리론</span>
        </div>
        <div class="table-contents table-address">경기도 과천시 갈현동 135 과천푸르지오 벨라...</div>
        <div class="table-contents table-buyer">박명수</div>
        <div class="table-contents contents-column table-fagent">
          다이렉트로 법무사무소
        </div>
        <div class="table-contents table-sagent">다이렉트로 법무사무소</div>
        <div class="table-contents table-state">일정등록</div>
        <div class="table-contents table-complete">
          2023-07-14<br>10:12:22
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script setup>
import Pagination from '@priros/common/components/paging/Pagination.vue'
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/common.scss';
@import '~/assets/scss/market/search.scss';
@import '~/assets/scss/market/filter.scss';
@import '~/assets/scss/common/table.scss';
.market-table {
  margin-bottom: 32px;
}
.table-no {
  width: 40px;
}
.table-reg {
  width: 100px;
}
.table-blance {
  width: 100px;
}
.table-repayment {
  width: 70px;
}
.table-bank {
  width: 120px;
}
.table-address {
  width: 210px;
}
.table-buyer {
  width: 75px;
}
.table-fagent {
  width: 160px;
}
.table-sagent {
  width: 160px;
}
.table-state {
  width: 80px;
}
.table-complete{
  width: 150px;
  font-weight: $ft-bold;
}
.bank-name {
  display: flex;
  gap: 3px;
  align-items: center;
  font-size: 14px;
}
.bank-tag {
  font-size: 12px;
  color: #235bed;
  line-height: 17px;
}
</style>