<template>
	<CommonHeaderModal
		modal-id="receptionReportModal"
		modal-title="접수보고"
		width="510px"
		height="auto"
	>
		<div class="report-container">
			<p class="reception-title">접수일</p>
			<input type="date" class="reception-input" />
			<div class="reception-double-container">
				<div class="reception-left">
					<p class="reception-title">접수번호</p>
					<input type="text" class="reception-input read-only" readonly />
				</div>
				<div class="reception-right">
					<p class="reception-help-text">
						해당 명의인의 신청서 접수번호를 입력해주세요
					</p>
					<input type="text" class="reception-input" />
				</div>
			</div>
			<p class="reception-title">등기필정보 보완 첨부파일</p>
			<div class="reception-file-list">
				<div class="reception-file-item">
					<div class="file-item-left">
						<img src="/img/icon/check-blue.svg" />
						<p>jasnfkjbnqkjdfwqfjkewfwjkefwjkefwjkef.png</p>
					</div>
					<div class="file-item-right">
						<p>2024-01-24 15:55:44</p>
						<img src="/img/icon/close-gray.svg" />
					</div>
				</div>
			</div>
		</div>
		<div class="report-buttons">
			<button class="button--blue">등기필정보 보완 재요청</button>
			<button class="button--black">확인완료</button>
		</div>
	</CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue';
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/report.scss';
.reception-title {
	font-weight: $ft-bold;
	line-height: 23px;
}
.reception-input {
	display: flex;
	align-items: center;
	height: 44px;
	padding: 10px 16px;
	border: 1px solid #d1d1d1;
	background-color: #ffffff;
	border-radius: 8px;
	width: 100%;
	margin: 11px 0 35px;
	gap: 12px;
	&.read-only {
		background-color: #f5f5f5;
		border-color: #e1e1e1;
	}
	& > input {
		border: none;
		flex: 1;
		background-color: transparent;
		cursor: pointer;
	}
}
.reception-double-container {
	display: flex;
	align-items: center;
	gap: 12px;
	.reception-left {
		width: 164px;
		display: flex;
		flex-direction: column;
	}
	.reception-right {
		flex: 1;
	}
}
.reception-help-text {
	font-size: 13px;
	color: #006af5;
	line-height: 19px;
}
.reception-subtitle {
	font-size: 13px;
	line-height: 18px;
	color: #656565;
	margin: 8px 0 14px;
}
.reception-file-list {
	padding: 12px 18px;
	border-radius: 8px;
	border: 1px solid #dfdfdf;
}
.reception-file-item {
	padding: 8px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.file-item-left {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 4px;
	& > img {
		width: 24px;
		height: 24px;
	}
	& > p {
		width: 160px;
		height: 18px;
		font-size: 14px;
		font-weight: $ft-medium;
		color: #3182f7;
		text-decoration: underline;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		word-break: break-all;
		cursor: pointer;
	}
}
.file-item-right {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 8px;
	& > p {
		font-size: 12px;
		font-weight: $ft-medium;
		color: rgba(124, 124, 124, 0.94);
	}
	& > img {
		width: 16px;
		height: 16px;
		cursor: pointer;
	}
}
</style>
