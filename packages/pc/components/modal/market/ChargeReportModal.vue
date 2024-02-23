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
</style>
