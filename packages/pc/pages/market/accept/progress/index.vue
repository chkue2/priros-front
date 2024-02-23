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
					<button class="filter-button">전체 +112</button>
					<button class="filter-button">검색결과 0</button>
				</div>
				<div class="market-table">
					<div class="table-column">
						<div class="table-header table-no">No</div>
						<div class="table-header table-reg">등록일</div>
						<div class="table-header table-blance">잔금일</div>
						<div class="table-header table-repayment">상환</div>
						<div class="table-header table-bank">대출기관</div>
						<div class="table-header table-address">소재지</div>
						<div class="table-header table-buyer">매수인</div>
						<div class="table-header table-fagent">이전대리인</div>
						<div class="table-header table-sagent">설정대리인</div>
						<div class="table-header table-state">진행상태</div>
					</div>
					<div class="flex-column" @click="handlerClickTableRow(1)">
						<div class="table-column column-box column-none">
							<div class="table-contents table-no">1</div>
							<div class="table-contents table-reg">2023-07-06</div>
							<div class="table-contents table-blance">
								2023-07-14 오전 9시 50분
							</div>
							<div class="table-contents table-repayment">없음</div>
							<div class="table-contents contents-column table-bank">
								<span class="bank-name">카카오뱅크</span>
								<span class="bank-tag">#보금자리론</span>
							</div>
							<div class="table-contents table-address">
								<p class="table-ellipsis">
									경기도 과천시 갈현동 135 과천푸르지오 벨라푸르지오 809동 803호
								</p>
							</div>
							<div class="table-contents table-buyer">박명수</div>
							<div class="table-contents contents-column table-fagent">
								김땡땡
							</div>
							<div class="table-contents table-sagent">
								다이렉트로 법무사무소
							</div>
							<div class="table-contents table-state">일정등록</div>
						</div>
						<div class="column-bottom">
							<div class="bottom-left">
								<span class="bottom-tag">보완보고 3일 경과</span>
								<span class="bottom-tag">상환보고 지연</span>
								<span class="bottom-tag">인지요청</span>
							</div>
							<div class="bottom-right">
								<MarketStateTab
									title="견적보고"
									state="완료"
									:is-error="true"
								/>
								<img src="/img/icon/expand-right-gray-big.svg" />
								<MarketStateTab
									title="송금요청"
									state="진행중"
									:is-error="false"
								/>
								<img src="/img/icon/expand-right-gray-big.svg" />
								<MarketStateTab title="상환보고" :is-error="false" />
								<img src="/img/icon/expand-right-gray-big.svg" />
								<MarketStateTab
									title="신청정보보고"
									state="완료"
									:is-error="true"
								/>
							</div>
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
import MarketStateTab from '~/components/tab/MarketStateTab.vue';

definePageMeta({
	layout: false,
});

const router = useRouter();
const handlerClickTableRow = id => {
	router.push(`/market/accept/progress/detail/${id}`);
};

const TOTAL_COUNT = 121;
const counter = ref([
	{
		title: '전체',
		totalCount: TOTAL_COUNT,
		count: TOTAL_COUNT,
		color: '#000000',
	},
	{
		title: '업무지연',
		totalCount: TOTAL_COUNT,
		count: 12,
		color: '#E92C2C',
	},
	{
		title: '진행중',
		totalCount: TOTAL_COUNT,
		count: 100,
		color: '#00BA34',
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
	width: 200px;
}
.table-repayment {
	width: 60px;
}
.table-bank {
	width: 140px;
}
.table-address {
	width: 230px;
}
.table-buyer {
	width: 80px;
}
.table-fagent {
	width: 110px;
}
.table-sagent {
	width: 170px;
}
.table-state {
	width: 100px;
}
</style>
