<template>
  <div class="estimate-container">
    <div class="estimate-accordion open">
      <div class="estimate-accordion-top">
        <p class="estimate-accordion-top-title">견적요약 정보</p>
        <div class="estimate-accordion-top-right">
          <span class="estimate-accordion-top-amount">{{ taxAndPaySum }} 원</span>
          <img src="/img/icon/expand-down-gray.svg" class="estimate-accordion-top-icon">
        </div>
      </div>
      <div class="estimate-accordion-contents">
        <div class="estimate-accordion-contents-grid">
          <p class="estimate-accordion-contents-title">등기비용</p>
          <p class="estimate-accordion-contents-text">{{ taxAndPaySum }} 원</p>
          <p class="estimate-accordion-contents-title">입금계좌</p>
          <p class="estimate-accordion-contents-text">{{ estimateAccount }}</p>
          <p class="estimate-accordion-contents-title">대출기관</p>
          <p class="estimate-accordion-contents-text">{{ bankName }}</p>
          <p class="estimate-accordion-contents-title">대출금</p>
          <p class="estimate-accordion-contents-text">{{ mortgageLoan }} 원</p>
          <p class="estimate-accordion-contents-title">대출실행금</p>
          <p class="estimate-accordion-contents-text">{{ mortgageExecution }} 원</p>
          <p class="estimate-accordion-contents-title">견적발행일</p>
          <p class="estimate-accordion-contents-text">{{ summaryCreated }}</p>
        </div>
      </div>
    </div>
    <p class="estimate-info-text mt-18">· 등기비용 : 제세공과금 + 수수료</p>
    <p class="estimate-info-text mb-18">· 대출실행금 : 대출기관 기준에 따름</p>
    <div class="estimate-accordion open">
      <div class="estimate-accordion-top">
        <p class="estimate-accordion-top-title">사건 정보</p>
        <div class="estimate-accordion-top-right">
          <img src="/img/icon/expand-down-gray.svg" class="estimate-accordion-top-icon">
        </div>
      </div>
      <div class="estimate-accordion-contents">
        <p class="estimate-accordion-object-title">목적물</p>
        <p class="estimate-accordion-object-address">{{ estateAddr }}</p>
        <div class="estimate-accordion-contents-grid">
          <p class="estimate-accordion-contents-title">매수인</p>
          <p class="estimate-accordion-contents-text">{{ buyer }}</p>
          <p class="estimate-accordion-contents-title">산출조건</p>
          <p class="estimate-accordion-contents-text">{{ estateCondition }}</p>
          <p class="estimate-accordion-contents-title">농특세</p>
          <p class="estimate-accordion-contents-text">{{ farmTaxApply }}</p>
          <p class="estimate-accordion-contents-title">매매대금</p>
          <p class="estimate-accordion-contents-text">{{ tradePrice }} 원</p>
          <p class="estimate-accordion-contents-title">시가표준액</p>
          <p class="estimate-accordion-contents-text">{{ estimatePrice }} 원</p>
          <p class="estimate-accordion-contents-title">채권매입금</p>
          <p class="estimate-accordion-contents-text">{{ estimateBond }} 원</p>
        </div>
      </div>
    </div>
    <div class="estimate-accordion open">
      <div class="estimate-accordion-top">
        <p class="estimate-accordion-top-title">제세공과금</p>
        <div class="estimate-accordion-top-right">
          <span class="estimate-accordion-top-amount">{{ taxSum }} 원</span>
          <img src="/img/icon/expand-down-gray.svg" class="estimate-accordion-top-icon">
        </div>
      </div>
      <div class="estimate-accordion-contents">
        <div class="estimate-accordion-contents-grid pd-sm">
          <p class="estimate-accordion-contents-title">취득세</p>
          <p class="estimate-accordion-contents-text">{{ regTax }} 원</p>
          <p class="estimate-accordion-contents-title">지방교육세</p>
          <p class="estimate-accordion-contents-text">{{ eduTax }} 원</p>
          <p class="estimate-accordion-contents-title">농특세</p>
          <p class="estimate-accordion-contents-text">{{ farmTax }} 원</p>
          <p class="estimate-accordion-contents-title">인지</p>
          <p class="estimate-accordion-contents-text">{{ goveStamp }} 원</p>
          <p class="estimate-accordion-contents-title">중지</p>
          <p class="estimate-accordion-contents-text">{{ courtStamp }} 원</p>
          <p class="estimate-accordion-contents-title">채권부담금</p>
          <p class="estimate-accordion-contents-text">{{ bondPay }} 원</p>
        </div>
        <div class="estimate-accordion-total">
          <p class="estimate-accordion-total-title">소계</p>
          <p class="estimate-accordion-total-amount">{{ taxSum }} 원</p>
        </div>
      </div>
    </div>
    <div class="estimate-accordion open">
      <div class="estimate-accordion-top">
        <p class="estimate-accordion-top-title">수수료</p>
        <div class="estimate-accordion-top-right">
          <span class="estimate-accordion-top-amount">{{ paySum }} 원</span>
          <img src="/img/icon/expand-down-gray.svg" class="estimate-accordion-top-icon">
        </div>
      </div>
      <div class="estimate-accordion-contents">
        <div class="estimate-accordion-contents-grid pd-sm">
          <p class="estimate-accordion-contents-title">적용수수료</p>
          <p class="estimate-accordion-contents-text">{{ discountedLegalPay }} 원</p>
          <p class="estimate-accordion-contents-title">거래신고대행</p>
          <p class="estimate-accordion-contents-text">{{ rtmsApplyPay }} 원</p>
          <p class="estimate-accordion-contents-title">다중매매</p>
          <p class="estimate-accordion-contents-text">{{ multiPay }} 원</p>
          <p class="estimate-accordion-contents-title">수수료계</p>
          <p class="estimate-accordion-contents-text">{{ payedPaySum }} 원</p>
          <p class="estimate-accordion-contents-title">부가세</p>
          <p class="estimate-accordion-contents-text">{{ vatLegalPay }} 원</p>
        </div>
        <div class="estimate-accordion-total">
          <p class="estimate-accordion-total-title">소계</p>
          <p class="estimate-accordion-total-amount">{{ paySum }} 원</p>
        </div>
      </div>
    </div>
    <p class="estimate-info-text mt-18 mb-42">기본 법정수수료(소계) : {{ legalFee }}원 (VAT포함)</p>
    <div class="estimate-accordion open">
      <div class="estimate-accordion-top">
        <p class="estimate-accordion-top-title">견적서 안내문</p>
        <div class="estimate-accordion-top-right">
          <img src="/img/icon/expand-down-gray.svg" class="estimate-accordion-top-icon">
        </div>
      </div>
      <div class="estimate-accordion-contents">
        <p class="estimate-accordion-intro" v-html="estimateMemo"></p>
      </div>
    </div>
    <p class="estimate-charge-info">{{ registryFirmName }} (견적담당자 : {{ estimateChargerName }} )<br><a :href="`tel:${registryFirmPhone}`">T. {{ registryFirmPhone }}</a></p>
  </div>
</template>
<script setup>
import { onMounted, computed } from 'vue'
import { useDetailCaseStore } from '~/store/case/detailCase.js'
import { isEmpty, rexFormatPhone } from '@priros/common/assets/js/utils.js'
import { bankSVG } from '@priros/common/assets/js/case/bankSVG.js'

const props = defineProps({
  tradeCaseId: {
    type: String,
    default: ''
  }
})
const detailCaseStore = useDetailCaseStore()

onMounted(() => {
  detailCaseStore.fetchDetailEstimate(props.tradeCaseId)
})

// 견적 요약 정보
const taxAndPaySum = computed(() =>
  !isEmpty(detailCaseStore.fetcehdEstimate.summary) ?
    Number(detailCaseStore.fetcehdEstimate.summary.taxAndPaySum).toLocaleString() : ''
)
const estimateAccount = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.summary) ?
  detailCaseStore.fetcehdEstimate.summary.estimateAccount : ''
)
const bankName = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.summary) ? 
    bankSVG[detailCaseStore.fetcehdEstimate.summary.venderId].title : ''
)
const mortgageLoan = computed(() =>
  !isEmpty(detailCaseStore.fetcehdEstimate.summary) ? 
      Number(detailCaseStore.fetcehdEstimate.summary.mortgageLoan).toLocaleString() : ''
)
const mortgageExecution = computed(() =>
  !isEmpty(detailCaseStore.fetcehdEstimate.summary) ? 
      Number(detailCaseStore.fetcehdEstimate.summary.mortgageExecution).toLocaleString() : ''
)
const summaryCreated = computed(() =>
  !isEmpty(detailCaseStore.fetcehdEstimate.summary) ? 
      detailCaseStore.fetcehdEstimate.summary.created : ''
)

// 사건정보
const estateAddr = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.tradeCaseInfo) ?
    `${detailCaseStore.fetcehdEstimate.tradeCaseInfo.estateAddr} ${detailCaseStore.fetcehdEstimate.tradeCaseInfo.estateRestAddr}` : ''
)
const buyer = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.tradeCaseInfo) ?
    detailCaseStore.fetcehdEstimate.tradeCaseInfo.buyer.join(', ') : ''
)
const estateCondition = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.tradeCaseInfo) ?
    detailCaseStore.fetcehdEstimate.tradeCaseInfo.estateCondition : ''
)
const farmTaxApply = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.tradeCaseInfo) ?
    detailCaseStore.fetcehdEstimate.tradeCaseInfo.farmTaxApply : ''
)
const tradePrice = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.tradeCaseInfo) ?
    Number(detailCaseStore.fetcehdEstimate.tradeCaseInfo.tradePrice).toLocaleString() : ''
)
const estimatePrice = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.tradeCaseInfo) ?
    Number(detailCaseStore.fetcehdEstimate.tradeCaseInfo.estimatePrice).toLocaleString() : ''
)
const estimateBond = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.tradeCaseInfo) ?
    Number(detailCaseStore.fetcehdEstimate.tradeCaseInfo.estimateBond).toLocaleString() : ''
)

// 제세공과금
const taxSum = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.taxesAndDues) ?
    Number(detailCaseStore.fetcehdEstimate.taxesAndDues.taxSum).toLocaleString() : ''
)
const regTax = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.taxesAndDues) ?
    Number(detailCaseStore.fetcehdEstimate.taxesAndDues.regTax).toLocaleString() : ''
)
const eduTax = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.taxesAndDues) ?
    Number(detailCaseStore.fetcehdEstimate.taxesAndDues.eduTax).toLocaleString() : ''
)
const farmTax = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.taxesAndDues) ?
    Number(detailCaseStore.fetcehdEstimate.taxesAndDues.farmTax).toLocaleString() : ''
)
const goveStamp = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.taxesAndDues) ?
    Number(detailCaseStore.fetcehdEstimate.taxesAndDues.goveStamp).toLocaleString() : ''
)
const courtStamp = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.taxesAndDues) ?
    Number(detailCaseStore.fetcehdEstimate.taxesAndDues.courtStamp).toLocaleString() : ''
)
const bondPay = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.taxesAndDues) ?
    Number(detailCaseStore.fetcehdEstimate.taxesAndDues.bondPay).toLocaleString() : ''
)

// 수수료
const paySum = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.fee) ?
    Number(detailCaseStore.fetcehdEstimate.fee.paySum).toLocaleString() : ''
)
const discountedLegalPay = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.fee) ?
    Number(detailCaseStore.fetcehdEstimate.fee.discountedLegalPay).toLocaleString() : ''
)
const rtmsApplyPay = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.fee) ?
    Number(detailCaseStore.fetcehdEstimate.fee.rtmsApplyPay).toLocaleString() : ''
)
const multiPay = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.fee) ?
    Number(detailCaseStore.fetcehdEstimate.fee.multiPay).toLocaleString() : ''
)
const payedPaySum = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.fee) ?
    Number(detailCaseStore.fetcehdEstimate.fee.payedPaySum).toLocaleString() : ''
)
const vatLegalPay = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.fee) ?
    Number(detailCaseStore.fetcehdEstimate.fee.vatLegalPay).toLocaleString() : ''
)
const legalFee = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.fee) ?
    Number(detailCaseStore.fetcehdEstimate.fee.legalFee).toLocaleString() : ''
)

// 견적서 안내문
const estimateMemo = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.info) ?
    detailCaseStore.fetcehdEstimate.info.estimateMemo.replace(/\r\n/gi, '<br>') : '-'
)
const registryFirmName = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.info) ?
    detailCaseStore.fetcehdEstimate.info.registryFirmName : ''
)
const estimateChargerName = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.info) ?
    detailCaseStore.fetcehdEstimate.info.estimateChargerName : ''
)
const registryFirmPhone = computed(() => 
  !isEmpty(detailCaseStore.fetcehdEstimate.info) ?
  rexFormatPhone(detailCaseStore.fetcehdEstimate.info.registryFirmPhone) : ''
)
</script>
<style scoped lang="scss">
.estimate-container {
  padding: 20px 16px 58px;
  .estimate-accordion {
    box-shadow: 0px 4px 10px 0px #00000026;
    & + .estimate-accordion {
      margin-top: 24px;
    }
    &.open {
      .estimate-accordion-contents {
        padding: 34px 24px 48px;
        max-height: 999px;
      }
    }
  }
  .estimate-accordion-top {
    height: 47px;
    background-color: #f2f2f2;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .estimate-accordion-top-title {
    font-size: 14px;
    font-weight: $ft-semibold;
    line-height: 19px;
  }
  .estimate-accordion-top-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
  }
  .estimate-accordion-top-amount {
    text-align: right;
  }
  .estimate-accordion-top-icon {
    width: 12px;
    height: 12px;
    margin-top: 2px;
  }
  .estimate-accordion-contents {
    padding: 0 24px;
    overflow: hidden;
    max-height: 0;
    transition: all .3s ease-in-out;
  }
  .estimate-accordion-contents-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 6px;
    &.pd-sm {
      padding: 24px 0;
    }
  }
  .estimate-accordion-contents-title {
    font-size: 14px;
    color: #6d7278;
    text-align: left;
    line-height: 19px;
  }
  .estimate-accordion-contents-text {
    font-size: 14px;
    text-align: right;
    line-height: 19px;
  }
  .estimate-info-text {
    font-size: 14px;
    font-weight: $ft-medium;
    line-height: 20px;
    color: #6f6f6f;
    text-align: left;
    & + .estimate-info-text{
      margin-top: 4px;
    }
    &.mt-18 {
      margin-top: 18px;
    }
    &.mb-18 {
      margin-bottom: 18px;
    }
    &.mb-42 {
      margin-bottom: 42px;
    }
  }
  .estimate-accordion-object-title {
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px dotted #979797;
    font-size: 12px;
    line-height: 17px;
    text-align: left;
    color: #6d7278;
  }
  .estimate-accordion-object-address {
    font-size: 12px;
    font-weight: $ft-medium;
    line-height: 20px;
    text-align: left;
    margin-bottom: 32px;
  }
  .estimate-accordion-total {
    padding-top: 12px;
    border-top: 1px dotted #979797;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .estimate-accordion-total-title {
      font-size: 14px;
      line-height: 19px;
    }
    .estimate-accordion-total-amount {
      font-size: 14px;
      font-weight: $ft-bold;
    }
  }
  .estimate-accordion-intro {
    font-size: 14px;
    font-weight: $ft-medium;
    text-align: left;
    line-height: 20px;
    &.mt-24 {
      margin-top: 24px;
    }
    &.mb-24 {
      margin-bottom: 24px;
    }
  }
  .estimate-charge-info {
    margin-top: 32px;
    font-size: 14px;
    line-height: 20px;
    color: #6f6f6f;
    a{
      color: #6f6f6f;
      text-decoration: none;
    }
  }
}
</style>