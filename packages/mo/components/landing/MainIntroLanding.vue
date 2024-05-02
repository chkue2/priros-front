<template>
  <button class="landing-close" @click="handlerClickClose"><img src="/img/icon/close-black.svg" alt="모달 닫기"></button>
  <div class="main-landing-top bg-blue">
    <p class="main-landing-top-title">프리로스<br>등기업무 시장의<br>미래를 열다</p>
    <img src="/img/main/banner04.png" aria-hidden class="main-landing-top-image">
  </div>
  <div class="main-landing-contents">
    <p class="landing-title mt-80 mb-24">프리로스는<br>등기전문가의 업무협업 플랫폼입니다.</p>
    <p class="landing-content">
      우리는 등기업무를 만나는 새로운 방법을 제공합니다. 전문적인 실력과 친절한 서비스를 제공할 수 있고 전문가가 직접 업무에 참여하는 회원이라면, 누구나 참여할 수 있습니다.
    </p>
    <p class="landing-content">
      등기를 요청하는 자는 개인이거나, 금융기관 등의 기업이기도 합니다. 특히 금융기관이 제공하는 소유권이전 사건의 경우, 소유권이전등기 업무 뿐만아니라, 금융기관이 요구하는 대출금전달, 대출상환 및 말소, 각종 업무보고 등의 추가 업무가 수반되기도 합니다. 여러분은 개인과 금융기관 모두를 위한 업무를 제공해야 할 수도 있습니다. 또한 금융기관의 설정등기 업무를 수행하는 다른 등기전문가와의 협업이 매우 중요합니다.
    </p>
    <img src="/img/main/intro02.png" aira-hidden class="intro-landing-image">
    <p class="landing-title mb-24">프리로스마켓을 사용해야하는 이유!</p>



    <p class="landing-content mb-24">
      프리로스 마켓을 사용해야할 이유는 명확합니다. 사건과 업무도구가 제공되는 것은 기본입니다. 우리는 등기요청자와 등기전문가가 만나는 올바른 생태계의 선순환을 목표로 하고 있습니다.
    </p>
    <p class="landing-numbering-content">
      <span>1.</span>
      <span>사례비 없는 사건제공 사건수임을 조건으로 금전을 주고 받지 않습니다. 실력과 친절한 서비스를 제공하면 됩니다.</span>
    </p>
    <p class="landing-numbering-content">
      <span>2.</span>
      <span>우리동네 전문가 우리동네 사건은 다른 동네 전문가보다 먼저 기회를 얻고, 고객이 멀리있는 전문가보다 가까이 있는 전문가를 선택할 수 있도록 환경을 만들어 갑니다.</span>
    </p>
    <p class="landing-numbering-content">
      <span>3.</span>
      <span>깨끗한 선순환 실력을 보여주면, 고객이 찾아옵니다. 불법 리베이트를 근절하고, 등기시장의 선순환을 만들어 가기 위해 등기전문가의 참여가 필요합니다.</span>
    </p>
    <p class="landing-numbering-content mb-60">
      <span>4.</span>
      <span>업무협업도구 우리는 새로운 방식의 업무도구를 만들어갑니다. 사용할수록 편리하고 혁신적인 업무도구, 등기전문가 상호 간 소통할 수 있는 업무도구를 만들어 갑니다.</span>
    </p>
    <p class="landing-content mb-60">
      이제, 프리로스에서 새로운 방법으로 사건을 만나고, 우리와 함께 전에 없던 경험을 시작해보세요.
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
  width: 260px;
  margin: 90px 0 50px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>