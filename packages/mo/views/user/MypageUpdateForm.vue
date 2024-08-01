<template>
  <div class="update-wrapper dialog-wrapper">
    <div class="update-form">
      <div class="profile-image">
        <img id="profileImagePreview" :src="imageSrc" />
        <div class="profile-image-buttons">
          <input
            ref="userProfileImage"
            type="file"
            @change="handlerChangeProfileImage"
          />
          <button @click="handlerClickProfileImageUpload">
            <img src="/img/icon/upload-gray.svg" />
            프로필사진 업로드
          </button>
        </div>
        <p class="profile-image-warning">
          증명사진 또는 여권 사진으로<br />
          <b>네모</b> 안에 얼굴 전체가 나오도록 프로필 첨부 바랍니다.
        </p>
      </div>
      <div class="forms">
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">이름</label>
          </div>
          <div class="form-input">
            <input v-model="form['userName']" type="text" readonly />
          </div>
        </div>
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">직책</label>
          </div>
          <div class="form-input">
            <input v-model="form['position']" type="text" readonly />
          </div>
        </div>
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">휴대전화번호</label>
          </div>
          <div class="form-input">
            <input v-model="form['mobile']" type="tel" readonly />
          </div>
        </div>
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">전화번호</label>
          </div>
          <div class="form-input">
            <input v-model="form['phone']" type="tel" />
          </div>
        </div>
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">이메일</label>
          </div>
          <div class="form-input">
            <input v-model="form['email']" type="email" />
          </div>
        </div>
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">비밀번호 변경</label>
          </div>
          <div class="form-input">
            <input
              v-model="form['password']"
              type="password"
              autocomplete="off"
              placeholder="영문/숫자/특수문자 혼합 8자이상"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">비밀번호 확인</label>
          </div>
          <div class="form-input">
            <input
              v-model="passwordConfirm"
              type="password"
              autocomplete="off"
              placeholder="비밀번호를 다시 입력하세요"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <CommonBottomButton
        id="btn-send"
        text="변경저장"
        backgroundColor="#000000"
        height="60px"
        width="100%"
        color="#fff"
        :font-weight="700"
        :disabled="false"
        @handler-click-button="handleBtnSendClick"
      />
    </div>
  </div>
  <LoadingModal v-if="isLoading" text="변경중입니다" />
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { myPageStore } from "~/store/user/myPage.js";
import { useAuthStore } from "@priros/common/store/auth.js";
import { base64 } from "@priros/common/assets/js/filePreview.js";
import { isEmpty, isValidPassword } from "@priros/common/assets/js/utils.js";
import { useAlertStore } from "~/store/alert.js";

import CommonBottomButton from "@priros/common/components/button/CommonBottomButton.vue";
import LoadingModal from "@priros/common/components/modal/LoadingModal.vue";

const form = ref({
  userProfileImage: "",
  userName: "",
  position: "",
  mobile: "",
  phone: "",
  email: "",
  password: "",
});
const passwordConfirm = ref("");
const userProfileImage = ref(null);
const userProfileImageObj = ref(null);
const isLoading = ref(false);

const myPage = myPageStore();
const useAuth = useAuthStore();
const alertStore = useAlertStore();

onMounted(() => {
  myPage
    .fetchUserInfo()
    .then(({ data }) => {
      form.value = { ...data, password: "" };
    })
    .catch((e) => {
      console.log(e);
    });
});

const imageSrc = computed(() =>
  isEmpty(form.value.userProfileImage)
    ? "/img/join/profile-empty.png"
    : `data:image/png;base64,${form.value.userProfileImage}`
);

const handlerClickProfileImageUpload = () => {
  userProfileImage.value.click();
};
const handlerChangeProfileImage = (e) => {
  if (e.target.files.length === 0) return false;
  for (let file of e.target.files) {
    if (file.size > 10 * 1024 * 1024) {
      alertStore.open("10MB 이상의 파일은 첨부할 수 없습니다.");
      return false;
    }
  }
  userProfileImageObj.value = e.target.files[0];
  base64(userProfileImageObj.value, "profileImagePreview");
};

const formValidation = computed(() => {
  const validateEnum = ["phone", "email"];
  for (const v of validateEnum) {
    if (isEmpty(form.value[v])) return false;
  }

  if (!isEmpty(form.value.password)) {
    return (
      isValidPassword(form.value.password) &&
      !isEmpty(passwordConfirm.value) &&
      form.value.password === passwordConfirm.value
    );
  }

  return true;
});

const handleBtnSendClick = () => {
  if (!formValidation.value) {
    if (isEmpty(form.value.phone)) {
      alertStore.open("전화번호를 입력해주세요");
    } else if (isEmpty(form.value.email)) {
      alertStore.open("이메일을 입력해주세요");
    } else if (!isEmpty(form.value.password)) {
      if (!isValidPassword(form.value.password)) {
        alertStore.open(
          "비밀번호는 영문, 숫자, 특수문자를 혼합해 8자리 이상 입력해야합니다"
        );
      } else if (isEmpty(passwordConfirm.value)) {
        alertStore.open("비밀번호 확인을 입력해주세요.");
      } else if (form.value.password !== passwordConfirm.value) {
        alertStore.open("비밀번호와 비밀번호 확인이 다릅니다.");
      }
    }

    return false;
  }

  isLoading.value = true;
  const formData = new FormData();
  formData.append("phone", form.value.phone);
  formData.append("email", form.value.email);

  if (!isEmpty(form.value.password)) {
    formData.append("newPassword", form.value.password);
    formData.append("newPasswordConfirm", passwordConfirm.value);
  }

  if (userProfileImageObj.value !== null) {
    formData.append("profileImage", userProfileImageObj.value);
  }

  myPage
    .requestUserInfo(formData)
    .then(() => {
      useAuth.userProfile();
      alertStore.open("회원정보가 변경되었습니다.");
    })
    .catch((e) => {
      console.log(e);
      alertStore.open(
        "회원정보 변경에 실패하였습니다.\n잠시후 다시 시도해주세요."
      );
    })
    .finally(() => {
      isLoading.value = false;
    });
};
</script>

<style scoped lang="scss">
@import "@priros/common/assets/scss/views/dialog";
.update-form {
  padding: 40px 16px 0;
}
.profile-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 140px;
    height: 165px;
  }
  input[type="file"] {
    display: none;
  }
  .profile-image-buttons {
    margin: 28px 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    & > button {
      flex: 1;
      height: 48px;
      border-radius: 6px;
      border: 1px solid #bcbcbc;
      background-color: #ffffff;
      font-size: 15px;
      color: #808080;
      cursor: pointer;
    }
  }
  .profile-image-warning {
    font-size: 12px;
    text-align: center;
    font-weight: $ft-medium;
    color: #959595;
    line-height: 17px;
    margin-bottom: 38px;
    b {
      font-weight: $ft-bold;
      color: #7ef422;
    }
  }
}
</style>
