<template>
	<NuxtLayout name="market">
		<template #center>
			<div class="market-container">
				<div class="market-tabs">
					<button class="market-tab active">전체</button>
					<button class="market-tab">오늘</button>
					<button class="market-tab">내일</button>
				</div>
				<div class="market-search">
					<div class="search-date">
						<span>날짜선택</span>
						<input type="date" /> ~ <input type="date" />
						<img src="/img/icon/calendar-black.svg" />
					</div>
					<select>
						<option value="">모든지역</option>
					</select>
					<select>
						<option value="">조건</option>
					</select>
					<select>
						<option value="">상품전체</option>
					</select>
					<div class="search-text">
						<input
							class="w210"
							type="text"
							placeholder="검색어를 입력해주세요"
						/>
					</div>
					<button class="button--white">초기화</button>
					<button class="button--gray">검색하기</button>
				</div>
				<div class="market-filter">
					<button class="sort-button">
						<img src="/img/icon/sort-black.svg" />
						<span>잔금일 우선순</span>
					</button>
					<button class="filter-button">전체 +89</button>
					<button class="filter-button">검색결과 0</button>
					<button class="filter-button button--red">
						보완요청 <span>5</span>
					</button>
					<button class="filter-button button--red">
						송금요청 <span>5</span>
					</button>
				</div>
				<div class="market-table">
					<div class="table-column">
						<div class="table-header table-no">No.</div>
						<div class="table-header table-reg">등록일</div>
						<div class="table-header table-blance">잔금일</div>
						<div class="table-header table-address">소재지</div>
						<div class="table-header table-repayment">상환</div>
						<div class="table-header table-bank">대출기관</div>
						<div class="table-header table-buyer">매수인</div>
						<div class="table-header table-fagent">이전대리인</div>
						<div class="table-header table-sagent">설정대리인</div>
						<div class="table-header table-state">진행상태</div>
						<div class="table-header table-complete">완료일</div>
					</div>
					<div class="table-column column-box" @click="handlerClickTableRow(1)">
						<div class="table-contents table-no">1</div>
						<div class="table-contents table-reg">2023-07-06</div>
						<div class="table-contents table-blance">
							2023-07-14<br />AM 11:00
						</div>
						<div class="table-contents table-address">
							<p class="table-ellipsis">
								경기도 과천시 갈현동 135 과천푸르지오 벨라...
							</p>
						</div>
						<div class="table-contents table-repayment">N</div>
						<div class="table-contents contents-column table-bank">
							<span class="bank-name">카카오뱅크</span>
							<span class="bank-name">#보금자리론</span>
						</div>
						<div class="table-contents table-buyer">박명수</div>
						<div class="table-contents contents-column table-fagent">
							다이렉트로 법무사무소
						</div>
						<div class="table-contents table-sagent">다이렉트로 법무사무소</div>
						<div class="table-contents table-state">접수</div>
						<div class="table-contents table-complete">
							2023-07-14<br />10:12:22
						</div>
					</div>
				</div>
				<Pagination />
			</div>
		</template>
		<template #right>
			<ViewCalendarButton :margin-top="32" :margin-bottom="11" />
			<MarketGraphTab
				v-for="(count, index) in counter"
				:key="index"
				:title="count.title"
				:total-count="count.totalCount"
				:count="count.count"
				:color="count.color"
			/>
		</template>
	</NuxtLayout>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Pagination from '@priros/common/components/paging/Pagination.vue';
import ViewCalendarButton from '~/components/button/ViewCalendarButton.vue';
import MarketGraphTab from '~/components/tab/MarketGraphTab.vue';

definePageMeta({
	layout: false,
});

const router = useRouter();
const handlerClickTableRow = id => {
	router.push(`/market/accept/complete/detail/${id}`);
};

const TOTAL_COUNT = 89;
const counter = ref([
	{
		title: '전체',
		totalCount: TOTAL_COUNT,
		count: TOTAL_COUNT,
		color: '#000000',
	},
	{
		title: '완료',
		totalCount: TOTAL_COUNT,
		count: 89,
		color: '#002E6A',
	},
	{
		title: '취소',
		totalCount: TOTAL_COUNT,
		count: 0,
		color: '#A3A3A3',
	},
]);
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/common.scss';
@import '~/assets/scss/market/search.scss';
@import '~/assets/scss/market/filter.scss';
@import '~/assets/scss/common/table.scss';
.market-table {
	margin-bottom: 32px;
}
.table-no {
	width: 40px;
}
.table-reg {
	width: 100px;
}
.table-blance {
	width: 100px;
}
.table-repayment {
	width: 70px;
}
.table-bank {
	width: 120px;
}
.table-address {
	width: 210px;
}
.table-buyer {
	width: 75px;
}
.table-fagent {
	width: 160px;
}
.table-sagent {
	width: 160px;
}
.table-state {
	width: 80px;
}
.table-complete {
	width: 150px;
	font-weight: $ft-bold;
}
.bank-name {
	display: flex;
	gap: 3px;
	align-items: center;
	font-size: 14px;
}
.bank-tag {
	font-size: 12px;
	color: #235bed;
	line-height: 17px;
}
</style>
