<template>
  <footer id="footer" class="footer">
    <div class="info-wrap">
      <dl>
        <div class="info-item mb-24">
          <dt @click="termsStore.togglePersonalTerm">개인정보 보호정책</dt>
          <dt @click="termsStore.toggleServiceTerm">서비스이용약관</dt>
        </div>
        <div class="intro-text">
          (주)로앤텍은 통신판매중개자로 법률 서비스 및 업무 당사자가 아니므로
          법률 서비스 및 업무에 대해 책임을 지지 않습니다.
        </div>
        <div class="info-item">
          <dt>대표전화</dt>
          <dd>1670-2361</dd>
        </div>
        <div class="info-item">
          <dt>이메일</dt>
          <dd>priros@lawandtech.co.kr</dd>
        </div>
        <div class="info-item" @click="toggleFooterOpen">
          <dt>주식회사 로앤텍</dt>
          <img
            class="info-hide-icon"
            :class="{ open: isFooterOpen }"
            src="/img/icon/expand-down-black.svg"
          />
        </div>
        <div class="info-hide-container" :class="{ open: isFooterOpen }">
          <div class="info-item">
            <dt>대표자</dt>
            <dd>조성화</dd>
          </div>
          <div class="info-item">
            <dt>개인정보보호책임자</dt>
            <dd>조성화</dd>
          </div>
          <div class="info-item">
            <dt>사업자등록번호</dt>
            <dd>211-88-86547</dd>
          </div>
          <div class="info-item">
            <dt>주소</dt>
            <dd>경기도 과천시 별양상가1로 18, 4층 B-1호(별양동)</dd>
          </div>
        </div>
      </dl>
    </div>
    <div class="copyright">COPYRIGHT &copy; PRIROS ALL RIGHTS RESERVED.</div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { useTermsStore } from "~/store/termsState.js";

const termsStore = useTermsStore();

const isFooterOpen = ref(false);
const toggleFooterOpen = () => {
  isFooterOpen.value = !isFooterOpen.value;
};
</script>

<style lang="scss">
.footer {
  background-color: $footer-bg;
  padding: 20px 20px 40px 20px;
  font: {
    size: 12px;
    weight: 300;
  }

  .info-wrap {
    margin-top: 8px;
    display: flex;
    flex-wrap: wrap;

    .info-item {
      display: flex;
      margin-right: 1rem;
      margin-top: 4px;

      &.mb-24 {
        margin-bottom: 24px;
      }

      dt,
      dd {
        margin: 0;
      }

      dt {
        font-weight: 700;
        margin-right: 0.5rem;
      }
    }
  }

  .intro-text {
    color: #4f4f4f;
    font-size: 12px;
    margin: -15px 0 16px;
  }

  .copyright {
    margin-top: 32px;
    color: #4f4f4f;
    font: {
      size: 10px;
    }
  }
}

.info-hide-icon {
  transition: all 0.3s ease-in-out;
  &.open {
    transform: rotate(180deg);
  }
}

.info-hide-container {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  &.open {
    max-height: 999px;
  }
}
</style>
