<template>
	<NuxtLayout name="market">
		<template #center>
			<div class="market-container">
				<div class="market-help-text-container">
					<img src="/img/icon/clip.svg" />
					<span class="market-help-text-title">긴급메세지</span>
					<span class="market-help-text-content"
						>보험증권 만료일이 경과되었습니다. 갱신하지 않을 경우 사업장
						아이디는 차단됩니다.</span
					>
				</div>
				<div class="mypage-form-title">
					<p>사업장 정보</p>
				</div>
				<div class="mypage-form">
					<div class="form-column">
						<p class="form-title">이름</p>
						<div class="form-input read-only">
							<input type="text" readonly />
						</div>
					</div>
					<div class="form-column">
						<p class="form-title">대표자</p>
						<div class="form-input read-only">
							<input type="text" readonly />
						</div>
					</div>
					<div class="form-column">
						<p class="form-title">주소</p>
						<div class="form-input read-only">
							<input type="text" readonly />
							<button class="button--black">검색</button>
						</div>
					</div>
					<div class="form-column">
						<p class="form-title">상세주소</p>
						<div class="form-input">
							<input type="text" />
						</div>
					</div>
					<div class="form-double-box">
						<div class="form-column">
							<p class="form-title">사업자등록번호</p>
							<div class="form-input read-only">
								<input type="text" readonly />
							</div>
						</div>
						<div class="form-column">
							<p class="form-title">사업장 대표 전화번호</p>
							<div class="form-input read-only">
								<input type="text" readonly />
							</div>
						</div>
					</div>
					<div class="form-column">
						<p class="form-title">사업장 대표 이메일</p>
						<div class="form-input">
							<input type="text" />
						</div>
					</div>
				</div>
				<div class="mypage-form-title">
					<p>소속 전문가 관리</p>
					<span
						>필수서류 업로드 후, 반드시 사업장정보변경 버튼을 눌러주세요</span
					>
				</div>
				<div class="company-member-list">
					<div class="company-member-item">
						<div class="company-profile-box">
							<img
								src="/img/icon/profile-iu.png"
								class="company-profile-image"
							/>
							<img
								src="/img/icon/camera-circle-gray.svg"
								class="company-profile-icon"
							/>
						</div>
						<p class="company-name"><b>아이유</b><br />대표 전문가</p>
						<div class="member-column">
							<p class="member-title">사업자 등록증</p>
							<div class="member-file">
								<input type="text" readonly placeholder="파일을 첨부해주세요" />
								<img src="/img/icon/folder-black.svg" />
								<img src="/img/icon/download-down-gray.svg" />
							</div>
						</div>
						<div class="member-column">
							<p class="member-title">전문가 등록증</p>
							<div class="member-file active">
								<input
									type="text"
									readonly
									placeholder="파일을 첨부해주세요"
									value="123.png"
								/>
								<img src="/img/icon/folder-black.svg" />
								<img src="/img/icon/download-down-blue.svg" />
							</div>
						</div>
						<div class="member-column">
							<p class="member-title">만료일 / 공제증권</p>
							<div class="member-contents">
								<input type="date" />
								<div class="member-file">
									<input
										type="text"
										readonly
										placeholder="파일을 첨부해주세요"
									/>
									<img src="/img/icon/folder-black.svg" />
									<img src="/img/icon/download-down-gray.svg" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="mypage-form-buttons">
					<button class="button--blue">사업장정보 변경</button>
				</div>
			</div>
		</template>
		<template #right>
			<MypageCompanyTabs :tab="tab" @click-tab="handlerClickTab" />
		</template>
	</NuxtLayout>
</template>

<script setup>
import { ref } from 'vue';
import MypageCompanyTabs from '~/components/tab/MypageCompanyTabs.vue';
definePageMeta({
	layout: false,
});

const tab = ref('review');
const handlerClickTab = value => {
	tab.value = value;
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/market/common.scss';
@import '~/assets/scss/market/detail.scss';
@import '~/assets/scss/mypage/form.scss';
.company-member-item {
	padding: 22px;
	border: 1px solid #e1e1e1;
	display: flex;
	align-items: center;
	gap: 23px;
}
.company-profile-box {
	position: relative;
	cursor: pointer;
	.company-profile-image {
		width: 76px;
		height: 76px;
		border-radius: 50%;
	}
	.company-profile-icon {
		position: absolute;
		bottom: 0;
		right: 0;
	}
}
.company-name {
	line-height: 29px;
	font-size: 20px;
	letter-spacing: -1px;
	b {
		font-weight: $ft-bold;
	}
}
.member-column {
	display: flex;
	flex-direction: column;
	gap: 6px;
}
.member-title {
	font-size: 14px;
	font-weight: $ft-medium;
	line-height: 20px;
	letter-spacing: -1px;
}
.member-contents {
	display: flex;
	align-items: center;
	gap: 5px;
	& > input[type='date'] {
		width: 130px;
		height: 48px;
		border: 1px solid #e1e1e1;
		border-radius: 4px;
		padding: 0 6px;
	}
}
.member-file {
	width: 265px;
	display: flex;
	gap: 21px;
	align-items: center;
	border: 1px solid #e1e1e1;
	border-radius: 4px;
	height: 48px;
	padding: 0 15px;
	& > input {
		flex: 1;
		width: 140px;
		border: none;
		font-size: 14px;
	}
	& > img {
		width: 21px;
		height: 21px;
		cursor: pointer;
	}
	&.active {
		& > input {
			color: #3182f7;
			cursor: pointer;
			font-weight: $ft-medium;
		}
	}
}
</style>
