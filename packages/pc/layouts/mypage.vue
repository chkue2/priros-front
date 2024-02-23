<template>
	<Header />
	<div id="wrapper" class="logined">
		<p class="mypage-title">마이페이지</p>
		<div class="mypage-wrapper">
			<nav class="mypage-nav">
				<NuxtLink
					to="/user/mypage/info"
					class="nav-home-door"
					:class="{ active: nowPage === 'info' }"
					>회원(사업자)정보</NuxtLink
				>
				<NuxtLink
					to="/user/mypage/user-info"
					class="nav-user"
					:class="{ active: nowPage === 'user-info' }"
					>사용자 정보</NuxtLink
				>
				<NuxtLink
					to="/user/mypage/user-list"
					class="nav-group"
					:class="{ active: nowPage === 'user-list' }"
					>사용자 관리</NuxtLink
				>
				<NuxtLink
					to="/user/mypage/setting"
					class="nav-setting"
					:class="{ active: nowPage === 'setting' }"
					>환경설정</NuxtLink
				>
				<NuxtLink
					to="/user/mypage/payment/quick"
					class="nav-book"
					:class="{ active: isPaymentPage }"
					>결제 등록 및 관리</NuxtLink
				>
				<div v-if="isPaymentPage" class="mypage-submenu">
					<NuxtLink
						to="/user/mypage/payment/quick"
						:class="{ active: nowPage === 'payment-quick' }"
						>간편결제내역</NuxtLink
					>
					<NuxtLink
						to="/user/mypage/payment/regular"
						:class="{ active: nowPage === 'payment-regular' }"
						>일반결제내역</NuxtLink
					>
				</div>
				<NuxtLink
					to="/user/mypage/expert-management"
					class="nav-badge"
					:class="{ active: nowPage === 'expert-management' }"
					>협약 전문가 관리</NuxtLink
				>
				<NuxtLink
					to="/user/mypage/inquire/list"
					class="nav-pencil"
					:class="{ active: nowPage === 'inquire' }"
					>1:1 문의</NuxtLink
				>
			</nav>
			<slot />
		</div>
	</div>
</template>
<script setup>
import { computed } from 'vue';
import Header from '~/components/layout/Header.vue';

const props = defineProps({
	nowPage: {
		type: String,
		default: '',
	},
});

const isPaymentPage = computed(() => {
	return ['payment-quick', 'payment-regular'].includes(props.nowPage);
});
</script>
<style scoped lang="scss">
#wrapper {
	padding-top: 100px;
	width: $wrapper-width;
	margin: 0 auto;
	&.logined {
		padding-top: 167px;
	}
}
.mypage-title {
	font-size: 18px;
	font-weight: $ft-semibold;
	padding: 28px 0 0;
	position: sticky;
	top: 167px;
	background-color: #ffffff;
	z-index: $zi-sticky;
	margin-bottom: 50px;
}
.mypage-wrapper {
	display: flex;
}
.mypage-nav {
	display: inline-flex;
	flex-direction: column;
	gap: 8px;
	position: sticky;
	top: 270px;
	height: 200px;
	z-index: $zi-sticky;
	padding-right: 60px;
	& > a {
		width: 188px;
		height: 40px;
		font-weight: $ft-medium;
		color: #757575;
		text-decoration: none;
		display: flex;
		align-items: center;
		padding: 12px;
		position: relative;
		gap: 12px;
		font-size: 14px;
		&::before {
			content: '';
			width: 20px;
			height: 20px;
			margin-bottom: 4px;
		}
		&.nav-home-door::before {
			background: url(/img/icon/home-door-gray.svg) no-repeat center/cover;
		}
		&.nav-user::before {
			background: url(/img/icon/user-gray.svg) no-repeat center/cover;
		}
		&.nav-group::before {
			background: url(/img/icon/group-gray.svg) no-repeat center/cover;
		}
		&.nav-setting::before {
			background: url(/img/icon/setting-gray.svg) no-repeat center/cover;
		}
		&.nav-book::before {
			background: url(/img/icon/book-gray.svg) no-repeat center/cover;
		}
		&.nav-badge::before {
			background: url(/img/icon/badge-gray.svg) no-repeat center/cover;
		}
		&.nav-pencil::before {
			background: url(/img/icon/pencil-gray.svg) no-repeat center/cover;
		}
		&.active {
			color: #000000;
			background-color: #f6f6f6;
			border-radius: 8px;
			&::after {
				content: '';
				display: block;
				width: 6px;
				height: 12px;
				background: url(/img/icon/expand-right-black.svg) no-repeat center/cover;
				position: absolute;
				top: 50%;
				right: 12px;
				transform: translateY(-60%);
			}
			&.nav-home-door::before {
				background: url(/img/icon/home-door-black.svg) no-repeat center/cover;
			}
			&.nav-user::before {
				background: url(/img/icon/user-black.svg) no-repeat center/cover;
			}
			&.nav-group::before {
				background: url(/img/icon/group-black.svg) no-repeat center/cover;
			}
			&.nav-setting::before {
				background: url(/img/icon/setting-black.svg) no-repeat center/cover;
			}
			&.nav-book::before {
				background: url(/img/icon/book-black.svg) no-repeat center/cover;
			}
			&.nav-badge::before {
				background: url(/img/icon/badge-black.svg) no-repeat center/cover;
			}
			&.nav-pencil::before {
				background: url(/img/icon/pencil-black.svg) no-repeat center/cover;
			}
		}
	}
	.mypage-submenu {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 4px;
		& > a {
			padding: 8px 50px 8px 12px;
			font-size: 14px;
			font-weight: $ft-medium;
			color: #757575;
			text-decoration: none;
			&.active {
				border-radius: 8px;
				background-color: #f6f6f6;
			}
		}
	}
}
</style>
