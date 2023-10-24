<template>
  <div>
    <div class="user-info-update-form">
      <div class="update-profile-container">
        <img src="/img/join/profile-empty.png" alt="프로필 사진 미리보기" class="update-profile-preview">
        <button class="update-profile-upload-button">
          <img src="/img/icon/upload-gray.svg" aria-hidden />
          <span>프로필사진 업로드</span>
        </button>
        <p class="update-profile-intro">
          증명사진 또는 여권 사진으로<br><b>네모</b> 안에 얼굴 전체가 나오도록 프로필<br>첨부 바랍니다.
        </p>
      </div>
      <div class="update-form">
        <div class="update-form-title">이름</div>
        <div class="update-form-input">
          <input type="text">
        </div>
        <div class="update-form-title">직책</div>
        <div class="update-form-input">
          <input type="text">
        </div>
        <div class="update-form-title">휴대전화번호</div>
        <div class="update-form-input">
          <input type="tel" readonly>
        </div>
        <div class="update-form-title">전화번호</div>
        <div class="update-form-input">
          <input type="tel">
        </div>
        <div class="update-form-title">이메일</div>
        <div class="update-form-input">
          <input type="text">
        </div>
        <div class="update-form-title">비밀번호 변경</div>
        <div class="update-form-input">
          <input type="password" autocomplete="off" placeholder="영문/숫자/특수문자 혼합 8자이상 입력하세요">
        </div>
        <div class="update-form-title">비밀번호 확인</div>
        <div class="update-form-input">
          <input type="password" autocomplete="off" placeholder="비밀번호를 다시 입력하세요">
        </div>
      </div>
    </div>
    <div class="user-info-update-buttons">
      <button class="update-button">사용자정보 변경</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-info-update-form {
  display: flex;
}
.update-profile-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 0 40px;
  margin-right: 30px;
  .update-profile-preview {
    width: 193px;
    height: 228px;
  }
  .update-profile-upload-button {
    width: 303px;
    height: 48px;
    margin: 44px 0 23px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px solid #dadada;
    background-color: #ffffff;
    color: $gray;
    font-size: 15px;
  }
  .update-profile-intro {
    line-height: 22px;
    text-align: center;
    color: #959595;
    font-weight: $ft-medium;
    b {
      color: #7ef422;
      font-weight: $ft-bold;
    }
  }
}
.update-form {
  width: 600px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  border-top: 1px solid #ebebeb;
  .update-form-title {
    grid-column: 3 span;
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    font-size: 14px;
    font-weight: $ft-semibold;
  }
  .update-form-input {
    grid-column: 7 span;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 16px;
    border-bottom: 1px solid #ebebeb;
    & > input {
      width: 310px;
      height: 47px;
      padding-left: 8px;
      border: 1px solid #bebebe;
      background-color: #ffffff;
      font-size: 14px;
    }
  }
}
.user-info-update-buttons {
  margin-top: 84px;
  display: flex;
  justify-content: flex-end;
  .update-button {
    width: 213px;
    height: 48px;
    border-radius: 6px;
    border: none;
    background-color: #000000;
    font-size: 18px;
    font-weight: $ft-bold;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>