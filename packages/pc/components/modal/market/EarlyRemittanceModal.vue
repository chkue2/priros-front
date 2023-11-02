<template>
  <CommonHeaderModal modal-id="kakoRemittanceRequestModal" modal-title="송금요청" width="420px" height="360px">
    <div class="modal-image">
      <img src="/img/cha/cha-03.png">
    </div>
    <p class="modal-title">송금요청은 잔금시간 이후에 가능합니다.</p>
    <p class="modal-subtitle">잠시 후, 다시 시도해주세요</p>
    <div class="modal-button">
      <button>닫기</button>
    </div>
  </CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'

</script>

<style scoped lang="scss">
@import '~/assets/scss/market/success-modal.scss';
</style>