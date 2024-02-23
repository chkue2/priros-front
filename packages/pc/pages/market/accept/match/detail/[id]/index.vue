<template>
	<NuxtLayout name="market">
		<template #center>
			<div class="market-container">
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
					<div class="info-contents contents-3">1,000,000,000원</div>
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
					<div class="info-contents contents-3">-</div>
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
					<div class="info-contents contents-3">-</div>
				</div>
				<div class="detail-button-container">
					<button @click="toggleAppointmentModal">수임하기</button>
				</div>
			</div>
			<AppointmentModal
				v-if="isAppointmentModalShow"
				@close-modal="toggleAppointmentModal"
			/>
			<AppointmentTalkModal
				v-if="isAppointmentTalkModalShow"
				@close-modal="toggleAppointmentTalkModal"
			/>
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
import AppointmentModal from '~/components/modal/market/AppointmentModal.vue';
import AppointmentTalkModal from '~/components/modal/market/AppointmentTalkModal.vue';

definePageMeta({
	layout: false,
});

const tab = ref('processed');
const handlerClickTab = v => {
	tab.value = v;
};

const isAppointmentModalShow = ref(false);
const toggleAppointmentModal = () => {
	isAppointmentModalShow.value = !isAppointmentModalShow.value;
};
const isAppointmentTalkModalShow = ref(false);
const toggleAppointmentTalkModal = () => {
	isAppointmentTalkModalShow.value = !isAppointmentTalkModalShow.value;
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/common.scss';
@import '~/assets/scss/market/write.scss';
@import '~/assets/scss/market/detail.scss';
.market-table-title {
	margin: 80px 0 15px;
}
.detail-button-container {
	margin-top: 43px;
	display: flex;
	justify-content: center;
	& > button {
		width: 163px;
		height: 44px;
		border: none;
		background-color: #3182f7;
		border-radius: 2px;
		box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.04);
		font-size: 14px;
		font-weight: $ft-medium;
		color: #ffffff;
		cursor: pointer;
	}
}
</style>
