<template>
  <header>
    <div class="header-wrapper">
      <NuxtLink to="/"><img class="header-logo" src="/img/icon/logo-pc.png" alt="홈으로"></NuxtLink>
      <div class="header-menu">
        <div class="header-menus">
          <NuxtLink to="/">마켓의뢰</NuxtLink>
          <NuxtLink to="/">마켓수임</NuxtLink>
          <NuxtLink to="/user/mypage/info">마이페이지</NuxtLink>
        </div>
        <div class="header-menus">
          <NuxtLink to="/user/login">로그인</NuxtLink>
          <NuxtLink to="/"><img src="/img/icon/alarm.svg" alt="알림" class="header-alarm"></NuxtLink>
        </div>
      </div>
    </div>
    <div class="header-info">
      <div class="header-info-wrapper">
        <div class="header-info-left">
          <img src="/img/icon/kakaobank.png" alt="프로필 이미지">
          <b>김마리</b>님, 반갑습니다.
        </div>
        <div class="header-info-right">
          <img src="/img/icon/download-black.svg" alt=""> 매뉴얼 다운로드
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped lang="scss">

header {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
  z-index: $zi-fixed;
  .header-wrapper {
    width: $wrapper-width;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-logo {
    width: auto;
    height: 26px;
  }
  .header-menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 180px;
  }
  .header-menus {
    display: flex;
    align-items: center;
    gap: 30px;
    & > a {
      color: #000000;
      font-weight: $ft-medium;
      text-decoration: none;
    }
  }
  .header-info {
    width: 100vw;
    height: 67px;
    border-top: 1px solid #eaeaea;
  }
  .header-info-wrapper {
    width: $wrapper-width;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  .header-info-left {
    display: flex;
    align-items: center;
    & > img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-right: 10px;
      margin-bottom: 4px;
    }
  }
  .header-info-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: $ft-bold;
    cursor: pointer;
    & > img {
      width: 16px;
      height: 16px;
      margin-right: 4px;
      margin-bottom: 3px;
    }
  }
}
</style>