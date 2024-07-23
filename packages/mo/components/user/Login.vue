<template>
  <div class="join-container">
    <p class="join-title">안녕하세요<br />프리로스입니다.</p>
    <p class="join-subtitle">로그인하셔야 사용가능한 서비스입니다.</p>
    <div class="login-form">
      <div class="join-form-input-container mb-11">
        <input
          v-model="credentials.userId"
          type="text"
          name="user_name"
          class="join-form-input"
          placeholder="아이디를 입력해주세요"
        />
      </div>
      <div class="join-form-input-container">
        <input
          v-model="credentials.password"
          type="password"
          name="user_password"
          id="passwordInput"
          class="join-form-input"
          placeholder="비밀번호를 입력해주세요"
          @keyup.enter="handlerClickLoginButton"
        />
        <i
          class="login-toggle-password"
          @click="handlerClickPasswordToggle"
        ></i>
      </div>
      <div class="login-form-middle-container">
        <div class="login-form-middle-left">
          <div
            class="login-form-middle-toggle"
            :class="{ active: isSwitchToggle }"
            @click="handlerClickSwitchToggle"
          >
            <i></i>
          </div>
          <p class="login-form-middle-toggle-text">아이디 저장</p>
        </div>
        <NuxtLink
          to="/user/find/password"
          class="login-form-middle-find-password"
          @click="gnbStore.deactivate()"
          >비밀번호를 잊으셨나요?</NuxtLink
        >
      </div>
      <button class="login-form-apply-button" @click="handlerClickLoginButton">
        로그인
      </button>
      <div class="login-form-button-container">
        <NuxtLink to="/user/join/expert" @click="gnbStore.deactivate()"
          >회원가입</NuxtLink
        >
        <NuxtLink to="/user/find/id" @click="gnbStore.deactivate()"
          >아이디찾기</NuxtLink
        >
        <NuxtLink to="/faq/list">헬프센터</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@priros/common/store/auth.js";
import { useGnbStore } from "~/store/gnbState.js";
import { useAlertStore } from "~/store/alert.js";

const auth = useAuthStore();
const gnbStore = useGnbStore();
const alertStore = useAlertStore();

// local test data
// const credentials = ref({
//   'userId': 'remagine4',
//   'password': 'dhxortkd2319!'
// });

const credentials = ref({
  userId: "",
  password: "",
});

let isSwitchToggle = ref(false);

onMounted(() => {
  const userId = localStorage.getItem("userId");
  if (userId) {
    credentials.value.userId = userId;
  }

  isSwitchToggle.value =
    localStorage.getItem("saveId") === "true" ? true : false;
});

// 비밀번호 확인 토글
let isPasswordToggle = ref(false);

watch(
  () => isPasswordToggle.value,
  () => {
    const target = document.querySelector("#passwordInput");
    if (isPasswordToggle.value) {
      target.setAttribute("type", "text");
    } else {
      target.setAttribute("type", "password");
    }
  }
);

const handlerClickPasswordToggle = () => {
  isPasswordToggle.value = !isPasswordToggle.value;
};

const handlerClickSwitchToggle = () => {
  isSwitchToggle.value = !isSwitchToggle.value;
};

const isValidation = computed(() => {
  return credentials.value.userId !== "" && credentials.value.password !== "";
});

const router = useRouter();
const handlerClickLoginButton = async () => {
  if (!isValidation.value) {
    if (credentials.value.userId === "") {
      alertStore.open("아이디를 입력해주세요.");
    } else if (credentials.value.password === "") {
      alertStore.open("비밀번호를 입력해주세요.");
    }
    return false;
  }

  const isSuccess = await auth.login(credentials.value);
  if (isSuccess) {
    localStorage.setItem("saveId", isSwitchToggle.value);
    if (isSwitchToggle.value) {
      localStorage.setItem("userId", credentials.value.userId);
    } else {
      localStorage.removeItem("userId");
    }
    await auth.userProfile();
    gnbStore.deactivate();
    router.push("/case/my-case/");
  } else {
    alertStore.open("아이디 또는 비밀번호가 다릅니다.");
  }
};
</script>

<style lang="scss" scoped>
@import "@priros/common/assets/scss/join/common.scss";

.login-form {
  margin-top: 65px;
  padding: 0 14px;
}

.login-toggle-password {
  width: 16px;
  height: 11px;
  background: url(/img/icon/eye-gray.svg) no-repeat center/cover;
  cursor: pointer;
  z-index: 11;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
}

.login-form-middle-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .login-form-middle-left {
    display: flex;
    align-items: center;
  }

  .login-form-middle-toggle {
    width: 40px;
    height: 20px;
    border-radius: 37px;
    border: 0.5px solid #e5e5e5;
    background-color: #f2f2f2;
    position: relative;
    transition: background-color 0.3s ease-in-out;

    &.active {
      background-color: #235bed;

      i {
        transform: translateX(20px);
      }
    }

    i {
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #ffffff;
      box-shadow: 1px 1px 2px -1px #3333334d;
      position: absolute;
      top: 1px;
      left: 0;
      transform: translateX(2px);
      transition: transform 0.3s ease-in-out;
    }
  }

  .login-form-middle-toggle-text {
    font-size: 12px;
    color: #7a7a7a;
    margin-left: 8px;
  }

  .login-form-middle-find-password {
    font-size: 12px;
    color: #007aff;
    text-decoration: none;
  }
}

.login-form-apply-button {
  width: 100%;
  height: 48px;
  background-color: #000000;
  border-radius: 6px;
  color: #ffffff;
  margin: 52px 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: $ft-bold;
  border: none;
}

.login-form-button-container {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-size: 14px;
    color: #5b5b5b;
    text-decoration: none;

    & + a {
      &::before {
        content: "|";
        margin: 0 5px;
        color: #d0d0d0;
        font-size: 12px;
      }
    }
  }
}
</style>
