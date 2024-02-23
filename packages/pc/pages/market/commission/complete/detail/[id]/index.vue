<template>
	<NuxtLayout name="market">
		<template #center>
			<div class="market-container">
				<div class="market-write-type">
					<div class="type-item active">
						<span class="type-item-top">업무완료!</span>
						<div class="type-item-bottom">
							<span>견적보고</span>
						</div>
					</div>
					<div class="type-item active">
						<span class="type-item-top">업무완료!</span>
						<div class="type-item-bottom">
							<span>담당자보고</span>
						</div>
					</div>
					<div class="type-item active">
						<span class="type-item-top">업무완료!</span>
						<div class="type-item-bottom">
							<span>일정보고</span>
						</div>
					</div>
					<div class="type-item active">
						<span class="type-item-top">업무완료!</span>
						<div class="type-item-bottom">
							<span>송금요청</span>
						</div>
					</div>
					<div class="type-item active">
						<span class="type-item-top">업무완료!</span>
						<div class="type-item-bottom">
							<span>신청정보보고</span>
						</div>
					</div>
					<div class="type-item active">
						<span class="type-item-top">업무완료!</span>
						<div class="type-item-bottom">
							<span>상환보고</span>
						</div>
					</div>
					<div class="type-item active">
						<span class="type-item-top">업무완료!</span>
						<div class="type-item-bottom">
							<span>접수보고</span>
						</div>
					</div>
				</div>
				<div class="market-table-title">
					기본정보
					<button class="market-ingi-button">
						<div class="ingi-left">
							<img src="/img/icon/ingi-logo.png" />
							<span>전자수입인지 발행요청</span>
						</div>
						<img src="/img/icon/arrow-upside-black.svg" class="ingi-arrow" />
					</button>
				</div>
				<div class="market-detail-info">
					<div class="info-header">진행상태</div>
					<div class="info-contents contents-3">
						일정등록
						<div class="info-contents-buttons">
							<button>설정비용</button>
							<button @click="toggleEstimateCheckModal">견적확인</button>
						</div>
					</div>
					<div class="info-header">담당자</div>
					<div class="info-contents contents-3 flex-start">
						무한도전 법무사사무소 박명수
						<div class="info-contents-buttons">
							<button>대리인 정보</button>
						</div>
					</div>
					<div class="info-header">잔금일</div>
					<div class="info-contents">2023-09-15</div>
					<div class="info-header">잔금 시간</div>
					<div class="info-contents">오전 9시30분</div>
					<div class="info-header">접수일</div>
					<div class="info-contents">-</div>
					<div class="info-header">접수번호</div>
					<div class="info-contents">-</div>
				</div>
				<p class="market-table-title">상세정보</p>
				<div class="market-detail-info info--gray">
					<div class="info-header header--big">목적물</div>
					<div class="info-contents contents-3">
						서울특별시 관악구 봉천동 1695 문영학원 주소가 길어지면 두줄로
						가야합니다
						<div class="info-contents-buttons">
							<button class="button--blue">등기부등본 열람</button>
						</div>
					</div>
					<div class="info-header">관할 등기소</div>
					<div class="info-contents contents-3">서울중앙지방법원 등기국</div>
					<div class="info-header">계약서</div>
					<div class="info-contents contents-3">
						매매계약서
						<div class="info-contents-buttons">
							<button>파일보기</button>
						</div>
					</div>
					<div class="info-header">매매대금</div>
					<div class="info-contents contents-3">740,500,000원</div>
					<div class="info-header">매수인</div>
					<div class="info-contents contents-3">홍길동</div>
					<div class="info-header">잔금일</div>
					<div class="info-contents contents-3">
						2024-01-22
						<div class="info-contents-buttons">
							<button>일정 3일</button>
						</div>
					</div>
					<div class="info-header">휴대전화번호</div>
					<div class="info-contents contents-3">010-1234-5678</div>
					<div class="info-header">이메일</div>
					<div class="info-contents contents-3">사건미확정 비공개</div>
					<div class="info-header">대출기관 / 상품명</div>
					<div class="info-contents contents-3">카카오뱅크 / 보금자리론</div>
					<div class="info-header">대출금</div>
					<div class="info-contents contents-3">100,000,000원 / 상환없음</div>
					<div class="info-header">설정대리인</div>
					<div class="info-contents contents-3">
						다이렉트로 합동 법무사 사무소
						<div class="info-contents-buttons">
							<button>정보보기</button>
						</div>
					</div>
					<div class="info-header">이전대리인</div>
					<div class="info-contents contents-3 flex-column align-start">
						<div class="info-contents-top">카카오뱅크</div>
						<p class="info-contents-bottom">
							이전대리인은 의뢰대기(수임철회) 상태에서 설정 할 수 있습니다.
						</p>
					</div>
					<div class="info-header">배상책임보험</div>
					<div class="info-contents contents-3">가입대상</div>
					<div class="info-header">보험료</div>
					<div class="info-contents contents-3">12,500원</div>
					<div class="info-header">전달사항</div>
					<div class="info-contents contents-3">-</div>
					<div class="info-header">은행관리번호</div>
					<div class="info-contents contents-3">전문관리번호</div>
				</div>
			</div>
			<TransferAccountModal
				v-if="isTransferAccountModalShow"
				@close-modal="toggleTransferAccountModal"
			/>
			<ChargeReportModal
				v-if="isChargeReportModalShow"
				@close-modal="toggleChargeReportModal"
			/>
			<ScheduleReportModal
				v-if="isScheduleReportModalShow"
				@close-modal="toggleScheduleReportModal"
			/>
			<ApplicationReportModal
				v-if="isApplicationReportModalShow"
				@close-modal="toggleApplicationReportModal"
			/>
			<RegInformationModal
				v-if="isRegInformationModalShow"
				@close-modal="toggleRegInformationModal"
			/>
			<EstimateReportModal
				v-if="isEstimateReportModalShow"
				@close-modal="toggleEstimateReportModal"
			/>
			<EstimateCheckModal
				v-if="isEstimateCheckModalShow"
				@close-modal="toggleEstimateCheckModal"
			/>
			<ReceptionReportModal
				v-if="isReceptionReportModalShow"
				@close-modal="toggleReceptionReportModal"
			/>
			<RepaymentReportModal
				v-if="isRepaymentReportModalShow"
				@close-modal="toggleRepaymentReportModal"
			/>
			<KakaoTransferModal
				v-if="isKakaoTransferModalShow"
				@close-modal="toggleKakaoTransferModal"
			/>
			<KakaoRemittanceRequestModal v-if="false" :is-re-send="true" />
			<KakaoRemittanceSuccessModal v-if="false" :is-re-send="false" />
			<EarlyRemittanceModal v-if="false" />
		</template>
		<template #right>
			<MarketTabs :tab="tab" @click-tab="handlerClickTab" />
			<div class="market-tables">
				<ProcessingHistoryList v-if="tab === 'processed'" />
				<MemoHistoryList v-if="tab === 'memo'" />
				<FileHistoryList v-if="tab === 'files'" />
			</div>
		</template>
	</NuxtLayout>
</template>

<script setup>
import { ref } from 'vue';
import MarketTabs from '~/components/tab/MarketTabs.vue';
import ProcessingHistoryList from '~/components/list/ProcessingHistoryList.vue';
import MemoHistoryList from '~/components/list/MemoHistoryList.vue';
import FileHistoryList from '~/components/list/FileHistoryList.vue';
import TransferAccountModal from '~/components/modal/market/TransferAccountModal.vue';
import ChargeReportModal from '~/components/modal/market/ChargeReportModal.vue';
import ScheduleReportModal from '~/components/modal/market/ScheduleReportModal.vue';
import ApplicationReportModal from '~/components/modal/market/ApplicationReportModal.vue';
import ReceptionReportModal from '~/components/modal/market/ReceptionReportModal.vue';
import RegInformationModal from '~/components/modal/market/RegInformationModal.vue';
import EstimateReportModal from '~/components/modal/market/EstimateReportModal.vue';
import EstimateCheckModal from '~/components/modal/market/EstimateCheckModal.vue';
import RepaymentReportModal from '~/components/modal/market/RepaymentReportModal.vue';
import KakaoTransferModal from '~/components/modal/market/KakaoTransferModal.vue';
import KakaoRemittanceRequestModal from '~/components/modal/market/KakaoRemittanceRequestModal.vue';
import KakaoRemittanceSuccessModal from '~/components/modal/market/KakaoRemittanceSuccessModal.vue';
import EarlyRemittanceModal from '~/components/modal/market/EarlyRemittanceModal.vue';

definePageMeta({
	layout: false,
});

const tab = ref('processed');
const handlerClickTab = v => {
	tab.value = v;
};

const isTransferAccountModalShow = ref(false);
const toggleTransferAccountModal = () => {
	isTransferAccountModalShow.value = !isTransferAccountModalShow.value;
};
const isChargeReportModalShow = ref(false);
const toggleChargeReportModal = () => {
	isChargeReportModalShow.value = !isChargeReportModalShow.value;
};
const isScheduleReportModalShow = ref(false);
const toggleScheduleReportModal = () => {
	isScheduleReportModalShow.value = !isScheduleReportModalShow.value;
};
const isApplicationReportModalShow = ref(false);
const toggleApplicationReportModal = () => {
	isApplicationReportModalShow.value = !isApplicationReportModalShow.value;
};
const isRegInformationModalShow = ref(false);
const toggleRegInformationModal = () => {
	isRegInformationModalShow.value = !isRegInformationModalShow.value;
};
const isEstimateReportModalShow = ref(false);
const toggleEstimateReportModal = () => {
	isEstimateReportModalShow.value = !isEstimateReportModalShow.value;
};
const isEstimateCheckModalShow = ref(false);
const toggleEstimateCheckModal = () => {
	isEstimateCheckModalShow.value = !isEstimateCheckModalShow.value;
};
const isReceptionReportModalShow = ref(false);
const toggleReceptionReportModal = () => {
	isReceptionReportModalShow.value = !isReceptionReportModalShow.value;
};
const isRepaymentReportModalShow = ref(false);
const toggleRepaymentReportModal = () => {
	isRepaymentReportModalShow.value = !isRepaymentReportModalShow.value;
};
const isKakaoTransferModalShow = ref(false);
const toggleKakaoTransferModal = () => {
	isKakaoTransferModalShow.value = !isKakaoTransferModalShow.value;
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/common.scss';
@import '~/assets/scss/market/write.scss';
@import '~/assets/scss/market/detail.scss';
.market-write-type {
	margin: 80px 0 60px;
}
.market-detail-buttons {
	display: flex;
	align-items: center;
	gap: 6px;
	margin: 20px 0 60px;
	& > button {
		width: 138px;
		height: 41px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		border-radius: 2px;
		border: none;
		font-size: 14px;
		font-weight: $ft-medium;
		color: #ffffff;
		cursor: pointer;
		&.button--gray {
			background-color: #909090;
		}
		&.button--white {
			opacity: 0.5;
		}
	}
}
button {
	&.button--black {
		width: 108px;
		height: 44px;
		border-radius: 5px;
		border: none;
		background-color: #404040;
		font-size: 16px;
		font-weight: $ft-medium;
		color: #ffffff;
		cursor: pointer;
	}
}
.tag--gray {
	width: 75px;
	height: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 11px;
	background-color: #999999;
	font-size: 14px;
	color: #ffffff;
}
.contents-top {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
}
.button--edit {
	border-radius: 16px;
	background-color: #eeeeee;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	padding: 0 14px;
	height: 32px;
	color: #858585;
	cursor: pointer;
}
.contents-area {
	width: 100%;
	height: 90px;
	border: 1px solid #dedede;
	border-radius: 9px;
	resize: none;
	padding: 12px;
	margin-top: 8px;
}
</style>
