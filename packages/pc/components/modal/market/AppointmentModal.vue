<template>
	<CommonHeaderModal
		modal-id="appointmentModal"
		modal-title="수임하기"
		width="900px"
		height="auto"
	>
		<div class="report-container">
			<p class="appointment-title">사건정보</p>
			<div class="market-detail-info info--gray">
				<div class="info-header">등기유형</div>
				<div class="info-contents contents-3">소유권이전 (매매)</div>
				<div class="info-header">잔금일</div>
				<div class="info-contents contents-3">2024-01-12</div>
				<div class="info-header">매수인</div>
				<div class="info-contents contents-3">유*석</div>
				<div class="info-header">담당자</div>
				<div class="info-contents contents-3 flex-start">
					수원지방법원 안양지원 안양등기소
					<span class="contents-tag">
						<img src="/img/icon/warning-white.svg" />
						필증 우편 금지
					</span>
				</div>
			</div>
			<p class="appointment-title">수임약관</p>
			<div class="appointment-help-container">
				<p class="help-title">[필독] 수임약관을 확인하세요.</p>
				<p class="help-content">
					소유권이전등기 업무와함께 설정법무사에 준하여, 대출금의 전달,
					기존권리의 해소 (상환 및 말소)업무가 요구됩니다.
				</p>
				<p class="help-content">
					사건수임 시, 사건별 전문인배상책임보험 가입의무가 부여됩니다 (입무사건
					제외)
				</p>
				<p class="help-content">
					업무상 필수절차를 이행하고 진행정보를 공유(견적,접수정보 등)해야
					합니다.
				</p>
				<p class="help-content">
					설정대리인이 등기필정보를 요청할 경우, 가능한 빠른 시간내
					제공해야합니다.
				</p>
				<p class="help-content">
					수임철회는 매우 중요한 결정이므로 서비스 이용에 불이익을 받을 수
					있습니다.
				</p>
				<p class="help-content">
					사건수임의 선순환을 위해, 고객에게 친절하고 책임감 있는 서비스를
					제공해주세요.
				</p>
				<p class="help-content">
					미확정 사건의 경우, 사전 통보없이 사건이 취소될 수 있습니다.
				</p>
			</div>
			<label class="appointment-agree">
				<input type="checkbox" />
				<span
					>위 수임내용을 빠짐없이 확인하였으며, 전문자격자의 의무를 다하고
					성실하게 업무를 수행하겠습니다.</span
				>
			</label>
			<label class="appointment-agree">
				<input type="checkbox" /> <span>등기필정보를 방문수령 하겠습니다.</span>
			</label>
		</div>
		<div class="report-buttons">
			<button class="button--blue">수임하기</button>
		</div>
	</CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue';
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/report.scss';
@import '~/assets/scss/market/detail.scss';
.appointment-title {
	font-weight: $ft-semibold;
	line-height: 22px;
	margin-bottom: 10px;
}
.market-detail-info {
	.info-header {
		min-height: 54px;
	}
	.info-contents {
		font-size: 13px;
	}
}
.contents-tag {
	flex: 1;
	padding: 0px 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3px;
	border-radius: 6px;
	background-color: #fa3636;
	font-size: 11px;
	font-weight: $ft-bold;
	color: #ffffff;
	& > img {
		width: 15px;
		height: 15px;
	}
}
.appointment-help-container {
	height: 252px;
	padding: 19px;
	border: 1px solid #e4e4e4;
	overflow-x: hidden;
	overflow-y: auto;
	.help-title {
		font-weight: $ft-medium;
		line-height: 23px;
		color: #e92c2c;
		margin-bottom: 20px;
	}
	.help-content {
		display: flex;
		gap: 12px;
		line-height: 22px;
		font-size: 12px;
		font-weight: $ft-medium;
		color: #3c322f;
		&::before {
			content: '•';
		}
	}
}
.appointment-agree {
	display: flex;
	gap: 10px;
	margin-top: 11px;
	& > input {
		width: 18px;
		height: 18px;
	}
}
</style>
