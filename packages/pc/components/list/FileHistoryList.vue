<template>
	<p class="file-title">신청정보 보고</p>
	<div class="file-list">
		<div v-for="i in 3" :key="i" class="file-item">
			<div class="file-item-left">
				<img src="/img/icon/check-blue.svg" class="file-item-check" />
				<p class="file-item-text">등기필정보보완.pdf</p>
			</div>
			<img src="/img/icon/close-gray.svg" class="file-item-delete" />
		</div>
	</div>
	<p class="file-title">상환보고</p>
	<div class="file-list">
		<p class="file-list-empty">첨부파일이 없습니다.</p>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.file-title {
	font-size: 14px;
	font-weight: $ft-bold;
	color: rgba(27, 43, 65, 0.69);
	margin-bottom: 10px;
}
.file-list {
	padding: 12px 18px;
	border-radius: 8px;
	border: 1px solid #dfdfdf;
	& + .file-title {
		margin-top: 43px;
	}
}
.file-item {
	padding: 8px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	& + .file-item {
		border-top: 1px solid rgba(26, 56, 96, 0.1);
	}
	.file-item-left {
		display: flex;
		align-items: center;
	}
	.file-item-check {
		width: 24px;
		height: 24px;
	}
	.file-item-text {
		font-size: 14px;
		font-weight: $ft-medium;
		line-height: 23px;
		color: rgba(49, 130, 247, 0.94);
		text-decoration: underline;
		cursor: pointer;
	}
	.file-item-delete {
		width: 18px;
		height: 18px;
		cursor: pointer;
	}
}
.file-list-empty {
	margin: 17px 0;
	text-align: center;
	font-size: 14px;
	color: rgba(27, 43, 65, 0.69);
}
</style>
