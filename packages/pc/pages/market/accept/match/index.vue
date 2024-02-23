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
						<div class="table-header table-no">No</div>
						<div class="table-header table-reg">등록일</div>
						<div class="table-header table-blance">잔금일</div>
						<div class="table-header table-address">소재지</div>
						<div class="table-header table-repayment">상환</div>
						<div class="table-header table-bank">대출기관</div>
						<div class="table-header table-buyer">매수인</div>
						<div class="table-header table-dagent">이전대리인</div>
						<div class="table-header table-sagent">설정대리인</div>
						<div class="table-header table-state">진행상태</div>
					</div>
					<div
						v-for="i in 5"
						:key="i"
						class="table-column column-box"
						@click="handlerClickTableRow(i)"
					>
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
						</div>
						<div class="table-contents table-sagent">비공개</div>
						<div class="table-contents table-state">의뢰</div>
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
const handlerClickTableRow = id => {
	router.push(`/market/accept/match/detail/${id}`);
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/common.scss';
@import '~/assets/scss/market/search.scss';
@import '~/assets/scss/market/filter.scss';
@import '~/assets/scss/common/table.scss';
.market-table {
	margin-bottom: 40px;
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
		border-radius: 48px;
		border: 1px solid #dadada;
		background-color: #ffffff;
		font-size: 15px;
		cursor: pointer;
		&.button--big {
			width: 95px;
			height: 39px;
		}
		&.button--small {
			width: 64px;
			height: 24px;
			margin-top: 3px;
		}
	}
}
.table-sagent {
	width: 160px;
}
.table-state {
	width: 80px;
}
.bank-name {
	display: flex;
	gap: 3px;
	align-items: center;
	font-size: 14px;
}
.alarm-top {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
	margin-bottom: 5px;
	.alarm-top-box {
		padding: 8px 13px;
		border-radius: 4px;
		border: 1px solid #dfdfdf;
		display: flex;
		gap: 10px;
		& > span {
			font-size: 14px;
			font-weight: $ft-semibold;
			color: #c2c2c2;
			cursor: pointer;
			&.active {
				color: #000000;
				font-weight: $ft-bold;
				text-decoration: underline;
			}
		}
	}
	.alarm-top-info {
		font-size: 12px;
		font-weight: $ft-medium;
		color: #235bed;
		cursor: pointer;
	}
}
.alarm-bottom {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	font-size: 12px;
	font-weight: $ft-medium;
	.alarm-bottom-underline {
		font-size: 12px;
		font-weight: $ft-medium;
		text-decoration: underline;
		cursor: pointer;
	}
}
</style>
