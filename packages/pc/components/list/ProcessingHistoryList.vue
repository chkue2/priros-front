<template>
	<div class="processing-history-list">
		<div class="processing-item">
			<div class="processing-item-top">
				<div class="processing-item-top-left">
					<span class="processing-index">1</span>
					<span class="processing-gray-text">
						<b>수신일</b> 2024년 12월 28일 14:37:23
					</span>
				</div>
				<span class="processing-gray-text"> <b>처리자</b> 김선 </span>
			</div>
			<div class="processing-item-content">[접수](으)로 변경</div>
			<div class="processing-send">
				<img src="/img/icon/send-blue.svg" />
				<span>카카오뱅크</span>
			</div>
		</div>
		<div class="pagination-container">
			<Pagination />
		</div>
	</div>
</template>

<script setup>
import Pagination from '@priros/common/components/paging/Pagination.vue';
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/common.scss';
.processing-item {
	padding: 14px 11px;
	border: 1px solid #dfdfdf;
	border-radius: 8px;
	position: relative;
	& + .processing-item {
		margin-top: 8px;
	}
}
.processing-item-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.processing-item-top-left {
	display: flex;
	align-items: center;
	gap: 22px;
}
.processing-index {
	font-size: 12px;
	font-weight: $ft-bold;
	color: #767676;
}
.processing-gray-text {
	font-size: 12px;
	color: #767676;
	& > b {
		font-weight: $ft-bold;
	}
}
.processing-item-content {
	margin-top: 13px;
	font-size: 14px;
	font-weight: $ft-medium;
	line-height: 22px;
}
.processing-send {
	display: inline-flex;
	padding: 3px 17px 3px 6px;
	background-color: rgba(0, 106, 245, 0.1);
	border-bottom-right-radius: 7px;
	position: absolute;
	bottom: 0;
	right: 0;
	gap: 7px;
	& > img {
		width: 20px;
		height: 20px;
	}
	& > span {
		font-size: 14px;
		color: rgba(25, 39, 57, 0.94);
		line-height: 19px;
	}
}
</style>
