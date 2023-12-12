<template>
    <div class="detail-case-info-card">
      <div class="detail-case-info-column">
        <p class="detail-case-info-title">상호</p>
        <p class="detail-case-info-content">{{ regAuth['firmName'] }}</p>
      </div>
      <div class="detail-case-info-column">
        <p class="detail-case-info-title">대표자</p>
        <p class="detail-case-info-content">{{ regAuth['delegater'] }}</p>
      </div>
      <div class="detail-case-info-column">
        <p class="detail-case-info-title">소재지</p>
        <p class="detail-case-info-content">{{ regAuth['addr'] }}, {{ regAuth['restAddr'] }}</p>
      </div>
      <div class="detail-case-info-column">
        <p class="detail-case-info-title">연락처</p>
        <p class="detail-case-info-content">{{ rexFormatPhone(regAuth['phone']) }}</p>
      </div>
      <div class="detail-case-info-column">
        <p class="detail-case-info-title">연락처2</p>
        <p class="detail-case-info-content">{{ rexFormatPhone(regAuth['chargePhone']) }}</p>
      </div>
      <div class="detail-case-info-column">
        <p class="detail-case-info-title">담당자</p>
        <p class="detail-case-info-content">{{ regAuth['chargeName'] }} {{ regAuth['chargePosition'] }}</p>
      </div>
    </div>  
  </template>
  <script setup>

import { onMounted, ref } from 'vue'

import { tradeCaseDetail } from '~/services/tradeCaseDetail.js'
import { rexFormatPhone } from '@priros/common/assets/js/utils.js'

const props = defineProps({
  tradeCaseId: String,
})

const regAuth = ref({})

onMounted(() => {
  tradeCaseDetail.register(props.tradeCaseId)
    .then(({data}) => {
      regAuth.value = data
    })
    .catch(e => {
      alert(e.response.data.message)
    })
})

  </script>
  
  <style scoped lang="scss">
  @import '~/assets/scss/card/detail-case-info.scss';
  </style>