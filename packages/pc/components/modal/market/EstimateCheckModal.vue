<template>
	<CommonHeaderModal
		modal-id="estimateCheckModal"
		modal-title="견적확인"
		width="936px"
	>
		<div class="estimate-container">
			<div class="estimate-toggle-top">
				<div class="toggle-top-title">
					<p class="title-left">
						<span class="title-left-bold">견적 요약 정보</span>
						<span class="title-left-regular"
							>• 등기비용 : 제세공과금 + 수수료</span
						>
						<span class="title-left-regular"
							>• 대출실행금 : 대출기관 기준에 따름</span
						>
					</p>
					<span class="title-right"> <i>5,970,192</i> 원 </span>
				</div>
				<img src="/img/icon/expand-down-gray.svg" alt />
			</div>
			<div class="estimate-toggle-bottom toggle-grid">
				<div class="grid-header">등기비용</div>
				<div class="grid-contents grid-blue">5,970,192 원</div>
				<div class="grid-header">입급계좌</div>
				<div class="grid-contents">123-456-123456</div>
				<div class="grid-header">대출기관</div>
				<div class="grid-contents">경남은행</div>
				<div class="grid-header">대출금</div>
				<div class="grid-contents">100,000,000 원</div>
				<div class="grid-header">대출실행금</div>
				<div class="grid-contents">100,000,000 원</div>
				<div class="grid-header">견적발행일</div>
				<div class="grid-contents">2024-01-23</div>
			</div>
			<div class="estimate-receipt-container">
				<div class="receipt">
					<div class="estimate-toggle-top">
						<div class="toggle-top-title">
							<span class="title-left">사건 정보</span>
						</div>
						<div class="toggle-top-icon">
							<img src="/img/icon/expand-down-gray.svg" alt />
						</div>
					</div>
					<div class="estimate-toggle-bottom receipt-contents">
						<div class="receipt-top">
							<p class="top-title">목적물</p>
							<p class="top-content">
								경상남도 창원시 마산합포구 월영동 736 월영에스케이오션뷰 제
								104동 제 1805호
							</p>
						</div>
						<div class="receipt-body">
							<div class="body-column">
								<p class="body-title">매수인</p>
								<p class="body-content">김종석,최은경</p>
							</div>
							<div class="body-column">
								<p class="body-title">산출조건</p>
								<p class="body-content">조정대상지역-1주택</p>
							</div>
							<div class="body-column">
								<p class="body-title">농특세</p>
								<p class="body-content">비과세</p>
							</div>
							<div class="body-column">
								<p class="body-title">매매대금</p>
								<p class="body-content">110,000,000 원</p>
							</div>
							<div class="body-column">
								<p class="body-title">시가표준액</p>
								<p class="body-content">400,000,000 원</p>
							</div>
							<div class="body-column">
								<p class="body-title">채권매입금</p>
								<p class="body-content">8,400,000 원</p>
							</div>
						</div>
					</div>
				</div>
				<div class="receipt">
					<div class="estimate-toggle-top">
						<div class="toggle-top-title">
							<span class="title-left">사건 정보</span>
						</div>
						<div class="toggle-top-icon">
							<span>5,507,092 원</span>
							<img src="/img/icon/expand-down-gray.svg" alt />
						</div>
					</div>
					<div class="estimate-toggle-bottom receipt-contents">
						<div class="receipt-body">
							<div class="body-column">
								<p class="body-title">취득세</p>
								<p class="body-content">4,000,000 원</p>
							</div>
							<div class="body-column">
								<p class="body-title">지방교육세</p>
								<p class="body-content">400,000 원</p>
							</div>
							<div class="body-column">
								<p class="body-title">농특세</p>
								<p class="body-content">0 원</p>
							</div>
							<div class="body-column">
								<p class="body-title">인지</p>
								<p class="body-content">150,000 원</p>
							</div>
							<div class="body-column">
								<p class="body-title">중지</p>
								<p class="body-content">13,000 원</p>
							</div>
							<div class="body-column">
								<p class="body-title">채권부담금</p>
								<p class="body-content">944,092 원</p>
							</div>
						</div>
						<div class="receipt-bottom">
							<p class="bottom-title">소계</p>
							<p class="bottom-content">5,507,092 원</p>
						</div>
					</div>
				</div>
				<div class="receipt">
					<div class="estimate-toggle-top">
						<div class="toggle-top-title">
							<span class="title-left">수수료</span>
						</div>
						<div class="toggle-top-icon">
							<span>463,100 원</span>
							<img src="/img/icon/expand-down-gray.svg" alt />
						</div>
					</div>
					<div class="estimate-toggle-bottom receipt-contents">
						<div class="receipt-body">
							<div class="body-column">
								<p class="body-title">적용수수료</p>
								<p class="body-content">381,000 원</p>
							</div>
							<div class="body-column">
								<p class="body-title">거래신고대행</p>
								<p class="body-content">40,000 원</p>
							</div>
							<div class="body-column">
								<p class="body-title">대중매매</p>
								<p class="body-content">0 원</p>
							</div>
							<div class="body-column">
								<p class="body-title">수수료계</p>
								<p class="body-content">421,000 원</p>
							</div>
							<div class="body-column">
								<p class="body-title">부가세</p>
								<p class="body-content">42,100 원</p>
							</div>
						</div>
						<div class="receipt-bottom">
							<p class="bottom-title">소계</p>
							<p class="bottom-content">463,100 원</p>
						</div>
						<p class="extimate-receipt-help">
							기본 법정수수료(소계) 642,400원 (VAT포함)
						</p>
					</div>
				</div>
			</div>
			<div class="estimate-toggle-top">
				<div class="toggle-top-title">
					<span class="title-left">견적서 안내문</span>
				</div>
				<img src="/img/icon/expand-down-gray.svg" alt />
			</div>
			<div class="estimate-toggle-bottom toggle-area">
				※ 준비서류 ※ <br /><br />
				- 매매계약서 원본 <br />
				- 주민등록초본 각 1통 (주소변동내역 포함, 주민등록번호 공개) <br />
				- 주민등록등본 각 1통 (주소변동내역 포함, 주민등록번호 공개) <br />
				- 가족관계증명서 각 1통 (상세증명서) <br />
				- 도장 <br />
				- 신분증 <br /><br />
				※ 국민주택채권 매입부담금은 매입일의 할인율에 따라 소폭의 가감이 있을 수
				있습니다 ※
				<div class="estimate-help">
					<span>다이렉트로 법무사 (견적담당자 : 김프리 ) T. 02-453-7896</span>
				</div>
			</div>
		</div>
		<div class="estimate-button">
			<p class="estimate-button-help-text">
				다운로드시 크롬, 엣지 PDF 저장 변경 후 저장
			</p>
			<button>화면인쇄</button>
		</div>
	</CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue';
</script>

<style scoped lang="scss">
@import '~/assets/scss/modal/estimate-check.scss';
</style>
