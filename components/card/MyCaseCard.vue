<template>
  <div class="my-case-card" @click="handlerClickCard">
    <div class="my-case-card-title">
      <p class="my-case-card-name">{{ caseConfig.name }}</p>
      <div class="my-case-card-dates">
        <div class="my-case-card-date">
          <img src="/img/icon/check-circle-green.svg" aria-hidden alt="">
          {{ caseConfig.date }}
        </div>
        <div class="my-case-card-date">
          {{ time }}
        </div>
      </div>
    </div>
    <p class="my-case-card-address">{{ caseConfig.address }}</p>
    <div class="my-case-card-tags">
      <div class="my-case-card-bank">
        <img :src="bankIcon" aria-hidden alt="">
        <p>{{ caseConfig.bank }}</p>
      </div>
      <span class="my-case-card-tag" v-for="(tag, index) in tags" :key="index">{{ tag }}</span>
    </div>
    <div class="my-case-card-status">
      <div class="my-case-card-status-left">
        <span class="my-case-card-state" :class="{active: caseConfig.state === '견적'}">견적</span>
        <span class="my-case-card-state" :class="{active: caseConfig.state === '송금'}">송금</span>
        <span class="my-case-card-state" :class="{active: caseConfig.state === '상환'}">상환</span>
      </div>
      <div class="my-case-card-status-right">
        <NuxtLink class="my-case-card-state active">담당자보고</NuxtLink>
        <NuxtLink class="my-case-card-state active">일정보고</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  caseConfig: Object,
})

const time = computed(() => {
  const ampm = parseInt(props.caseConfig.time.split(':')[0])
  return `${ampm >= 12 ? '오후' : '오전'} ${ampm > 12 ? (apmp - 12) : ampm}시 ${props.caseConfig.time.split(':')[1]}분`
})

const bankIcon = computed(() => {
  const basePath = '/img/icon/'
  switch(props.caseConfig.bank){
    case '카카오뱅크':
      return basePath + 'kakaobank.png'
    default:
      return ''
  }
})

const tags = computed(() => {
  return props.caseConfig.tags.map((c) => `#${c}`)
})

const router = useRouter()
const handlerClickCard = () => {
  router.push(`/case/${props.caseConfig.uid}`);
}
</script>

<style scoped lang="scss">
.my-case-card {
  & + .my-case-card{
    margin-top: 11px;
  }
  padding: 13px 18px 18px;
  border-radius: 8px;
  box-shadow: 2px 3px 12px 0 #00000026;
  .my-case-card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .my-case-card-name {
    font-weight: $ft-bold;
  }
  .my-case-card-dates {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
  }
  .my-case-card-date {
    height: 23px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: $ft-medium;
    color: #939393;
    padding: 5px 6px;
    img {
      width: 16px;
      height: 16px;
    }
  }
  .my-case-card-address {
    font-size: 14px;
    line-height: 16px;
    padding: 8px 0;
    font-weight: $ft-medium;
  }
}
.my-case-card-tags {
  display: flex;
  align-items: center;
  gap: 4px;
  .my-case-card-bank {
    display: flex;
    align-items: center;
    img{
      width: 13px;
      height: 13px;
      margin-right: 4px;
    }
    p {
      font-size: 12px;
      color: #1a1a1a;
    }
  }
  .my-case-card-tag {
    font-size: 12px;
    color: #235bed;
  }
}
.my-case-card-status{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px 8px 7px;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  margin-top: 13px;
  .my-case-card-status-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .my-case-card-status-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
  }
  .my-case-card-state {
    font-size: 12px;
    font-weight: $ft-semibold;
    color: #c2c2c2;
    &.active {
      color: #000000;
      font-weight: $ft-bold;
      text-decoration: underline;
    }
  }
}
</style>