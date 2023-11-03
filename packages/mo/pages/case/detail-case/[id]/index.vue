<template>
  <NuxtLayout name="dialog-header" headerTitle="사건상세정보">
    <div class="detail-case-top-container">
      <div class="detail-case-table">
        <div class="detail-case-table-header">진행상태</div>
        <div class="detail-case-table-contents flex-spacebetween ft-14 ft-bold">{{detailCaseStore.fetchedDetailCase['state']}} <button class="detail-case-button" @click="toggleEstimateModalShow">견적확인</button></div>
        <div class="detail-case-table-header">담당자/방문담당자</div>
        <div class="detail-case-table-contents">{{detailCaseStore.fetchedDetailCase['charge']}}/{{detailCaseStore.fetchedDetailCase['visitCharge']}}</div>
        <div class="detail-case-table-header">잔금일/잔금시간</div>
        <div class="detail-case-table-contents">{{ balanceDate }} / {{ balanceTime }}</div>
        <div class="detail-case-table-header">접수일/접수번호</div>
        <div class="detail-case-table-contents">{{detailCaseStore.fetchedDetailCase['receptionDate']}} / {{detailCaseStore.fetchedDetailCase['receptionUid']}}</div>
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
        <DetailCaseStatusCard v-for="(status, index) in detailCaseStore.fetchedDetailCase['status']" :key="index" :statusConfig="status" :trade-case-id="route.params.id" />
      </div>
    </div>
    <div class="detail-case-title-container">
      <p class="detail-case-title">상세정보</p>
      <button class="detail-case-button button--gray">거래정보 VC</button>
    </div>
    <div class="detail-case-info-container">
      <div class="detail-case-table pd">
        <div class="detail-case-table-header">목적물</div>
        <div class="detail-case-table-contents ft-14">{{ detailCaseStore.fetchedDetailCase['address'] }}</div>
        <div class="detail-case-table-header">관할등기소</div>
        <div class="detail-case-table-contents flex-column pt-0">
          <p class="detail-case-table-contents-warning">! 필증우편금지 !</p>
          {{ detailCaseStore.fetchedDetailCase['competentRegOffice'] }}
        </div>
        <div class="detail-case-table-header">계약서</div>
        <div class="detail-case-table-contents flex-spacebetween">매매계약서 <button class="detail-case-button" @click="toggleContactModalShow">확인</button></div>
        <div class="detail-case-table-header">매매대금</div>
        <div class="detail-case-table-contents">{{ salesPrice }}원</div>
        <div class="detail-case-table-header">상환여부</div>
        <div class="detail-case-table-contents">{{ repaymentStatus }}</div>
        <div class="detail-case-table-header">매수인</div>
        <div class="detail-case-table-contents">{{ detailCaseStore.fetchedDetailCase['buyer'] }}</div>
        <div class="detail-case-table-header">휴대폰번호</div>
        <div class="detail-case-table-contents">{{ detailCaseStore.fetchedDetailCase['phone'] }}</div>
        <div class="detail-case-table-header">이메일주소</div>
        <div class="detail-case-table-contents">{{ detailCaseStore.fetchedDetailCase['email'] }}</div>
        <div class="detail-case-table-header">대출기관</div>
        <div class="detail-case-table-contents">{{ detailCaseStore.fetchedDetailCase['lendingBank'] }}</div>
        <div class="detail-case-table-header">상품명</div>
        <div class="detail-case-table-contents">{{ detailCaseStore.fetchedDetailCase['lendingName'] }}</div>
        <div class="detail-case-table-header">대출금</div>
        <div class="detail-case-table-contents">{{ lendingAmount }}원</div>
        <div class="detail-case-table-header">설정대리인</div>
        <div class="detail-case-table-contents flex-spacebetween">{{ eataAgentCharge }} <button class="detail-case-button" @click="toggleConfigAgentModalShow">확인</button></div>
        <div class="detail-case-table-header">등록기관</div>
        <div class="detail-case-table-contents flex-spacebetween">{{ regAuth }} <button class="detail-case-button" @click="toggleRegistrarModalShow">확인</button></div>
        <div class="detail-case-table-header">배상책임보험</div>
        <div class="detail-case-table-contents">{{ liabilityInsurance }}</div>
        <div class="detail-case-table-header">보험료</div>
        <div class="detail-case-table-contents">{{ insurnaceFee }}원</div>
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
      <DetailCaseRegAuthCard />
      <button class="info-modal-button" @click="toggleRegistrarModalShow">확인</button>
    </CommonBlackTitleModal>
    <CommonBlackTitleModal v-if="isEstimateModalShow" title="견적확인" @handler-click-close="toggleEstimateModalShow">
      <DetailCaseEstimateCard />
      <button class="info-modal-button" @click="toggleEstimateModalShow">확인</button>
    </CommonBlackTitleModal>
  </NuxtLayout>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDetailCaseStore } from '@priros/common/store/case/detail.js'

import CommonBlackTitleModal from '~/components/modal/CommonBlackTitleModal.vue'
import DetailCaseStatusCard from '~/components/card/DetailCaseStatusCard.vue'
import DetailCaseChangedTable from '@priros/common/components/table/DetailCaseChangedTable.vue'
import DetailCaseMemoTable from '@priros/common/components/table/DetailCaseMemoTable.vue'
import DetailCaseProcessedTable from '@priros/common/components/table/DetailCaseProcessedTable.vue'
import DetailCaseFilesTable from '@priros/common/components/table/DetailCaseFilesTable.vue'
import DetailCaseInfoCard from '~/components/card/DetailCaseInfoCard.vue'
import DetailCaseRegAuthCard from '~/components/card/DetailCaseRegAuthCard.vue'
import DetailCaseEstimateCard from '~/components/card/DetailCaseEstimateCard.vue'

import { isEmpty, changeTimeFormatAmPm } from '@priros/common/assets/js/utils.js'

definePageMeta({
  layout: false
})

const route = useRoute()
const detailCaseStore = useDetailCaseStore()

onMounted(() => {
  console.log(route.params.id)
  detailCaseStore.fetchDetailCase()
  detailCaseStore.fetchChangedList()
  detailCaseStore.fetchMemoList()
  detailCaseStore.fetchProcessedList()
  detailCaseStore.fetchFilesList()
})

const balanceDate = computed(() => 
  !isEmpty(detailCaseStore.fetchedDetailCase.balanceDate) ? detailCaseStore.fetchedDetailCase.balanceDate.split(' ')[0] : ''
)
const balanceTime = computed(() => 
  !isEmpty(detailCaseStore.fetchedDetailCase.balanceDate) ? changeTimeFormatAmPm(detailCaseStore.fetchedDetailCase.balanceDate.split(' ')[1]) : ''
)
const salesPrice = computed(() => 
  !isEmpty(detailCaseStore.fetchedDetailCase.salesPrice) ? detailCaseStore.fetchedDetailCase.salesPrice.toLocaleString() : ''
)
const repaymentStatus = computed(() => 
  detailCaseStore.fetchedDetailCase.repaymentStatus === 'Y' ? '상환있음' : '싱환없음'
)
const lendingAmount = computed(() => 
  !isEmpty(detailCaseStore.fetchedDetailCase.lendingAmount) ? detailCaseStore.fetchedDetailCase.lendingAmount.toLocaleString() : ''
)
const eataAgentCharge = computed(() =>
  !isEmpty(detailCaseStore.fetchedDetailCase.estaAgent) ? detailCaseStore.fetchedDetailCase.estaAgent.charge : ''
)
const regAuth = computed(() =>
  !isEmpty(detailCaseStore.fetchedDetailCase.regAuth) ? detailCaseStore.fetchedDetailCase.regAuth.name : ''
)
const liabilityInsurance = computed(() => 
  detailCaseStore.fetchedDetailCase.liabilityInsurance === 'Y' ? '가입대상' : '가입비대상'
)
const insurnaceFee = computed(() => 
!isEmpty(detailCaseStore.fetchedDetailCase.insurnaceFee) ? detailCaseStore.fetchedDetailCase.insurnaceFee.toLocaleString() : ''
)

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
@import '@priros/common/assets/scss/detail-case/index.scss';
</style>