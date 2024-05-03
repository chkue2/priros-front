<template>
  <button class="landing-close" @click="handlerClickClose"><img src="/img/icon/close-black.svg" alt="모달 닫기"></button>
  <div class="main-landing-top bg-violet">
    <p class="main-landing-top-title">사용자들의<br>‘진짜’후기를<br>확인해보세요</p>
    <img src="/img/main/banner02.png" aria-hidden class="main-landing-top-image">
  </div>
  <div class="main-landing-contents">
    <p class="landing-title mt-80 mb-24">프리로스마켓이 설장할 수 있었던 건<br>모두 여러분 덕분입니다.</p>
    <p class="landing-content">
      고객과 등기전문가가 만나는 새로운 방법을 시도한 이후, 많은 시행 착오와 개선을 거쳐 성장해왔습니다. 고객님들의 애정어린 관심과 의견이 없었다면 어려웠을 겁니다. 소중하게 남겨주신 리뷰들을 뽈 때 마다, 더 멋진 서비스로 보답해야겠다고 생각합니다.
    </p>
    
    <div class="landing-review-card-container">
      <div class="landing-review-card">
        <img src="/img/main/review01.png" alt class="landing-review-image">
        <p class="landing-review-title">아는 전문가가 없었는데<br>은행에서 일하는 친구가 알려줬어요</p>
        <p class="landing-review-content">계약하고 등기를 하려고 하니, 아는 전문가가 없어서 아쉬웠는데 은행에서 일하는 친구가 여기는 은행들도 사건을  맡기는 곳이라고 소개해줘서, 안심하고 맡길 수 있었습니다.</p>
      </div>
      <div class="landing-review-card">
        <img src="/img/main/review02.png" alt class="landing-review-image">
        <p class="landing-review-title">가격이 들쑥날쑥 하던데,<br>너무 싸면 불안해요. 여기가 딱!</p>
        <p class="landing-review-content">중개사님이 소개해주신 분은 너무 비싸고인터넷에서 견적업체는 너무 싼데, 무자격자가 업무처리해서 사고가 났다는 뉴스를 보니 불안하더라구요, 믿을 수 있는 곳에서 할인까지 해준다니, 정말 마음에 들었습니다.</p>
      </div>
      <div class="landing-review-card">
        <img src="/img/main/review03.png" alt class="landing-review-image">
        <p class="landing-review-title">역시 전문적이고<br>친절하네요.</p>
        <p class="landing-review-content">준비과정부터 차근차근 연락해서 알려주시고, 계약서에 잘 못 쓴부분도 찾아주시네요. 너무 전문적인데, 친절하기 까지 하네요. 다음에 또 이용하겠습니다.</p>
      </div>
    </div>
    <p class="landing-content mb-24">
      함께 일하는 모든 사람이 만족하는 새로운 형태의 협력파트너 프리로스 마켓.
    </p>
    <p class="landing-content mb-24">
      등기를 하는 고객뿐아니라, 부동산거래에는 다양한 협력파트너들이 함께하고 있습니다. 모두의 입장을 귀기울이고 최적의 업무환경을 만들어 가겠습니다.
    </p>
    <p class="landing-numbering-content mb-24">
      <span class="landing-dot">·</span>
      <span>좋은 법무사를 소개해달라는데, 난감 할때가 많았습니다. 이 곳 덕분에 믿을만한 법무사를 간편하게 소개해줄 수 있게 되어서 고민이 사라졌어요.<br><strong>공인중개사, 서울</strong></span>
    </p>
    <p class="landing-numbering-content mb-24">
      <span class="landing-dot">·</span>
      <span>영업활동이나 불법리베이트 없이는 사건을 수임하기 어려웠는데, 실력만 있으면 사건을 수임하고, 잘 할수록 더 높은 평가를 받게 되니, 정말 세상을 변화시킬 수 있는 서비스라고 생각합니다. <br><strong>법무사, 수원</strong></span>
    </p>
    <p class="landing-numbering-content mb-60">
      <span class="landing-dot">·</span>
      <span>기업이나 개인사업의 컨설팅을 하다보면, 법인등기나, 부동산등기가 필요한 일을 많이 만나게 되는데, 이 곳의 등기전문가를 알게 된 후로, 사업장이 전국 어디에 있든, 현지의 전문가와 함께 일할 수 있어서 너무 만족합니다.<br><strong>기업컨설턴트, 판교</strong></span>
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