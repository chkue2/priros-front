<template>
  <div class="market-container">
    <div class="market-nav">마켓의뢰 > 매칭 > 사건상세정보</div>
    <div class="market-write-type">
      <div class="type-item active">
        <span class="type-item-top">보고를 완료했어요</span>
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>견적보고</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
      <div class="type-item active">
        <span class="type-item-top">보고를 완료했어요</span>
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>담당자보고</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
      <div class="type-item active">
        <span class="type-item-top">보고를 완료했어요</span>
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>일정보고</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
      <div class="type-item">
        <span class="type-item-top">클릭하여 진행하기</span>
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>일정보고</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
      <div class="type-item">
        <span class="type-item-top">클릭하여 진행하기</span>
        <div class="type-item-bottom">
          <i><img src="/img/icon/check-white.svg"></i>
          <span>접수보고</span>
          <img src="/img/icon/expand-right-black.svg">
        </div>
      </div>
    </div>
    <div class="market-detail-info">
      <div class="info-header">진행상태</div>
      <div class="info-contents contents-3">
        견적보고
        <div class="info-contents-buttons">
          <button @click="toggleCostCalculationModal">설정비용</button>
          <button>견적보기</button>
        </div>
      </div>
      <div class="info-header">이전대리인</div>
      <div class="info-contents contents-3">
        다이렉트로 합동 법무사무소
        <div class="info-contents-buttons">
          <button>대리인 정보</button>
        </div>
      </div>
      <div class="info-header">잔금일</div>
      <div class="info-contents">2023-09-15</div>
      <div class="info-header">잔금 시간</div>
      <div class="info-contents"></div>
      <div class="info-header">접수일</div>
      <div class="info-contents"></div>
      <div class="info-header">접수번호</div>
      <div class="info-contents"></div>
    </div>
    <div class="market-form">
      <div class="market-form-column">
        <div class="form-title">
          <span>목적물 <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <div class="form-input read-only" style="width: 468px;">
            <input type="text" readonly style="width: 70%;">
            <button class="address-search-button" @click="toggleSearchAddressModal">
              주소검색 <img src="/img/icon/search-black.svg">
            </button>
          </div>
          <p class="form-subtitle">상세주소</p>
          <div class="form-input" style="width: 398px;">
            <input type="text">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>계약서 <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 468px;">
            <input type="file">
            <input type="text" readonly style="width: 90%;">
            <img src="/img/icon/file-gray.png" class="form-file">
          </div>
          <button class="black-button" @click="toggleFilePreviewModal">
            파일보기
          </button>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>매매대금 <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 468px;">
            <input type="text" style="width: 100%;">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>매수인 <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 159px;">
            <input type="text" style="width: 100%;">
          </div>
          <button class="black-button" @click="toggleAdditionalBuyerModal">
            + 공동 매수인
          </button>
          <p class="form-help-text">매수인이 2인 이상인 경우, 공동 매수인 기능을 사용하여 추가 및 수정하세요</p>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>잔금일 <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 271px;">
            <input type="date" style="width: 100%;">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>매칭지연 기준일 <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <select style="width: 222px;"><option value="">직접 선택</option></select>
          <div class="form-input" style="width: 271px;">
            <input type="date" style="width: 100%;">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>휴대폰번호(알림수신용) <b class="red-point">*</b></span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 467px;">
            <input type="tel" style="width: 100%;">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>이메일주소</span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 467px;">
            <input type="email" style="width: 100%;">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>대출기관</span>
        </div>
        <div class="form-contents">
          <select style="width: 222px;"><option value="">직접 선택</option></select>
          <div class="form-tag">#일반주담</div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>대출금 / 상환여부</span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 468px;">
            <input type="text" style="width: 100%;">
          </div>
          <select style="width: 222px;"><option value="">직접 선택</option></select>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>설정대리인</span>
          <button @click="toggleTransferAgentInfoModal">정보보기</button>
        </div>
        <div class="form-contents">
          <select style="width: 267px;"><option value="">직접 선택</option></select>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>배상책임보험 / 보험료</span>
        </div>
        <div class="form-contents">
          <select style="width: 222px;"><option value="">직접 선택</option></select>
          <div class="form-input read-only" style="width: 345px;">
            <input type="text" style="width: 100%;" readonly>
          </div>
          <p class="form-help-text">보상한도는 이 사건 대출금액과 같습니다</p>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>이전대리인</span>
          <button @click="toggleTransferAgentInfoModal">정보보기</button>
        </div>
        <div class="form-contents">
          <div class="form-input read-only" style="width: 266px;">
            <input type="text" style="width: 100%;" readonly>
          </div>
          <button class="white-button" @click="toggleSearchTransferAgentModal">이전대리인 지정</button>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>은행관리번호</span>
        </div>
        <div class="form-contents">
          <div class="form-input" style="width: 468px;">
            <input type="text" style="width: 100%;">
          </div>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>상품명</span>
        </div>
        <div class="form-contents">
          <select style="width: 267px;"><option value="">직접 선택</option></select>
        </div>
      </div>
      <div class="market-form-column">
        <div class="form-title">
          <span>전달사항</span>
        </div>
        <div class="form-contents">
          <div class="form-area">
            <textarea ></textarea>
            <p class="area-length">0 / 400</p>
          </div>
        </div>
      </div>
    </div>
    <div class="market-buttons">
      <button class="button--gray">등록 취소</button>
      <button class="button--black">저장하기</button>
    </div>
    <MarketTabs @click-tab="handlerClickTab" />
    <div class="market-tables">
      <DetailCaseChangedTable v-if="tab === 'changed'" />
      <DetailCaseMemoTable v-if="tab === 'memo'" />
      <DetailCaseProcessedTable v-if="tab === 'processed'" />
      <DetailCaseFilesTable v-if="tab === 'files'" />
    </div>
  </div>
  <SearchAddressModal v-if="isSearchAddressModalShow" @close-modal="toggleSearchAddressModal" />
  <FilePreviewModal v-if="isFilePreviewModalShow" @close-modal="toggleFilePreviewModal" />
  <AdditionalBuyerModal v-if="isAdditionalBuyerModalShow" @close-modal="toggleAdditionalBuyerModal" />
  <SearchTransferAgentModal v-if="isSearchTransferAgentModalSHow" @close-modal="toggleSearchTransferAgentModal" />
  <TransferAgentInfoModal v-if="isTransferAgentInfoModalShow" @close-modal="toggleTransferAgentInfoModal" />
  <CostCalculationModal v-if="isCostCalculationModalShow" @close-modal="toggleCostCalculationModal" />
  <RegAuthorityInfoModal v-if="isRegAuthoirtyInfoModalShow" @close-modal="toggleRegAuthorityInfoModal" />
  <RepaymentScheduleModal v-if="isRepaymentScheduleModalShow" @close-modal="toggleRepaymentScheduleModal" />
</template>

<script setup>
import { ref } from 'vue'

import MarketTabs from '~/components/tab/MarketTabs.vue'
import DetailCaseChangedTable from '@priros/common/components/table/DetailCaseChangedTable.vue'
import DetailCaseMemoTable from '@priros/common/components/table/DetailCaseMemoTable.vue'
import DetailCaseProcessedTable from '@priros/common/components/table/DetailCaseProcessedTable.vue'
import DetailCaseFilesTable from '@priros/common/components/table/DetailCaseFilesTable.vue'
import SearchAddressModal from '~/components/modal/market/SearchAddressModal.vue'
import FilePreviewModal from '~/components/modal/market/FilePreviewModal.vue'
import AdditionalBuyerModal from '~/components/modal/market/AdditionalBuyerModal.vue'
import SearchTransferAgentModal from '~/components/modal/market/SearchTransferAgentModal.vue'
import TransferAgentInfoModal from '~/components/modal/market/TransferAgentInfoModal.vue'
import CostCalculationModal from '~/components/modal/market/CostCalculationModal.vue'
import RegAuthorityInfoModal from '~/components/modal/market/RegAuthorityInfoModal.vue'
import RepaymentScheduleModal from '~/components/modal/market/RepaymentScheduleModal.vue'

const tab = ref('changed')
const handlerClickTab = (v) => {
  tab.value = v
}

const isSearchAddressModalShow = ref(false)
const toggleSearchAddressModal = () => {
  isSearchAddressModalShow.value = !isSearchAddressModalShow.value
}
const isFilePreviewModalShow = ref(false)
const toggleFilePreviewModal = () => {
  isFilePreviewModalShow.value = !isFilePreviewModalShow.value
}
const isAdditionalBuyerModalShow = ref(false)
const toggleAdditionalBuyerModal = () => {
  isAdditionalBuyerModalShow.value = !isAdditionalBuyerModalShow.value
}
const isSearchTransferAgentModalSHow = ref(false)
const toggleSearchTransferAgentModal = () => {
  isSearchTransferAgentModalSHow.value = !isSearchTransferAgentModalSHow.value
}
const isTransferAgentInfoModalShow = ref(false)
const toggleTransferAgentInfoModal = () => {
  isTransferAgentInfoModalShow.value = !isTransferAgentInfoModalShow.value
}
const isCostCalculationModalShow = ref(false)
const toggleCostCalculationModal = () => {
  isCostCalculationModalShow.value = !isCostCalculationModalShow.value
}
const isRegAuthoirtyInfoModalShow = ref(false)
const toggleRegAuthorityInfoModal = () => {
  isRegAuthoirtyInfoModalShow.value = !isRegAuthoirtyInfoModalShow.value
}
const isRepaymentScheduleModalShow = ref(false)
const toggleRepaymentScheduleModal = () => {
  isRepaymentScheduleModalShow.value = !isRepaymentScheduleModalShow.value
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/common.scss';
@import '~/assets/scss/market/write.scss';
.market-detail-info {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin: 105px 0 74px;
  border-top: 1px solid #bebebe;
  border-left: 1px solid #bebebe;
  & > div {
    border-bottom: 1px solid #bebebe;
    border-right: 1px solid #bebebe;
  }
  .info-header {
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    font-weight: $ft-semibold;
  }
  .info-contents {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    &.contents-3 {
      grid-column: 3 span;
    }
    .info-contents-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 44px;
        border-radius: 5px;
        border: 1px solid #000000;
        background-color: #ffffff;
        font-size: 16px;
        font-weight: $ft-medium;
        gap: 8px;
        padding: 0 20px;
        cursor: pointer;
        & + button {
          margin-left: 15px;
        }
        &::after {
          content: '';
          display: block;
          width: 7px;
          height: 9px;
          background: url(/img/icon/expand-right-black.svg) no-repeat center/cover;
          margin-bottom: 2px;
        }
      }
    }
  }
}
.market-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 60px 0 114px;
  & > button {
    width: 200px;
    height: 44px;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    font-weight: $ft-bold;
    color: #ffffff;
    cursor: pointer;
    &.button--gray {
      background-color: #ababab;
    }
    &.button--black {
      background-color: #000000;
    }
  }
}
</style>