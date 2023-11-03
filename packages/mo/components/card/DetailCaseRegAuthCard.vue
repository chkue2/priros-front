<template>
    <div class="detail-case-info-card">
      <div class="detail-case-info-column">
        <p class="detail-case-info-title">상호</p>
        <p class="detail-case-info-content">{{ detailCaseStore.fetchedDetailCase.regAuth['name'] }}</p>
      </div>
      <div class="detail-case-info-column">
        <p class="detail-case-info-title">대표자</p>
        <p class="detail-case-info-content">{{ detailCaseStore.fetchedDetailCase.regAuth['representative'] }}</p>
      </div>
      <div class="detail-case-info-column">
        <p class="detail-case-info-title">소재지</p>
        <p class="detail-case-info-content">{{ detailCaseStore.fetchedDetailCase.regAuth['address'] }}</p>
      </div>
      <div class="detail-case-info-column">
        <p class="detail-case-info-title">연락처</p>
        <p class="detail-case-info-content">{{ detailCaseStore.fetchedDetailCase.regAuth['agentTel'] }}</p>
      </div>
      <div class="detail-case-info-column">
        <p class="detail-case-info-title">담당자</p>
        <p class="detail-case-info-content">{{ detailCaseStore.fetchedDetailCase.regAuth['charge'] }}</p>
      </div>
      <div class="detail-case-info-column">
        <p class="detail-case-info-title">연락처</p>
        <p class="detail-case-info-content">{{ detailCaseStore.fetchedDetailCase.regAuth['chargeTel'] }}</p>
      </div>
    </div>  
  </template>
  <script setup>
  import { useDetailCaseStore } from '@priros/common/store/case/detail.js'
  
  const detailCaseStore = useDetailCaseStore()
  </script>
  
  <style scoped lang="scss">
  @import '~/assets/scss/card/detail-case-info.scss';
  </style>