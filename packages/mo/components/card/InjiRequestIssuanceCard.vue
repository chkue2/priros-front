<template>
  <div class="inji-issuance-container">
    <p class="inji-title">전자수입인지 발행을 요청하시겠습니까 ?</p>
    <p class="inji-subtitle">1% 할인된 금액으로 정산은 하루에 한번만!<br>프리로스에서 제공하는 서비스를 이용해보세요.</p>
    <p class="inji-help-text">• 발행취소는 당일 PM 05:30까지 마이페이지에서 가능</p>
    <p class="inji-help-text">• 인지발행 서비스는 장수인지에서 제공</p>
  </div>
  <div class="inji-issuance-buttons">
    <button class="button--close" @click="handlerClickCloseButton">닫기</button>
    <button class="button--apply" @click="handlerClickApplyButton">발행요청</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['handler-click-close', 'inji-generate'])

const handlerClickCloseButton = () => {
  emit('handler-click-close')
}
const handlerClickApplyButton = () => {
  emit('inji-generate')
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
  margin: 20px 0 40px;
  line-height: 20px;
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