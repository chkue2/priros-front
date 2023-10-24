<template>
  <Header />
  <div id="wrapper" class="logined">
    <p class="mypage-title">마이페이지</p>
    <div class="mypage-wrapper">
      <nav class="mypage-nav">
        <NuxtLink to="/user/mypage/info" :class="{active: nowPage === 'info'}">회원(사업자)정보</NuxtLink>
        <NuxtLink to="/user/mypage/user-info" :class="{active: nowPage === 'user-info'}">사용자 정보</NuxtLink>
        <NuxtLink to="/">사용자 관리</NuxtLink>
        <NuxtLink to="/">환경설정</NuxtLink>
        <NuxtLink to="/">결제 등록 및 관리</NuxtLink>
        <NuxtLink to="/">협약 전문가 관리</NuxtLink>
        <NuxtLink to="/">1:1 문의</NuxtLink>
      </nav>
      <slot />
    </div>
  </div>
</template>
<script setup>
import Header from '~/components/layout/Header.vue'

const props = defineProps({
  nowPage: {
    type: String,
    default: '',
  }
})
</script>
<style scoped lang="scss">
#wrapper {
  padding-top: 100px;
  width: $wrapper-width;
  margin: 0 auto;
  &.logined {
    padding-top: 167px;
  }
}
.mypage-title {
  font-size: 18px;
  font-weight: $ft-semibold;
  padding: 28px 0 87px;
  position: sticky;
  top: 167px;
  background-color: #ffffff;
  z-index: $zi-sticky;
}
.mypage-wrapper {
  display: flex;
}
.mypage-nav {
  display: inline-flex;
  flex-direction: column;
  gap: 28px;
  position: sticky;
  top: 300px;
  height: 200px;
  z-index: $zi-sticky;
  padding-right: 192px;
  & > a {
    font-weight: $ft-semibold;
    color: #bebebe;
    text-decoration: none;
    display: flex;
    align-items: center;
    &.active {
      color: #000000;
      &::after {
        content: '';
        display: block;
        width: 6px;
        height: 12px;
        background: url(/img/icon/expand-right-black.svg) no-repeat center/cover;
        margin-left: 10px;
        margin-bottom: 4px;
      }
    }
  }
}
</style>