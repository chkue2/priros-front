<template>
	<NuxtLayout name="mypage" now-page="inquire">
		<div class="inquire-write">
			<p class="inquire-write-title">문의내역</p>
			<div class="inquire-write-top">
				<p class="inquire-form-title">제목 :</p>
				<input type="text" />
				<select>
					<option value="">분류</option>
				</select>
			</div>
			<p class="inquire-write-date">작성일 2023-10-25</p>
			<textarea class="inquire-contents"></textarea>
			<div class="inquire-file-container">
				<p class="inquire-form-title">파일첨부</p>
				<div class="inquire-file-input">
					<p class="inquire-file-text"></p>
					<input type="file" />
					<button class="inquire-file-delete">
						삭제 <img src="/img/icon/trash-black.svg" />
					</button>
					<p class="inquire-file-warning">
						최대 10MB 파일 1개만 첨부 가능합니다
					</p>
				</div>
			</div>
			<div class="inquire-write-buttons">
				<button class="button--blue">수정</button>
				<button class="button--gray">삭제</button>
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
.inquire-write {
	width: 994px;
}
.inquire-write-title {
	height: 47px;
	padding: 0 30px;
	background-color: #f9f9f9;
	border-top: 1px solid #ebebeb;
	border-bottom: 1px solid #ebebeb;
	font-size: 14px;
	font-weight: $ft-semibold;
	display: flex;
	align-items: center;
	margin-bottom: 14px;
}
.inquire-write-top {
	display: flex;
	align-items: center;
	gap: 16px;
	& > input {
		width: 718px;
		height: 43px;
		padding: 0 12px;
		border: 1px solid #bebebe;
	}
	& > select {
		width: 169px;
		height: 43px;
		border-radius: 5px;
		border-color: #bebebe;
		padding: 0 12px;
		appearance: none;
		background-image: url(/img/icon/expand-down-black.svg);
		background-repeat: no-repeat;
		background-position-x: calc(100% - 12px);
		background-position-y: center;
	}
}
.inquire-form-title {
	font-size: 14px;
	padding-left: 30px;
	font-weight: $ft-semibold;
}
.inquire-write-date {
	text-align: right;
	font-size: 12px;
	margin: 16px 0 7px;
	padding: 0 20px;
}
.inquire-contents {
	width: calc(100% - 30px);
	height: 292px;
	padding: 30px;
	border: 1px solid #bebebe;
	border-radius: 13px;
	resize: none;
	border-radius: 13px;
	margin: 0 30px;
	font-size: 16px;
	font-weight: $ft-medium;
}
.inquire-file-container {
	margin-top: 35px;
	display: flex;
	align-items: center;
	gap: 9px;
	.inquire-file-input {
		position: relative;
		.inquire-file-text {
			width: 530px;
			height: 48px;
			border: 1px solid #bebebe;
			border-radius: 8px;
			padding: 0 12px;
			font-size: 14px;
			color: #a1a1a1;
			cursor: pointer;
		}
		& > input {
			display: none;
		}
		& > button {
			position: absolute;
			top: 35%;
			right: 12px;
			transform: translateY(-50%);
			width: 58px;
			height: 27px;
			border: 1px solid #000000;
			background-color: #ffffff;
			border-radius: 5px;
			cursor: pointer;
			& > img {
				margin-top: 2px;
			}
		}
		.inquire-file-warning {
			font-size: 12px;
			color: #e92c2c;
			margin-top: 11px;
		}
	}
}
.inquire-write-buttons {
	padding: 128px 0 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	& > button {
		width: 147px;
		height: 44px;
		border-radius: 4px;
		color: #ffffff;
		font-size: 16px;
		font-weight: $ft-bold;
		border: none;
		cursor: pointer;
		&.button--blue {
			background-color: #0075e1;
		}
		&.button--gray {
			background-color: #cfcfcf;
		}
	}
}
</style>
