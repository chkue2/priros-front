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
      <select><option value="">10개씩 보기</option></select>
    </div>
    <div class="market-filter">
      <span class="active">전체 (9)</span>
      <span>의뢰대기 (9)</span>
      <span>매칭지정 (9)</span>
      <span>매칭대기 (9)</span>
      <span>매칭지연 (9)</span>
      <span>철회 (9)</span>
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
        <div class="table-header table-dagent">지정대리인</div>
        <div class="table-header table-sagent">설정대리인</div>
        <div class="table-header table-state">진행상태</div>
        <div class="table-header table-alarm">알림</div>
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
        <div class="table-contents contents-column table-dagent">
          <button class="button--big">지정하기</button>
        </div>
        <div class="table-contents table-sagent">다이렉트로 법무사무소</div>
        <div class="table-contents table-state">일정등록</div>
        <div class="table-contents table-alarm"></div>
      </div>
      <div class="table-column column-box">
        <div class="table-contents table-no">2</div>
        <div class="table-contents table-reg">2023-07-06</div>
        <div class="table-contents table-blance">2023-07-14</div>
        <div class="table-contents table-repayment">N</div>
        <div class="table-contents contents-column table-bank">
          <span class="bank-name">카카오뱅크</span>
          <span class="bank-tag">#보금자리론</span>
        </div>
        <div class="table-contents table-address">경기도 과천시 갈현동 135 과천푸르지오 벨라...</div>
        <div class="table-contents table-buyer">박명수</div>
        <div class="table-contents contents-column table-dagent">
          로앤텍(지정)
          <button class="button--small">취소</button>
        </div>
        <div class="table-contents table-sagent">다이렉트로 법무사무소</div>
        <div class="table-contents table-state">일정등록</div>
        <div class="table-contents table-alarm"></div>
      </div>
    </div>
    <div class="market-bottom">
      <div class="bottom-left">
        <select><option value="">의뢰</option></select>
        <button class="state-change-button">사건상태 변경</button>
      </div>
      <NuxtLink to="/market/commission/write" class="apply-button">사건 등록</NuxtLink>
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
  margin-bottom: 18px;
}
.table-no {
  width: 100px;
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
.table-dagent {
  width: 130px;
  & > button {
    border-radius: 48px;
    border: 1px solid #dadada;
    background-color: #ffffff;
    font-size: 15px;
    cursor: pointer;
    &.button--big {
      width: 95px;
      height: 39px;
    }
    &.button--small {
      width: 64px;
      height: 24px;
      margin-top: 3px;
    }
  }
}
.table-sagent {
  width: 160px;
}
.table-state {
  width: 80px;
}
.table-alarm {
  width: 100px;
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
.market-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bottom-left {
    display: flex;
    align-content: center;
    gap: 16px;
    & > select {
      appearance: none;
      background-image: url(/img/icon/expand-down-black.svg);
      background-repeat: no-repeat;
      background-position-x: calc(100% - 12px);
      background-position-y: center;
      border: 1px solid #dedede;
      border-radius: 5px;
      width: 144px;
      height: 44px;
      padding-left: 12px;
    }
  }
  .state-change-button {
    width: 142px;
    height: 44px;
    border: none;
    border-radius: 5px;
    background-color:#d8d9db;
    font-size: 16px;
    font-weight: $ft-bold;
    color: #ffffff;
    cursor: pointer;
  }
  .apply-button {
    width: 200px;
    height: 44px;
    border: none;
    border-radius: 5px;
    background-color:#000000;
    font-size: 16px;
    font-weight: $ft-bold;
    color: #ffffff;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>