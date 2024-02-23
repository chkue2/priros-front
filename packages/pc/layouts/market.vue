<template>
	<SideMenu />
	<div class="middle-bar"></div>
	<div class="header-nav">
		<p>{{ headerNavText }}</p>
	</div>
	<div id="wrapper">
		<div class="wrapper-container">
			<div class="wrapper-center">
				<slot name="center" />
			</div>
			<div class="wrapper-right">
				<SideBanner />
				<slot name="right" />
			</div>
		</div>
	</div>
	<CommonCalendarModal v-if="calendarStore.isActive" />
</template>

<script setup>
import { computed } from 'vue';
import SideMenu from '~/components/layout/SideMenu.vue';
import SideBanner from '~/components/layout/SideBanner.vue';
import CommonCalendarModal from '~/components/modal/CommonCalendarModal.vue';
import { useCalendarStore } from '~/store/calendarModalState.js';

const calendarStore = useCalendarStore();

const headerNavText = computed(() => {
	const path = location.pathname;
	if (
		path.includes('/market/commission/match/write') |
		path.includes('/market/commission/match/update')
	)
		return '마켓의뢰 / 매칭 / 사건등록';
	else if (path.includes('/market/commission/match')) return '마켓의뢰 / 매칭';
	else if (path.includes('/market/commission/progress/detail'))
		return '마켓의뢰 / 진행 / 사건상세';
	else if (path.includes('/market/commission/progress'))
		return '마켓의뢰 / 진행';
	else if (path.includes('/market/commission/complete/detail'))
		return '마켓의뢰 / 완료 / 사건상세';
	else if (path.includes('/market/commission/complete'))
		return '마켓의뢰 / 완료';
	else if (path.includes('/market/accept/match/detail'))
		return '마켓수임 / 매칭 / 사건 수임하기';
	else if (path.includes('/market/accept/match')) return '마켓수임 / 매칭';
	else if (path.includes('/market/accept/progress/detail'))
		return '마켓수임 / 진행 / 사건상세';
	else if (path.includes('/market/accept/progress')) return '마켓수임 / 진행';
	else if (path.includes('/market/accept/complete/detail'))
		return '마켓수임 / 완료 / 사건상세';
	else if (path.includes('/market/accept/complete')) return '마켓수임 / 완료';
	else if (path.includes('/market/setting/setting/detail'))
		return '설정대리인 / 설정업무 / 사건상세보기';
	else if (path.includes('/market/setting')) return '설정대리인 / 설정업무';
	else if (path.includes('/user/mypage/company'))
		return '마이페이지 / 사업장 정보';
	else if (path.includes('/customer/notice')) return '고객센터 / 공지사항';
	else if (path.includes('/customer/help')) return '고객센터 / 헬프센터';
	else return '';
});
</script>

<style scoped lang="scss">
.middle-bar {
	width: 12px;
	height: 100vh;
	background-color: #fcfcfc;
	border-right: 1px solid #e8e8e8;
	float: left;
	position: sticky;
	top: 0;
	left: 260px;
	z-index: 2;
}
.header-nav {
	background-color: #ffffff;
	font-weight: $ft-medium;
	position: sticky;
	top: 0;
	z-index: 1;
	padding-left: 272px;
	& > p {
		padding: 16px 25px;
		font-size: 14px;
	}
}
#wrapper {
	overflow: auto;
}
.wrapper-container {
	width: 1700px;
}
.wrapper-center {
	width: 1300px;
	height: calc(100vh - 46px);
	overflow: auto;
	float: left;
}
.wrapper-right {
	width: 400px;
	height: calc(100vh - 46px);
	float: left;
	position: sticky;
	top: 0;
	padding: 19px 24px 19px 0;
}
</style>
