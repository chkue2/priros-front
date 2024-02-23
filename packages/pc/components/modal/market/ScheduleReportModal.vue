<template>
	<CommonHeaderModal
		modal-id="scheduleReportModal"
		modal-title="일정등록 및 추가정보 확인"
		width="510px"
	>
		<div class="report-container">
			<p class="schedule-date-title">잔금일</p>
			<p class="schedule-date-input">2024-04-05</p>
			<div class="schedule-help-title">
				<img src="/img/icon/car-light.svg" class="schedule-help-icon" />
				<p class="schedule-help-text">매수인에게 확인 후 체크해주세요</p>
			</div>
			<p class="schedule-help-content">
				매매계약의 중요사항이 현장에서 변경되면 대출금지급을 중지하고<br />은행
				또는 설정대리인에게 연락해야합니다.
			</p>
			<div class="schedule-report-form">
				<div class="schedule-report-title">
					1. 잔금시간은 몇 시 입니까?
					<select>
						<option value="">시</option>
					</select>
					<select>
						<option value="">분</option>
					</select>
				</div>
				<div class="schedule-report-title mt-34">2. 매매가격을 수정했나요?</div>
				<div class="schedule-report-column">
					<div class="schedule-report-field">
						<label><input type="radio" /><span>동일</span></label>
						<label><input type="radio" /><span>변동발생</span></label>
					</div>
				</div>
				<div class="schedule-report-title">
					3. 계약서 작성 후, 주소전입변동이 있나요?
				</div>
				<div class="schedule-report-column">
					<div class="schedule-report-field">
						<label><input type="radio" /><span>동일</span></label>
						<label><input type="radio" /><span>변동발생</span></label>
					</div>
				</div>
				<div class="schedule-report-title">
					4. 매수인별 취득지분을 알려주세요
				</div>
				<div class="schedule-report-column">
					<div class="schedule-report-field">
						<label><input type="radio" /><span>단독명의</span></label>
						<label><input type="radio" /><span>공동명의</span></label>
					</div>
					<textarea class="schedule-report-area"></textarea>
				</div>
				<div class="schedule-report-title">
					5. 등기부상 매수인측이 채무자가 되어 말소할 수 없는 근저당권이 있나요?
					(중도금 지급목적대출 등)
				</div>
				<div class="schedule-report-column">
					<div class="schedule-report-field">
						<label><input type="radio" /><span>없음</span></label>
						<label><input type="radio" /><span>있음</span></label>
					</div>
				</div>
			</div>
		</div>
		<div class="report-buttons">
			<button class="button--blue">일정보고</button>
		</div>
	</CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue';
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/report.scss';
.schedule-date-title {
	font-size: 14px;
	font-weight: $ft-bold;
	color: rgba(0, 0, 0, 0.69);
	line-height: 17px;
	margin-bottom: 6px;
}
.schedule-date-input {
	padding: 7px 10px;
	background-color: rgba(25, 59, 103, 0.05);
	font-weight: $ft-medium;
	line-height: 22px;
	color: rgba(25, 39, 57, 0.94);
}
.schedule-help-title {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 9px;
	margin: 27px 0 10px;
	.schedule-help-icon {
		width: auto;
		height: 22px;
	}
	.schedule-help-text {
		font-weight: $ft-bold;
		color: #235bed;
		line-height: 22px;
	}
}
.schedule-help-content {
	font-size: 14px;
	line-height: 20px;
	color: #808080;
	text-align: center;
}
.schedule-report-form {
	padding: 22px 26px 30px 11px;
	background-color: #f8f8f8;
	border-radius: 8px;
	margin-top: 27px;
}
.schedule-report-title {
	font-weight: $ft-bold;
	display: flex;
	align-items: center;
	gap: 13px;
	line-height: 23px;
	&.mt-34 {
		margin-top: 34px;
	}
	& > select {
		width: 100px;
		height: 44px;
		border-radius: 8px;
		background-color: #ffffff;
		border: 1px solid #d1d1d1;
		padding-left: 16px;
		color: #393939;
		font-size: 16px;
		font-weight: $ft-medium;
	}
}
.schedule-report-column {
	padding-left: 15px;
	margin-top: 15px;
	& + .schedule-report-title {
		margin-top: 22px;
	}
	.schedule-report-area {
		width: 100%;
		height: 87px;
		padding: 11px;
		background-color: #ffffff;
		margin-top: 8px;
		border: none;
		resize: none;
	}
}
.schedule-report-field {
	display: flex;
	align-content: center;
	gap: 15px;
	& > label {
		display: flex;
		align-items: center;
		gap: 6px;
		& > input[type='radio'] {
			width: 18px;
			height: 18px;
		}
		& > span {
			color: rgba(25, 39, 57, 0.94);
		}
	}
}
</style>
