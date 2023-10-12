<template>
  <div class="swiper-container">
    <swiper
      slides-per-view="auto"
      :loop="true"
      :autoplay="true"
      :space-between="25">
      <swiper-slide v-for="(banner, index) in banners" :key="index" @click="handlerClickMainBanner(banner)">
        <SwiperCard
          :idx="index"
          :page="banner.page"
          :total-page="banners.length"
          :top-title="banner.topTitle"
          :middle-title="banner.middleTitle"
          :content="banner.content"
          :background-color="banner.backgroundColor"
          :image="banner.image" />
      </swiper-slide>
    </swiper>
  </div>
  <NuxtLink to="/" class="move-case-registration"><span>지난주에만 300건의 사건이 등록되었어요!</span><img src="/img/icon/expand-right-gray.svg" alt="등록된 사건 보기"></NuxtLink>
  <div class="main-counts">
    <div class="main-counts-block">
      <img src="/img/icon/folder.png" aria-hidden class="main-counts-block-icon">
      <div class="main-counts-block-right">
        <span class="main-counts-block-title">누적사건 수</span>
        <span class="main-counts-block-content"><b>2852</b>건</span>
      </div>
    </div>
    <i class="main-counts-line"></i>
    <div class="main-counts-block">
      <img src="/img/icon/chat-green.png" aria-hidden class="main-counts-block-icon">
      <div class="main-counts-block-right">
        <span class="main-counts-block-title">등록전문가 수</span>
        <span class="main-counts-block-content"><b>63</b>명</span>
      </div>
    </div>
  </div>
  <div class="main-notice-container">
    <div class="main-notice-top">
      <p class="main-notice-title">공지사항</p>
      <p class="main-notice-more">더 알아보기 <img src="/img/icon/expand-right-lightgray.svg" aira-hidden></p>
    </div>
    <NoticeCard />
  </div>
  <p class="main-title-text">프리로스마켓은 어떤 앱인가요?</p>
  <p class="main-content-text">프리로스마켓은 부동산 등기가 필요한 사람과 등기사건을 수행하는 전문가가 만나는 공간입니다.</p>
  <div class="main-how-to-use-container">
    <p class="how-to-use-title">HOW TO USE</p>
    <MainHowToUseCard v-for="(how, index) in howToUse" :key="index" :how-config="how" />
  </div>
  <p class="main-title-text">우리의 든든한 파트너</p>
  <div class="main-partner-container">
    <swiper
      slides-per-view="auto"
      :autoplay="true"
      :space-between="6">
      <swiper-slide v-for="(partner, index) in partners" :key="index" :width="120">
        <img :src="partner" alt>
      </swiper-slide>
    </swiper>
  </div>
  <div class="main-bottom-buttons">
    <CommonBottomButton id="mainBottomButtonHelpCenter" text="헬프센터" backgroundColor="#c7c7c7" height="72px" width="50%" :font-weight="700" />
    <CommonBottomButton id="mainBottomButtonLogin" text="로그인" backgroundColor="#000000" height="72px" width="50%" :font-weight="700" />
  </div>
  <CommonFullScreenFadeModal :is-show="isMainIntroLandingModalShow">
    <MainIntroLanding @handler-click-close="toggleMainIntroLandingModal" />
  </CommonFullScreenFadeModal>
  <CommonFullScreenFadeModal :is-show="isMainReviewLandingModalShow">
    <MainReviewLanding @handler-click-close="toggleMainReviewLandingModal" />
  </CommonFullScreenFadeModal>
</template>
<script>
import { ref } from 'vue'
import {Swiper, SwiperSlide} from 'swiper/vue'
import SwiperCard from '~/components/card/SwiperCard.vue'
import NoticeCard from '~/components/card/NoticeCard.vue'
import MainHowToUseCard from '~/components/card/MainHowToUseCard.vue'
import CommonBottomButton from '~/components/button/CommonBottomButton.vue'
import CommonFullScreenFadeModal from '~/components/modal/CommonFullScreenFadeModal.vue'
import MainIntroLanding from '~/components/landing/MainIntroLanding.vue'
import MainReviewLanding from '~/components/landing/MainReviewLanding.vue'
import {banners} from '~/assets/js/main/swiperBanner'
import { howToUse } from '~/assets/js/main/howToUse'
import { partners } from '~/assets/js/main/partners'

import 'swiper/css'

export default {
  name: 'IndexPage',
  components: {
    Swiper,
    SwiperSlide,
    SwiperCard,
    NoticeCard,
    MainHowToUseCard,
    CommonBottomButton,
    CommonFullScreenFadeModal,
    MainIntroLanding,
    MainReviewLanding,
  },
  setup() {
    let isMainIntroLandingModalShow = ref(false)
    const toggleMainIntroLandingModal = () => {
      isMainIntroLandingModalShow.value = !isMainIntroLandingModalShow.value
    }
    let isMainReviewLandingModalShow = ref(false)
    const toggleMainReviewLandingModal = () => {
      isMainReviewLandingModalShow.value = !isMainReviewLandingModalShow.value
    }

    // 배너 추가되면 따로 수정해줘야하는 방식
    const handlerClickMainBanner = ({page}) => {
      switch(page){
        case '1':
          toggleMainIntroLandingModal()
          break
        case '2':
          toggleMainReviewLandingModal()
          break
        case '3':
          alert('공지사항으로 이동!')
          break
        default:
          return
      }
    }
    return {
      banners,
      howToUse,
      partners,
      isMainIntroLandingModalShow,
      isMainReviewLandingModalShow,
      toggleMainIntroLandingModal,
      toggleMainReviewLandingModal,
      handlerClickMainBanner
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.swiper-container{
  margin-top: 32px;
  padding: 0 34px;
  &:deep(.swiper) {
      overflow-y: visible;
  }
}
.move-case-registration{
  height: 65px;
  margin: 45px 16px 0 16px;
  border-radius: 16px;
  background-color: #f6f6f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  text-decoration: none;
  color: #676767;
  span{
    font-size: 15px;
    font-weight: $ft-semibold;
  }
}
.main-counts{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 26px 0 34px;
  .main-counts-block {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11px;
  }
  .main-counts-block-icon {
    width: auto;
    height: 30px;
  }
  .main-counts-block-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .main-counts-block-title {
    font-size: 12px;
    color: #8e8e8e;
    font-weight: $ft-medium;
  }
  .main-counts-block-content {
    font-size: 12px;
    color: #8e8e8e;
    font-weight: $ft-bold;
    b {
      font-size: 16px;
      color: #0c0c0c;
      font-weight: $ft-bold;
      margin-right: 4px;
    }
  }
  .main-counts-line {
    display: inline-block;
    height: 30px;
    width: 1px;
    background-color: #dedede;
  }
}
.main-notice-container {
  padding: 16px;
  border-top: 5px solid #f2f3f5;
  border-bottom: 5px solid #f2f3f5;
}
.main-notice-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  .main-notice-title {
    font-size: 14px;
    font-weight: $ft-bold;
  }
  .main-notice-more {
    font-size: 12px;
    color: #cccccc;
  }
}
.main-title-text {
  font-size: 18px;
  line-height: 26px;
  margin: 48px 0 10px;
  padding: 0 16px;
}
.main-content-text {
  font-size: 14px;
  margin: 16px 0 28px;
  color: #878787;
  padding: 0 16px;
  line-height: 24px;
}
.main-how-to-use-container {
  margin: 28px 0 87px;
  padding: 0 16px;
  .how-to-use-title {
    font-size: 12px;
    font-weight: $ft-bold;
    color: #0c0c0c;
    margin: 0 0 37px;
    padding-top: 7px;
    border-top: 3px solid #000000;
  }
}
.main-partner-container{
  padding: 0 16px 68px;
  img {
    width: 120px;
    height: auto;
  }
  &:deep(.swiper-slide) {
    width: fit-content;
  }
}
.main-bottom-buttons{
  display: flex;
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: $zi-sticky;
}
</style>