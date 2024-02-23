<template>
	<div class="transfer-table-container">
		<div class="table-double-box">
			<div class="table-row">
				<p class="table-title">승인일</p>
				<div class="table-contents">2023-12-27 15:55:21</div>
			</div>
			<div class="table-row">
				<p class="table-title">송금처리</p>
				<select class="table-select">
					<option value="">송금완료</option>
				</select>
			</div>
		</div>
		<div class="table-row">
			<p class="table-title">송금거절내용</p>
			<textarea class="table-area"></textarea>
		</div>
		<div class="table-row">
			<button class="button--save">저장하기</button>
		</div>
		<div class="table-double-box">
			<div class="table-row">
				<p class="table-title">대출금</p>
				<div class="table-contents contents-won">1,000,000,000</div>
			</div>
			<div class="table-row">
				<p class="table-title">대출실행금</p>
				<div class="table-contents contents-won">1,000,000,000</div>
			</div>
		</div>
		<div class="table-row">
			<p class="table-title">송금요청합계</p>
			<div class="table-contents contents-won">1,000,000,000</div>
		</div>
		<div class="table-row">
			<p class="table-title">계좌1</p>
			<div class="table-contents">카카오뱅크 123412341234 홍길동</div>
			<div class="table-contents contents-won">1,000,000,000</div>
		</div>
		<div class="table-row">
			<p class="table-title">계좌2</p>
			<div class="table-contents">-</div>
			<div class="table-contents">-</div>
		</div>
		<div class="table-row">
			<p class="table-title">법무사의 메모</p>
			<div class="table-contents">-</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/market/common.scss';
@import '~/assets/scss/market/write.scss';
.transfer-table-container {
	padding: 16px 11px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	background-color: #f2f3f8;
}
.table-double-box {
	display: flex;
	gap: 11px;
	align-items: center;
}
.table-row {
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 4px;
}
.table-title {
	font-size: 14px;
	font-weight: $ft-bold;
	color: #181818;
	margin-bottom: 4px;
}
.table-contents {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	background-color: #ffffff;
	border-radius: 4px;
}
.contents-won::after {
	content: '원';
	font-size: 14px;
	font-weight: $ft-bold;
	color: #4f4f4f;
}
.table-select {
	height: 44px;
	padding: 13px;
	font-size: 14px;
	border: 1px solid #e9eff2;
	border-radius: 8px;
}
.table-area {
	width: 100%;
	height: 95px;
	border-radius: 4px;
	border: 1px solid #dddddd;
	background-color: #ffffff;
	padding: 8px;
	resize: none;
}
.button--save {
	width: 100%;
	height: 48px;
	margin-bottom: 4px;
	background-color: #3182f7;
	box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.04);
	font-size: 14px;
	font-weight: $ft-bold;
	color: #ffffff;
	border: none;
	border-radius: 6px;
	cursor: pointer;
}
</style>
