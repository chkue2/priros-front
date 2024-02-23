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
					<button class="filter-button button--red">
						송금요청 <span>5</span>
					</button>
					<button class="filter-button button--red">
						보완완료 <span>2</span>
					</button>
					<select class="list-counter">
						<option value="">목록갯수</option>
					</select>
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
						<div class="table-header table-sagent">설정비용</div>
						<div class="table-header table-state">진행상태</div>
						<div class="table-header table-state">설정여부</div>
					</div>
					<div
						v-for="i in 5"
						:key="i"
						class="flex-column"
						@click="handlerClickTableRow(1)"
					>
						<div class="table-column column-box column-none">
							<div class="table-contents table-no">1</div>
							<div class="table-contents table-reg">2023-07-06</div>
							<div class="table-contents table-blance">2023-07-14 AM 09:50</div>
							<div class="table-contents table-repayment">없음</div>
							<div class="table-contents contents-column table-bank">
								<span class="bank-name">카카오뱅크</span>
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
							<div
								class="table-contents table-sagent"
								@click="handlerClickPrevent"
							>
								<div class="price-input" :class="{ readonly: i === 3 }">
									<input type="text" :readonly="i === 3" />
									<button>수정</button>
								</div>
							</div>
							<div class="table-contents table-state">일정등록</div>
							<div
								class="table-contents table-state"
								@click="handlerClickPrevent"
							>
								<div class="toggle-container" :class="{ active: i === 3 }">
									<div class="toggle-button">
										<i></i>
									</div>
									<span class="toggle-text">{{
										i === 3 ? '완료' : '미완'
									}}</span>
								</div>
							</div>
						</div>
						<div class="column-bottom">
							<div class="bottom-left">
								<span class="bottom-tag">보완요청 +3일</span>
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
				<div class="pagination-container">
					<Pagination />
					<button class="excel-download-button">
						<img src="/img/icon/excel-icon.svg" />
						엑셀 다운로드
					</button>
				</div>
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
import Pagination from '@priros/common/components/paging/Pagination.vue';
import ViewCalendarButton from '~/components/button/ViewCalendarButton.vue';
import MarketGraphTab from '~/components/tab/MarketGraphTab.vue';
import MarketStateTab from '~/components/tab/MarketStateTab.vue';
import { useRouter } from 'vue-router';

definePageMeta({
	layout: false,
});

const TOTAL_COUNT = 345;
const counter = ref([
	{
		title: '전체',
		totalCount: TOTAL_COUNT,
		count: TOTAL_COUNT,
		color: '#000000',
	},
	{
		title: '매칭지연',
		totalCount: TOTAL_COUNT,
		count: 2,
		color: '#FB7902',
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
	{
		title: '완료',
		totalCount: TOTAL_COUNT,
		count: 89,
		color: '#A3A3A3',
	},
	{
		title: '설정',
		totalCount: TOTAL_COUNT,
		count: 110,
		color: '#3182F7',
	},
	{
		title: '철회',
		totalCount: TOTAL_COUNT,
		count: 0,
		color: '#A965FF',
	},
	{
		title: '보완요청',
		totalCount: TOTAL_COUNT,
		count: 3,
		color: '#CDAD3D',
	},
]);

const router = useRouter();
const handlerClickTableRow = id => {
	router.push(`/market/setting/detail/${id}`);
};

const handlerClickPrevent = e => {
	e.preventDefault();
	e.stopPropagation();
};
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
	width: 80px;
}
.table-blance {
	width: 180px;
}
.table-repayment {
	width: 60px;
}
.table-bank {
	width: 140px;
}
.table-address {
	width: 150px;
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
.price-input {
	width: 146px;
	height: 33px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	padding: 0 6px;
	border-radius: 8px;
	border: 1px solid #e9eff2;
	& > input {
		width: 50px;
		flex: 1;
		border: none;
		background-color: transparent;
		border-radius: 8px;
		font-size: 14px;
		font-weight: $ft-medium;
	}
	& > button {
		width: 35px;
		height: 24px;
		font-size: 12px;
		font-weight: $ft-medium;
		color: #ffffff;
		background-color: #3182ef;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	&.readonly {
		background-color: #f4f4f4;
		& > input {
			display: none;
		}
		& > button {
			display: none;
		}
		&::after {
			content: '해당없음';
			font-size: 14px;
			font-weight: $ft-medium;
			color: #5a5151;
			padding-left: 10px;
		}
	}
}
.toggle-container {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3px;
	&.active {
		.toggle-button {
			background-color: #1677ff;
			& > i {
				transform: translateX(14px);
			}
		}
		.toggle-text {
			color: #1677ff;
		}
	}
	.toggle-button {
		width: 28px;
		height: 16px;
		border-radius: 16px;
		background-color: rgba(0, 0, 0, 0.25);
		position: relative;
		cursor: pointer;
		& > i {
			display: block;
			width: 12px;
			height: 12px;
			border-radius: 50%;
			background-color: #ffffff;
			box-shadow: 0px 2px 4px 0px rgba(0, 35, 11, 0.2);
			position: absolute;
			top: 2px;
			transform: translateX(2px);
			transition: transform 0.2s ease-in-out;
		}
	}
	.toggle-text {
		font-size: 14px;
		font-weight: $ft-medium;
		color: #bfbfbf;
		line-height: 22px;
	}
}
</style>
