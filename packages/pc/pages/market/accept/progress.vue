<template>
  <div class="market-container">
    <div class="market-search">
      <button class="button--black">전체</button>
      <button class="button--white">오늘</button>
      <button class="button--white">내일</button>
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
      <span class="active">검색결과 (9)</span>
      <span>진행중 (9)</span>
      <span>할 일 (9)</span>
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
        <div class="table-header table-alarm">알림</div>
      </div>
      <div class="table-column column-box" @click="handlerClickTableRow(1)">
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
        <div class="table-contents contents-column table-alarm">
          <div class="alarm-top">
            <div class="alarm-top-box">
              <span class="active">견적</span>
              <span>송금</span>
              <span>상환</span>
            </div>
            <span class="alarm-top-info">정보</span>
          </div>
          <div class="alarm-bottom">
            <span class="alarm-bottom-underline">일정보고</span>
            <span class="alarm-bottom-underline">담당자보고</span>
            를 수행해요
          </div>
        </div>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Pagination from '@priros/common/components/paging/Pagination.vue'

const router = useRouter()
const handlerClickTableRow = (id) => {
  router.push(`/market/commission/progress-detail/${id}`)
}
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
.table-alarm {
  width: 220px;
}
</style>