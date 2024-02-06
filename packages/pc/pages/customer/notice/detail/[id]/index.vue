<template>
	<NuxtLayout name="market">
		<template #center>
			<div class="notice-detail-container">
				<p class="notice-detail-title">우리동네 사건정보 우선제공시행</p>
				<p class="notice-detail-date">작성일 2024-01-04</p>
				<div class="notice-detail-contents">
					2024년 1월 3일 부터 우리동네 사건정보 우선제공을 시행합니다.<br />
					 1. 11시 부터 10분간 우리동네 사건 만 수임가능(확장동네 제외)<br />
					 2. 11시 10분 이후, 기존과 같이 모든지역 사건 수임가능, 우리동네 검색
					시 확장지역 포함<br />
					 3. 환경설정>우리동네 확장지역 초기화<br />
					 * 안내 된 시간을 기준으로 사건의 공개는 빠르거나 늦춰질 수
					있습니다.<br /><br />

					안녕하세요. 프리로스 입니다.<br /><br />

					우리동네 사건 우선 수임은,<br />
					사건 수임과 지역전문가의 연결을 강화하고, 사건분배 및 서비스 효율화를
					위해 시행됩니다.<br />
					먼저 우리동네 사건 수임을 시도한 후, 모든 지역 사건의 수임을 시도 할
					수 있습니다.<br /><br />

					＃우리동네는 우리 사무소 소재지 및 이와 인접한 행정구역입니다.<br />
					# 기존에 등록 된 우리동네 확장지역은 초기화 되므로, 필요 시 다시
					등록해주세요.<br /><br />

					감사합니다.
				</div>
				<div class="notice-detail-button">
					<button @click="handlerClickBackButton">목록으로</button>
				</div>
			</div>
		</template>
	</NuxtLayout>
</template>

<script setup>
import { useRouter } from 'vue-router';

definePageMeta({
	layout: false,
});

const router = useRouter();
const handlerClickBackButton = () => {
	router.back();
};
</script>

<stlye lang="scss" scoped>
@import '~/assets/scss/notice.scss';
</stlye>
