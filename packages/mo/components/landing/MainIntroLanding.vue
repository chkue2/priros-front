<template>
  <button class="landing-close" @click="handlerClickClose"><img src="/img/icon/close-black.svg" alt="모달 닫기"></button>
  <div class="main-landing-top bg-blue">
    <p class="main-landing-top-title">프리로스,<br>업무 협업의<br>미래를 열다</p>
    <img src="/img/main/banner01.png" aria-hidden class="main-landing-top-image">
  </div>
  <div class="main-landing-contents">
    <p class="landing-title mt-80 mb-24">프리로스마켓은<br>소유권이전등기 업무협업 플랫폼입니다.</p>
    <p class="landing-content">
      프리로스는 소유권 이전 등기와 업무 협업에 특화된 플랫폼으로, 고객 여러분의 필요를 가장 우선시하고 있습니다. 우리는 사례비 영업을 필요로 하지 않아서 여러분은 단순히 실력과 친절한 서비스만으로도 안심하고 우리 동네의 다양한 사건을 자유롭게 처리할 수 있습니다.<br>또한, 우리의 마켓 사용료는 무료입니다. 우리는 업무를 효율적으로 관리하고 소유권 이전 등기를 간편하게 수행할 수 있도록 여러분을 지원합니다. 프리로스와 함께라면 업무 협업이 더욱 편리하고 효율적할 것입니다. 우리와 함께 혁신적인 경험을 시작해보세요.
    </p>
    <img src="/img/main/intro01.png" aira-hidden class="intro-landing-image">
    <p class="landing-title mb-24">프리로스마켓을 사용해야하는 이유!</p>
    <p class="landing-content mb-24">
      프리로스마켓을 선택하는 이유는 명확합니다. 우리는 소유권 이전 등기와 업무 협업 분야에서 혁신적인 솔루션을 제공합니다. 여기 몇 가지 강점을 소개해 드리겠습니다.
    </p>
    <p class="landing-numbering-content">
      <span>1.</span>
      <span><b>무료 마켓 사용료</b> 프리로스마켓은 사용료를 전혀 부과하지 않습니다. 비용 걱정 없이 우리의 서비스를 자유롭게 이용할 수 있습니다.</span>
    </p>
    <p class="landing-numbering-content">
      <span>2.</span>
      <span><b>사례비 영업 불필요</b> 저희는 사례비 영업을 하지 않습니다. 여러분은 실력과 친절한 서비스만으로도 우리 동네의 다양한 사건을 처리할 수 있습니다.</span>
    </p>
    <p class="landing-numbering-content">
      <span>3.</span>
      <span><b>효율적인 업무 협업</b> 프리로스마켓은 업무 협업을 더욱 효율적으로 만들어줍니다. 업무 관리와 문서 처리가 간편해지고, 소유권 이전 등기도 원활하게 수행할 수 있습니다.</span>
    </p>
    <p class="landing-numbering-content mb-60">
      <span>4.</span>
      <span><b>고객 중심 접근</b> 프리로스는 고객의 요구를 우선시합니다. 우리는 항상 여러분의 의견을 경청하고 피드백을 반영하여 서비스를 개선합니다.</span>
    </p>
    <p class="landing-content mb-60">
      프리로스마켓은 혁신과 편의를 함께 제공하는 플랫폼으로, 여러분의 업무를 더욱 원활하게 관리하고 더욱 효과적으로 협업할 수 있게 도와드립니다. 우리와 함께 혁신적인 경험을 시작하세요.
    </p>
    <button class="landing-button" @click="handlerClickClose">홈으로</button>
  </div>
</template>
<script setup>
const emit = defineEmits(['handler-click-close'])
const handlerClickClose = () => {
  emit('handler-click-close')
}
</script>
<style scoped lang="scss">
@import '@priros/common/assets/scss/landing/common.scss';
.intro-landing-image {
  width: 109px;
  margin: 90px 0 50px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>