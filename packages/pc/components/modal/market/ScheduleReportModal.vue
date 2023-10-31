<template>
  <CommonHeaderModal modal-id="chargeReportModal" modal-title="담당자 보고" width="420px">
    <div class="report-container">
      <span class="report-tag">일정등록 전 확인</span>
      <p class="report-intro-text">
        등록된 담당자와 잔금현장에 방문할 담당자가 동일한지 다시 한번 확인하세요.
      </p>
      <div class="report-selected-table mb-34">
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
      <p class="report-form-title">잔금시간</p>
      <div class="report-form-flex">
        <select><option value="">시간</option></select>
        <select><option value="">분</option></select>
      </div>
      <p class="report-form-title">잔금일</p>
      <div class="report-form-flex">
        <input type="date">
      </div>
      <div class="report-button">
        <button>일정보고</button>
      </div>
    </div>
  </CommonHeaderModal>  
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/report.scss';
</style>