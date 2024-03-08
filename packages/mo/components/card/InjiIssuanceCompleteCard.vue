<template>
  <div class="inji-issuance-container">
    <p class="inji-title">전자수입인지 발행이 요청되었습니다.</p>
    <p class="inji-subtitle">발행까지 5~10분정도 소요됩니다.</p>
    <p class="inji-content">
      정산 및 출력은<br>
      PC에서 priros.co.kr에 접속하신 후<br>
      <b>[마이페이지>인지발행내역]</b> 메뉴에서 가능합니다.
    </p>
    <p class="inji-help-text">• 발행취소는 당일 PM 05:30까지 마이페이지에서 가능</p>
    <p class="inji-help-text">• 인지발행 서비스는 장수인지에서 제공</p>
  </div>
  <div class="inji-issuance-buttons">
    <button class="button--close" @click="handlerClickCloseButton">닫기</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['handler-click-close'])

const handlerClickCloseButton = () => {
  emit('handler-click-close')
}
</script>

<style lang="scss" scoped>
.inji-issuance-container{
  padding: 53px 12px 18px;
}
.inji-title {
  font-size: 14px;
  font-weight: $ft-bold;
  color: #1a1a1a;
}
.inji-subtitle {
  font-size: 14px;
  font-weight: $ft-medium;
  color: #1a1a1a;
  margin: 5px 0 20px;
  line-height: 20px;
}
.inji-content {
  font-size: 14px;
  color: #1a1a1a;
  line-height: 20px;
  margin-bottom: 30px;
  & > b {
    font-weight: $ft-bold;
  }
}
.inji-help-text {
  font-size: 12px;
  font-weight: $ft-medium;
  color: #979797;
  line-height: 20px;
  text-align: left;
  padding-left: 12px;
}
.inji-issuance-buttons {
  display: flex;
  border-top: 1px solid #dfdfdf;
  & > button {
    flex: 1;
    height: 60px;
    font-weight: $ft-bold;
    border: none;
    cursor: pointer;
    &.button--close {
      background-color: #ffffff;
    }
    &.button--apply {
      background-color: #235BED;
      color: #ffffff;
    }
  }
}
</style>