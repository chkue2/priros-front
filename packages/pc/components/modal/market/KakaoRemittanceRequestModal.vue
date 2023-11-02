<template>
  <CommonHeaderModal modal-id="kakoRemittanceRequestModal" modal-title="송금요청" width="420px" height="360px">
    <p class="modal-top" v-html="modalContents"></p>
    <p class="modal-bottom">입금이 지연되는 경우 카카오뱅크에 문의하세요</p>
    <div class="modal-button">
      <button :class="modalButton.style">{{ modalButton.text }}</button>
    </div>
  </CommonHeaderModal>
</template>

<script setup>
import { computed } from 'vue'
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue'

const props = defineProps({
  isReSend: {
    type: Boolean,
    default: false,
  }
})

const modalContents = computed(() => 
  props.isReSend ? 
    '<b>송금요청을 이미 진행하셨습니다.</b>' :
    '송금요청 후, 대출금 지급까지는<br><b>약1~2분이 소요</b>됩니다.' 
)
const modalButton = computed(() => 
  props.isReSend ? {
    text: '재요청',
    style: 'white'
  } : {
    text: '송금요청',
    style: 'blue'
  }
)

</script>

<style scoped lang="scss">
.modal-top {
  text-align: center;
  margin-top: 72px;
  line-height: 20px;
  font-weight: $ft-medium;
  b { 
    font-weight: $ft-bold;
  }
}
.modal-bottom {
  font-size: 14px;
  font-weight: $ft-medium;
  margin: 10px 0 72px;
  text-align: center;
}
.modal-button {
  display: flex;
  justify-content: center;
  & > button {
    width: 173px;
    height: 44px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: $ft-bold;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
    &.blue {
      background-color: #235bed;
      color: #ffffff;
    }
    &.white {
      border: 1px solid #235bed;
      color: #235bed;
    }
  }
}
</style>