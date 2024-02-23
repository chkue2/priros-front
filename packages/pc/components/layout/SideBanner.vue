<template>
	<div class="side-banner-wrapper">
		<swiper slides-per-view="auto" :loop="true">
			<swiper-slide v-for="(banner, i) in banners" :key="i">
				<div class="side-banner">
					<img :src="banner.icon" class="side-icon" />
					<div class="side-banner-contents">
						<div class="side-banner-title">
							<p class="side-banner-title-text">{{ banner.title }}</p>
							<img
								src="/img/icon/expand-right-black.svg"
								class="side-banner-title-icon"
							/>
						</div>
						<div class="side-banner-content">
							<p class="side-banner-content-text">{{ banner.content }}</p>
							<span class="side-banner-content-count">
								<b>{{ i + 1 }}</b
								>/{{ banners.length }}
							</span>
						</div>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const banners = [
	{
		icon: '/img/banner/banner-01.png',
		title: '가산점을 위한 평가퀴즈를 진행해주세요',
		content:
			'한 달에 한 번, 업체 평점 가산에 도움을 주는 퀴즈 10개를 진행하고 별 받아가세요!',
	},
	{
		icon: '/img/banner/banner-02.png',
		title: '프리로스 ANDROID앱 개발자 채용공고',
		content:
			'사업확장으로 인한 역량이 뛰어난 개발자를 구인합니다. 많은 지원 부탁드립니다.',
	},
];
</script>

<style lang="scss" scoped>
.side-banner-wrapper {
	box-shadow: 0px 0px 20px 0px #84848433;
	&:v-deep(.swiper-slide) {
		border-radius: 8px;
	}
}
.side-banner {
	display: flex;
	gap: 12px;
	padding: 11px 15px;
	background-color: #ffffff;
	border-radius: 8px;
	cursor: pointer;
}
.side-icon {
	width: 42px;
	height: 42px;
}
.side-banner-contents {
	display: flex;
	flex-direction: column;
	gap: 8px;
}
.side-banner-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.side-banner-title-text {
	font-weight: $ft-bold;
	color: #181818;
}
.side-banner-title-icon {
	width: 16px;
	height: 16px;
}
.side-banner-content {
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
}
.side-banner-content-text {
	font-size: 14px;
	color: #5c5c5c;
	flex: 1;
}
.side-banner-content-count {
	font-size: 14px;
	font-weight: $ft-bold;
	color: #c3c3c3;
	& > b {
		color: #000000;
	}
}
</style>
