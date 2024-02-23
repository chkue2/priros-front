<template>
	<section class="main-top section-container">
		<p class="main-top-title">업무 협업의 미래를 열다</p>
		<p class="main-top-contents">
			혁신적인 솔루션으로, 업무 협업의 미래를 현실로 만나보세요.<br />업무
			효율성을 향상하고 무료 마켓 사용료로 더욱 경제적으로 업무를 관리하세요.<br />사례비
			영업이 필요 없는 저희와 함께 업무 협업을 새로운 수준에서 경험해보세요.
		</p>
	</section>
	<section class="main-cards section-container">
		<p class="main-cards-title">CHECK YOUR TODAY</p>
		<div class="main-cards-container">
			<div class="main-cards-column">
				<img src="/img/main/main-card-1.png" />
				<img src="/img/main/main-card-2.png" />
				<div
					class="card-animation"
					:class="{ active: isCardActive }"
					@click="toggleCardActive"
				>
					<div class="card-front">
						<img src="/img/main/main-card-3.png" />
					</div>
					<div class="card-back">
						<img src="/img/main/main-card-3_1.png" />
					</div>
				</div>
				<img src="/img/main/main-card-4.png" />
				<img src="/img/main/main-card-5.png" />
			</div>
			<div class="main-cards-column">
				<img src="/img/main/main-card-6.png" />
				<img src="/img/main/main-card-7.png" />
				<img src="/img/main/main-card-8.png" />
				<img src="/img/main/main-card-9.png" />
				<img src="/img/main/main-card-10.png" />
			</div>
		</div>
	</section>
	<section class="main-count-cards section-container">
		<div class="main-count-card">
			<div class="main-count-card-top">
				지난주에만 300건의 사건이 등록되었어요
				<img src="/img/icon/expand-right-gray.svg" aria-hidden />
			</div>
			<div class="main-counts">
				<div class="main-count">
					<img src="/img/icon/folder.png" />
					<div class="main-count-right">
						<p class="main-count-right-top">누적사건 수</p>
						<p class="main-count-right-bottom"><b>14941</b>건</p>
					</div>
				</div>
				<div class="main-count-line"></div>
				<div class="main-count">
					<img src="/img/icon/chat-green.png" />
					<div class="main-count-right">
						<p class="main-count-right-top">등록전문가 수</p>
						<p class="main-count-right-bottom"><b>434</b>명</p>
					</div>
				</div>
			</div>
		</div>
		<div class="main-count-card">
			<div class="main-count-card-top">
				공지사항
				<img src="/img/icon/expand-right-gray.svg" aria-hidden />
			</div>
			<div class="main-count-notice">
				<p class="main-count-notice-title">
					사건 수임방식 변경 관련 안내 <img src="/img/icon/board-new.svg" />
				</p>
				<p class="main-count-notice-title">
					공지제목은 어디까지 길어질수있나봤더니 474px이네
				</p>
			</div>
		</div>
	</section>
	<section class="main-swiper section-container">
		<swiper
			slides-per-view="auto"
			:loop="true"
			:autoplay="{ delay: 5000, disableOnInteraction: false }"
			:centered-slides="true"
			:space-between="25"
			effect="fade"
			:fade-effect="{ crossFade: true }"
			:modules="modules"
		>
			<swiper-slide v-for="(c, index) in swiperContents" :key="index">
				<div class="main-swiper-container">
					<div class="main-swiper-left">
						<div class="main-swiper-left-top">
							<p class="main-swiper-top-title">
								프리로스마켓을 사용해야 하는 이유
							</p>
							<p class="main-swiper-top-subtitle">당당하게 업계 1위</p>
						</div>
						<div class="main-swiper-left-bottom">
							<p class="main-swiper-bottom-title">{{ c.title }}</p>
							<p class="main-swiper-bottom-content">{{ c.content }}</p>
						</div>
					</div>
					<div class="main-swiper-right">
						<img :src="c.image" />
						<div class="main-swiper-dot">
							<span :class="{ active: index === 0 }"></span>
							<span :class="{ active: index === 1 }"></span>
							<span :class="{ active: index === 2 }"></span>
							<span :class="{ active: index === 3 }"></span>
						</div>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</section>
	<section class="main-reviews section-container">
		<div class="main-reviews-left">
			<p class="main-reviews-title">생생한<br />사용자 후기들</p>
			<p class="main-reviews-button"></p>
		</div>
		<div class="main-reviews-right">
			<swiper slides-per-view="auto" space-between="48">
				<swiper-slide v-for="(r, index) in reviewsContents" :key="index">
					<img :src="r.emoji" />
					<p class="review-title" v-html="r.title"></p>
					<p class="review-content" v-html="r.content"></p>
				</swiper-slide>
			</swiper>
		</div>
	</section>
	<section class="main-service">
		<div class="main-service-wrapper">
			<div class="main-service-section">
				<div class="main-service-container section-container">
					<div>
						<p
							class="main-service-title"
							:class="{ active: servicePage === 1 }"
						>
							한 눈에 보기좋게<br />진행중인 내 사건
						</p>
						<p
							class="main-service-content"
							:class="{ active: servicePage === 1 }"
						>
							이 앱을 통해 간편하게 진행 중인 사건 리스트를 확인하고, 상세
							정보를 쉽게 접근할 수 있습니다. 이는 업무나 개인 사건 관리를 훨씬
							간편하게 만들어줍니다. 사건에 대한 신속하고 효율적인 정보 접근은
							업무 및 일상 생활의 관리를 한 단계 높여줍니다.
						</p>
						<p
							class="main-service-title"
							:class="{ active: servicePage === 2 }"
						>
							한번에 슥-<br />편리한 송금요청
						</p>
						<p
							class="main-service-content"
							:class="{ active: servicePage === 2 }"
						>
							이 앱은 다른 앱과 차원이 다른 송금요청 기능을 제공합니다. 여러분은
							손쉽게 송금을 요청하고 다른 사용자로부터 송금을 받을 수 있으며, 이
							모든 과정은 간단하고 신속하게 이뤄집니다. 금전 거래를 보다
							간편하게 처리할 수 있어, 더 효율적인 금융 관리가 가능합니다.
						</p>
						<p
							class="main-service-title"
							:class="{ active: servicePage === 3 }"
						>
							손 쉬운<br />보고 시스템
						</p>
						<p
							class="main-service-content"
							:class="{ active: servicePage === 3 }"
						>
							이 앱은 담당자보고와 일정보고를 효율적으로 관리할 수 있도록
							돕습니다. 여러분은 복잡한 프로세스나 혼동을 없애고 손쉽게
							담당자에게 보고하고, 일정을 보고할 수 있어 업무 관리가
							원활해집니다.
						</p>
						<div class="main-service-pagination">
							<div class="main-service-pagination-bar"></div>
							<div class="main-service-pagination-text">
								<span
									:class="{ active: servicePage === 1 }"
									@click="handlerClickServicePaginataion(1)"
									>진행중인 내 사건</span
								>
								<span
									:class="{ active: servicePage === 2 }"
									@click="handlerClickServicePaginataion(2)"
									>편리한 송금요청</span
								>
								<span
									:class="{ active: servicePage === 3 }"
									@click="handlerClickServicePaginataion(3)"
									>손 쉬운 보고 시스템</span
								>
							</div>
						</div>
					</div>
					<img
						:class="{ active: servicePage === 1 }"
						src="/img/main/main-service-1.png"
					/>
					<img
						:class="{ active: servicePage === 2 }"
						src="/img/main/main-service-2.png"
					/>
					<img
						:class="{ active: servicePage === 3 }"
						src="/img/main/main-service-3.png"
					/>
				</div>
			</div>
		</div>
	</section>
	<section class="main-partners">
		<div class="section-container">
			<p class="partners-title">우리의 든든한 파트너를 소개합니다</p>
			<p class="partners-content">
				프리로스마켓은 혁신적인 업무 협업을 위해 파트너 기관과 협력하고
				있습니다.<br />우리 파트너들과 함께, 비즈니스의 성공을 위한 동반자가
				되어드립니다.
			</p>
			<div class="partners-image">
				<div class="partners-image-column">
					<img src="/img/main/kbank.png" alt="케이뱅크" />
					<img src="/img/main/kakaobank.png" alt="카카오뱅크" />
					<img src="/img/main/bnk.png" alt="경남은행" />
					<img src="/img/main/kj.png" alt="광주은행" />
				</div>
				<div class="partners-image-column">
					<img src="/img/main/jb.png" alt="전북은행" />
					<img src="/img/main/lat.png" alt="로앤텍" />
					<img src="/img/main/ktnet.png" alt="케이티넷" />
				</div>
			</div>
		</div>
	</section>
	<section class="main-apps section-container">
		<p class="main-apps-title">2023년 하반기 전문가앱 출시예정</p>
		<p class="main-apps-subtitle">고객님의 편의를 위해 최선을 다하겠습니다</p>
		<div class="main-apps-buttons">
			<button @click="handlerClickAppDownloadButton">
				<img src="/img/main/android-app.png" alt="안드로이드 앱 다운로드" />
			</button>
			<button @click="handlerClickAppDownloadButton">
				<img src="/img/main/ios-app.png" alt="아이폰 앱 다운로드" />
			</button>
		</div>
	</section>
</template>
<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const isCardActive = ref(false);
const toggleCardActive = () => {
	isCardActive.value = !isCardActive.value;
};

const modules = [EffectFade, Autoplay];
const swiperContents = [
	{
		title: '무료서비스 제공',
		content:
			'프리로스마켓은 사용자들에게 고민 없이 혁신적인 서비스를 이용할 수 있는 기회를 제공합니다. 우리는 어떤 형태의 사용료도 부과하지 않으며, 회원 가입부터 모든 기능과 기능 업그레이드에 이르기까지 모든 부분을 무료로 제공합니다.',
		image: '/img/main/main-swiper-1.png',
	},
	{
		title: '사례비 영업 불필요',
		content:
			'사례비 영업을 하지 않음으로써, 여러분은 우리 동네에서 다양한 사건을 더욱 자유롭게 처리할 수 있습니다. 비용이나 금전적인 제약 없이, 실력과 친절한 서비스에 의존하여 업무를 원활하게 진행하실 수 있습니다.',
		image: '/img/main/main-swiper-2.png',
	},
	{
		title: '효율적인 업무 협업',
		content:
			'업무 협업 측면에서 프리로스마켓은 업무 일정을 손쉽게 관리하고, 작업을 할당하며, 팀원들과 실시간으로 소통할 수 있는 도구를 제공합니다. 이를 통해 프로젝트 및 업무의 진향 상황을 투명하게 파악하고 조율할 수 있습니다. 업무의 중복과 혼란을 최소화하여 생산성을 극대화합니다.',
		image: '/img/main/main-swiper-3.png',
	},
	{
		title: '고객 중심 접근',
		content:
			'여러분의 피드백은 우리에게 귀중한 자산입니다. 우리는 이를 정성스럽게 수집하고 분석하여 서비스를 지속적으로 개선하고 완벽하게 맞춤화합니다. 새로운 기능 추가, 사용자 경험 개선, 보안 강화, 그리고 더 나은 서비스 제공을 위해 끊임없이 노력하고 있습니다.',
		image: '/img/main/main-swiper-4.png',
	},
];

const reviewsContents = [
	{
		emoji: '/img/main/main-review-1.png',
		title: '덕분에 첫집 마련<br>원활하게 진행했습니다!',
		content:
			'집 매매계약후 소유권이전등기접수까지 진행되는 동안 중간 점검 꼼꼼히 해주시고 제가 모르는 부분에 대해 친절히 설명 해주셨습니다.',
	},
	{
		emoji: '/img/main/main-review-2.png',
		title: '정말 최고!<br>업무능력 최고!',
		content:
			'##사무소 최고! ##법무사님 최고!<br>업무처리가 능숙하시고 친절하십니다. 저는 무조건 이 사무소를 이용할 겁니다!',
	},
	{
		emoji: '/img/main/main-review-3.png',
		title: '전문적으로 가이드해주셔서<br>무사히 편하게 처리했습니다.',
		content:
			'친절하고 상세하게 설명해주셔서<br>편하게 잘 진행되었습니다.<br>신뢰도가 높은 인상이셔서<br>매우 만족합니다!',
	},
	{
		emoji: '/img/main/main-review-4.png',
		title: '잘 도와주셔서 감사합니다!',
		content:
			'진지하게 믿음직스럽게 확실하게 해주시는 업무스타일에 만족합니다. 매도자, 매수자들은 그런 업무스타일을 바라고 있어요 감사드립니다!',
	},
	{
		emoji: '/img/main/main-review-5.png',
		title: '주변인에게<br>추천했습니다!',
		content:
			'연락도 진짜 빨리 받아주시고 궁금한점도 이해하기 쉽게 알려주셔서 너무 좋았습니다! 애매한건 빠르게 알아봐주시고 확실하게 알려주신게 너무 좋았네요 덕분에 기분좋게 거래했습니다!',
	},
	{
		emoji: '/img/main/main-review-6.png',
		title: '신속하고<br>친절하게 처리해주셨습니다!',
		content:
			'계약 예정인 아파트에 임차권 등까지 되어 있어 걱정 했는데 자세하고 친절하게 설명 해주셨습니다. 그리고 특히 법무사의 친절히 잘 설명 해주십니다.     ',
	},
];

const servicePage = ref(1);
const handlerClickServicePaginataion = v => {
	servicePage.value = v;
};

const handlerClickAppDownloadButton = () => {
	alert('출시 예정입니다.');
	return false;
};
</script>
<style scoped lang="scss">
.section-container {
	width: $wrapper-width;
	margin: 0 auto;
}
.main-top {
	padding: 140px 0 100px;
	.main-top-title {
		font-size: 38px;
		line-height: 16px;
		font-weight: $ft-bold;
		text-align: center;
		margin-bottom: 51px;

		animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)
			both;
		-webkit-animation: tracking-in-expand-fwd 0.8s
			cubic-bezier(0.215, 0.61, 0.355, 1) both;
	}
	.main-top-contents {
		font-size: 18px;
		line-height: 40px;
		font-weight: $ft-medium;
		text-align: center;
		color: #6b6b6b;

		animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)
			both;
		-webkit-animation: tracking-in-expand-fwd 0.8s
			cubic-bezier(0.215, 0.61, 0.355, 1) both;
	}
}
.main-cards {
	height: 613px;
	background-color: #0a194d;
	position: relative;
	overflow: hidden;
	.main-cards-title {
		padding: 32px 0 56px;
		font-size: 24px;
		font-weight: $ft-bold;
		color: #ffffff;
		text-align: center;
	}
	.main-cards-container {
		display: flex;
		flex-direction: column;
		.main-cards-column {
			display: flex;
			justify-content: center;
			img {
				width: 162px;
			}
		}
		.card-animation {
			width: 162px;
			transform-style: preserve-3d;
			transition: all 0.2s ease-in-out;
			cursor: pointer;
			position: relative;
			bottom: 0;
			&:hover {
				bottom: 20px;
			}
			&.active {
				transform: rotateY(180deg);
			}
			.card-front,
			.card-back {
				position: absolute;
				top: 0;
				left: 0;
				backface-visibility: hidden;
				-webkit-backface-visibility: hidden;
			}
			.card-back {
				transform: rotateY(180deg);
			}
		}
	}
}
.main-count-cards {
	padding: 56px 0 160px;
	display: flex;
	justify-content: center;
	gap: 16px;
	.main-count-card {
		flex: 1;
		padding: 40px 30px;
		border-radius: 14px;
		box-shadow: 2px 3px 12px 0px #00000026;
	}
	.main-count-card-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 20px;
		font-weight: $ft-bold;
		margin-bottom: 45px;
		cursor: pointer;
	}
	.main-counts {
		display: flex;
		justify-content: space-between;
		gap: 60px;
	}
	.main-count-line {
		width: 1px;
		height: 55px;
		background-color: #dedede;
		display: inline-block;
	}
	.main-count {
		flex: 1;
		display: flex;
		gap: 20px;
		& > img {
			width: 66px;
		}
		.main-count-right-top {
			font-size: 20px;
			line-height: 28px;
			font-weight: $ft-medium;
			color: #8e8e8e;
		}
		.main-count-right-bottom {
			font-size: 20px;
			font-weight: $ft-bold;
			color: #8e8e8e;
			text-align: right;
			b {
				font-size: 26px;
				font-weight: $ft-bold;
				color: #0c0c0c;
				line-height: 37px;
				margin-right: 4px;
			}
		}
	}
	.main-count-notice-title {
		font-size: 20px;
		line-height: 28px;
		display: flex;
		align-items: center;
		gap: 9px;
		cursor: pointer;
		& + .main-count-notice-title {
			margin-top: 15px;
		}
		& > img {
			width: 24px;
			height: 24px;
		}
	}
}
.main-swiper {
	&:deep(.swiper-slide) {
		background-color: #ffffff;
	}
}
.main-swiper-container {
	display: flex;
	justify-content: space-between;
	margin: 160px 0;
	background-color: #ffffff;
	.main-swiper-left {
		flex: 1;
		max-width: 488px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.main-swiper-top-title {
			font-size: 30px;
			line-height: 16px;
			margin-bottom: 30px;
			font-size: 700;
		}
		.main-swiper-top-subtitle {
			font-size: 28px;
			line-height: 6px;
			font-weight: $ft-bold;
			color: #717171;
		}
		.main-swiper-bottom-title {
			font-size: 28px;
			line-height: 16px;
			font-weight: 700px;
			margin-bottom: 20px;
		}
		.main-swiper-bottom-content {
			font-size: 20px;
			line-height: 36px;
			color: #646464;
			font-weight: $ft-medium;
		}
	}
	.main-swiper-right {
		width: 616px;
		box-shadow: 2px 3px 12px 0px #00000026;
		border-radius: 14px;
		margin-right: 9px;
		img {
			width: 100%;
			height: auto;
		}
		.main-swiper-dot {
			width: 100%;
			padding: 35px 0 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 9px;
			& > span {
				display: block;
				width: 14px;
				height: 14px;
				border-radius: 50%;
				background-color: #d9d9d9;
				&.active {
					background-color: #7ef422;
				}
			}
		}
	}
}
.main-reviews {
	padding-bottom: 268px;
	.main-reviews-left {
		float: left;
		.main-reviews-title {
			padding: 73px 0 44px;
			font-size: 30px;
			font-weight: $ft-bold;
			line-height: 38px;
		}
		.main-reviews-button {
			width: 273px;
			height: 82px;
			border: 3px solid #000000;
			border-radius: 70px;
			display: flex;
			justify-content: center;
			align-items: center;
			&::after {
				content: '';
				width: 150px;
				height: 15px;
				background: url(/img/main/arrow-right-big.svg) no-repeat center/cover;
			}
		}
	}
	.main-reviews-right {
		text-align: center;
		padding-left: 320px;
		img {
			width: 129px;
			height: 129px;
		}
		.review-title {
			margin: 12px 0;
			font-size: 17px;
			font-weight: $ft-bold;
			line-height: 26px;
		}
		.review-content {
			font-size: 15px;
			line-height: 25px;
		}
	}
	&:deep(.swiper-slide) {
		width: 269px;
		height: 380px;
		background-color: #f8f9fd;
		border-radius: 14px;
		padding: 25px 14px;
	}
}
.main-service {
	overflow: hidden;
	.main-service-wrapper {
		display: flex;
		flex-wrap: nowrap;
		width: 300vw;
		& > .main-service-section {
			width: 100vw;
			height: 100vh;
			display: flex;
			align-items: center;
		}
		.main-service-container {
			display: flex;
			justify-content: space-between;
			& > div {
				width: 480px;
			}
			.main-service-title {
				font-size: 36px;
				font-weight: $ft-bold;
				line-height: 56px;
				display: none;
				&.active {
					display: block;
					animation: text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
						both;
					-webkit-animation: text-focus-in 0.5s
						cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
				}
			}
			.main-service-content {
				margin: 50px 0 194px;
				font-size: 20px;
				font-weight: $ft-medium;
				line-height: 37px;
				color: #646464;
				display: none;
				&.active {
					display: block;
					animation: text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
						both;
					-webkit-animation: text-focus-in 0.5s
						cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
				}
			}
			img {
				width: 657px;
				height: 795px;
				display: none;
				&.active {
					display: block;
					animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
					-webkit-animation: slide-left 0.5s
						cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
				}
			}
			.main-service-pagination {
				display: inline-flex;
			}
			.main-service-pagination-bar {
				width: 9px;
				height: 137px;
				background-color: #f2f2f2;
				margin-right: 16px;
			}
			.main-service-pagination-text {
				display: flex;
				flex-direction: column;
				gap: 13px;
				& > span {
					font-size: 20px;
					font-weight: $ft-semibold;
					color: #d8d8d8;
					position: relative;
					cursor: pointer;
					line-height: 37px;
					&.active {
						color: #000000;
						&::before {
							content: '';
							width: 9px;
							height: 100%;
							background-color: #7ef422;
							position: absolute;
							top: 0;
							left: -24.5px;
						}
					}
				}
			}
		}
	}
}
.main-partners {
	padding: 190px 0 200px;
	background-color: #f8f9fd;
	.partners-title {
		font-size: 38px;
		font-weight: $ft-bold;
		text-align: center;
		line-height: 34px;
	}
	.partners-content {
		font-size: 18px;
		line-height: 40px;
		margin: 58px 0 100px;
		text-align: center;
	}
}
.partners-image {
	.partners-image-column {
		display: flex;
		justify-content: center;
		gap: 138px;
		& + .partners-image-column {
			margin-top: 100px;
		}
		img {
			width: 168px;
			height: 168px;
		}
	}
}
.main-apps {
	padding: 167px 0 132px;
	.main-apps-title {
		font-size: 30px;
		font-weight: $ft-bold;
		line-height: 16px;
		text-align: center;
	}
	.main-apps-subtitle {
		margin: 18px 0 75px;
		font-size: 28px;
		font-weight: $ft-bold;
		color: #717171;
		text-align: center;
	}
	.main-apps-buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 40px;
		& > button {
			background-color: #1c1b1e;
			border-radius: 12px;
			padding: 18px 30px;
			cursor: pointer;
			border: none;
			& > img {
				width: 166px;
				height: 41px;
			}
		}
	}
}

// main text animation
@-webkit-keyframes tracking-in-expand-fwd {
	0% {
		letter-spacing: -0.5em;
		-webkit-transform: translateZ(-700px);
		transform: translateZ(-700px);
		opacity: 0;
	}
	40% {
		opacity: 0.6;
	}
	100% {
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		opacity: 1;
	}
}
@keyframes tracking-in-expand-fwd {
	0% {
		letter-spacing: -0.5em;
		-webkit-transform: translateZ(-700px);
		transform: translateZ(-700px);
		opacity: 0;
	}
	40% {
		opacity: 0.6;
	}
	100% {
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		opacity: 1;
	}
}
//service text animation
@-webkit-keyframes text-focus-in {
	0% {
		-webkit-filter: blur(12px);
		filter: blur(12px);
		opacity: 0;
	}
	100% {
		-webkit-filter: blur(0px);
		filter: blur(0px);
		opacity: 1;
	}
}
@keyframes text-focus-in {
	0% {
		-webkit-filter: blur(12px);
		filter: blur(12px);
		opacity: 0;
	}
	100% {
		-webkit-filter: blur(0px);
		filter: blur(0px);
		opacity: 1;
	}
}

//service image animation
@-webkit-keyframes slide-left {
	0% {
		-webkit-transform: translateX(100px);
		transform: translateX(100px);
	}
	100% {
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}
}
@keyframes slide-left {
	0% {
		-webkit-transform: translateX(100px);
		transform: translateX(100px);
	}
	100% {
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}
}
</style>
