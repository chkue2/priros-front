<template>
	<NuxtLayout name="mypage" now-page="inquire">
		<div class="inquire">
			<div class="inquire-list">
				<div class="table-column">
					<div class="table-header inquire-no">No.</div>
					<div class="table-header inquire-category">분류</div>
					<div class="table-header inquire-title">제목</div>
					<div class="table-header inquire-write-date">작성일</div>
					<div class="table-header inquire-reply-date">답변일</div>
				</div>
				<div v-for="i in 5" :key="i" class="table-column column-box">
					<div class="table-contents inquire-no">No.1</div>
					<div class="table-contents inquire-category">일반문의</div>
					<div class="table-contents inquire-title">
						프리로스앱 사용자 앱출시는 언제되나요? 빨리 나왔으면 좋겠습니다.
						제목이 길면 말줄임표를 사용해보겠습니다. 한줄로만 나타나게
					</div>
					<div class="table-contents inquire-write-date">2023-10-25</div>
					<div class="table-contents inquire-reply-date">2023-10-25</div>
				</div>
			</div>
			<div class="inquire-write-button">
				<NuxtLink to="/user/mypage/inquire/write">문의하기</NuxtLink>
			</div>
			<Pagination />
		</div>
	</NuxtLayout>
</template>
<script setup>
import Pagination from '@priros/common/components/paging/Pagination.vue';
definePageMeta({
	layout: false,
});
</script>
<style scoped lang="scss">
@import '~/assets/scss/common/table.scss';
.inquire {
	padding-bottom: 64px;
}
.inquire-list {
	width: 977px;
	.inquire-no {
		width: 60px;
	}
	.inquire-category {
		width: 90px;
	}
	.inquire-title {
		width: 630px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		word-break: break-all;
		text-align: left;
		&.table-contents {
			display: block;
			line-height: 65px;
		}
	}
	.inquire-write-date,
	.inquire-reply-date {
		width: 110px;
	}
	.table-contents {
		cursor: pointer;
	}
}
.inquire-write-button {
	margin: 190px 0 16px;
	display: flex;
	justify-content: flex-end;
	& > a {
		width: 213px;
		height: 48px;
		border-radius: 6px;
		background-color: #000000;
		font-size: 18px;
		font-weight: $ft-bold;
		color: #ffffff;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
	}
}
</style>
