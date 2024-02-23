<template>
	<CommonHeaderModal
		modal-id="repaymentReportModal"
		modal-title="상환보고"
		width="510px"
	>
		<div class="report-container">
			<div class="repayment-container">
				<div class="repayment-title">
					<p class="repayment-title-text">잔금일 기준 상환업무</p>
				</div>
				<select class="repayment-select">
					<option value="">선택해주세요</option>
				</select>
			</div>
			<div class="repayment-container">
				<div class="repayment-help-title">
					<img src="/img/icon/car-light.svg" />
					<p>주의사례 한번만 읽어주세요!</p>
				</div>
				<p class="repayment-help-content">
					매도인이 며칠 전 상환했다는 말만 믿고, 상환업무를 수행하지않고<br />
					상환여부도 확인하지 않았으나 실제로는 상환되지 않음
				</p>
			</div>
			<div class="repayment-container">
				<div class="repayment-title">
					<p class="repayment-title-text">상환영수증</p>
				</div>
				<div class="repayment-file">
					<input
						type="text"
						placeholder="파일을 첨부해주세요 (최대 5개)"
						readonly
					/>
					<img src="/img/icon/folder-black.svg" />
				</div>
				<div class="repayment-file-list">
					<div v-for="i in 3" :key="i" class="repayment-file-item">
						<div class="file-item-left">
							<img src="/img/icon/check-blue.svg" />
							<p>상환영수증 [2022-04-01]</p>
						</div>
						<img src="/img/icon/close-gray.svg" class="file-item-delete" />
					</div>
				</div>
			</div>
			<div class="repayment-container">
				<div class="repayment-title">
					<p class="repayment-title-text">말소확인증</p>
					<p class="repayment-help-title-help">
						말소확인증은 말소비입금전표, 말소의뢰서로 대체 가능
					</p>
				</div>
				<div class="repayment-file">
					<input
						type="text"
						placeholder="파일을 첨부해주세요 (최대 5개)"
						readonly
					/>
					<img src="/img/icon/folder-black.svg" />
				</div>
				<div class="repayment-file-list">
					<div v-for="i in 2" :key="i" class="repayment-file-item">
						<div class="file-item-left">
							<img src="/img/icon/check-blue.svg" />
							<p>말소확인증 [2022-04-01]</p>
						</div>
						<img src="/img/icon/close-gray.svg" class="file-item-delete" />
					</div>
				</div>
			</div>
			<div class="repayment-container">
				<div class="repayment-title">
					<p class="repayment-title-text">기타첨부서류</p>
				</div>
				<div class="repayment-file">
					<input
						type="text"
						placeholder="기타 추가적인 서류가 있다면 첨부해주세요"
						readonly
					/>
					<img src="/img/icon/folder-black.svg" />
				</div>
			</div>
			<div class="repayment-container">
				<p class="repayment-help-text">
					상환보고 대상이 없거나, 미리 상환이 완료되어 상환업무 및 보고대상이
					없는 경우에도 말소된 등기부등본, 상환영수증, 말소의뢰증빙 등 최소 1개
					이상의 증빙을 첨부해야합니다.
				</p>
			</div>
		</div>
		<div class="report-buttons">
			<button class="button--blue">상환보고</button>
		</div>
	</CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue';
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/report.scss';
.repayment-container {
	display: flex;
	flex-direction: column;
	gap: 9px;
	& + .repayment-container {
		margin-top: 18px;
	}
}
.repayment-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.repayment-title-text {
	font-weight: $ft-bold;
	line-height: 23px;
}
.repayment-help-title-help {
	font-size: 14px;
	line-height: 18px;
	color: #666666;
	text-align: right;
}
.repayment-select {
	height: 48px;
	padding: 13px;
	font-size: 14px;
	border: 1px solid #e1e1e1;
	border-radius: 4px;
}
.repayment-file {
	height: 48px;
	display: flex;
	gap: 10px;
	border: 1px solid #e1e1e1;
	border-radius: 4px;
	align-items: center;
	padding: 13px;
	cursor: pointer;
	& > input[type='text'] {
		flex: 1;
		font-size: 14px;
		border: none;
		cursor: pointer;
	}
	& > img {
		width: 24px;
		height: 24px;
	}
}
.repayment-file-list {
	padding: 12px 18px;
	border: 1px solid #dfdfdf;
	border-radius: 8px;
}
.repayment-file-item {
	padding: 8px 0;
	display: flex;
	justify-content: space-between;
	align-content: center;
	& + .repayment-file-item {
		border-top: 1px solid rgba(26, 56, 96, 0.1);
	}
}
.file-item-left {
	display: flex;
	align-items: center;
	gap: 4px;
	& > p {
		font-size: 14px;
		font-weight: $ft-medium;
		color: #3182f7;
		text-decoration: underline;
		cursor: pointer;
	}
}
.file-item-delete {
	cursor: pointer;
}
.repayment-help-title {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
	margin-bottom: 12px;
	margin-top: 20px;
	& > img {
		height: 22px;
	}
	& > p {
		font-weight: $ft-bold;
		color: #235bed;
	}
}
.repayment-help-content {
	line-height: 22px;
	color: #666666;
	text-align: center;
	margin-bottom: 20px;
}
.repayment-help-text {
	font-size: 14px;
	color: #666666;
	line-height: 24px;
	word-break: keep-all;
	margin-top: 3px;
}
</style>
