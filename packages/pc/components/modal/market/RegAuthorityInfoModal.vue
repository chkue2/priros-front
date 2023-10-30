<template>
<CommonHeaderModal modal-id="regAuthorityInfoModal" modal-title="등록기관 정보 보기" width="420px">
    <div class="reg-auth-info">
      <div class="info-column">
        <p class="info-title">상호</p>
        <div class="info-contents">일박이일 법무사사무소</div>
      </div>
      <div class="info-column">
        <p class="info-title">대표자</p>
        <div class="info-contents">나피디</div>
      </div>
      <div class="info-column">
        <p class="info-title">소재지</p>
        <div class="info-contents">서울특별시 관악구 관악로6길 37 (봉천동, 관악파레스) 주소가 길어지면 세줄까지 가능</div>
      </div>
      <div class="info-column">
        <p class="info-title">연락처</p>
        <div class="info-contents">02-123-4567</div>
      </div>
      <div class="info-column">
        <p class="info-title">담당자</p>
        <div class="info-contents">강호동_TL법무사</div>
      </div>
      <div class="info-column">
        <p class="info-title">휴대폰번호</p>
        <div class="info-contents">010-1234-5678</div>
      </div>
    </div>
  </CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'
</script>

<style scoped lang="scss">
@import '~/assets/scss/common/info-modal.scss';
.reg-auth-info {
  padding: 43px 26px;
}
</style>