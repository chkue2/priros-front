<template>
  <CommonHeaderModal modal-id="regInformationModal" modal-title="등기필정보 보완" width="420px">
    <div class="report-container">
      <p class="report-form-title">첨부파일</p>
      <div class="form-input">
        <input type="file">
        <p class="input-file">
          파일을 첨부해주세요 (최대 5개) <img src="/img/icon/file-gray.png">
        </p>
      </div>
      <p class="report-help-text">등기필정보 보완요청을 받은 경우에는<br>모든 매수인의 등기필정보를 등록해야 합니다.</p>
      <div class="report-button">
        <button>보완보고</button>
      </div>
    </div>
  </CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/report.scss';
.report-help-text {
  margin-top: 54px;
}
</style>