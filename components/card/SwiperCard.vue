
<template>
  <div :id="`swiperCard${idx}`" class="swiper-card">
    <p class="swiper-card-page">
      <b>{{ page }}</b> / {{ totalPage }}
    </p>
    <div class="swiper-card-text">
      <p class="swiper-card-top-title">{{ topTitle }}</p>
      <p class="swiper-card-middle-title" v-html="middleTitle"></p>
      <p class="swiper-card-content" v-html="content"></p>
    </div>
    <img :src="image" alt="banner image" class="swiper-card-image">
  </div>
</template>
<script setup>
import {defineProps, onMounted} from 'vue'

const props = defineProps({
  idx: Number,
  page: String,
  totalPage: String,
  topTitle: String,
  middleTitle: String,
  content: String,
  backgroundColor: String,
  image: String,
})
onMounted(() => {
  document.querySelector(`#swiperCard${props.idx}`).style.backgroundColor = props.backgroundColor
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
.swiper-card {
  padding-bottom: 115%;
  position: relative;
  border-radius: 30px;
  .swiper-card-page {
    position: absolute;
    top: 22px;
    right: 19px;
    color: #a7a7a7;
    font-weight: $ft-medium;
    z-index: 1;
    b {
      font-weight: $ft-medium;
      color: #000000;
    }
  }
  .swiper-card-text{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 33px 0 0 16px;
  }
  .swiper-card-top-title,
  .swiper-card-content{
    font-weight: $ft-medium;
  }
  .swiper-card-middle-title{
    font-size: 36px;
    font-weight: $ft-bold;
    margin: 9px 0 17px;
    line-height: 35px;
  }
  .swiper-card-image{
    width: calc(100% - 30px);
    height: auto;
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
  }
}
</style>