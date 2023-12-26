<template>
  <NuxtLayout name="dialog-header" headerTitle="사건상세정보">
    <div class="detail-case-top-container">
      <div class="detail-case-table">
        <div class="detail-case-table-header">진행상태</div>
        <div class="detail-case-table-contents flex-spacebetween ft-14 ft-bold">
          {{statusText}} <button class="detail-case-button" @click="toggleEstimateModalShow">견적확인</button>
        </div>
        <div class="detail-case-table-header">담당자/방문담당자</div>
        <div class="detail-case-table-contents">
          {{detailCaseStore.fetchedDetailCase['chargerName']}}
          /
          {{detailCaseStore.fetchedDetailCase['acceptChargerName']}}
        </div>
        <div class="detail-case-table-header">잔금일/잔금시간</div>
        <div class="detail-case-table-contents">
          {{ issueDate }} / {{ issueTime }}
        </div>
        <div class="detail-case-table-header">접수일/접수번호</div>
        <div class="detail-case-table-contents">
          {{recevDate}} / {{detailCaseStore.fetchedDetailCase['recevNo']}}
        </div>
      </div>
    </div>
    <div class="detail-case-status-container">
      <div class="detail-case-title-container bb">
        <div class="detail-case-title-left">
          <p class="detail-case-title">진행상태</p>
          <button v-if="false" class="detail-case-button button--disabled">수임철회</button>
        </div>
        <button v-if="false" class="detail-case-button button--gray">매수인/매도인 등록</button>
      </div>
      <div class="detail-case-status-card-container">
        <DetailCaseStatusCard 
          v-for="(state, index) in status" :key="index"
          :statusConfig="state"
          :trade-case-id="route.params.id"
          :vender-id="detailCaseStore.fetchedDetailCase.venderId"
          @kakao-modal-show="toggleKaKaoRemitSendModalShow"
        />
      </div>
    </div>
    <div class="detail-case-title-container">
      <p class="detail-case-title">상세정보</p>
      <button v-if="false" class="detail-case-button button--gray">거래정보 VC</button>
    </div>
    <div class="detail-case-info-container">
      <div class="detail-case-table pd">
        <div class="detail-case-table-header">목적물</div>
        <div class="detail-case-table-contents ft-14">
          {{ detailCaseStore.fetchedDetailCase['estateAddr'] }} {{ detailCaseStore.fetchedDetailCase['estateRestAddr'] }}
        </div>
        <div class="detail-case-table-header">관할등기소</div>
        <div class="detail-case-table-contents flex-column flex-just-center" :class="[{'pt-0': ['W', 'F'].includes(detailCaseStore.fetchedDetailCase['registryOfficeOfWarning'])}]">
          <p v-if="detailCaseStore.fetchedDetailCase['registryOfficeOfWarning'] === 'W'" class="detail-case-table-contents-warning">! 필증우편금지 !</p>
          <p v-if="detailCaseStore.fetchedDetailCase['registryOfficeOfWarning'] === 'F'" class="detail-case-table-contents-warning warning--blue">! 필증보완빈번 !</p>
          {{ detailCaseStore.fetchedDetailCase['registryOfficeName'] }}
        </div>
        <div class="detail-case-table-header">계약서</div>
        <div class="detail-case-table-contents flex-spacebetween">
          {{contractFileText}} 
          <button v-if="detailCaseStore.fetchedDetailCase.contractFileFlag === 'Y'" class="detail-case-button" @click="contractModalOpen">확인</button>
        </div>
        <div class="detail-case-table-header">매매대금</div>
        <div class="detail-case-table-contents">{{ salesPrice }}원</div>
        <div class="detail-case-table-header">상환여부</div>
        <div class="detail-case-table-contents">{{ repaymentStatus }}</div>
        <div class="detail-case-table-header">매수인</div>
        <div class="detail-case-table-contents">{{ detailCaseStore.fetchedDetailCase['buyer'] }}</div>
        <div class="detail-case-table-header">휴대폰번호</div>
        <div class="detail-case-table-contents">{{ buyerPhone }}</div>
        <div class="detail-case-table-header">이메일주소</div>
        <div class="detail-case-table-contents">{{ detailCaseStore.fetchedDetailCase['buyerEmail'] }}</div>
        <div class="detail-case-table-header">대출기관</div>
        <div class="detail-case-table-contents">{{ bankName }}</div>
        <div class="detail-case-table-header">상품명</div>
        <div class="detail-case-table-contents">{{ product }}</div>
        <div class="detail-case-table-header">대출금</div>
        <div class="detail-case-table-contents">{{ mortgageLoan }}원</div>
        <div class="detail-case-table-header">설정대리인</div>
        <div class="detail-case-table-contents flex-spacebetween">
          {{ detailCaseStore.fetchedDetailCase['mortgageFirmName'] }} <button class="detail-case-button" @click="toggleConfigAgentModalShow">확인</button>
        </div>
        <div class="detail-case-table-header">등록기관</div>
        <div class="detail-case-table-contents flex-spacebetween">
          {{ detailCaseStore.fetchedDetailCase['registFirmName'] }} <button class="detail-case-button" @click="toggleRegistrarModalShow">확인</button>
        </div>
        <div class="detail-case-table-header">배상책임보험</div>
        <div class="detail-case-table-contents">{{ liabilityInsurance }}</div>
        <div class="detail-case-table-header">보험료</div>
        <div class="detail-case-table-contents">{{ insuranceAmt }}원</div>
        <div class="detail-case-table-header">등기신청서 작성정보</div>
        <div class="detail-case-table-contents flex-column flex-align-start">
          <button class="detail-case-button" @click="toggleSupplementationModalShow">등기필정보 보완보고</button>
          <textarea v-model="detailCaseStore.registrationApplication" placeholder="등기신청서 작성 ID 및 작성번호를 입력하세요. (매도인별 식별번호 뒷자리 입력으로 대체 가능)"></textarea>
          <div class="detail-case-table-edit-button">
            <button @click="handlerClickRegApplication"><img src="/img/icon/edit-gray.svg">입력완료</button>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-case-bottom-container">
      <div class="detail-case-bottom-tabs">
        <p class="detail-case-bottom-tab" 
          :class="{active: tab === 'changed'}"
          @click="handlerClickTab('changed')">
          변경내역
        </p>
        <p class="detail-case-bottom-tab"
          :class="{active: tab === 'memo'}"
          @click="handlerClickTab('memo')">
          메모
        </p>
        <p class="detail-case-bottom-tab" 
          :class="{active: tab === 'processed'}" 
          @click="handlerClickTab('processed')">
          처리내역
        </p>
        <p class="detail-case-bottom-tab" 
          :class="{active: tab === 'files'}" 
          @click="handlerClickTab('files')">
          첨부파일
        </p>
      </div>
      <div class="detail-case-bottom-table">
        <DetailCaseChangedTable v-if="tab === 'changed'" :trade-case-id="tradeCaseId" />
        <DetailCaseMemoTable v-if="tab === 'memo'" :trade-case-id="tradeCaseId" />
        <DetailCaseProcessedTable v-if="tab === 'processed'" :trade-case-id="tradeCaseId" />
        <DetailCaseFilesTable v-if="tab === 'files'" :trade-case-id="tradeCaseId" @file-view="documentFileView" />
      </div>
    </div>
    <CommonBlackTitleModal 
      v-if="isContractModalShow"
      title="매매계약서"
      @handler-click-close="toggleContractModalShow"
    >
      <div class="contract-container">
        <img class="contract-preview" :src="contractImageSrc" alt>
        <button v-if="!contractImageSrc.includes('empty-file')" class="contract-button" @click="contractImageDownload">
          <img src="/img/icon/download-gray.svg" alt>
          원본파일 다운로드
        </button>
      </div>
    </CommonBlackTitleModal>
    <CommonBlackTitleModal 
      v-if="isFilePreviewModalShow"
      title="파일 미리보기"
      @handler-click-close="toggleFilePreviewModalShow"
    >
      <div class="contract-container">
        <img class="contract-preview" :src="filePreviewImageSrc" alt>
        <button v-if="!filePreviewImageSrc.includes('empty-file')" class="contract-button" @click="documentFileDownload">
          <img src="/img/icon/download-gray.svg" alt>
          원본파일 다운로드
        </button>
      </div>
    </CommonBlackTitleModal>
    <CommonBlackTitleModal
      v-if="isConfigAgentModalShow"
      title="설정대리인 정보확인"
      @handler-click-close="toggleConfigAgentModalShow"
    >
      <DetailCaseInfoCard :trade-case-id="tradeCaseId" />
      <button class="info-modal-button" @click="toggleConfigAgentModalShow">확인</button>
    </CommonBlackTitleModal>
    <CommonBlackTitleModal
      v-if="isRegistrarModalShow"
      title="등록기관 정보확인"
      @handler-click-close="toggleRegistrarModalShow"
    >
      <DetailCaseRegAuthCard :trade-case-id="tradeCaseId" />
      <button class="info-modal-button" @click="toggleRegistrarModalShow">확인</button>
    </CommonBlackTitleModal>
    <CommonBlackTitleModal
      v-if="isEstimateModalShow"
      title="견적확인"
      @handler-click-close="toggleEstimateModalShow"
    >
      <DetailCaseEstimateCard :trade-case-id="tradeCaseId" />
      <button class="info-modal-button" @click="toggleEstimateModalShow">확인</button>
    </CommonBlackTitleModal>
    <CommonBlackTitleModal
      v-if="isSupplementationModalShow"
      title="등기필정보 보완"
      @handler-click-close="toggleSupplementationModalShow"
    >
      <SupplementationRegInfo :trade-case-id="tradeCaseId" @move-to-files-table="moveToFilesTable" @close-modal="toggleSupplementationModalShow" />
    </CommonBlackTitleModal>
    <CommonBlackTitleModal
      v-if="isKakaoRemitSendModalShow"
      title="카카오 송금요청"
      @handler-click-close="toggleKaKaoRemitSendModalShow"
    >
      <KakaoRemitForm :trade-case-id="tradeCaseId" @close-modal="toggleKaKaoRemitSendModalShow" @open-success-modal="toggleKakaoRemitSendSuccessModalShow" />
    </CommonBlackTitleModal>
    <CommonAlertModal
      v-if="isKakaoRemitSendSuccessModalShow"
      text="송금요청 완료<br><br>입금이 지연되는 경우 카카오뱅크에 문의하세요"
      @handler-click-button="toggleKakaoRemitSendSuccessModalShow"
    />
  </NuxtLayout>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDetailCaseStore } from '~/store/case/detailCase.js'

import CommonBlackTitleModal from '~/components/modal/CommonBlackTitleModal.vue'
import CommonAlertModal from '@priros/common/components/modal/CommonAlertModal.vue'
import DetailCaseStatusCard from '~/components/card/DetailCaseStatusCard.vue'
import DetailCaseChangedTable from '@priros/common/components/table/DetailCaseChangedTable.vue'
import DetailCaseMemoTable from '@priros/common/components/table/DetailCaseMemoTable.vue'
import DetailCaseProcessedTable from '@priros/common/components/table/DetailCaseProcessedTable.vue'
import DetailCaseFilesTable from '@priros/common/components/table/DetailCaseFilesTable.vue'
import DetailCaseInfoCard from '~/components/card/DetailCaseInfoCard.vue'
import DetailCaseRegAuthCard from '~/components/card/DetailCaseRegAuthCard.vue'
import DetailCaseEstimateCard from '~/components/card/DetailCaseEstimateCard.vue'
import SupplementationRegInfo from '~/components/form/SupplementationRegInfo.vue'
import KakaoRemitForm from '~/components/form/KakaoRemitForm.vue'

import { isEmpty, changeTimeFormatAmPm, changeTimeFormatAddDot, rexFormatPhone, fileDownload, fileDownloadBase64, filePreviewBase64Pdf } from '@priros/common/assets/js/utils.js'
import { bankSVG } from '@priros/common/assets/js/case/bankSVG.js'
import { caseStatus } from '@priros/common/assets/js/case/status.js'

definePageMeta({
  layout: false
})

const route = useRoute()
const detailCaseStore = useDetailCaseStore()
const tradeCaseId = route.params.id

onMounted(() => {
  detailCaseStore.fetchDetailCase(tradeCaseId)
  detailCaseStore.fetchHistory(tradeCaseId, 1)
})

const statusText = computed(() =>
  caseStatus[detailCaseStore.fetchedDetailCase.state]
)
const issueDate = computed(() => 
  !isEmpty(detailCaseStore.fetchedDetailCase.issueDate) ? detailCaseStore.fetchedDetailCase.issueDate.split('T')[0] : ''
)
const issueTime = computed(() => 
  changeTimeFormatAmPm(changeTimeFormatAddDot(detailCaseStore.fetchedDetailCase.issueTime))
)
const recevDate = computed(() => 
  !isEmpty(detailCaseStore.fetchedDetailCase.recevDate) ? 
    detailCaseStore.fetchedDetailCase.recevDate.split(' ')[0] : ''
)
const salesPrice = computed(() => 
  !isEmpty(detailCaseStore.fetchedDetailCase.tradePrice) ? 
    Number(detailCaseStore.fetchedDetailCase.tradePrice).toLocaleString() : ''
)
const buyerPhone = computed(() => 
  !isEmpty(detailCaseStore.fetchedDetailCase.buyerPhone) ?
    rexFormatPhone(detailCaseStore.fetchedDetailCase.buyerPhone) : ''
)
const bankName = computed(() => 
  !isEmpty(bankSVG[detailCaseStore.fetchedDetailCase.venderId]) ? 
    bankSVG[detailCaseStore.fetchedDetailCase.venderId].title : ''
)
const insuranceAmt = computed(() => 
  !isEmpty(detailCaseStore.fetchedDetailCase.insuranceAmt) ?
    Number(detailCaseStore.fetchedDetailCase.insuranceAmt).toLocaleString() : '0'
)
const repaymentStatus = computed(() => 
  detailCaseStore.fetchedDetailCase.repaymentStatus === 'Y' ? '상환있음' : '상환없음'
)
const mortgageLoan = computed(() => 
  !isEmpty(detailCaseStore.fetchedDetailCase.mortgageLoan) ? 
    Number(detailCaseStore.fetchedDetailCase.mortgageLoan).toLocaleString() : ''
)
const liabilityInsurance = computed(() => 
  detailCaseStore.fetchedDetailCase.insuranceYn === 'Y' ? '가입 대상' : '가입 비대상'
)
const contractFileText = computed(() => 
  detailCaseStore.fetchedDetailCase.contractFileFlag === 'Y' ? '매매계약서' : '매매계약서가 없습니다'
)

const product = computed(() => {
  switch(detailCaseStore.fetchedDetailCase.productCode) {
    case '1':
      return '일반주담대'
    case '2':
      return '보금자리론'
    case '3':
      return '개인사업자주택담보대출'
    default:
      return ''
  }
})

const status = computed(() => {
  const state = ['담당자 보고', '일정 보고', '송금요청', '신청정보보고', '상환보고', '접수보고']
  return state.map(s => {
    return {
      title: s,
      state: statusForFetchedDetailCase(s) === 'Y' ? '완료' : '대기'
    }
  })
})

const statusForFetchedDetailCase = (state) => {
  switch(state) {
    case '담당자 보고':
      return detailCaseStore.fetchedDetailCase.estimateFlag
    case '일정 보고':
      return detailCaseStore.fetchedDetailCase.issueTimeFlag
    case '송금요청':
      return detailCaseStore.fetchedDetailCase.remitFlag
    case '신청정보보고':
      return detailCaseStore.fetchedDetailCase.requestReportFlag
    case '상환보고':
      return detailCaseStore.fetchedDetailCase.repayReportFlag
    case '접수보고':
      return detailCaseStore.fetchedDetailCase.receiveFlag
    default:
      return 'Y'
  }
}

const tab = ref('changed')
const handlerClickTab = (v) => {
  tab.value = v
  if(v === 'changed') {
    detailCaseStore.fetchHistory(tradeCaseId, 1)
  } else if(v === 'memo') {
    detailCaseStore.fetchMemo(tradeCaseId, 1)
  } else if(v === 'processed') {
    detailCaseStore.fetchHistoryTr(tradeCaseId, 1)
  } else if(v === 'files') {
    detailCaseStore.fetchDocument(tradeCaseId, 1)
  }
}

const isContractModalShow = ref(false)
const toggleContractModalShow = () => {
  isContractModalShow.value = !isContractModalShow.value
}
const isFilePreviewModalShow = ref(false)
const toggleFilePreviewModalShow = () => {
  isFilePreviewModalShow.value = !isFilePreviewModalShow.value
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
const isSupplementationModalShow = ref(false)
const toggleSupplementationModalShow = () => {
  isSupplementationModalShow.value = !isSupplementationModalShow.value
}
const isKakaoRemitSendModalShow = ref(false)
const toggleKaKaoRemitSendModalShow = () => {
  isKakaoRemitSendModalShow.value = !isKakaoRemitSendModalShow.value
}
const isKakaoRemitSendSuccessModalShow = ref(false)
const toggleKakaoRemitSendSuccessModalShow = () => {
  isKakaoRemitSendSuccessModalShow.value = !isKakaoRemitSendSuccessModalShow.value
}

const handlerClickRegApplication = () => {
  detailCaseStore.requestRegApplication(tradeCaseId)
    .then(() => {
      alert('등기신청서 작성정보가 입력되었습니다.')
    })
    .catch(e => {
      alert(e.response.data.message)
    })
}

const contractFile = ref()
const fetchContractPreview = () => {
  detailCaseStore.fetchContract(tradeCaseId)
    .then(({data}) => {
      contractFile.value = data
      if(data.fileExt === 'pdf') {
        filePreviewBase64Pdf(data.fileDataEncodeBase64).then(res => {
          contractFile.value.fileDataEncodeBase64 = res
          contractFile.value.fileExt = 'pdf'
          toggleContractModalShow()
        })
      } else {
        toggleContractModalShow()
      }
    })
    .catch(e => {
      alert(e.response.data.message)
    })
}
const contractModalOpen = () => {
  fetchContractPreview()
}
const contractImageSrc = computed(() => {
  if(contractFile.value.fileDataEncodeBase64 === null) {
    return '/img/cha/cha-empty-file.png'
  }
  else if(contractFile.value.fileExt === 'pdf') {
    return contractFile.value.fileDataEncodeBase64
  } else {
    return `data:image/${contractFile.value.fileExt};base64,${contractFile.value.fileDataEncodeBase64}`
  }
})
const contractImageDownload = () => {
  // 수정 필요
  console.log('click')
  if(contractFile.value.fileDataEncodeBase64 === null) {
    alert('원본파일 다운로드가 불가능합니다.')
    return false
  } 

  fileDownloadBase64(contractImageSrc.value, contractFile.value.fileName.split('.')[0], contractFile.value.fileExt)
}

const previewFile = ref({
  fileDataEncodeBase64: null,
  documentId: null,
  fileName: null,
  fileExt: null,
})
const filePreviewImageSrc = computed(() => {
  if(previewFile.value.fileDataEncodeBase64 === null) {
    return '/img/cha/cha-empty-file.png'
  }
  else if(previewFile.value.fileExt === 'pdf') {
    return previewFile.value.fileDataEncodeBase64
  } else {
    return `data:image/${previewFile.value.fileExt};base64,${previewFile.value.fileDataEncodeBase64}`
  }
})

const documentFileView = (value) => {
  previewFile.value.fileDataEncodeBase64 = value.documentFile
  previewFile.value.fileName = value.fileName
  previewFile.value.documentId = value.documentId
  previewFile.value.fileExt = value.fileExt
  if(value.fileExt === 'pdf') {
    filePreviewBase64Pdf(value.documentFile).then(res => {
      previewFile.value.fileDataEncodeBase64 = res
      previewFile.value.fileExt = 'pdf'
      toggleFilePreviewModalShow()
    })
  } else {
    toggleFilePreviewModalShow()
  }
}

const documentFileDownload = () => {
  if(previewFile.value.documentId === null) {
    alert('원본파일 다운로드가 불가능합니다.')
    return false
  }

  detailCaseStore.fetchDocumentDownload(tradeCaseId, previewFile.value.documentId)
    .then(({data}) => {
      fileDownload(data, previewFile.value.fileName.split('.')[0], previewFile.value.fileName.split('.')[1])
    })
    .catch(e => {
      console.log(e)
      alert(e.response.data.message)
    })
}

const moveToFilesTable = () => {
  window.scrollTo({top: 9999, behavior: 'smooth'})
  handlerClickTab('files')
  toggleSupplementationModalShow()
}
</script>

<style lang="scss" scoped>
@import '@priros/common/assets/scss/detail-case/index.scss';
</style>