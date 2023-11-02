<template>
  <header>
    <div class="header-wrapper">
      <NuxtLink to="/"><img class="header-logo" src="/img/icon/logo-pc.png" alt="홈으로"></NuxtLink>
      <div class="header-menu">
        <div class="header-menus">
          <NuxtLink :class="{active: isCommission}" to="/market/commission/match">마켓의뢰</NuxtLink>
          <NuxtLink :class="{active: isAccept}" to="/market/accept/match">마켓수임</NuxtLink>
          <NuxtLink to="/user/mypage/info">마이페이지</NuxtLink>
        </div>
        <div class="header-menus">
          <NuxtLink to="/user/login">로그인</NuxtLink>
          <NuxtLink>
            <img src="/img/icon/alarm.svg" alt="알림" class="header-alarm" @click="toggleAlarm">
            <div v-if="isAlarmShow" class="alarm-container">
              <div class="alarm-header">
                <div class="alarm-header-left">
                  <p class="alarm-header-title">Notice</p>
                  <span class="alarm-header-all-delete">전체삭제</span>
                </div>
                <img src="/img/icon/close-gray.svg" class="alarm-header-close" @click="toggleAlarm">
              </div>
              <div v-if="alarmList.length > 0" class="alarm-list">
                <div v-for="i in 5" :key="i" class="alarm-item">
                  <img src="/img/icon/kakaobank.png">
                  <div class="alarm-item-contents">
                    <div class="alarm-item-top">
                      <p class="alarm-title">신규사건 등록알림</p>
                      <span class="alarm-delete">삭제</span>
                    </div>
                    <p class="alarm-item-middle">
                      카카오뱅크 사건이 마켓에 오픈되었습니다.
                    </p>
                    <div class="alarm-item-bottom">
                      <p class="alarm-address">서울특별시 강남구 수서동</p>
                      <p class="alarm-date">2023-10-11 16:44:40</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="alarmList.length === 0" class="alarm-empty">
                <img src="/img/cha/cha-empty.png">
                <p class="alarm-empty-text">아직 아무런 알림이 없어요</p>
              </div>
            </div>
          </NuxtLink>
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
          <div v-if="isCommission" class="header-sub-menus">
            <NuxtLink to="/market/commission/match" :class="{active: ['/market/commission/match', '/market/commission/write'].includes(route.fullPath)}">매칭</NuxtLink>
            <NuxtLink to="/market/commission/progress" :class="{active: route.fullPath.includes('/market/commission/progress')}">진행</NuxtLink>
            <NuxtLink to="/">완료</NuxtLink>
          </div>
          <div v-if="isAccept" class="header-sub-menus">
            <NuxtLink to="/market/accept/match" :class="{active: route.fullPath.includes('/market/accept/match') || route.fullPath.includes('market/accept/write')}">매칭</NuxtLink>
            <NuxtLink to="/market/accept/progress" :class="{active: route.fullPath.includes('/market/accept/progress')}">진행</NuxtLink>
            <NuxtLink to="/market/accept/complete" :class="{active: route.fullPath.includes('/market/accept/complete')}">완료</NuxtLink>
            <NuxtLink to="/market/accept/setting" :class="{active: route.fullPath.includes('/market/accept/setting')}">설정</NuxtLink>
          </div>
          <div class="header-download">
            <img src="/img/icon/download-black.svg" alt=""> 매뉴얼 다운로드
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isCommission = computed(() => {
  return route.fullPath.includes('/commission/')
})
const isAccept = computed(() => {
  return route.fullPath.includes('/accept/')
})

const isAlarmShow = ref(false)
const toggleAlarm = () => {
  isAlarmShow.value = !isAlarmShow.value
}

const alarmList = ref([])
</script>

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
      cursor: pointer;
      &.active {
        font-weight: $ft-bold;
      }
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
    position: relative;
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
    gap: 180px;
    .header-sub-menus {
      display: flex;
      gap: 50px;
      & > a {
        text-decoration: none;
        color: #000000;
        font-size: 16px;
        font-weight: $ft-medium;
        position: relative;
        &.active {
          font-weight: $ft-bold;
        }
      }
    }
    .header-download {
      display: flex;
      align-items: center;
      img {
        width: 16px;
        height: 16px;
        margin-right: 4px;
        margin-bottom: 4px;
      }
    }
  }
}
.alarm-container {
  width: 387px;
  height: 335px;
  box-shadow: 0px 4px 8px 0px #00000026;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  transform: translate(-30%, 5%);
  z-index: $zi-popover;
  overflow-x: hidden;
  overflow-y: auto;
  .alarm-header {
    position: sticky;
    background-color: #ffffff;
    padding: 16px 18px 23px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    top: -1px;
    z-index: $zi-sticky;
    .alarm-header-left {
      display: flex;
      gap: 18px;
      align-items: center;
      .alarm-header-title {
        font-weight: $ft-bold;
      }
      .alarm-header-all-delete {
        font-size: 12px;
        font-weight: $ft-medium;
        color: #7a7a7a;
        cursor: pointer;
      }
    }
  }
  .alarm-list {
    padding: 20px 16px;
  }
  .alarm-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;
    padding-bottom: 25px;
    border-bottom: 1px solid #e8e8e8;
    & + .alarm-item {
      margin-top: 25px;
    }
    & > img {
      width: 43px;
      height: 43px;
      border-radius: 50%;
    }
    .alarm-item-contents {
      flex: 1;
    }
    .alarm-item-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .alarm-title {
      font-size: 15px;
      font-weight: $ft-bold;
    }
    .alarm-delete {
      font-size: 12px;
      font-weight: $ft-medium;
    }
    .alarm-item-middle {
      font-size: 14px;
      font-weight: $ft-medium;
      color: #969696;
      margin: 7px 0 20px;
    }
    .alarm-item-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .alarm-address {
      font-size: 14px;
      color: #393939;
    }
    .alarm-date {
      font-size: 12px;
      color: #0085ff;
    }
  }
  .alarm-empty {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > img {
      width: 92px;
      height: 104px;
    }
    .alarm-empty-text {
      font-size: 14px;
      font-weight: $ft-semibold;
      color: #d1d1d1;
      margin-top: 13px;
    }
  }
}
</style>