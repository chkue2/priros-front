<template>
  <NuxtLayout name="mypage" now-page="user-list">
    <div class="user-list">
      <div class="user-list-filter">
        <select class="filter-state">
          <option value="">상태</option>
        </select>
        <select class="filter-cond">
          <option value="">검색조건</option>
        </select>
        <div class="filter-search">
          <input type="text" placeholder="검색어를 입력해주세요">
          <img src="/img/icon/search-black.svg">
        </div>
      </div>
      <p class="user-list-warning">사용 상태를 사무원 현황과 일치하도록 관리 부탁 드립니다. 추가된 사용자는 계정 생성 이후에 반영됩니다.</p>
      <div class="user-list-table">
        <div class="user-list-table-column">
          <div class="table-header table-no">No.</div>
          <div class="table-header table-profile">프로필</div>
          <div class="table-header table-id">ID</div>
          <div class="table-header table-name">이름</div>
          <div class="table-header table-title">직함</div>
          <div class="table-header table-phone">전화번호</div>
          <div class="table-header table-email">이메일</div>
          <div class="table-header table-state">상태</div>
          <div class="table-header table-alarm">알림수신</div>
          <div class="table-header table-change">변경</div>
        </div>
        <div v-for="i in 5" :key="i" class="user-list-table-column column--content">
          <div class="table-content table-no">5</div>
          <div class="table-content table-profile"><img src="/img/icon/kakaobank.png"></div>
          <div class="table-content table-id">kowerklernew12</div>
          <div class="table-content table-name">홍*동</div>
          <div class="table-content table-title">사무원</div>
          <div class="table-content table-phone">01012341234</div>
          <div class="table-content table-email">asdfqwd@gmail.com</div>
          <div class="table-content table-state">휴면</div>
          <div class="table-content table-alarm">Y</div>
          <div class="table-content table-change"><button>변경</button></div>
        </div>
      </div>
      <div class="user-list-buttons">
        <button class="user-add-button">사용자 추가</button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
})
</script>

<style scoped lang="scss">
.user-list-filter {
  display: flex;
  gap: 10px;
  & > select {
    height: 43px;
    border: 1px solid #dedede;
    border-radius: 5px;
    appearance: none;
    background-image: url(/img/icon/expand-down-black.svg);
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: calc(100% - 12px);
    padding-left: 18px;
    font-size: 14px;
    &.filter-state {
      width: 144px;
    }
    &.filter-cond {
      width: 156px;
    }
  }
  .filter-search {
    width: 315px;
    position: relative;
    border: 1px solid #dedede;
    border-radius: 5px;
    & > input {
      height: 43px;
      border: none;
      width: 100%;
      padding: 0 40px 0 12px;
      font-size: 14px;
    }
    & > img {
      width: 18px;
      height: 18px;
      position: absolute;
      top: 50%;
      right: 18px;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
}
.user-list-warning {
  margin: 35px 0 10px;
  text-align: right;
  font-size: 12px;
  color: #808080;
}
.user-list-table {
  width: 977px;
  .user-list-table-column {
    display: flex;
    &.column--content {
      box-shadow: 2px 3px 12px 0px #00000026;
    }
    & + .user-list-table-column {
      margin-top: 9px;
    }
    .table-header {
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #000000;
      color: #ffffff;
      font-size: 14px;
      font-weight: $ft-bold;
    }
    .table-content {
      height: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
    }
    .table-no {
      width: 40px;
    }
    .table-profile {
      width: 65px;
      & > img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
      }
    }
    .table-id {
      width: 135px;
    }
    .table-name {
      width: 95px;
    }
    .table-title {
      width: 95px;
    }
    .table-phone {
      width: 110px;
    }
    .table-email {
      width: 200px;
    }
    .table-state {
      width: 55px;
    }
    .table-alarm {
      width: 85px;
    }
    .table-change {
      width: 100px;
      & > button {
        width: 66px;
        height: 33px;
        border-radius: 5px;
        border: 1px solid #000000;
        font-size: 14px;
        font-weight: $ft-medium;
        background-color: #ffffff;
        cursor: pointer;
      }
    }
  }
}
.user-list-buttons {
  margin-top: 47px;
  display: flex;
  justify-content: flex-end;
  .user-add-button {
    width: 213px;
    height: 48px;
    border-radius: 6px;
    background-color: #000000;
    font-size: 18px;
    font-weight: $ft-bold;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
}
</style>