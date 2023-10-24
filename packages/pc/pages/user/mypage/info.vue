<template>
  <NuxtLayout name="mypage" now-page="info">
    <div>
      <div class="mypage-info-form">
        <div class="mypage-info-form-header header-title">상호</div>
        <div class="mypage-info-form-contents">
          <div class="mypage-info-input">
            <input type="text" readonly>
            <button class="search-address-button">주소검색 <img src="/img/icon/search-black.svg"></button>
          </div>
          <p class="header-title no-header">대표자</p>
          <div class="mypage-info-input w-291">
            <input type="text" readonly>
          </div>
        </div>
        <div class="mypage-info-form-header header-title">주소</div>
        <div class="mypage-info-form-contents">
          <div class="mypage-info-input">
            <input type="text" readonly>
          </div>
          <p class="header-title no-header">상세주소 *</p>
          <div class="mypage-info-input w-291">
            <input type="text" >
          </div>
        </div>
        <div class="mypage-info-form-header header-title">사업자등록번호</div>
        <div class="mypage-info-form-contents">
          <div class="mypage-info-input">
            <input type="text" readonly>
          </div>
        </div>
        <div class="mypage-info-form-header header-title">사업장 대표 전화번호*</div>
        <div class="mypage-info-form-contents">
          <div class="mypage-info-input">
            <input type="text" >
          </div>
        </div>
        <div class="mypage-info-form-header header-title">사업장 대표 이메일</div>
        <div class="mypage-info-form-contents">
          <div class="mypage-info-input">
            <input type="text" >
          </div>
        </div>
        <div class="mypage-info-form-header header-title">공제증서 또는 보험증권*</div>
        <div class="mypage-info-form-contents">
          <div class="mypage-info-input">
            <input type="date" >
          </div>
          <div class="mypage-info-input input--file">
            공제증서 또는 보험증권을 첨부하세요
            <input type="file">
          </div>
          <button class="mypage-info-preview-button">파일보기</button>
        </div>
      </div>
      <div class="mypage-info-buttons">
        <button class="mypage-info-button">회원정보 변경</button>
        <button class="mypage-info-button button--gray">회원탈퇴</button>
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
.mypage-info-form {
  width: 912px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  border-top: 1px solid #ebebeb;
  .mypage-info-form-header {
    grid-column: 1 span;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    height: 68px;
    border-bottom: 1px solid #ebebeb;
  }
  .header-title {
    font-size: 14px;
    font-weight: $ft-semibold;
    &.no-header {
      margin-left: 22px;
      width: 70px;
      text-align: center;
    }
  }
  .mypage-info-form-contents {
    grid-column: 5 span;
    display: flex;
    align-items: center;
    height: 68px;
    border-bottom: 1px solid #ebebeb; 
    padding-left: 16px;
  }
  .mypage-info-input {
    position: relative;
    & > input[type=text] {
      width: 343px;
      height: 47px;
      border: 1px solid #bebebe;
      &:read-only {
        background-color: #f0f0f0;
      }
    }
    & > input[type=date] {
      width: 162px;
      height: 47px;
      border: 1px solid #bebebe;
      padding-left: 8px;
    }
    & > input[type=file] {
      display: none;
    }
    &.w-291 {
      & > input {
        width: 291px;
      }
    }
    &.input--file {
      width: 367px;
      height: 47px;
      border: 1px solid #bebebe;
      margin-left: 9px;
      font-size: 14px;
      font-weight: $ft-medium;
      color: #6f6f6f;
      display: flex;
      align-items: center;
      padding-left: 8px;
      cursor: pointer;
    }
    .search-address-button {
      border: 1px solid #000000;
      border-radius: 5px;
      width: 98px;
      height: 33px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffffff;
      cursor: pointer;
      gap: 9px;
      position: absolute;
      top: 50%;
      right: 7px;
      transform: translateY(-50%);
    }
  }
  .mypage-info-preview-button {
    width: 108px;
    height: 46px;
    border-radius: 5px;
    background-color: #404040;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: $ft-medium;
    color: #ffffff;
    margin-left: 9px;
  }
}
.mypage-info-buttons {
  margin-top: 52px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  .mypage-info-button {
    width: 160px;
    height: 44px;
    border-radius: 4px;
    background-color: #235bed;
    border: none;
    color: #ffffff;
    font-weight: $ft-bold;
    cursor: pointer;
    &.button--gray {
      background-color: #bebebe;
    }
  }
}
</style>