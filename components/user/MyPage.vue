<template>
  <div class="profile">
    <div class="profile-content">
      <div class="title">
        <p>
          <strong class="fw(800)">{{ profile.name }} {{ profile.position }}</strong> 님의
        </p>
        <p>마이페이지</p>
      </div>
      <div class="sub-title">{{ profile.firmName }} 법률사무소</div>
    </div>
    <div class="profile-image">
      <ImageAvatar :src="profile.profileImage"/>
    </div>
  </div>
  <div class="sub-menu">
    <ul class="nav">
      <li class="nav-item" @click="logout()">

        <IconSvgIcon variant="log-out" size="16"/>
        로그아웃


      </li>
      <li class="nav-item">
        <IconSvgIcon variant="headset-help" size="16"/>
        헬프센터
      </li>
    </ul>
  </div>
  <div class="menu">
    <ul class="menu-nav v-nav">
      <li class="menu-nav-item" v-for="item in menuItems" :key="item.type">
        <NuxtLink :to="item.to || 'javascript:void(0)'" :class="{ active: item.active }" @click="handleMenuClick(item)">
          <div class="sub-title">{{ item.subtitle }}</div>
          <div class="fw(700)">{{ item.title }}</div>
        </NuxtLink>
        <div v-if="item.submenu" class="menu-nav-sub">
          <ul class="v-nav">
            <li class="menu-nav-sub-item" v-for="subItem in item.submenu" :key="subItem.title">
              <NuxtLink :to="subItem.to" @click="goRoute">{{ subItem.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>

import {useAuthStore} from "~/store/auth.js";
import {useGnbStore} from "~/store/gnbState.js";


const router = useRouter();
const gnbStore = useGnbStore();
const auth = useAuthStore();

const profile = computed(() => auth.user.profile);
// const profileImage = computed(() => auth.user.profile.profileImage);

const menuItems = ref([
  {
    type: "link",
    subtitle: "오늘이 잔금일인 사건에 보고할 수 있어요",
    title: "내 사건",
    to: "/case/my-case",
    active: false,
  },
  {
    type: "toggle",
    subtitle: "부제목",
    title: "주제목",
    active: false,
    submenu: [
      {
        title: "계층형 메뉴1",
        to: '/'
      }, {
        title: "계층형 메뉴2",
        to: '/'
      }],
  },
  {
    type: "toggle",
    subtitle: "부제목2",
    title: "주제목2",
    active: false,
    submenu: [
      {
        title: "계층형 메뉴1",
        to: '/'
      }, {
        title: "계층형 메뉴2",
        to: '/'
      }],
  },
  {
    type: "link",
    subtitle: "부제목",
    title: "주제목",
    to: "/",
    active: false,
  }
]);


function logout() {
  auth.logout();
  gnbStore.deactivate();
  router.push('/');
}

function resetMenuActiveStatus() {
  menuItems.value.forEach(item => item.active = false);
}

function goRoute() {
  resetMenuActiveStatus();
  gnbStore.deactivate();
}

function handleMenuClick(item) {
  if (item.type === 'toggle') {
    item.active = !item.active;
  } else {
    goRoute();
  }
}

</script>
<style lang="scss" scoped>
.profile {
  display: flex;
  padding: 36px 20px;

  .profile-content {
    .title {
      font: {
        size: 22px;
        weight: 500;
      }
      line-height: 1.36;

      p {
        margin: 0;
        padding: 0;
      }
    }

    .sub-title {
      margin-top: 12px;
      color: $font-secondary;
      font: {
        size: 14px;
      }
    }

    margin-right: auto;
  }

  .profile-image {
    width: 84px;
    height: 84px;
  }
}

.sub-menu {
  display: flex;
  padding: 0 16px;
  justify-content: flex-end;
  font: {
    size: 14px;
  }
  line-height: 16px;

  .nav-item {
    & + .nav-item {
      margin-left: 12px;
    }
  }
}


.menu {
  --#{$prefix}-menu-icon-bg: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1 1L7 7L1 13" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');

  padding: 12px $grid-margin;

  .menu-nav-item {
    background-color: $secondary-bg;
    border: 1px solid $secondary-border;

    > a {
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: center;
      height: 70px;
      overflow: hidden;
      padding-left: 18px;
      line-height: 1.4;
      color: inherit;
      text-decoration: none;
      transition: transform 0.3s;

      .sub-title {
        color: $font-secondary;
        font: {
          size: 12px;
        }
      }

      &:after {
        display: block;
        position: absolute;
        content: '';
        right: 28px;
        width: 8px; /* SVG 너비 */
        height: 14px; /* SVG 높이 */
        background-image: var(--#{$prefix}-menu-icon-bg);
      }

      &.active {
        &:after {
          transform: rotate(90deg);
        }

        & + .menu-nav-sub {
          display: block;
        }
      }
    }

    & + .menu-nav-item {
      margin-top: 12px;
    }

    transition: height 0.3s ease;
  }

  .menu-nav-sub {
    display: none;
    padding-left: 18px;
    margin-top: 20px;
    margin-bottom: 16px;

    .menu-nav-sub-item {
      font: {
        size: 14px
      }

      & + .menu-nav-sub-item {
        margin-top: 20px;
      }
    }
  }
}
</style>