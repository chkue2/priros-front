<template>
  <div class="update-wrapper dialog-wrapper">
    <div class="update-form">
      <div class="profile-image">
        <img src="/img/join/profile-empty.png">
        <div class="profile-image-buttons">
          <button>
            <img src="/img/icon/upload-gray.svg">
            프로필사진 업로드
          </button>
          <button>적용하기</button>
        </div>
        <p class="profile-image-warning">
          증명사진 또는 여권 사진으로<br>
          <b>네모</b> 안에 얼굴 전체가 나오도록 프로필 첨부 바랍니다.
        </p>
      </div>
      <div class="forms">
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">이름</label>
          </div>
          <div class="form-input">
            <input type="text">
          </div>
        </div>
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">직책</label>
          </div>
          <div class="form-input">
            <input type="text">
          </div>
        </div>
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">휴대전화번호</label>
          </div>
          <div class="form-input">
            <input type="tel">
          </div>
        </div>
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">전화번호</label>
          </div>
          <div class="form-input">
            <input type="tel">
          </div>
        </div>
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">이메일</label>
          </div>
          <div class="form-input">
            <input type="email">
          </div>
        </div>
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">비밀번호 변경</label>
          </div>
          <div class="form-input">
            <input type="password" autocomplete="off" placeholder="영문/숫자/특수문자 혼합 8자이상">
          </div>
        </div>
        <div class="form-group">
          <div class="label">
            <label for="" class="form-label">비밀번호 확인</label>
          </div>
          <div class="form-input">
            <input type="password" autocomplete="off" placeholder="비밀번호를 다시 입력하세요">
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <CommonBottomButton
        id="btn-send"
        text="변경저장"
        backgroundColor="#000000" height="60px" width="100%" color="#fff"
        :font-weight="700"
        :disabled="false"
        @handler-click-button="handleBtnSendClick"
      />
    </div>
  </div>
</template>
<script setup>
import CommonBottomButton from '@priros/common/components/button/CommonBottomButton.vue'
const handleBtnSendClick = () => {
  console.log('send')
}
</script>

<style scoped lang="scss">
@import '@priros/common/assets/scss/views/dialog';
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