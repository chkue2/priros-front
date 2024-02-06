<template>
	<div class="notification-container">
		<div class="notification-list">
			<div v-for="i in 10" :key="i" class="notification-item">
				<div class="notification-title">
					<p class="notification-title-text">신규 사건 등록알림</p>
					<p class="notification-title-date">5분전</p>
				</div>
				<p class="notification-content-top">
					케이뱅크 사건이 마켓에 오픈되었습니다.
				</p>
				<p class="notification-content-bottom">
					소재지 : 서울특별시 영등포구 당산동4가 99
				</p>
			</div>
		</div>
		<div class="notification-buttons">
			<button class="notification-button button--gray">모두 읽음표시</button>
			<button
				class="notification-button button--black"
				@click="NotificationStore.toggle()"
			>
				닫기
			</button>
		</div>
	</div>
</template>

<script setup>
import { useNotificationStore } from '~/store/notificationState.js';

const NotificationStore = useNotificationStore();
</script>

<style lang="scss" scoped>
.notification-container {
	width: 370px;
	height: 535px;
	position: fixed;
	top: 80px;
	left: 272px;
	background-color: #ffffff;
	box-shadow: 0px 6px 16px 0px #00000014;
	border-radius: 8px;
	z-index: 99;
	padding: 36px 24px;
	&::after {
		content: '';
		display: block;
		width: 0;
		height: 0;
		border-right: 16px solid #ffffff;
		border-left: 16px solid transparent;
		border-top: 16px solid transparent;
		border-bottom: 16px solid transparent;
		position: absolute;
		left: -25px;
		top: 20px;
	}
}
.notification-list {
	height: 436px;
	overflow-x: hidden;
	overflow-y: auto;
}
.notification-item {
	border-bottom: 1px solid #eeeeee;
	margin-bottom: 22px;
	padding-bottom: 10px;
	cursor: pointer;
}
.notification-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
}
.notification-title-text {
	font-size: 14px;
	font-weight: $ft-bold;
}
.notification-title-date {
	font-size: 12px;
	color: #8c8c8c;
}
.notification-content-top {
	font-size: 14px;
	font-weight: $ft-medium;
	line-height: 22px;
}
.notification-content-bottom {
	font-size: 12px;
	line-height: 22px;
}
.notification-buttons {
	display: flex;
}
.notification-button {
	flex: 1;
	height: 56px;
	border: none;
	background-color: #ffffff;
	font-size: 12px;
	font-weight: $ft-medium;
	cursor: pointer;
	&.button--gray {
		color: #929292;
	}
	&.button--black {
		color: #000000;
	}
}
</style>
