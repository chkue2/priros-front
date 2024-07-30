<template>
  <NuxtLayout name="dialog-header" headerTitle="사건상세정보">
    <div class="detail-case-top-container">
      <div class="detail-case-table">
        <div class="detail-case-table-header">진행상태</div>
        <div class="detail-case-table-contents flex-spacebetween ft-14 ft-bold">
          {{ statusText }}
          <button class="detail-case-button" @click="toggleEstimateModalShow">
            견적확인
          </button>
        </div>
        <div class="detail-case-table-header">담당자/방문담당자</div>
        <div class="detail-case-table-contents">
          {{ detailCaseStore.fetchedDetailCase["chargerName"] }}
          /
          {{ detailCaseStore.fetchedDetailCase["acceptChargerName"] }}
        </div>
        <div class="detail-case-table-header">잔금일/잔금시간</div>
        <div class="detail-case-table-contents">
          {{ issueDate }} / {{ issueTime }}
        </div>
        <div class="detail-case-table-header">접수일/접수번호</div>
        <div class="detail-case-table-contents">
          {{ recevDate }} / {{ detailCaseStore.fetchedDetailCase["recevNo"] }}
        </div>
        <div class="detail-case-table-header">등기필정보 보완보고</div>
        <div class="detail-case-table-contents flex-spacebetween">
          <button
            class="detail-case-button button--blue"
            @click="toggleSupplementationModalShow"
          >
            보완보고
          </button>
          <p
            v-if="supplementText !== ''"
            class="detail-case-supplement"
            :class="{
              wait: detailCaseStore.fetchedDetailCase.registSupplement === 'R',
            }"
          >
            {{ supplementText }}
          </p>
        </div>
      </div>
    </div>
    <div class="detail-case-status-container">
      <div class="detail-case-title-container bb">
        <div class="detail-case-title-left">
          <p class="detail-case-title">진행상태</p>
          <button v-if="false" class="detail-case-button button--disabled">
            수임철회
          </button>
        </div>
        <button
          v-if="detailCaseStore.fetchedDetailCase.revenueStampState === ''"
          class="inji-button"
          @click="toggleInjiRequestIssuanceModal"
        >
          <img src="/img/icon/inji-logo.svg" /><span
            >전자수입인지 발행요청</span
          >
        </button>
        <button
          v-else-if="
            ['JS_10', 'JS_20'].includes(
              detailCaseStore.fetchedDetailCase.revenueStampState
            )
          "
          class="inji-button button--progress"
        >
          <img src="/img/icon/inji-logo.svg" /><span
            >전자수입인지 발행요청중</span
          >
        </button>
        <button v-else class="inji-button button--complete">
          <img src="/img/icon/inji-logo.svg" /><span
            >전자수입인지 발행완료</span
          >
        </button>
        <button v-if="false" class="detail-case-button button--gray">
          매수인/매도인 등록
        </button>
      </div>
      <div v-if="warningText !== ''" class="detail-case-status-message">
        <img src="/img/icon/pin-red.png" />
        <p>{{ warningText }}</p>
      </div>
      <div class="detail-case-status-card-container">
        <DetailCaseStatusCard
          v-for="(state, index) in status"
          :key="index"
          :statusConfig="state"
          :trade-case-id="route.params.id"
          :vender-id="detailCaseStore.fetchedDetailCase.venderId"
          @kakao-modal-show="toggleKaKaoRemitSendModalShow"
        />
      </div>
    </div>
    <div class="detail-case-title-container">
      <p class="detail-case-title">상세정보</p>
      <button v-if="false" class="detail-case-button button--gray">
        거래정보 VC
      </button>
    </div>
    <div class="detail-case-info-container">
      <div class="detail-case-table pd">
        <div class="detail-case-table-header">목적물</div>
        <div class="detail-case-table-contents ft-14">
          {{ detailCaseStore.fetchedDetailCase["estateAddr"] }}
          {{ detailCaseStore.fetchedDetailCase["estateRestAddr"] }}
        </div>
        <div class="detail-case-table-header">관할등기소</div>
        <div
          class="detail-case-table-contents flex-column flex-just-center"
          :class="[
            {
              'pt-0': ['W', 'F'].includes(
                detailCaseStore.fetchedDetailCase['registryOfficeOfWarning']
              ),
            },
          ]"
        >
          <p
            v-if="
              detailCaseStore.fetchedDetailCase['registryOfficeOfWarning'] ===
              'W'
            "
            class="detail-case-table-contents-warning"
          >
            ! 필증우편금지 !
          </p>
          <p
            v-if="
              detailCaseStore.fetchedDetailCase['registryOfficeOfWarning'] ===
              'F'
            "
            class="detail-case-table-contents-warning warning--blue"
          >
            ! 필증보완빈번 !
          </p>
          {{ detailCaseStore.fetchedDetailCase["registryOfficeName"] }}
        </div>
        <div class="detail-case-table-header">계약서</div>
        <div class="detail-case-table-contents flex-spacebetween">
          {{ contractFileText }}
          <button
            v-if="detailCaseStore.fetchedDetailCase.contractFileFlag === 'Y'"
            class="detail-case-button"
            @click="contractModalOpen"
          >
            확인
          </button>
        </div>
        <div class="detail-case-table-header">매매대금</div>
        <div class="detail-case-table-contents">{{ salesPrice }}원</div>
        <div class="detail-case-table-header">상환여부</div>
        <div class="detail-case-table-contents">{{ repaymentStatus }}</div>
        <div class="detail-case-table-header">매수인</div>
        <div class="detail-case-table-contents">
          {{ detailCaseStore.fetchedDetailCase["buyer"] }}
        </div>
        <div class="detail-case-table-header">휴대폰번호</div>
        <div class="detail-case-table-contents">{{ buyerPhone }}</div>
        <div class="detail-case-table-header">이메일주소</div>
        <div class="detail-case-table-contents">
          {{ detailCaseStore.fetchedDetailCase["buyerEmail"] }}
        </div>
        <div class="detail-case-table-header">대출기관</div>
        <div class="detail-case-table-contents">{{ bankName }}</div>
        <div class="detail-case-table-header">상품명</div>
        <div class="detail-case-table-contents">{{ product }}</div>
        <div class="detail-case-table-header">대출금</div>
        <div class="detail-case-table-contents">{{ mortgageLoan }}원</div>
        <div class="detail-case-table-header">설정대리인</div>
        <div class="detail-case-table-contents flex-spacebetween">
          <span>{{
            detailCaseStore.fetchedDetailCase["mortgageFirmName"]
          }}</span>
          <button
            class="detail-case-button"
            @click="toggleConfigAgentModalShow"
          >
            확인
          </button>
        </div>
        <div class="detail-case-table-header">등록기관</div>
        <div class="detail-case-table-contents flex-spacebetween">
          <span>{{ detailCaseStore.fetchedDetailCase["registFirmName"] }}</span>
          <button class="detail-case-button" @click="toggleRegistrarModalShow">
            확인
          </button>
        </div>
        <div class="detail-case-table-header">배상책임보험</div>
        <div class="detail-case-table-contents">{{ liabilityInsurance }}</div>
        <div class="detail-case-table-header">보험료</div>
        <div class="detail-case-table-contents">{{ insuranceAmt }}원</div>
        <div class="detail-case-table-header">등기신청서 작성정보</div>
        <div class="detail-case-table-contents flex-column flex-align-start">
          <textarea
            v-model="detailCaseStore.registrationApplication"
            placeholder="등기신청서 작성 ID 및 작성번호를 입력하세요. (매도인별 식별번호 뒷자리 입력으로 대체 가능)"
          ></textarea>
          <div class="detail-case-table-edit-button">
            <button
              :class="{
                success: detailCaseStore.registrationApplication !== '',
              }"
              @click="handlerClickRegApplication"
            >
              <img src="/img/icon/edit-gray.svg" />입력완료
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-case-bottom-container">
      <div class="detail-case-bottom-tabs">
        <p
          class="detail-case-bottom-tab"
          :class="{ active: tab === 'changed' }"
          @click="handlerClickTab('changed')"
        >
          변경내역
        </p>
        <p
          class="detail-case-bottom-tab"
          :class="{ active: tab === 'memo' }"
          @click="handlerClickTab('memo')"
        >
          메모
        </p>
        <p
          class="detail-case-bottom-tab"
          :class="{ active: tab === 'processed' }"
          @click="handlerClickTab('processed')"
        >
          처리내역
        </p>
        <p
          class="detail-case-bottom-tab"
          :class="{ active: tab === 'files' }"
          @click="handlerClickTab('files')"
        >
          첨부파일
        </p>
      </div>
      <div class="detail-case-bottom-table">
        <DetailCaseChangedTable
          v-if="tab === 'changed'"
          :trade-case-id="tradeCaseId"
        />
        <DetailCaseMemoTable
          v-if="tab === 'memo'"
          :trade-case-id="tradeCaseId"
        />
        <DetailCaseProcessedTable
          v-if="tab === 'processed'"
          :trade-case-id="tradeCaseId"
        />
        <DetailCaseFilesTable
          v-if="tab === 'files'"
          :trade-case-id="tradeCaseId"
          @file-view="documentFileView"
        />
      </div>
    </div>
    <CommonBlackTitleModal
      v-if="isContractModalShow"
      title="매매계약서"
      @handler-click-close="toggleContractModalShow"
    >
      <div class="contract-container">
        <img
          class="contract-preview"
          :class="{ scale: contractFile.fileExt === 'pdf' }"
          :src="contractImageSrc"
          alt
        />
        <button
          v-if="
            !contractImageSrc.includes('empty') &&
            detailCaseStore.fetchedDetailCase.venderId !== 'KA_IB'
          "
          class="contract-button"
          @click="contractImageDownload"
        >
          <img src="/img/icon/download-gray.svg" alt />
          원본파일 다운로드
        </button>
        <p class="contract-title">
          매도인이 고령이거나, 대리인에 의한 거래주의
        </p>
        <p class="contract-subtitle bb">
          매도인의 매도의사나, 대리인의 권한을 잔금일에 임박하여 확인할 경우
          <b>예상하지 못한 문제가 발생할 수 있습니다.</b>
        </p>
        <p class="contract-subtitle">
          사건을 수임하면 가급적 사건에 매도인 측과 소통해주세요.<br />등기업무진행에
          영향이 있는 상황이 발견되면 프리로스 매니저(카카오뱅크 사건은
          카카오뱅크 매니저)와 상의해주세요.
        </p>
        <p class="contract-help-title mt40">
          이미지가 오류 혹은 수정이 필요한 경우
        </p>
        <p class="contract-help-content">
          매수인과 소통하여 정보를 확인하고 계약정보를 확보하세요.
        </p>
        <p class="contract-help-title mt12">
          다른 거래의 계약서가 잘못 첨부된 경우
        </p>
        <p class="contract-help-content">
          등록기관 또는 설정대리인 담당자와 상의하세요.
        </p>
      </div>
    </CommonBlackTitleModal>
    <CommonBlackTitleModal
      v-if="isFilePreviewModalShow"
      title="파일 미리보기"
      @handler-click-close="toggleFilePreviewModalShow"
    >
      <div class="contract-container">
        <img
          class="contract-preview"
          :class="{ scale: previewFile.fileExt === 'pdf' }"
          :src="filePreviewImageSrc"
          alt
        />
        <button
          v-if="!filePreviewImageSrc.includes('empty-file')"
          class="contract-button"
          @click="documentFileDownload"
        >
          <img src="/img/icon/download-gray.svg" alt />
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
      <button class="info-modal-button" @click="toggleConfigAgentModalShow">
        확인
      </button>
    </CommonBlackTitleModal>
    <CommonBlackTitleModal
      v-if="isRegistrarModalShow"
      title="등록기관 정보확인"
      @handler-click-close="toggleRegistrarModalShow"
    >
      <DetailCaseRegAuthCard :trade-case-id="tradeCaseId" />
      <button class="info-modal-button" @click="toggleRegistrarModalShow">
        확인
      </button>
    </CommonBlackTitleModal>
    <CommonBlackTitleModal
      v-if="isEstimateModalShow"
      title="견적확인"
      @handler-click-close="toggleEstimateModalShow"
    >
      <DetailCaseEstimateCard
        :trade-case-id="tradeCaseId"
        @close-modal="toggleEstimateModalShow"
      />
      <button class="info-modal-button" @click="toggleEstimateModalShow">
        확인
      </button>
    </CommonBlackTitleModal>
    <CommonBlackTitleModal
      v-if="isSupplementationModalShow"
      title="등기필정보 보완"
      @handler-click-close="toggleSupplementationModalShow"
    >
      <SupplementationRegInfo
        :trade-case-id="tradeCaseId"
        @move-to-files-table="moveToFilesTable"
        @close-modal="toggleSupplementationModalShow"
      />
    </CommonBlackTitleModal>
    <CommonBlackTitleModal
      v-if="isKakaoRemitSendModalShow"
      title="송금요청"
      @handler-click-close="toggleKaKaoRemitSendModalShow"
    >
      <KakaoRemitForm
        :trade-case-id="tradeCaseId"
        @close-modal="toggleKaKaoRemitSendModalShow"
        @open-success-modal="toggleKakaoRemitSendSuccessModalShow"
        @re-call-api="
          () => {
            detailCaseStore.fetchDetailCase(tradeCaseId);
          }
        "
      />
    </CommonBlackTitleModal>
    <CommonAlertModal
      v-if="isKakaoRemitSendSuccessModalShow"
      text="송금요청 완료<br><br>입금이 지연되는 경우 카카오뱅크에 문의하세요"
      @handler-click-button="toggleKakaoRemitSendSuccessModalShow"
    />
    <CommonModal
      v-if="isInjiRequestIssuanceModalShow"
      @handler-click-close="toggleInjiRequestIssuanceModal"
    >
      <InjiRequestIssuanceCard
        @handler-click-close="toggleInjiRequestIssuanceModal"
        @inji-generate="injiGenerate"
      />
    </CommonModal>
    <CommonModal
      v-if="isInjiIssuanceCompleteModalShow"
      @handler-click-close="toggleInjiIssuanceCompleteModal"
    >
      <InjiIssuanceCompleteCard
        @handler-click-close="toggleInjiIssuanceCompleteModal"
      />
    </CommonModal>
  </NuxtLayout>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useDetailCaseStore } from "~/store/case/detailCase.js";

import CommonAlertModal from "@priros/common/components/modal/CommonAlertModal.vue";
import DetailCaseChangedTable from "@priros/common/components/table/DetailCaseChangedTable.vue";
import DetailCaseFilesTable from "@priros/common/components/table/DetailCaseFilesTable.vue";
import DetailCaseMemoTable from "@priros/common/components/table/DetailCaseMemoTable.vue";
import DetailCaseProcessedTable from "@priros/common/components/table/DetailCaseProcessedTable.vue";
import DetailCaseEstimateCard from "~/components/card/DetailCaseEstimateCard.vue";
import DetailCaseInfoCard from "~/components/card/DetailCaseInfoCard.vue";
import DetailCaseRegAuthCard from "~/components/card/DetailCaseRegAuthCard.vue";
import DetailCaseStatusCard from "~/components/card/DetailCaseStatusCard.vue";
import InjiIssuanceCompleteCard from "~/components/card/InjiIssuanceCompleteCard.vue";
import InjiRequestIssuanceCard from "~/components/card/InjiRequestIssuanceCard.vue";
import KakaoRemitForm from "~/components/form/KakaoRemitForm.vue";
import SupplementationRegInfo from "~/components/form/SupplementationRegInfo.vue";
import CommonBlackTitleModal from "~/components/modal/CommonBlackTitleModal.vue";
import CommonModal from "~/components/modal/CommonModal.vue";

import { bankSVG } from "@priros/common/assets/js/case/bankSVG.js";
import { caseStatus } from "@priros/common/assets/js/case/status.js";
import {
  changeTimeFormatAddDot,
  changeTimeFormatAmPm,
  fileDownload,
  fileDownloadBase64,
  filePreviewBase64Pdf,
  isEmpty,
  rexFormatPhone,
} from "@priros/common/assets/js/utils.js";
import { useAlertStore } from "~/store/alert.js";

definePageMeta({
  layout: false,
});

const route = useRoute();
const detailCaseStore = useDetailCaseStore();
const alertStore = useAlertStore();
const tradeCaseId = route.params.id;

onMounted(() => {
  detailCaseStore.fetchDetailCase(tradeCaseId);
  detailCaseStore.fetchHistory(tradeCaseId, 1);
});

const statusText = computed(
  () => caseStatus[detailCaseStore.fetchedDetailCase.state]
);
const issueDate = computed(() =>
  !isEmpty(detailCaseStore.fetchedDetailCase.issueDate)
    ? detailCaseStore.fetchedDetailCase.issueDate.split("T")[0]
    : ""
);
const issueTime = computed(() =>
  changeTimeFormatAmPm(
    changeTimeFormatAddDot(detailCaseStore.fetchedDetailCase.issueTime)
  )
);
const recevDate = computed(() =>
  !isEmpty(detailCaseStore.fetchedDetailCase.recevDate)
    ? detailCaseStore.fetchedDetailCase.recevDate.split(" ")[0]
    : ""
);
const salesPrice = computed(() =>
  !isEmpty(detailCaseStore.fetchedDetailCase.tradePrice)
    ? Number(detailCaseStore.fetchedDetailCase.tradePrice).toLocaleString()
    : ""
);
const buyerPhone = computed(() =>
  !isEmpty(detailCaseStore.fetchedDetailCase.buyerPhone)
    ? rexFormatPhone(detailCaseStore.fetchedDetailCase.buyerPhone)
    : ""
);
const bankName = computed(() =>
  !isEmpty(bankSVG[detailCaseStore.fetchedDetailCase.venderId])
    ? bankSVG[detailCaseStore.fetchedDetailCase.venderId].title
    : ""
);
const insuranceAmt = computed(() =>
  !isEmpty(detailCaseStore.fetchedDetailCase.insuranceAmt)
    ? Number(detailCaseStore.fetchedDetailCase.insuranceAmt).toLocaleString()
    : "0"
);
const repaymentStatus = computed(() =>
  detailCaseStore.fetchedDetailCase.repayFlag === "Y" ? "상환있음" : "상환없음"
);
const mortgageLoan = computed(() =>
  !isEmpty(detailCaseStore.fetchedDetailCase.mortgageLoan)
    ? Number(detailCaseStore.fetchedDetailCase.mortgageLoan).toLocaleString()
    : ""
);
const liabilityInsurance = computed(() =>
  detailCaseStore.fetchedDetailCase.insuranceYn === "Y"
    ? "가입 대상"
    : "가입 비대상"
);
const contractFileText = computed(() =>
  detailCaseStore.fetchedDetailCase.contractFileFlag === "Y"
    ? "매매계약서"
    : "매매계약서가 없습니다"
);

const product = computed(() => {
  switch (detailCaseStore.fetchedDetailCase.productCode) {
    case "1":
      return "일반주담대";
    case "2":
      return "보금자리론";
    case "3":
      return "개인사업자주택담보대출";
    default:
      return "";
  }
});

const status = computed(() => {
  const state =
    detailCaseStore.fetchedDetailCase.venderId === "SODA" // soda 조건 추가
      ? ["담당자 보고", "일정 보고", "접수보고"]
      : detailCaseStore.fetchedDetailCase.repayFlag === "Y"
        ? [
            "담당자 보고",
            "일정 보고",
            "송금요청",
            "신청정보보고",
            "상환보고",
            "접수보고",
          ]
        : ["담당자 보고", "일정 보고", "송금요청", "신청정보보고", "접수보고"];
  return state.map((s) => {
    return {
      title: s,
      state: statusForFetchedDetailCase(s) === "Y" ? "완료" : "대기",
    };
  });
});

const statusForFetchedDetailCase = (state) => {
  switch (state) {
    case "담당자 보고":
      return detailCaseStore.fetchedDetailCase.acceptChargerName === ""
        ? "N"
        : "Y";
    case "일정 보고":
      return detailCaseStore.fetchedDetailCase.issueTimeFlag;
    case "송금요청":
      return detailCaseStore.fetchedDetailCase.remitFlag;
    case "신청정보보고":
      return detailCaseStore.fetchedDetailCase.requestReportFlag;
    case "상환보고":
      return detailCaseStore.fetchedDetailCase.repayReportFlag;
    case "접수보고":
      return detailCaseStore.fetchedDetailCase.receiveFlag;
    default:
      return "Y";
  }
};

const supplementText = computed(() => {
  switch (detailCaseStore.fetchedDetailCase.registSupplement) {
    case "R":
      return "보완요청";
    case "Y":
      return "보완제출완료";
    default:
      return "";
  }
});

const warningText = computed(() => {
  switch (detailCaseStore.fetchedDetailCase.remitState) {
    case "N":
      return "송금요청이 거절되었어요 확인해주세요";
    default:
      return "";
  }
});

const tab = ref("changed");
const handlerClickTab = (v) => {
  tab.value = v;
  if (v === "changed") {
    detailCaseStore.fetchHistory(tradeCaseId, 1);
  } else if (v === "memo") {
    detailCaseStore.fetchMemo(tradeCaseId, 1);
  } else if (v === "processed") {
    detailCaseStore.fetchHistoryTr(tradeCaseId, 1);
  } else if (v === "files") {
    detailCaseStore.fetchDocument(tradeCaseId, 1);
  }
};

const isContractModalShow = ref(false);
const toggleContractModalShow = () => {
  isContractModalShow.value = !isContractModalShow.value;
};
const isFilePreviewModalShow = ref(false);
const toggleFilePreviewModalShow = () => {
  isFilePreviewModalShow.value = !isFilePreviewModalShow.value;
};
const isConfigAgentModalShow = ref(false);
const toggleConfigAgentModalShow = () => {
  isConfigAgentModalShow.value = !isConfigAgentModalShow.value;
};
const isRegistrarModalShow = ref(false);
const toggleRegistrarModalShow = () => {
  isRegistrarModalShow.value = !isRegistrarModalShow.value;
};
const isEstimateModalShow = ref(false);
const toggleEstimateModalShow = () => {
  isEstimateModalShow.value = !isEstimateModalShow.value;
};
const isSupplementationModalShow = ref(false);
const toggleSupplementationModalShow = () => {
  isSupplementationModalShow.value = !isSupplementationModalShow.value;
};
const isKakaoRemitSendModalShow = ref(false);
const toggleKaKaoRemitSendModalShow = () => {
  isKakaoRemitSendModalShow.value = !isKakaoRemitSendModalShow.value;
};
const isKakaoRemitSendSuccessModalShow = ref(false);
const toggleKakaoRemitSendSuccessModalShow = () => {
  isKakaoRemitSendSuccessModalShow.value =
    !isKakaoRemitSendSuccessModalShow.value;
};
const isInjiRequestIssuanceModalShow = ref(false);
const toggleInjiRequestIssuanceModal = () => {
  if (detailCaseStore.fetchedDetailCase.tradePrice <= 100000000) {
    alertStore.open("전자수입인지 발행이 필요하지 않은 사건입니다.");
    return false;
  }
  isInjiRequestIssuanceModalShow.value = !isInjiRequestIssuanceModalShow.value;
};
const isInjiIssuanceCompleteModalShow = ref(false);
const toggleInjiIssuanceCompleteModal = () => {
  isInjiIssuanceCompleteModalShow.value =
    !isInjiIssuanceCompleteModalShow.value;
};

const handlerClickRegApplication = () => {
  if (detailCaseStore.registrationApplication === "") {
    alertStore.open("등기신청서 작성 ID 및 작성번호를 입력하세요.");
    return false;
  }
  detailCaseStore
    .requestRegApplication(tradeCaseId)
    .then(() => {
      alertStore.open("등기신청서 작성정보가 입력되었습니다.");
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
    });
};

const contractFile = ref();
const fetchContractPreview = () => {
  detailCaseStore
    .fetchContract(tradeCaseId)
    .then(({ data }) => {
      contractFile.value = data;
      if (data.fileExt.toLowerCase() === "pdf") {
        filePreviewBase64Pdf(data.fileDataEncodeBase64)
          .then((res) => {
            contractFile.value.fileDataEncodeBase64 = res;
            contractFile.value.fileExt = "pdf";
            toggleContractModalShow();
          })
          .catch(() => {
            alertStore.open("미리보기가 불가능한 파일입니다.");
          });
      } else {
        toggleContractModalShow();
      }
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
    });
};
const contractModalOpen = () => {
  fetchContractPreview();
};
const contractImageSrc = computed(() => {
  if (contractFile.value.fileDataEncodeBase64 === null) {
    return "/img/cha/cha-empty-01.png";
  } else if (contractFile.value.fileExt.toLowerCase() === "pdf") {
    return contractFile.value.fileDataEncodeBase64;
  } else {
    return `data:image/${contractFile.value.fileExt};base64,${contractFile.value.fileDataEncodeBase64}`;
  }
});
const contractImageDownload = () => {
  // 수정 필요
  if (contractFile.value.fileDataEncodeBase64 === null) {
    alertStore.open("원본파일 다운로드가 불가능합니다.");
    return false;
  }

  fileDownloadBase64(
    contractImageSrc.value,
    contractFile.value.fileName.split(".")[0],
    contractFile.value.fileExt
  );
};

const previewFile = ref({
  fileDataEncodeBase64: null,
  documentId: null,
  fileName: null,
  fileExt: null,
});
const filePreviewImageSrc = computed(() => {
  if (previewFile.value.fileDataEncodeBase64 === null) {
    return "/img/cha/cha-empty-01.png";
  } else if (previewFile.value.fileExt.toLowerCase() === "pdf") {
    return previewFile.value.fileDataEncodeBase64;
  } else {
    return `data:image/${previewFile.value.fileExt};base64,${previewFile.value.fileDataEncodeBase64}`;
  }
});

const documentFileView = (value) => {
  previewFile.value.fileDataEncodeBase64 = value.documentFile;
  previewFile.value.fileName = value.fileName;
  previewFile.value.documentId = value.documentId;
  previewFile.value.fileExt = value.fileExt;
  if (value.fileExt.toLowerCase() === "pdf") {
    filePreviewBase64Pdf(value.documentFile)
      .then((res) => {
        previewFile.value.fileDataEncodeBase64 = res;
        previewFile.value.fileExt = "pdf";
        toggleFilePreviewModalShow();
      })
      .catch(() => {
        alertStore.open("미리보기가 불가능한 파일입니다.");
      });
  } else {
    toggleFilePreviewModalShow();
  }
};

const documentFileDownload = () => {
  if (previewFile.value.documentId === null) {
    alertStore.open("원본파일 다운로드가 불가능합니다.");
    return false;
  }

  detailCaseStore
    .fetchDocumentDownload(tradeCaseId, previewFile.value.documentId)
    .then(({ data }) => {
      fileDownload(
        data,
        previewFile.value.fileName.split(".")[0],
        previewFile.value.fileName.split(".")[1]
      );
    })
    .catch((e) => {
      console.log(e);
      alertStore.open(e.response.data.message);
    });
};

const moveToFilesTable = () => {
  window.scrollTo({ top: 9999, behavior: "smooth" });
  handlerClickTab("files");
  toggleSupplementationModalShow();
};

const injiGenerate = (data) => {
  detailCaseStore
    .requestInjiGenerate(tradeCaseId, data)
    .then(() => {
      toggleInjiRequestIssuanceModal();
      toggleInjiIssuanceCompleteModal();
      detailCaseStore.fetchDetailCase(tradeCaseId);
    })
    .catch((e) => {
      alertStore.open(e.response.data.message);
    });
};
</script>

<style lang="scss" scoped>
@import "@priros/common/assets/scss/detail-case/index.scss";
</style>
