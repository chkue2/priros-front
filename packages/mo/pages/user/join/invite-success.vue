<template>
  <div class="success-top-container">
    <img src="/img/cha/cha-08.png" class="success-image" />
    <p class="success-title">사용자등록 완료</p>
    <p class="success-content">이 서비스는 PC전용 서비스입니다.</p>
  </div>
  <div class="success-bottom-container">
    <p class="success-bottom-title">사용 전 체크사항</p>
    <div class="success-bottom-content">
      <p>
        • 마이페이지 > 간편결제에서 대표자 명의의 간편 결제수단을 등록한 후 사건
        수임이 허용됩니다.
      </p>
      <p>
        • 마이페이지 > 환경설정에서 자주 사용하는 정보(우리동네, 계좌정보,
        견적안내문) 설정하세요.
      </p>
      <p>
        • 대표사용자는 마이페이지 > 사용자관리에서 사무원을 추가할 수 있습니다.
      </p>
    </div>
  </div>
  <div class="join-bottom-buttons sticky">
    <CommonBottomButton
      id="successApplyButton"
      text="확인"
      width="100%"
      height="60px"
      @handler-click-button="handlerClickApplyButton"
    />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import CommonBottomButton from "@priros/common/components/button/CommonBottomButton.vue";

const router = useRouter();

const handlerClickApplyButton = () => {
  router.push("/");
};
</script>

<style lang="scss" scoped>
.success-top-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.success-image {
  margin-top: 80px;
  width: 130px;
  height: auto;
}
.success-title {
  font-size: 20px;
  font-weight: $ft-bold;
  margin: 20px 0 4px;
}
.success-content {
  font-size: 14px;
}
.success-bottom-container {
  padding: 0 16px 80px;
}
.success-bottom-title {
  font-weight: $ft-semibold;
  color: #3c322f;
  margin: 40px 0 10px;
}
.success-bottom-content {
  padding: 15px 10px;
  background-color: #f2f2f2;
  border-radius: 19px;
  & > p {
    font-size: 14px;
    color: #808080;
    line-height: 1.35;
    word-break: keep-all;
    & + p {
      margin-top: 18px;
    }
  }
}
</style>
