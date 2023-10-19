<template>
  <div class="detail-case-top-container">
    <p class="detail-case-top-title">사건상세정보</p>
    <div class="detail-case-table">
      <div class="detail-case-table-header">진행상태</div>
      <div class="detail-case-table-contents flex-spacebetween ft-14 ft-bold">견적보고 <button class="detail-case-button" @click="toggleEstimateModalShow">견적확인</button></div>
      <div class="detail-case-table-header">담당자/방문담당자</div>
      <div class="detail-case-table-contents">조성화/다이렉트로 오택상TL</div>
      <div class="detail-case-table-header">잔금일/잔금시간</div>
      <div class="detail-case-table-contents">2023-09-10 / 오후 12시 20분</div>
      <div class="detail-case-table-header">접수일/접수번호</div>
      <div class="detail-case-table-contents">2023-09-01 / 1234-f1</div>
    </div>
  </div>
  <div class="detail-case-status-container">
    <div class="detail-case-title-container bb">
      <div class="detail-case-title-left">
        <p class="detail-case-title">진행상태</p>
        <button class="detail-case-button button--disabled">수임철회</button>
      </div>
      <button class="detail-case-button button--gray">매수인/매도인 등록</button>
    </div>
    <div class="detail-case-status-card-container">
      <DetailCaseStatusCard v-for="(status, index) in detailCaseStatus" :key="index" :statusConfig="status" />
    </div>
  </div>
  <div class="detail-case-title-container">
    <p class="detail-case-title">상세정보</p>
    <button class="detail-case-button button--gray">거래정보 VC</button>
  </div>
  <div class="detail-case-info-container">
    <div class="detail-case-table pd">
      <div class="detail-case-table-header">목적물</div>
      <div class="detail-case-table-contents ft-14">경기도 과천시 갈현동 135 과천 푸르지오 벨라르테103단지 1310호</div>
      <div class="detail-case-table-header">관할등기소</div>
      <div class="detail-case-table-contents flex-column pt-0">
        <p class="detail-case-table-contents-warning">! 필증우편금지 !</p>
        수원지방법원 안양지원 안양등기소
      </div>
      <div class="detail-case-table-header">계약서</div>
      <div class="detail-case-table-contents flex-spacebetween">매매계약서 <button class="detail-case-button" @click="toggleContactModalShow">확인</button></div>
      <div class="detail-case-table-header">매매대금</div>
      <div class="detail-case-table-contents">875,000,000원</div>
      <div class="detail-case-table-header">상환여부</div>
      <div class="detail-case-table-contents">상환있음</div>
      <div class="detail-case-table-header">매수인</div>
      <div class="detail-case-table-contents">유재석</div>
      <div class="detail-case-table-header">휴대폰번호</div>
      <div class="detail-case-table-contents">010-4545-4545</div>
      <div class="detail-case-table-header">이메일주소</div>
      <div class="detail-case-table-contents"></div>
      <div class="detail-case-table-header">대출기관</div>
      <div class="detail-case-table-contents">카카오뱅크</div>
      <div class="detail-case-table-header">상품명</div>
      <div class="detail-case-table-contents">일반주담대</div>
      <div class="detail-case-table-header">대출금</div>
      <div class="detail-case-table-contents">250,000,000원</div>
      <div class="detail-case-table-header">설정대리인</div>
      <div class="detail-case-table-contents flex-spacebetween">박명수 법무사 <button class="detail-case-button" @click="toggleConfigAgentModalShow">확인</button></div>
      <div class="detail-case-table-header">등록기관</div>
      <div class="detail-case-table-contents flex-spacebetween">국민은행 <button class="detail-case-button" @click="toggleRegistrarModalShow">확인</button></div>
      <div class="detail-case-table-header">배상책임보험</div>
      <div class="detail-case-table-contents">가입대상</div>
      <div class="detail-case-table-header">보험료</div>
      <div class="detail-case-table-contents">15,000원</div>
      <div class="detail-case-table-header">등기신청서 작성정보</div>
      <div class="detail-case-table-contents flex-column flex-align-start">
        <button class="detail-case-button">등기필정보 보완보고</button>
        <textarea placeholder="등기신청서 작성 ID 및 작성번호를 입력하세요. (매도인별 식별번호 뒷자리 입력으로 대체 가능)"></textarea>
        <div class="detail-case-table-edit-button">
          <button><img src="/img/icon/edit-gray.svg">입력완료</button>
        </div>
      </div>
    </div>
  </div>
  <div class="detail-case-bottom-container">
    <div class="detail-case-bottom-tabs">
      <p class="detail-case-bottom-tab" :class="{active: tab === 'changed'}" @click="handlerClickTab('changed')">변경내역</p>
      <p class="detail-case-bottom-tab" :class="{active: tab === 'memo'}" @click="handlerClickTab('memo')">메모</p>
      <p class="detail-case-bottom-tab" :class="{active: tab === 'processed'}" @click="handlerClickTab('processed')">처리내역</p>
      <p class="detail-case-bottom-tab" :class="{active: tab === 'files'}" @click="handlerClickTab('files')">첨부파일</p>
    </div>
    <div class="detail-case-bottom-table">
      <DetailCaseChangedTable v-if="tab === 'changed'" />
      <DetailCaseMemoTable v-if="tab === 'memo'" />
      <DetailCaseProcessedTable v-if="tab === 'processed'" />
      <DetailCaseFilesTable v-if="tab === 'files'" />
    </div>
  </div>
  <CommonBlackTitleModal v-if="isContractModalShow" title="매매계약서" @handler-click-close="toggleContactModalShow">
    <div class="contract-container">
      <img class="contract-preview" src="/img/case/contract.png" alt>
      <button class="contract-button">
        <img src="/img/icon/download-gray.svg" alt>
        원본파일 다운로드
      </button>
    </div>
  </CommonBlackTitleModal>
  <CommonBlackTitleModal v-if="isConfigAgentModalShow" title="설정대리인 정보확인" @handler-click-close="toggleConfigAgentModalShow">
    <DetailCaseInfoCard />
    <button class="info-modal-button" @click="toggleConfigAgentModalShow">확인</button>
  </CommonBlackTitleModal>
  <CommonBlackTitleModal v-if="isRegistrarModalShow" title="등록기관 정보확인" @handler-click-close="toggleRegistrarModalShow">
    <DetailCaseInfoCard />
    <button class="info-modal-button" @click="toggleRegistrarModalShow">확인</button>
  </CommonBlackTitleModal>
  <CommonBlackTitleModal v-if="isEstimateModalShow" title="견적확인" @handler-click-close="toggleEstimateModalShow">
    <DetailCaseEstimateCard />
    <button class="info-modal-button" @click="toggleEstimateModalShow">확인</button>
  </CommonBlackTitleModal>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import CommonBlackTitleModal from '~/components/modal/CommonBlackTitleModal.vue'
import DetailCaseStatusCard from '~/components/card/DetailCaseStatusCard.vue'
import DetailCaseChangedTable from '~/components/table/DetailCaseChangedTable.vue'
import DetailCaseMemoTable from '~/components/table/DetailCaseMemoTable.vue'
import DetailCaseProcessedTable from '~/components/table/DetailCaseProcessedTable.vue'
import DetailCaseFilesTable from '~/components/table/DetailCaseFilesTable.vue'
import DetailCaseInfoCard from '~/components/card/DetailCaseInfoCard.vue'
import DetailCaseEstimateCard from '~/components/card/DetailCaseEstimateCard.vue'

import { detailCaseStatus } from '~/assets/js/case/detailCaseStatus'

const route = useRoute()

onMounted(() => {
  console.log(route.params.id)
})

const tab = ref('changed')
const handlerClickTab = (v) => {
  tab.value = v
}

const isContractModalShow = ref(false)
const toggleContactModalShow = () => {
  isContractModalShow.value = !isContractModalShow.value
}
const isConfigAgentModalShow = ref(false)
const toggleConfigAgentModalShow = () => {
  isConfigAgentModalShow.value = !isConfigAgentModalShow.value
}
const isRegistrarModalShow = ref(false)
const toggleRegistrarModalShow = () => {
  isRegistrarModalShow.value = !isRegistrarModalShow.value
}
const isEstimateModalShow = ref(false)
const toggleEstimateModalShow = () => {
  isEstimateModalShow.value = !isEstimateModalShow.value
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/detail-case/index.scss';
</style>