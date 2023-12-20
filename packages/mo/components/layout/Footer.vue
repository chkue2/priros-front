<template>
  <footer id="footer" class="footer">
    <div class="info-wrap">
      <dl>
        <div class="info-item mb-24">
          <dt @click="termsStore.togglePersonalTerm">개인정보 보호정책</dt>
          <dt @click="termsStore.toggleServiceTerm">서비스이용약관</dt>
        </div>
        <div class="info-item">
          <dt>(주)로앤텍</dt>
        </div>
        <div class="info-item">
          <dt>대표자</dt>
          <dd>조성화</dd>
        </div>
        <div class="info-item">
          <dt>개인정보보호책임자</dt>
          <dd>오택상</dd>
        </div>
        <div class="info-item">
          <dt>사업자등록번호</dt>
          <dd>211-88-86547</dd>
        </div>
        <div class="info-item">
          <dt>주소</dt>
          <dd>경기도 과천시 별양상가1로 18, 4층 B-1호(별양동)</dd>
        </div>
        <div class="info-item">
          <dt>이메일</dt>
          <dd>priros@lawandtech@co.kr</dd>
        </div>
        <div class="info-item">
          <dt>대표전화</dt>
          <dd>070-4466-7062</dd>
        </div>
      </dl>
    </div>
    <div class="copyright">
      COPYRIGHT &copy; PRIROS ALL RIGHTS RESERVED.
    </div>
  </footer>
</template>

<script setup>
import {useTermsStore} from "~/store/termsState.js"

const termsStore = useTermsStore()
</script>

<style lang="scss">
.footer {
  background-color: $footer-bg;
  padding: 20px 0 40px 20px;
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

      dt, dd {
        margin: 0;
      }

      dt {
        font-weight: 700;
        margin-right: 0.5rem;
      }
    }
  }

  .copyright {
    margin-top: 32px;
    color: #4F4F4F;
    font: {
      size: 10px;
    };
  }
}

</style>
