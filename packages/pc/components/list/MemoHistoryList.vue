<template>
	<div class="memo-insert-container">
		<textarea
			class="memo-insert"
			placeholder="메모를 입력하세요 (한글 최대 50자이내)"
			maxlength="50"
		></textarea>
		<div class="memo-insert-buttons">
			<button class="button--gray">취소</button>
			<button class="button--blue">확인</button>
		</div>
	</div>
	<div class="memo-history-list">
		<div class="memo-item">
			<img src="/img/icon/close-gray.svg" class="memo-delete" />
			<p class="memo-content">
				송금요청 에러 코드 한글은 50글자이내만 기능하니까 여기서 두줄처리까지만
			</p>
			<div class="memo-bottom">
				<p class="memo-gray-text"><b>수신일</b> 2024년 12월 28일 14:37:23</p>
				<p class="memo-gray-text"><b>발신자</b> 홍길동_TL</p>
			</div>
		</div>
	</div>
	<div class="pagination-container">
		<Pagination />
	</div>
</template>

<script setup>
import Pagination from '@priros/common/components/paging/Pagination.vue';
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/common.scss';
.memo-insert-container {
	border: 1px solid #dddddd;
	border-radius: 8px;
	margin-bottom: 25px;
}
.memo-insert {
	width: 100%;
	height: 74px;
	padding: 19px 14px;
	font-size: 14px;
	color: #192434;
	border: none;
	resize: none;
	border-radius: 8px 8px 0 0;
}
.memo-insert-buttons {
	display: flex;
	justify-content: flex-end;
	gap: 8px;
	padding: 6px 16px;
	border-radius: 0 0 8px 8px;
	background-color: #fbfbfb;
	& > button {
		width: 54px;
		height: 37px;
		border-radius: 4px;
		font-size: 14px;
		font-weight: $ft-medium;
		border: none;
		cursor: pointer;
		&.button--gray {
			background-color: rgba(25, 59, 103, 0.05);
			color: #005fdb;
		}
		&.button--blue {
			background-color: #006af5;
			color: #ffffff;
		}
	}
}
.memo-item {
	padding: 20px 56px 10px 14px;
	border-radius: 8px;
	border: 1px solid #dddddd;
	position: relative;
	& + .memo-item {
		margin-top: 8px;
	}
	.memo-delete {
		width: 16px;
		height: 16px;
		cursor: pointer;
		position: absolute;
		top: 11px;
		right: 11px;
	}
	.memo-content {
		font-size: 14px;
		line-height: 18px;
		margin-bottom: 16px;
		word-break: keep-all;
	}
	.memo-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.memo-gray-text {
		font-size: 12px;
		color: #767676;
		line-height: 17px;
		& > b {
			font-weight: $ft-bold;
		}
	}
}
</style>
