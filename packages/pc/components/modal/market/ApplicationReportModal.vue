<template>
	<CommonHeaderModal
		modal-id="applicationReportModal"
		modal-title="신청정보 보고"
		width="510px"
	>
		<div class="report-container">
			<div class="application-help-title">
				<img src="/img/icon/car-light.svg" class="application-help-icon" />
				<p class="application-help-text">
					주소경정등기 누락은 등기취하 및 재접수가 필요한 중요사항
				</p>
			</div>
			<p class="application-help-content">
				일치하는 주소가 있는 경우에도, 취득일자에 해당하는 주소가<br />아니라면
				경정등기 대상임을 주의하세요!
			</p>
			<div class="application-form">
				<div class="form-title-container">
					<p class="form-title">등기신청서 작성정보</p>
				</div>
				<textarea
					class="form-area"
					placeholder="등기신청서 작성 ID 및 작성번호를 입력하세요 (매도인별 식별번호 뒷자리 입력으로 대체 가능)"
				></textarea>
				<div class="form-title-container mb-33">
					<p class="form-title">매매가격을 수정했나요?</p>
					<div class="form-radio">
						<label><input type="radio" /><span>동일</span></label>
						<label><input type="radio" /><span>변동발생</span></label>
					</div>
				</div>
				<div class="form-title-container">
					<p class="form-title">매수인 취득지분</p>
					<div class="form-radio">
						<label><input type="radio" /><span>단독명의</span></label>
						<label><input type="radio" /><span>공동명의</span></label>
					</div>
				</div>
				<div class="form-file">
					<input
						type="text"
						placeholder="매수인의 주민등록초본을 첨부하세요"
						readonly
					/>
					<img src="/img/icon/folder-black.svg" />
				</div>
				<div class="form-title-container">
					<p class="form-title">매수인 주소변동</p>
					<div class="form-radio">
						<label><input type="radio" /><span>동일</span></label>
						<label><input type="radio" /><span>변동발생</span></label>
					</div>
				</div>
				<textarea
					class="form-area"
					placeholder="매수인별로 이름과 취득지분을 입력하세요 (균분일 경우 생략 가능)"
				></textarea>
				<div class="form-title-container title-column">
					<p class="form-title">
						등기부상 매수인측이 채무자가 되어 말소할 수 없는 근저당권이 있나요?
						(중도금 지급목적대출 등)
					</p>
					<div class="form-radio">
						<label><input type="radio" /><span>없음</span></label>
						<label><input type="radio" /><span>있음</span></label>
					</div>
				</div>
				<div class="form-title-container">
					<p class="form-title">기타사항</p>
				</div>
				<textarea
					class="form-area"
					placeholder="설정대리인에게 전달할 내용을 입력하세요"
				></textarea>
			</div>
		</div>
		<div class="report-buttons">
			<button class="button--blue">신청정보 보고</button>
		</div>
	</CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue';
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/report.scss';
.application-help-title {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
	.application-help-icon {
		width: auto;
		height: 22px;
	}
	.application-help-text {
		font-weight: $ft-bold;
		color: #235bed;
	}
}
.application-help-content {
	font-size: 14px;
	color: #808080;
	line-height: 20px;
	text-align: center;
	margin: 11px 0 16px;
}
.application-form {
	padding: 20px 24px;
	background-color: #f4f6f8;
	border-radius: 8px;
}
.form-title-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	&.mb-33 {
		margin-bottom: 33px;
	}
	&.title-column {
		flex-direction: column;
		align-items: flex-start;
		.form-radio {
			width: 100%;
			margin-top: 7px;
		}
	}
	& + .form-title-container {
		margin-top: 7px;
	}
	.form-title {
		font-weight: $ft-bold;
		line-height: 23px;
	}
}
.form-area {
	padding: 10px 13px;
	border: 1px solid #e1e1e1;
	border-radius: 4px;
	background-color: #ffffff;
	font-size: 14px;
	width: 100%;
	height: 80px;
	resize: none;
	margin: 16px 0 24px;
}
.form-radio {
	display: flex;
	justify-content: flex-end;
	align-items: center;
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
.form-file {
	display: flex;
	align-items: center;
	height: 48px;
	padding: 0 30px 0 13px;
	border: 1px solid #e1e1e1;
	background-color: #ffffff;
	border-radius: 4px;
	gap: 10px;
	margin: 12px 0 19px;
	cursor: pointer;
	& > input {
		flex: 1;
		border: none;
		font-size: 14px;
	}
	& > img {
		width: 21px;
		height: 21px;
	}
}
</style>
