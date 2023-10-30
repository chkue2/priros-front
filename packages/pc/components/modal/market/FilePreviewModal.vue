<template>
  <CommonHeaderModal modal-id="filePreviewModal" modal-title="파일보기" width="866px">
    <div class="file-preview-container">
      <img class="preview-image" src="/img/main/main-swiper-1.png">
      <button class="preview-download">
        <img src="/img/icon/download-gray.svg">
        원본파일 다운로드
      </button>
      <div class="preview-help-text">
        이미지가 보이지 않거나, 수정이 필요한 경우 : 매수인과 소통하여 정보를 확인하고 계약정보를 확보하세요.
        <br>다른 거래의 계약서가 잘 못 첨부된 경우 : 등록기관 또는 설정대리인 담당자와 상의하세요.
      </div>
    </div>
  </CommonHeaderModal>
</template>
<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'
</script>
<style scoped lang="scss">
.file-preview-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.preview-image {
  width: 656px;
  height: 422px;
  margin: 48px auto 24px;
}
.preview-download {
  width: 300px;
  height: 48px;
  border-radius: 6px;
  background-color: #ffffff;
  border: 1px solid #bcbcbc;
  color: #808080;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.preview-help-text {
  font-size: 12px;
  line-height: 20px;
  color: #525252;
  text-align: center;
  margin: 22px 0 30px;
}
</style>