<template>
	<NuxtLayout name="market">
		<template #center>
			<div class="market-container">
				<div class="market-help-text-container">
					<img src="/img/icon/clip.svg" />
					<span class="market-help-text-title">긴급메세지</span>
					<span class="market-help-text-content"
						>견적보고는 수임일로부터 3일 이내에 수행해야합니다. 비용을 계산하고
						견적보고를 수행하세요.</span
					>
				</div>
				<div class="market-write-type">
					<div class="type-item">
						<span class="type-item-top">업무완료!</span>
						<div class="type-item-bottom">
							<span>견적보고</span>
						</div>
					</div>
					<div class="type-item">
						<span class="type-item-top">업무완료!</span>
						<div class="type-item-bottom">
							<span>담당자보고</span>
						</div>
					</div>
					<div class="type-item">
						<span class="type-item-top">업무완료!</span>
						<div class="type-item-bottom">
							<span>일정보고</span>
						</div>
					</div>
					<div class="type-item">
						<span class="type-item-top">업무완료!</span>
						<div class="type-item-bottom">
							<span>송금요청</span>
						</div>
					</div>
					<div class="type-item">
						<span class="type-item-top">업무완료!</span>
						<div class="type-item-bottom">
							<span>신청정보보고</span>
						</div>
					</div>
					<div class="type-item active" @click="toggleRepaymentReportModal">
						<span class="type-item-top">3일동안만 수정가능</span>
						<div class="type-item-bottom">
							<span>상환보고</span>
							<img src="/img/icon/arrow-upside-circle-black.svg" />
						</div>
					</div>
					<div class="type-item active" @click="toggleReceptionReportModal">
						<span class="type-item-tag">보완 보고완료</span>
						<span class="type-item-top">3일동안만 수정가능</span>
						<div class="type-item-bottom">
							<span>접수보고</span>
							<img src="/img/icon/arrow-upside-circle-black.svg" />
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
							<button @click="toggleEstimateCheckModal">견적확인</button>
							<button>설정비용 입력</button>
						</div>
					</div>
					<div class="info-header">이전대리인</div>
					<div class="info-contents contents-3">
						최고법무사사무소 이효리
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
					</div>
					<div class="info-header">관할 등기소</div>
					<div class="info-contents contents-3 flex-start">
						서울중앙지방법원 등기국
						<span class="warning-red"
							><img src="/img/icon/warning-white.svg" />필증 우편 금지</span
						>
					</div>
					<div class="info-header">계약서</div>
					<div class="info-contents contents-3">매매계약서</div>
					<div class="info-header">매매대금</div>
					<div class="info-contents contents-3">1,000,000,000원</div>
					<div class="info-header">매수인</div>
					<div class="info-contents contents-3">홍길동</div>
					<div class="info-header">잔금일</div>
					<div class="info-contents contents-3">2024-01-22</div>
					<div class="info-header">휴대전화번호</div>
					<div class="info-contents contents-3">010-1234-5678</div>
					<div class="info-header">이메일</div>
					<div class="info-contents contents-3">-</div>
					<div class="info-header">대출기관 / 상품명</div>
					<div class="info-contents contents-3">카카오뱅크 / 보금자리론</div>
					<div class="info-header">대출금</div>
					<div class="info-contents contents-3">100,000,000원 / 상환없음</div>
					<div class="info-header">이전대리인</div>
					<div class="info-contents contents-3">최고법무사사무소 이효리</div>
					<div class="info-header">등록기관</div>
					<div class="info-contents contents-3">
						카카오뱅크
						<div class="info-contents-buttons">
							<button>정보보기</button>
						</div>
					</div>
					<div class="info-header">배상책임보험</div>
					<div class="info-contents contents-3">가입대상</div>
					<div class="info-header">보험료</div>
					<div class="info-contents contents-3">12,500원</div>
					<div class="info-header">전달사항</div>
					<div class="info-contents contents-3">-</div>
					<div class="info-header">등기신청서<br />작성정보</div>
					<div class="info-contents contents-3">dream411<br />1190</div>
				</div>
			</div>
			<SettingChargeReportModal
				v-if="isChargeReportModalShow"
				@close-modal="toggleChargeReportModal"
			/>
			<RegInformationModal
				v-if="isRegInformationModalShow"
				@close-modal="toggleRegInformationModal"
			/>
			<EstimateCheckModal
				v-if="isEstimateCheckModalShow"
				@close-modal="toggleEstimateCheckModal"
			/>
			<SettingReceptionReportModal
				v-if="isReceptionReportModalShow"
				@close-modal="toggleReceptionReportModal"
			/>
			<RepaymentReportModal
				v-if="isRepaymentReportModalShow"
				@close-modal="toggleRepaymentReportModal"
			/>
			<KakaoRemittanceRequestModal v-if="false" :is-re-send="true" />
			<KakaoRemittanceSuccessModal v-if="false" :is-re-send="false" />
			<EarlyRemittanceModal v-if="false" />
		</template>
		<template #right>
			<MarketSettingTabs :tab="tab" @click-tab="handlerClickTab" />
			<div class="market-tables">
				<ProcessingHistoryList v-if="tab === 'processed'" />
				<MemoHistoryList v-if="tab === 'memo'" />
				<FileHistoryList v-if="tab === 'files'" />
				<SettingTransferTable v-if="tab === 'transfer'" />
			</div>
		</template>
	</NuxtLayout>
</template>

<script setup>
import { ref } from 'vue';
import MarketSettingTabs from '~/components/tab/MarketSettingTabs.vue';
import ProcessingHistoryList from '~/components/list/ProcessingHistoryList.vue';
import MemoHistoryList from '~/components/list/MemoHistoryList.vue';
import FileHistoryList from '~/components/list/FileHistoryList.vue';
import SettingTransferTable from '~/components/table/SettingTransferTable.vue';
import SettingReceptionReportModal from '~/components/modal/market/SettingReceptionReportModal.vue';
import SettingChargeReportModal from '~/components/modal/market/SettingChargeReportModal.vue';
import RegInformationModal from '~/components/modal/market/RegInformationModal.vue';
import EstimateCheckModal from '~/components/modal/market/EstimateCheckModal.vue';
import RepaymentReportModal from '~/components/modal/market/RepaymentReportModal.vue';
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

const isChargeReportModalShow = ref(false);
const toggleChargeReportModal = () => {
	isChargeReportModalShow.value = !isChargeReportModalShow.value;
};
const isRegInformationModalShow = ref(false);
const toggleRegInformationModal = () => {
	isRegInformationModalShow.value = !isRegInformationModalShow.value;
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
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/common.scss';
@import '~/assets/scss/market/write.scss';
@import '~/assets/scss/market/detail.scss';
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
.warning-red {
	padding: 2px 7px;
	width: 105px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3px;
	font-size: 12px;
	font-weight: $ft-bold;
	color: #ffffff;
	background-color: #fa3636;
	border-radius: 6px;
}
</style>
