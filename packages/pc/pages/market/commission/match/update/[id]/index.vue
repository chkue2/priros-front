<template>
	<NuxtLayout name="market">
		<template #center>
			<div class="market-container">
				<div class="market-write-info">
					<div class="write-item">
						<p class="write-item-top">지금 이 사건은</p>
						<p class="write-item-bottom">의뢰대기중 입니다.</p>
					</div>
					<div class="write-item active">
						<p class="write-item-top">지금 이 사건은</p>
						<p class="write-item-bottom">매칭대기중 입니다.</p>
					</div>
				</div>
				<p class="market-title">상세정보</p>
				<div class="market-form">
					<div class="market-form-column">
						<div class="form-title">
							<span>목적물</span>
						</div>
						<div class="form-contents">
							<div class="form-input read-only" style="width: 273px">
								<input type="text" readonly style="width: 70%" />
							</div>
							<button class="address-search-button">
								주소검색 <img src="/img/icon/search-black.svg" />
							</button>
							<p class="form-subtitle">상세주소</p>
							<div class="form-input" style="width: 398px">
								<input type="text" />
							</div>
						</div>
					</div>
					<div class="market-form-column">
						<div class="form-title">
							<span>계약서</span>
						</div>
						<div class="form-contents">
							<div class="form-input" style="width: 375px">
								<input type="file" />
								<input
									type="text"
									readonly
									placeholder="매매계약서를 업로드해주세요"
								/>
								<img src="/img/icon/folder-black.svg" class="form-file" />
							</div>
							<button class="black-button">파일보기</button>
						</div>
					</div>
					<div class="market-form-column">
						<div class="form-title">
							<span>매매대금</span>
						</div>
						<div class="form-contents">
							<div class="form-input input-won" style="width: 268px">
								<input type="text" />
							</div>
						</div>
					</div>
					<div class="market-form-column">
						<div class="form-title">
							<span>매수인</span>
						</div>
						<div class="form-contents">
							<div class="form-input" style="width: 250px">
								<input type="text" />
							</div>
							<button class="black-button">공동매수인 추가</button>
							<p class="form-help-text">
								매수인이 2인 이상인 경우, 공동 매수인 기능을 사용하여 추가 및
								수정하세요
							</p>
						</div>
					</div>
					<div class="market-form-column">
						<div class="form-title">
							<span>잔금일</span>
						</div>
						<div class="form-contents">
							<div class="form-input" style="width: 246px">
								<input type="date" />
							</div>
						</div>
					</div>
					<div class="market-form-column">
						<div class="form-title">
							<span>매칭지연 기준일</span>
						</div>
						<div class="form-contents">
							<select style="width: 145px">
								<option value="">직접 선택</option>
							</select>
							<div class="form-input" style="width: 271px">
								<input type="date" />
							</div>
						</div>
					</div>
					<div class="market-form-column">
						<div class="form-title">
							<span>휴대전화번호/<br />이메일주소</span>
						</div>
						<div class="form-contents">
							<div class="form-input" style="width: 375px">
								<input
									type="tel"
									placeholder="매수인의 알림수신용 휴대전화번호를 -없이 숫자만 입력하세요"
								/>
							</div>
							<div class="form-input" style="width: 375px">
								<input
									type="email"
									placeholder="매수인의 이메일을 입력하세요 (필수아님)"
								/>
							</div>
						</div>
					</div>
					<div class="market-form-column">
						<div class="form-title">
							<span>대출기관</span>
						</div>
						<div class="form-contents">
							<select style="width: 145px">
								<option value="">직접 선택</option>
							</select>
							<select style="width: 145px">
								<option value="">상품 선택</option>
							</select>
						</div>
					</div>
					<div class="market-form-column">
						<div class="form-title">
							<span>대출금/상환여부</span>
						</div>
						<div class="form-contents">
							<div class="form-input input-won" style="width: 295px">
								<input type="text" />
							</div>
							<select style="width: 145px">
								<option value="">직접 선택</option>
							</select>
						</div>
					</div>
					<div class="market-form-column">
						<div class="form-title">
							<span>설정대리인</span>
							<img src="/img/icon/info-gray.svg" />
						</div>
						<div class="form-contents">
							<select style="width: 295px">
								<option value="">직접 선택</option>
							</select>
						</div>
					</div>
					<div class="market-form-column">
						<div class="form-title">
							<span>배상책임보험/<br />보험료</span>
						</div>
						<div class="form-contents">
							<select style="width: 145px">
								<option value="">직접 선택</option>
							</select>
							<div class="form-input read-only input-won" style="width: 143px">
								<input type="text" readonly />
							</div>
							<p class="form-help-text text--red">
								보상한도는 이 사건 대출금액과 같습니다
							</p>
						</div>
					</div>
					<div class="market-form-column">
						<div class="form-title">
							<span>이전대리인</span>
							<img src="/img/icon/info-gray.svg" />
						</div>
						<div class="form-contents">
							<div class="form-input read-only" style="width: 294px">
								<input type="text" readonly />
							</div>
							<button class="black-button">이전대리인 지정</button>
						</div>
					</div>
					<div class="market-form-column">
						<div class="form-title">
							<span>은행관리번호</span>
						</div>
						<div class="form-contents">
							<div class="form-input" style="width: 295px">
								<input type="text" placeholder="전문관리번호" />
							</div>
						</div>
					</div>
					<div class="market-form-column">
						<div class="form-title">
							<span>전달사항</span>
						</div>
						<div class="form-contents">
							<div class="form-area">
								<textarea
									placeholder="수임자에게 보내는 전달사항을 적어주세요"
								></textarea>
							</div>
						</div>
					</div>
				</div>
				<div class="market-bottom-buttons">
					<div class="bottom-left">
						<button class="button--darkgray">등록취소</button>
						<button class="button--gray">견적산출</button>
						<button class="button--black">저장하기</button>
					</div>
					<button class="button--blue">마켓의뢰</button>
				</div>
			</div>
		</template>
		<template #right>
			<MarketTabs :tab="tab" @click-tab="handlerClickTab" />
			<div class="market-tables">
				<ProcessingHistoryList v-if="tab === 'processed'" />
				<MemoHistoryList v-if="tab === 'memo'" />
				<FileHistoryList v-if="tab === 'files'" />
			</div>
		</template>
	</NuxtLayout>
</template>

<script setup>
import { ref } from 'vue';

import MarketTabs from '~/components/tab/MarketTabs.vue';
import ProcessingHistoryList from '~/components/list/ProcessingHistoryList.vue';
import MemoHistoryList from '~/components/list/MemoHistoryList.vue';
import FileHistoryList from '~/components/list/FileHistoryList.vue';

definePageMeta({
	layout: false,
});

const tab = ref('processed');
const handlerClickTab = v => {
	tab.value = v;
};
</script>

<style scoped lang="scss">
@import '~/assets/scss/market/common.scss';
@import '~/assets/scss/market/write.scss';
</style>
