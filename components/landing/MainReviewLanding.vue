<template>
  <button class="landing-close" @click="handlerClickClose"><img src="/img/icon/close-black.svg" alt="모달 닫기"></button>
  <div class="main-landing-top bg-violet">
    <p class="main-landing-top-title">프리로스,<br>고객님들의<br>실제 사용후기</p>
    <img src="/img/main/banner02.png" aria-hidden class="main-landing-top-image">
  </div>
  <div class="main-landing-contents">
    <p class="landing-title mt-80 mb-24">프리로스마켓이 설장할 수 있었던 건<br>모두 여러분 덕분입니다.</p>
    <p class="landing-content">
      프리로스가 오픈한지도 벌써 2주년, 많은 시행착오를 겪으면서 성장할 수 있었던 것은 고객님들의 애정어린 관심이 있었기 때문입니다. 고객님들께서 소중하게 남겨주신 리뷰들을 볼 때마다 앞으로 더 멋진 서비스로 보답해야겠다는 생각을 합니다. 프리로스가 이렇게 성장할 수 있었던 것은 모두 여러분 덕분입니다.
    </p>
    
    <div class="landing-review-card-container">
      <div class="landing-review-card">
        <img src="/img/main/review01.png" alt class="landing-review-image">
        <p class="landing-review-title">덕분에 첫집 마련<br>원활하게 진행했습니다!</p>
        <p class="landing-review-content">집 매매계약후 소유권이전등기접수까지 진행되는 동안 중간 점검 꼼꼼히 해주시고 제가 모르는 부분에 대해 친절히 설명 해주셨습니다.</p>
      </div>
      <div class="landing-review-card">
        <img src="/img/main/review02.png" alt class="landing-review-image">
        <p class="landing-review-title">정말 최고!<br>업무능력 최고!</p>
        <p class="landing-review-content">##사무소 최고! ##법무사님 최고!<br>업무처리가 능숙하시고 친절하십니다.<br>저는 무조건 이 사무소를 이용할 겁니다.</p>
      </div>
      <div class="landing-review-card">
        <img src="/img/main/review03.png" alt class="landing-review-image">
        <p class="landing-review-title">전문적으로 가이드 해주셔서<br>무사히 편하게 처리했습니다.</p>
        <p class="landing-review-content">친절하고 상세하게 설명해주셔서<br>편하게 잘 진행되었습니다.<br>신뢰도가 높은 인상이셔서<br>매우 만족합니다!</p>
      </div>
    </div>

    <p class="landing-content mb-24">
      프리로스마켓은 다양한 분야에서 사용자들에게 실질적인 가치를 제공하고 있으며 그것은 바로 사용자들의 솔직한 후기와 경험에서 확인할 수 있습니다. 아래 일부 사용자들이 프리로스마켓을 사용한 후 남긴 솔직한 평가입니다.
    </p>
    <p class="landing-numbering-content mb-24">
      <span class="landing-dot">·</span>
      <span>프리로스마켓 덕분에 업무 협업이 효율적으로 이뤄지고, 문서 처리가 훨씬 간편해졌습니다. 정말로 간편하고 유용한 도구에요.<br><strong>영업 전문가, 서울</strong></span>
    </p>
    <p class="landing-numbering-content mb-24">
      <span class="landing-dot">·</span>
      <span>무료 마켓 사용료라니, 이런 좋은 서비스를 무료로 제공해주다니 정말 감사합니다. 프리로스마켓을 통해 다양한 업무를 관리하고 문제없이 처리하고 있어요.<br><strong>스타트업 기업주, 부산</strong></span>
    </p>
    <p class="landing-numbering-content mb-60">
      <span class="landing-dot">·</span>
      <span>프리로스마켓은 사례비 영업을 하지 않는다는게 큰 장점 중 하나에요. 실력과 서비스 품질로만 경쟁하니까 정말로 고객 중심적인 플랫폼입니다.<br><strong>법률 컨설턴트, 대구</strong></span>
    </p>
    <p class="landing-content mb-60">
      프리로스마켓을 사용하는 사람들이 왜 이 서비스에 열광하는지, 사용자들의 목소리가 그 이유를 더욱 명확하게 보여줍니다. 프리로스마켓을 이용하여 여러분도 혁신적인 경험을 시작해보세요.
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
@import '~/assets/scss/landing/common.scss'; 
.landing-review-card-container {
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin:  73px 0 48px;
  .landing-review-card {
    border-radius: 14px;
    padding: 20px;
    background-color: rgba(248, 249, 253, 0.8);
    text-align: center;
  }
  .landing-review-image {
    width: 130px;
    height: auto;
  }
  .landing-review-title {
    margin: 12px 0;
    font-size: 17px;
    line-height: 26px;
    font-weight: $ft-bold;
  }
  .landing-review-content {
    font-size: 15px;
    line-height: 25px;
  }
}
</style>