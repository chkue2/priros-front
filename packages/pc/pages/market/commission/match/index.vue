<template>
	<NuxtLayout name="market">
		<template #center>
			<div class="market-container">
				<div class="market-tabs">
					<button class="market-tab active">전체</button>
					<button class="market-tab">매칭완료</button>
					<button class="market-tab">지정의뢰 <span>2</span></button>
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
					<button class="filter-button">전체 +13</button>
					<button class="filter-button">검색결과 0</button>
				</div>
				<div class="market-table">
					<div class="table-column">
						<div class="table-header table-checkbox">
							<input type="checkbox" />
						</div>
						<div class="table-header table-no">No</div>
						<div class="table-header table-reg">등록일</div>
						<div class="table-header table-blance">잔금일</div>
						<div class="table-header table-address">소재지</div>
						<div class="table-header table-repayment">상환</div>
						<div class="table-header table-bank">대출기관</div>
						<div class="table-header table-buyer">매수인</div>
						<div class="table-header table-dagent">지정대리인</div>
						<div class="table-header table-sagent">설정대리인</div>
						<div class="table-header table-state">진행상태</div>
					</div>
					<div
						v-for="i in 5"
						:key="i"
						class="table-column column-box"
						@click="hanlderClickMatchItem(i)"
					>
						<div class="table-contents table-checkbox">
							<input type="checkbox" />
						</div>
						<div class="table-contents table-no">{{ i }}</div>
						<div class="table-contents table-reg">2023-07-06</div>
						<div class="table-contents table-blance table--blue table--bold">
							2023-07-14
						</div>
						<div class="table-contents table-address table--blue table--bold">
							<p class="table-ellipsis">
								경기도 과천시 갈현동 135 과천푸르지오 벨라푸르지오 809동 803호
							</p>
						</div>
						<div class="table-contents table-repayment">없음</div>
						<div class="table-contents contents-column table-bank">
							<span class="bank-name">카카오뱅크</span>
							<span class="bank-tag">#보금자리론</span>
						</div>
						<div class="table-contents table-buyer">박명수</div>
						<div class="table-contents contents-column table-dagent">
							김땡땡
							<button class="button--cancel">지정취소</button>
						</div>
						<div class="table-contents table-sagent">비공개</div>
						<div class="table-contents table-state">의뢰</div>
					</div>
				</div>
				<div class="market-bottom">
					<div class="bottom-left">
						<select>
							<option value="">의뢰</option>
						</select>
						<button class="state-change-button">사건상태변경</button>
					</div>
					<NuxtLink to="/market/commission/match/write" class="apply-button"
						>사건 등록</NuxtLink
					>
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
import { ref } from 'vue';
import Pagination from '@priros/common/components/paging/Pagination.vue';
import ViewCalendarButton from '~/components/button/ViewCalendarButton.vue';
import MarketGraphTab from '~/components/tab/MarketGraphTab.vue';
definePageMeta({
	layout: false,
});

const TOTAL_COUNT = 18;
const counter = ref([
	{
		title: '전체',
		totalCount: TOTAL_COUNT,
		count: TOTAL_COUNT,
		color: '#000000',
	},
	{
		title: '의뢰대기',
		totalCount: TOTAL_COUNT,
		count: 2,
		color: '#06BAF3',
	},
	{
		title: '매칭지정',
		totalCount: TOTAL_COUNT,
		count: 1,
		color: '#00BA34',
	},
	{
		title: '매칭대기',
		totalCount: TOTAL_COUNT,
		count: 13,
		color: '#00BA34',
	},
	{
		title: '매칭지연',
		totalCount: TOTAL_COUNT,
		count: 2,
		color: '#FB7902',
	},
	{
		title: '철회',
		totalCount: TOTAL_COUNT,
		count: 0,
		color: '#A965FF',
	},
]);

const router = useRouter();
const hanlderClickMatchItem = id => {
	router.push(`/market/commission/match/update/${id}`);
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/common.scss';
@import '~/assets/scss/market/search.scss';
@import '~/assets/scss/market/filter.scss';
@import '~/assets/scss/common/table.scss';
.market-table {
	margin-bottom: 8px;
}
.table-checkbox {
	width: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	& > input[type='checkbox'] {
		width: 16px;
		height: 16px;
	}
}
.table-no {
	width: 50px;
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
	width: 140px;
}
.table-address {
	width: 280px;
}
.table-buyer {
	width: 75px;
}
.table-dagent {
	width: 130px;
	& > button {
		width: 80px;
		height: 26px;
		border-radius: 6px;
		background-color: #ffffff;
		font-size: 12px;
		font-weight: $ft-medium;
		margin-top: 9px;
		border: 1px solid #464646;
		color: #7b7b7b;
		cursor: pointer;
		&.button--cancel {
			color: #ff4c4c;
			border-color: #e9e9e9;
		}
	}
}
.table-sagent {
	width: 160px;
}
.table-state {
	width: 80px;
}
.table-alarm {
	width: 100px;
}
.market-bottom {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.bottom-left {
		display: flex;
		align-content: center;
		gap: 16px;
		& > select {
			appearance: none;
			background-image: url(/img/icon/expand-down-black.svg);
			background-repeat: no-repeat;
			background-position-x: calc(100% - 12px);
			background-position-y: center;
			border: 1px solid #dedede;
			border-radius: 5px;
			width: 144px;
			height: 44px;
			padding-left: 12px;
		}
	}
	.state-change-button {
		width: 163px;
		height: 44px;
		border: none;
		border-radius: 2px;
		background-color: #000000;
		font-size: 14px;
		font-weight: $ft-medium;
		color: #ffffff;
		cursor: pointer;
	}
	.apply-button {
		width: 163px;
		height: 44px;
		border: none;
		border-radius: 2px;
		background-color: #3182f7;
		font-size: 14px;
		font-weight: $ft-medium;
		color: #ffffff;
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		box-shadow: 0px 2px 0px 0px #0000000b;
	}
}
</style>
