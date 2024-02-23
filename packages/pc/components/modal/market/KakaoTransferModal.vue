<template>
	<CommonHeaderModal
		modal-id="kakaoTransferModal"
		modal-title="카카오뱅크 송금요청"
		width="510px"
		height="auto"
	>
		<div class="kakao-container">
			<div class="kakao-container-top">
				<div class="kakao-header">
					<p class="kakao-header-title">송금승인번호</p>
					<P class="kakao-header-content">승인번호는 매수인에게 전송됩니다.</P>
				</div>
				<div class="kakao-input-container">
					<input type="text" />
					<button class="send-button">인증번호 발송</button>
					<button v-if="false" class="apply-button">확인</button>
				</div>
			</div>
			<div class="kakao-help-container">
				<p>
					<b class="active">1)송금승인번호를 인증</b>하시고
					<b>2)아래 송금요청버튼</b>을 눌러주세요.
				</p>
				<p>송금요청 후, 대출금 지급까지는 약 1-2분이 소요됩니다.</p>
				<p>
					송금요청장애 문의전화는 프리로스 고객센터 1670-2361로 부탁드립니다.
				</p>
			</div>
		</div>
		<div class="report-buttons">
			<button class="button--blue">송금요청</button>
			<button class="button--black">닫기</button>
		</div>
	</CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue';
</script>

<style lang="scss" scoped>
@import '~/assets/scss/market/report.scss';
.kakao-container {
	padding: 57px 26px 31px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.kakao-container-top {
	margin: 0 auto;
}
.kakao-header {
	display: flex;
	gap: 8px;
	align-items: center;
}
.kakao-header-title {
	font-size: 14px;
	font-weight: $ft-medium;
	line-height: 17px;
	color: rgba(27, 43, 65, 0.69);
}
.kakao-header-content {
	font-size: 14px;
	font-weight: $ft-medium;
	line-height: 17px;
	color: rgba(127, 127, 127, 0.69);
}
.kakao-input-container {
	width: 325px;
	border-radius: 8px;
	box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
	margin-top: 11px;
	border: 1px solid #e5e7eb;
	position: relative;
	& > input {
		height: 36px;
		padding: 0 12px;
		border: none;
		border-radius: 8px;
		font-size: 14px;
		color: #374151;
	}
	& > button {
		height: 32px;
		border-radius: 5px;
		padding: 0 16px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 2px;
		border: none;
		font-size: 12px;
		font-weight: $ft-medium;
		color: #ffffff;
		cursor: pointer;
		&.send-button {
			background-color: #3182f7;
		}
		&.apply-button {
			background-color: #9b9b9b;
		}
	}
}
.kakao-help-container {
	padding: 11px 10px;
	border-radius: 4px;
	background-color: #f3f5f7;
	margin-top: 57px;
	& > p {
		font-size: 14px;
		font-weight: $ft-medium;
		color: rgba(25, 39, 57, 0.94);
		line-height: 22px;
		& > b {
			font-weight: $ft-bold;
			color: #000000;
			&.active {
				color: #3182f7;
			}
		}
	}
}
</style>
