<template>
	<NuxtLayout name="mypage" now-page="setting">
		<div class="user-setting">
			<div class="setting-flex">
				<div class="setting-flex-left">
					<div class="setting-top">
						<p class="setting-title">우리동네 선택</p>
						<p class="setting-subtitle">최대 5개까지 추가가능합니다.</p>
					</div>
					<div class="setting-areas">
						<div class="setting-cities">
							<p class="setting-area-item active">서울</p>
							<p class="setting-area-item">경기</p>
							<p class="setting-area-item">인천</p>
							<p class="setting-area-item">충북</p>
							<p class="setting-area-item">충남</p>
							<p class="setting-area-item">경북</p>
							<p class="setting-area-item">경남</p>
							<p class="setting-area-item">전남</p>
							<p class="setting-area-item">전북</p>
							<p class="setting-area-item">강원</p>
							<p class="setting-area-item">제주</p>
						</div>
						<div class="setting-province">
							<p class="setting-area-item">강남구</p>
							<p class="setting-area-item active">강동구</p>
							<p class="setting-area-item">강북구</p>
							<p class="setting-area-item">강서구</p>
							<p class="setting-area-item">관악구</p>
							<p class="setting-area-item">광진구</p>
							<p class="setting-area-item">구로구</p>
							<p class="setting-area-item">구로구</p>
							<p class="setting-area-item">구로구</p>
							<p class="setting-area-item">구로구</p>
							<p class="setting-area-item">구로구</p>
							<p class="setting-area-item">구로구</p>
							<p class="setting-area-item">구로구</p>
							<p class="setting-area-item">구로구</p>
							<p class="setting-area-item">구로구</p>
							<p class="setting-area-item">구로구</p>
							<p class="setting-area-item">구로구</p>
						</div>
					</div>
					<div class="setting-area-selected">
						<p class="setting-area-selected-item">
							서울 > 강동구 <img src="/img/icon/close-gray.svg" />
						</p>
						<p class="setting-area-selected-item">
							서울 > 강서구 <img src="/img/icon/close-gray.svg" />
						</p>
						<p class="setting-area-selected-item">
							서울 > 강남구 <img src="/img/icon/close-gray.svg" />
						</p>
						<p class="setting-area-selected-item">
							서울 > 동대문구 <img src="/img/icon/close-gray.svg" />
						</p>
						<p class="setting-area-selected-item">
							서울 > 마포구 <img src="/img/icon/close-gray.svg" />
						</p>
					</div>
				</div>
				<div class="setting-flex-right">
					<div class="setting-top">
						<p class="setting-title">업무용 계좌번호</p>
						<p class="setting-subtitle">
							업무용 계좌를 견적서에서 사용할 수 있습니다.
						</p>
					</div>
					<div class="setting-accounts">
						<div class="setting-accounts-column">
							<div class="setting-accounts-header accounts-alias">별칭</div>
							<div class="setting-accounts-header accounts-bank">은행명</div>
							<div class="setting-accounts-header accounts-account">
								계좌번호
							</div>
							<div class="setting-accounts-header accounts-holder">예금주</div>
							<div class="setting-accounts-header accounts-state">상태</div>
							<div class="setting-accounts-header accounts-delete">삭제</div>
						</div>
						<div
							v-for="i in 5"
							:key="i"
							class="setting-accounts-column column-contents"
						>
							<div class="setting-accounts-contents accounts-alias">
								업무계좌
							</div>
							<div class="setting-accounts-contents accounts-bank">
								카카오뱅크
							</div>
							<div class="setting-accounts-contents accounts-account">
								1234567852121454
							</div>
							<div class="setting-accounts-contents accounts-holder">
								홍길동
							</div>
							<div class="setting-accounts-contents accounts-state">
								<button class="accounts-state-button active">대표</button>
							</div>
							<div class="setting-accounts-contents accounts-delete">
								<button class="accounts-delete-button">삭제</button>
							</div>
						</div>
					</div>
					<div class="setting-accounts-add">
						<input
							type="text"
							class="setting-accounts-input input-alias"
							placeholder="별칭"
						/>
						<select class="setting-accounts-input input-bank">
							<option value="">은행선택</option>
						</select>
						<input
							type="tel"
							class="setting-accounts-input input-account"
							placeholder="계좌번호 숫자만 입력"
						/>
						<input
							type="text"
							class="setting-accounts-input input-name"
							placeholder="이름"
						/>
						<button class="setting-accounts-add-button">추가</button>
					</div>
					<p class="setting-accounts-warning">
						사업용계좌의 경우에는, 통장의 예금주표시와 같이 성명과 상호를
						병기해야 합니다. (EX 홍길동 법무사홍길동사무소)
					</p>
				</div>
			</div>
			<div class="setting-manual">
				<div class="setting-top">
					<p class="setting-title">견적용 안내문</p>
					<p class="setting-subtitle">299/1000</p>
				</div>
				<div class="setting-manual-inputs">
					<div class="setting-manual-inputs-left">
						<p class="setting-manual-input-title">제목 :</p>
						<input type="text" class="setting-manual-input" />
					</div>
					<select>
						<option value="">안내문 선택</option>
					</select>
				</div>
				<textarea class="setting-manual-textarea"></textarea>
			</div>
			<div class="setting-manual-buttons">
				<button class="setting-manual-delete-button">삭제</button>
				<button class="setting-manual-edit-button">수정</button>
				<button class="setting-manual-add-button">추가</button>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
definePageMeta({
	layout: false,
});
</script>

<style scoped lang="scss">
.setting-flex {
	display: flex;
	gap: 10px;
}
.setting-top {
	padding: 0 15px;
	height: 47px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #f9f9f9;
	border-top: 1px solid #eaeaea;
	border-bottom: 1px solid #eaeaea;
	margin-bottom: 10px;
	.setting-title {
		font-size: 14px;
		font-weight: $ft-semibold;
	}
	.setting-subtitle {
		font-size: 12px;
		color: #808080;
	}
}
.setting-areas {
	display: flex;
	gap: 10px;
	.setting-cities {
		width: 120px;
		height: 256px;
		border: 1px solid #969696;
		overflow-y: auto;
		.setting-area-item.active::after {
			content: '';
			width: 5px;
			height: 10px;
			background: url(/img/icon/expand-right-blue.svg) no-repeat center/cover;
		}
	}
	.setting-province {
		width: 240px;
		height: 256px;
		border: 1px solid #969696;
		overflow-y: auto;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	.setting-area-item {
		padding: 0 11px 0 19px;
		height: 32px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;
		font-weight: $ft-medium;
		color: #555555;
		cursor: pointer;
		&.active {
			background-color: #f3f7ff;
			color: #128dff;
		}
	}
}
.setting-area-selected {
	padding: 16px 10px;
	border: 1px solid #ebebeb;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-row-gap: 14px;
	margin-top: 8px;
	.setting-area-selected-item {
		display: flex;
		align-items: center;
		font-size: 14px;
		font-weight: $ft-bold;
		color: #128dff;
		gap: 7px;
		& > img {
			cursor: pointer;
			margin-bottom: 2px;
		}
	}
}
.setting-accounts-column {
	display: flex;
	&.column-contents {
		box-shadow: 2px 3px 12px 0px #00000026;
		margin-top: 9px;
	}
	.setting-accounts-header {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 30px;
		font-size: 12px;
		font-weight: $ft-medium;
		background-color: #f9f9f9;
	}
	.setting-accounts-contents {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 47px;
		font-size: 14px;
	}
	.accounts-alias {
		width: 100px;
	}
	.accounts-bank {
		width: 100px;
	}
	.accounts-account {
		width: 170px;
	}
	.accounts-holder {
		width: 80px;
	}
	.accounts-state {
		width: 70px;
	}
	.accounts-delete {
		width: 70px;
	}
	.accounts-state-button {
		width: 53px;
		height: 33px;
		border: 1px solid #bebebe;
		border-radius: 8px;
		background-color: #ffffff;
		cursor: pointer;
		&.active {
			border-color: #0085ff;
			color: #0085ff;
			background-color: #e5f3ff;
		}
	}
	.accounts-delete-button {
		width: 58px;
		height: 33px;
		border-radius: 5px;
		border: 1px solid #000000;
		background-color: #ffffff;
		cursor: pointer;
	}
}
.setting-accounts-add {
	display: flex;
	gap: 3px;
	margin-top: 63px;
	.setting-accounts-input {
		height: 43px;
		padding: 0 15px;
		border: 1px solid #bebebe;
		border-radius: 5px;
		font-size: 14px;
		&.input-alias {
			width: 95px;
		}
		&.input-bank {
			appearance: none;
			width: 170px;
			background-image: url(/img/icon/expand-down-black.svg);
			background-repeat: no-repeat;
			background-position-y: center;
			background-position-x: calc(100% - 15px);
		}
		&.input-account {
			width: 175px;
		}
		&.input-name {
			width: 80px;
		}
	}
	.setting-accounts-add-button {
		width: 70px;
		height: 43px;
		border-radius: 5px;
		background-color: #404040;
		color: #ffffff;
		border: none;
		font-weight: $ft-medium;

		cursor: pointer;
	}
}
.setting-accounts-warning {
	font-size: 12px;
	color: #e92c2c;
	margin-top: 20px;
	text-align: right;
}
.setting-manual {
	margin-top: 77px;
	.setting-manual-inputs {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.setting-manual-inputs-left {
			display: flex;
			align-items: center;
		}
		.setting-manual-input-title {
			font-size: 14px;
			font-weight: $ft-semibold;
			margin-right: 20px;
		}
		.setting-manual-input {
			width: 311px;
			border: 1px solid #bebebe;
			background-color: #ffffff;
			height: 43px;
			padding: 0 8px;
			font-size: 14px;
		}
		& > select {
			width: 257px;
			height: 43px;
			padding: 0 8px;
			border-radius: 5px;
			border: 1px solid #bebebe;
			appearance: none;
			background-image: url(/img/icon/expand-down-black.svg);
			background-repeat: no-repeat;
			background-position-y: center;
			background-position-x: calc(100% - 15px);
		}
	}
	.setting-manual-textarea {
		margin-top: 30px;
		border-radius: 13px;
		resize: none;
		border: 1px solid #bebebe;
		padding: 28px 20px;
		width: 100%;
		height: 292px;
	}
}
.setting-manual-buttons {
	margin-top: 30px;
	margin-bottom: 43px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 8px;
	& > button {
		width: 147px;
		height: 44px;
		color: #ffffff;
		font-weight: $ft-bold;
		border: none;
		&.setting-manual-delete-button {
			background-color: #cfcfcf;
		}
		&.setting-manual-edit-button {
			background-color: #0075e1;
		}
		&.setting-manual-add-button {
			background-color: #414141;
		}
	}
}
</style>
