<template>
  <div class="swiper-container">
    <swiper
      slide-per-view="auto"
      :loop="true"
      :autoplay="true"
      :space-between="25"
      @swiper="onSwiper"
      @slideChange="onSlideChange">
      <swiper-slide v-for="(banner, index) in banners" :key="index">
        <SwiperCard
          :idx="index"
          :page="banner.page"
          :total-page="banner.totalPage"
          :top-title="banner.topTitle"
          :middle-title="banner.middleTitle" 
          :content="banner.content"
          :background-color="banner.backgroundColor"
          :image="banner.image"/>
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
      <img src="/img/icon/folder.png" aria-hidden class="main-counts-block-icon">
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
</template>
<script>
import {Swiper, SwiperSlide} from 'swiper/vue'
import SwiperCard from '~/components/card/SwiperCard.vue'
import NoticeCard from '~/components/card/NoticeCard.vue'
import {banners} from '~/assets/js/main/swiperBanner'

import 'swiper/css'

export default {
  name: 'IndexPage',
  components: {
    Swiper,
    SwiperSlide,
    SwiperCard,
    NoticeCard
  },
  setup() {
    definePageMeta({layout: 'in-header'})

    const onSwiper = (swiper) => {
      console.log(swiper)
    }

    const onSlideChange = () => {
      console.log('slide change')
    }

    return {
      onSwiper,
      onSlideChange,
      banners
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
</style>