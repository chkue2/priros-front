<template>
	<CommonHeaderModal
		modal-id="chargeReportModal"
		modal-title="담당자 보고"
		width="510px"
		height="auto"
	>
		<div class="report-container">
			<div class="charge-select-container">
				<p class="select-title">담당자</p>
				<DropDown placeholder="담당자를 선택해주세요" selected-text="" />
			</div>
			<p class="charge-help-text">
				안내전화 누락 민원이 자주 발생하고 있습니다.<br />반드시 준비사항을
				안내하고 업무보고를 수행하세요.
			</p>
			<ChargeReportProfileCard />
			<p class="charge-search-title">방문 위임 담당자 지정</p>
			<div class="charge-search-container">
				<input type="text" placeholder="상호, 주소 또는 이름을 입력하세요" />
				<img src="/img/icon/search-black-2.svg" class="charge-search-icon" />
			</div>
			<div class="charge-search-list">
				<div
					v-for="i in 10"
					:key="i"
					class="charge-search-item"
					:class="{ active: i === 3 }"
				>
					<p class="charge-search-text-bold">프리로스뱅크</p>
					<p class="charge-search-text-regular">김둘리 매니저 (hoy0606)</p>
					<p class="charge-search-text-gray">
						경기도 과천시 별양상가1로 18 (별양동)
					</p>
					<p class="charge-search-text-gray">02-123-4545 (010-4444-8787)</p>
				</div>
			</div>
		</div>
		<div class="report-buttons">
			<button class="button--blue">담당자 보고</button>
		</div>
	</CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue';
import DropDown from '@priros/common/components/form/DropDown.vue';
import ChargeReportProfileCard from '~/components/card/ChargeReportProfileCard.vue';
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/report.scss';
.charge-select-container {
	display: flex;
	align-items: center;
	gap: 16px;
	.select-title {
		font-size: 18px;
		font-weight: $ft-bold;
	}
}
.charge-help-text {
	margin: 35px 0 44px;
	font-size: 14px;
	color: #666666;
	line-height: 18px;
	text-align: center;
}
.charge-search-title {
	font-weight: $ft-medium;
	margin-top: 64px;
}
.charge-search-container {
	height: 44px;
	display: flex;
	align-items: center;
	margin: 10px 0 12px;
	padding: 0 10px 0 18px;
	border: 1px solid #d1d1d1;
	border-radius: 100px;
	& > input[type='text'] {
		flex: 1;
		font-size: 14px;
		line-height: 14px;
		border: none;
	}
	.charge-search-icon {
		width: 24px;
		height: 24px;
		margin-left: 9px;
		cursor: pointer;
	}
}
.charge-search-list {
	width: 100%;
	height: 232px;
	border: 1px solid #ebebeb;
	padding: 13px;
	overflow-x: hidden;
	overflow-y: auto;
}
.charge-search-item {
	padding: 10px 4px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	cursor: pointer;
	& + .charge-search-item {
		border-top: 1px solid #e1e1e1;
	}
	&.active {
		background-color: rgba(0, 106, 245, 0.05);
	}
	.charge-search-text-bold {
		font-size: 14px;
		font-weight: $ft-medium;
		line-height: 20px;
		margin-bottom: 5px;
	}
	.charge-search-text-regular {
		font-size: 12px;
		line-height: 20px;
	}
	.charge-search-text-gray {
		font-size: 12px;
		font-weight: $ft-medium;
		color: #7b7b7b;
	}
}
</style>
