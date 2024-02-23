<template>
	<NuxtLayout name="mypage" now-page="payment-regular">
		<div class="payment-common">
			<div class="payment-filter">
				<div class="payment-filter-left">
					<input type="date" /> ~ <input type="date" />
					<button class="search-button">검색</button>
				</div>
				<div class="payment-filter-right">
					<button class="filter-button active">전일</button>
					<button class="filter-button">금일</button>
					<button class="filter-button">1주일</button>
					<button class="filter-button">전주</button>
					<button class="filter-button">금주</button>
					<button class="filter-button">전월</button>
					<button class="filter-button">금월</button>
					<button class="filter-button">전체</button>
				</div>
			</div>
			<p class="payment-warning">
				간편결제는 대표자 명의의 결제수단으로 등록해야 합니다.(법인카드는 대표자
				기명카드로 등록)
			</p>
			<div v-if="false" class="payment-list">
				<div class="table-column">
					<div class="table-header payment-date">결제일</div>
					<div class="table-header payment-requester">요청자</div>
					<div class="table-header payment-buyer">구매자명</div>
					<div class="table-header payment-method">결제수단</div>
					<div class="table-header payment-memo-2">내용</div>
					<div class="table-header payment-price">금액</div>
					<div class="table-header payment-state">결제상태</div>
					<div class="table-header payment-other">비고</div>
				</div>
				<div class="table-column column-box">
					<div class="table-contents payment-date">
						2023-04-05<br />10:27:40
					</div>
					<div class="table-contents payment-requester">loverly_kkk</div>
					<div class="table-contents payment-buyer">홍길동</div>
					<div class="table-contents payment-method">계좌번호</div>
					<div class="table-contents payment-memo-2">배상책임보험</div>
					<div class="table-contents payment-price">15,000</div>
					<div class="table-contents payment-state">승인</div>
					<div class="table-contents payment-other">
						<button class="payment-other-button">매출전표</button>
					</div>
				</div>
			</div>
			<div class="table-empty">결제 내역이 없습니다.</div>
			<div class="payment-list-buttons">
				<button class="button--blue" @click="toggleRetroactivePaymentModal">
					취소분 소급결제
				</button>
				<div>
					<button class="button--darkgray">간편결제 등록</button>
					<button class="button--darkgray">간편결제 관리</button>
					<button class="button--gray" @click="togglePasswordPaymentModal">
						비밀번호 변경/재설정
					</button>
				</div>
			</div>
			<Pagination />
		</div>
		<RetroactivePaymentModal
			v-if="isRetroactivePaymentModalShow"
			@close-modal="toggleRetroactivePaymentModal"
		/>
		<PaymentPasswordModal
			v-if="isPaymentPasswordModalShow"
			@close-modal="togglePasswordPaymentModal"
		/>
	</NuxtLayout>
</template>

<script setup>
import { ref } from 'vue';
import Pagination from '@priros/common/components/paging/Pagination.vue';
import RetroactivePaymentModal from '~/components/modal/mypage/RetroactivePaymentModal.vue';
import PaymentPasswordModal from '~/components/modal/mypage/PaymentPasswordModal.vue';

definePageMeta({
	layout: false,
});

const isRetroactivePaymentModalShow = ref(false);
const toggleRetroactivePaymentModal = () => {
	isRetroactivePaymentModalShow.value = !isRetroactivePaymentModalShow.value;
};

const isPaymentPasswordModalShow = ref(false);
const togglePasswordPaymentModal = () => {
	isPaymentPasswordModalShow.value = !isPaymentPasswordModalShow.value;
};
</script>
<style scoped lang="scss">
@import '~/assets/scss/common/table.scss';
@import '~/assets/scss/mypage/list.scss';
</style>
