<template>
  <CommonHeaderModal modal-id="chargeReportModal" modal-title="담당자 보고" width="420px">
    <div class="report-container">
      <span class="report-tag">담당자보고 전 확인</span>
      <p class="report-intro-text">
        담당자의 프로필이 고객에게 알림톡으로 전송됩니다.<br>연락처 및 담당자의 정보를 확인해주세요.
      </p>
      <p class="report-form-title">담당자 정보</p>
      <DropDown placeholder="담당자 선택하기" selected-text=""/>
      <div class="report-selected-table">
        <div class="report-selected-column">
          <div class="report-selected-title">상호</div>
          <div class="report-selected-contents">일박이일법무소</div>
        </div>
        <div class="report-selected-column">
          <div class="report-selected-title">이름</div>
          <div class="report-selected-contents">강호동_TL법무사 (ID:leejunho08)</div>
        </div>
        <div class="report-selected-column">
          <div class="report-selected-title">연락처</div>
          <div class="report-selected-contents">010-7369-9637</div>
        </div>
      </div>
      <p class="report-help-text">
        안내전화 누락 민원이 자주발생하고 있습니다.<br>반드시 준비사항을 안내하고, 업무보고를 수행하세요.
      </p>
      <div class="report-button">
        <button>담당자 보고</button>
      </div>
    </div>
  </CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'
import DropDown from '@priros/common/components/form/DropDown.vue'
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/report.scss';
</style>