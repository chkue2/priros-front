<template>
  <div class="my-case-search-container">
    <p class="my-case-search-title">진행중인 내 사건</p>
    <div class="my-case-search">
      <img src="/img/icon/search-gray.svg" aria-hidden class="my-case-search-icon">
      <input v-model="myCaseStore.keyword" type="text" class="my-case-search-input" placeholder="검색어를 입력해주세요" @keyup="handlerKeyupCaseKeywrod" @keydown.enter="handlerClickEnterKeyword">
    </div>
  </div>
  <div class="my-case-filters">
    <div class="my-case-tabs">
      <div class="my-case-tab tab-center" :class="{active: caseStore.filter === 'all'}" @click="handlerClickCaseFilter('all')">전체({{counter.total}})</div>
      <div class="my-case-tab tab-center" :class="{active: caseStore.filter === 'progress'}" @click="handlerClickCaseFilter('progress')">진행중({{counter.progress}})</div>
      <div class="my-case-tab tab-center" :class="{active: caseStore.filter === 'receive'}" @click="handlerClickCaseFilter('receive')">완료({{counter.receive}})</div>
    </div>
    <div class="my-case-date-filters">
      <div class="my-case-date-filter" :class="{active: caseStore.tab === 'all'}" @click="handlerClickCaseTab('all')">전체</div>
      <div class="my-case-date-filter" :class="{active: caseStore.tab === 'today'}" @click="handlerClickCaseTab('today')">오늘</div>
      <div class="my-case-date-filter" :class="{active: caseStore.tab === 'tomorrow'}" @click="handlerClickCaseTab('tomorrow')">내일</div>
    </div>
  </div>
  <div v-if="caseList.length === 0" class="my-case-empty">
    <img src="/img/cha/cha-empty.png">
    <p class="empty-title">조회된 내사건이 없습니다.</p>
    <p class="empty-subtitle">우리동네 주변 사건을 둘러보세요</p>
  </div>
  <div v-if="caseList.length > 0" class="my-case-list">
    <MyCaseCard v-for="(c, index) in caseList" :key="index" :case-config="c" />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import dayjs from '@priros/common/node_modules/dayjs'
import MyCaseCard from '~/components/card/MyCaseCard.vue'
import { myCaseStore } from '~/store/case/myCase.js'

const caseStore = myCaseStore()

const searchDate = computed(() => {
  switch(caseStore.tab) {
    case 'today':
      return dayjs(new Date()).format('YYYY-MM-DD')
    case 'tomorrow':
      return dayjs(new Date()).add(1, 'd').format('YYYY-MM-DD')
    default: 
      return ''
  }
})

const caseList = computed(() => caseStore.fetchedCaseList || [])
const counter = computed(() => caseStore.counter)

onMounted(() => {
  caseStore.fetchCaseCounter()
  caseStore.fetchCaseList(searchDate.value)
})

const handlerClickCaseFilter = (v) => {
  caseStore.setFilter(v)
  caseStore.fetchCaseList(searchDate.value)
}
const handlerClickCaseTab = (v) => {
  caseStore.setTab(v)
  caseStore.fetchCaseList(searchDate.value)
}
const handlerKeyupCaseKeywrod = (e) => {
  caseStore.setKeyword(e.target.value)
}
const handlerClickEnterKeyword = () => {
  caseStore.fetchCaseCounter()
  caseStore.fetchCaseList(searchDate.value)
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
  top: 55px;
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
.my-case-date-filters {
  padding: 0 16px 12px;
  display: flex;
  margin-top: 12px;
  .my-case-date-filter {
    flex: 1;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 5px 0px #26334D08;
    border: 2px solid #f5f6f7;
    font-size: 12px;
    font-weight: $ft-bold;
    color: #c5c6cc;
    transform: color .2s ease-in-out;
    & + .my-case-date-filter {
      border-left: none;
    }
    &.active {
      color: #343434;
    }
    &:nth-child(1) {
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
    }
    &:nth-child(3) {
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
    }
  }
}
.my-case-list {
  padding: 12px 16px 23px;
}
.my-case-empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 110px 0;
  & > img {
    width: 124px;
    height: auto;
  }
  .empty-title {
    margin: 6px 0 3px;
    font-size: 14px;
    font-weight: $ft-bold;
    color: #808080;
    line-height: 20px;
  }
  .empty-subtitle {
    font-size: 14px;
    font-weight: $ft-medium;
    color: #bebebe;
  }
}
</style>