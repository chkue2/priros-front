<template>
  <div class="my-case-search-container">
    <p class="my-case-search-title">진행중인 내 사건</p>
    <div class="my-case-search">
      <img src="/img/icon/search-gray.svg" aria-hidden class="my-case-search-icon">
      <input type="text" class="my-case-search-input" placeholder="검색어를 입력해주세요">
    </div>
  </div>
  <div class="my-case-filters">
    <div class="my-case-tabs">
      <div class="my-case-tab tab-left" :class="{active: tab === 'all'}" @click="handlerClickCaseTab('all')">전체(40)</div>
      <div class="my-case-tab tab-center" :class="{active: tab === 'today'}" @click="handlerClickCaseTab('today')">
        <img src="/img/icon/check-circle-green.svg" aria-hidden>
        오늘(15)
      </div>
      <div class="my-case-tab tab-right" :class="{active: tab === 'tomorrow'}" @click="handlerClickCaseTab('tomorrow')">내일(25)</div>
    </div>
  </div>
  <div class="my-case-list">
    <MyCaseCard v-for="(c, index) in myCaseList" :key="index" :case-config="c" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MyCaseCard from '~/components/card/MyCaseCard.vue'
import { myCaseList } from '~/assets/js/case/myCase'

let tab = ref('today')
const handlerClickCaseTab = (v) => {
  tab.value = v
}

</script>

<style lang="scss" scoped>
.my-case-search-container{
  padding: 20px 16px 11px;
  .my-case-search-title {
    font-size: 20px;
    font-weight: $ft-semibold;
    line-height: 24px;
  }
  .my-case-search {
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: 11px;
    border: 1px solid #ebebeb;
    background-color: #fbfbfb;
    border-radius: 52px;  
  }
  .my-case-search-icon{
    width: 24px;
    height: 24px;
    margin-left: 12px;
    margin-right: 8px;
  }
  .my-case-search-input {
    width: 80%;
    border: none;
    font-size: 16px;
    background-color: transparent;
  }
}
.my-case-filters {
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: $zi-sticky;
}
.my-case-tabs {
  display: flex;
  .my-case-tab {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 4px solid #000000;
    padding: 11px 16px 7px;
    opacity: .2;
    transition: opacity .2s ease-in-out;
    font-size: 14px;
    font-weight: $ft-bold;
    &.active {
      opacity: 1;
    }
    &.tab-left {
      justify-content: flex-start;
    }
    &.tab-right {
      justify-content: flex-end;
    }
  }
}
.my-case-list {
  padding: 23px 16px;
}
</style>