<template>
	<CommonHeaderModal
		modal-id="appointmentTalkModal"
		modal-title="승인번호 알림톡 전송"
		width="510px"
		height="auto"
	>
		<div class="report-container">
			<div class="talk-title">
				<img src="/img/icon/car-light.svg" />
				<p>수임하기전 <b>지역확인</b>을 한번 더 해주세요!</p>
			</div>
			<div class="talk-place">
				<p>경기도 과천시 사건입니다</p>
			</div>
			<div class="talk-form">
				<div class="talk-form-title">
					<p>담당자</p>
					<span
						>승인번호를 전달받을 담당자를 선택 후, 전송하기 버튼을
						눌러주세요</span
					>
				</div>
				<div class="talk-form-content">
					<DropDown height="44px" />
					<button class="talk-send-button">전송하기</button>
				</div>
				<div class="talk-form-title">
					<p>승인번호 입력</p>
				</div>
				<div class="talk-form-content">
					<input type="tel" placeholder="송금승인번호 입력" />
				</div>
			</div>
		</div>
		<div class="report-buttons">
			<button class="button--blue">수임하기</button>
		</div>
	</CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue';
import DropDown from '@priros/common/components/form/DropDown.vue';
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/report.scss';
.talk-title {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 9px;
	margin: 13px 0;
	& > p {
		font-weight: $ft-bold;
		& > b {
			color: #1eabf8;
		}
	}
}
.talk-place {
	text-align: center;
	margin-bottom: 55px;
	& > p {
		display: inline;
		box-shadow: inset 0 -28px 0 #b5e5ff;
		font-size: 20px;
		font-weight: $ft-medium;
	}
}
.talk-form-title {
	display: flex;
	margin: 28px 0 11px;
	gap: 18px;
	& > p {
		font-weight: $ft-bold;
	}
	& > span {
		font-size: 14px;
		color: #ff4c4c;
	}
}
.talk-form-content {
	display: flex;
	gap: 10px;
	& > input {
		width: 100%;
		padding: 0 16px;
		height: 44px;
		border-radius: 8px;
		border: 1px solid #d1d1d1;
		font-size: 14px;
		margin-bottom: 50px;
	}
}
.talk-send-button {
	width: 135px;
	height: 44px;
	border-radius: 6px;
	background-color: #3182f7;
	box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.04);
	font-size: 14px;
	font-weight: $ft-bold;
	color: #ffffff;
	border: none;
}
</style>
