<template>
	<NuxtLayout name="market">
		<template #center>
			<div class="notice-container">
				<div class="search-container">
					<input type="text" placeholder="궁금하신 점이 있다면 검색해보세요" />
					<img src="/img/icon/search-blue.svg" />
				</div>
				<div class="notice-tags">
					<button>전체</button>
					<button>서비스소개</button>
					<button>회원가입</button>
					<button>마켓업무</button>
					<button>기타</button>
				</div>
				<div class="notice-table">
					<div class="notice-table-header">
						<div class="table-no">NO</div>
						<div class="table-title">제목</div>
						<div class="table-writer">작성자</div>
						<div class="table-date">작성일</div>
					</div>
					<div class="notice-table-contents" @click="moveToDetail(1)">
						<div class="table-no important">중요</div>
						<div class="table-title">
							열정과 꿈이 있는 운영매니저를 모집합니다.
							<span class="new">NEW</span>
						</div>
						<div class="table-writer">관리자</div>
						<div class="table-date">2023-12-25</div>
					</div>
				</div>
				<Pagination />
			</div>
		</template>
	</NuxtLayout>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Pagination from '@priros/common/components/paging/Pagination.vue';

definePageMeta({
	layout: false,
});

const router = useRouter();
const moveToDetail = id => {
	router.push(`/customer/help/detail/${id}`);
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/notice.scss';
</style>
