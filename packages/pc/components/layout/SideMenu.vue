<template>
	<div id="sideMenu">
		<div class="side-menu-top">
			<a href="/">
				<img
					src="/img/icon/logo-pc-blue.png"
					alt="프리로스 홈으로 가기"
					class="side-menu-logo"
				/>
			</a>
			<div class="side-menu-top-text">
				<p class="side-menu-top-title">Priros market</p>
				<p class="side-menu-top-content">Workspace</p>
			</div>
		</div>
		<div class="side-menu-sub-container bb">
			<div class="side-menu-sub-item" @click="NotificationStore.toggle()">
				<div class="side-menu-sub-left">
					<img src="/img/icon/alarm-2.svg" alt="알림" />
					<span>알림</span>
				</div>
				<span class="side-menu-notification-count">8</span>
			</div>
		</div>
		<div class="side-menu-container">
			<div
				v-for="(menu, index) in menusArray"
				:key="index"
				class="side-menu-wrapper"
			>
				<div class="side-menu-toggle" @click="handlerClickToggleMenu(index)">
					<span>{{ menu.title }}</span>
					<img src="/img/icon/expand-up-gray.svg" />
				</div>
				<div class="side-menu-sub-wrapper" :class="{ open: menuOpens[index] }">
					<div v-for="(s, index2) in menu.submenus" :key="index2">
						<NuxtLink
							class="side-menu-sub-item"
							:class="{ active: s.active }"
							:to="s.to"
						>
							<div class="side-menu-sub-left">
								<img
									:src="`/img/icon/${s.active ? s.activeIcon : s.icon}`"
									alt="알림"
								/>
								<span>{{ s.title }}</span>
							</div>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
		<div class="side-menu-bottom">
			<div class="bottom-left">
				<img
					src="/img/cha/cha-empty.png"
					alt="프로필 사진"
					class="bottom-left-profile"
				/>
				<div class="bottom-text">
					<p class="bottom-name">김프리 법무사</p>
					<p class="bottom-position">프리법무사 사무소</p>
				</div>
			</div>
			<img
				src="/img/icon/more-dot-black.svg"
				alt="프로필 더보기"
				class="bottom-right"
			/>
		</div>
	</div>
	<Notification v-if="NotificationStore.isActive" />
</template>

<script setup>
import { ref, computed } from 'vue';
import Notification from '~/components/layout/Notification.vue';
import { useNotificationStore } from '~/store/notificationState.js';
import { menus } from '~/assets/js/menus.js';

const menuOpens = ref(new Array(menus.length).fill(true));

const menusArray = computed(() =>
	menus.reduce((acc, cur) => {
		cur.submenus = cur.submenus.reduce((acc, cur) => {
			acc.push({ ...cur, active: location.pathname.includes(cur.to) });
			return acc;
		}, []);
		acc.push(cur);
		return acc;
	}, []),
);

const handlerClickToggleMenu = i => {
	menuOpens.value = menuOpens.value.map((m, index) => (index === i ? !m : m));
};

const NotificationStore = useNotificationStore();
</script>

<style scoped lang="scss">
#sideMenu {
	width: 260px;
	height: 100vh;
	background-color: #ffffff;
	position: sticky;
	top: 0;
	left: 0;
	border-right: 1px solid #e8e8e8;
	float: left;
	overflow-x: hidden;
	overflow-y: auto;
	z-index: 2;
}
.side-menu-top {
	display: flex;
	gap: 12px;
	padding: 16px;
	.side-menu-logo {
		width: 33px;
		height: 35px;
	}
	.side-menu-top-text {
		display: flex;
		flex-direction: column;
	}
	.side-menu-top-title {
		font-size: 14px;
		font-weight: $ft-semibold;
		margin-bottom: 2px;
		line-height: 20px;
	}
	.side-menu-top-content {
		font-size: 12px;
		color: #bababa;
		line-height: 17px;
	}
}
.side-menu-sub-container {
	padding: 16px;
	&.bb {
		border-bottom: 1px solid #e2e1e7;
	}
}
.side-menu-sub-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 6px 12px;
	cursor: pointer;
	text-decoration: none;
	& + .side-menu-sub-item {
		margin-top: 4px;
	}
	&.active {
		background-color: #f6f6f6;
		span {
			color: #000000;
			font-weight: $ft-medium;
		}
	}
}
.side-menu-sub-left {
	display: flex;
	gap: 12px;
	& > img {
		width: 20px;
		height: 20px;
	}
	& > span {
		font-size: 14px;
		color: #7c7b84;
		line-height: 22px;
	}
}
.side-menu-notification-count {
	padding: 2px 4px 0;
	line-height: 17px;
	color: #ffffff;
	font-size: 12px;
	font-weight: $ft-medium;
	background-color: #e92e50;
	border-radius: 2px;
}
.side-menu-container {
	padding: 16px 16px 63px;
}
.side-menu-toggle {
	margin-bottom: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	& > span {
		font-size: 12px;
		font-weight: $ft-bold;
		color: #7c7b84;
	}
	& > img {
		width: 16px;
		height: 16px;
	}
}
.side-menu-wrapper + .side-menu-wrapper {
	margin-top: 40px;
}
.side-menu-sub-wrapper {
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.3s ease-in-out;
	&.open {
		max-height: 2000px;
	}
}
.side-menu-bottom {
	padding: 16px;
	background-color: #f6f6f6;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	bottom: 0;
	.bottom-left {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.bottom-left-profile {
		width: 44px;
		height: 44px;
		border-radius: 50%;
	}
	.bottom-left-text {
		display: flex;
		flex-direction: column;
	}
	.bottom-name {
		font-size: 14px;
		line-height: 20px;
	}
	.bottom-position {
		font-size: 12px;
		line-height: 17px;
		color: #7c7884;
	}
	.bottom-right {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
}
</style>
