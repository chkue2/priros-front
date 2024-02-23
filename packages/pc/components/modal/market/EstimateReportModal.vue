<template>
	<CommonHeaderModal
		modal-id="estimateReportModal"
		modal-title="견적보고"
		width="936px"
	>
		<div class="estimate-container">
			<div class="estimate-grid">
				<div class="grid-top grid-12">
					사건정보
					<select>
						<option value="">0: 산출이력이 없습니다</option>
					</select>
				</div>
				<div class="grid-header">목적물</div>
				<div class="grid-contents grid-7">서울시 서초구 신반포로 270</div>
				<div class="grid-header">매수인</div>
				<div class="grid-contents">유재석</div>
				<div class="grid-header">산출조건</div>
				<div class="grid-contents">
					<select>
						<option value="">산출조건 선택</option>
					</select>
				</div>
				<div class="grid-header">농특세</div>
				<div class="grid-contents">
					<select>
						<option value="">농특세 선택</option>
					</select>
				</div>
				<div class="grid-header">대출기관<br />(대출금액)</div>
				<div class="grid-contents">케이뱅크 (500,000,000)</div>
				<div class="grid-header">매매대금</div>
				<div class="grid-contents contents-won">
					<input type="text" readonly placeholder="0" />
				</div>
				<div class="grid-header">시가<br />표준액</div>
				<div class="grid-contents">
					<input
						type="text"
						placeholder="여기를 클릭하여 계산하세요"
						class="text-button"
						readonly
					/>
				</div>
				<div class="grid-header">채권부담율<br />(%)</div>
				<div class="grid-contents">
					<input type="date" /> <span class="estimate-percent">14.0776</span>
				</div>
			</div>
			<div class="estimate-calc">
				<button class="calc-button">계산하기</button>
			</div>
			<div class="estimate-grid calc-grid">
				<div class="grid-top grid-4">
					제세공과금<img src="/img/icon/help-icon.svg" />
				</div>
				<div class="grid-top grid-4">
					수수료<img src="/img/icon/help-icon.svg" />
					<span class="ft-small">법정수수료는 <b>624,000</b>원</span>
				</div>
				<div class="grid-top grid-4">설정비용</div>
				<div class="grid-4 grid-column">
					<div class="grid-header">취등록세</div>
					<div class="grid-contents contents-won">
						<input type="text" placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header">적용수수료</div>
					<div class="grid-contents contents-won">
						<input type="text" placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header">대출설정인지</div>
					<div class="grid-contents contents-won">
						<input type="text" placeholder="0" readonly />
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header">지방교육세</div>
					<div class="grid-contents contents-won">
						<input type="text" placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header">거래신고 대행</div>
					<div class="grid-contents contents-won">
						<input type="text" placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header">대출설정채권</div>
					<div class="grid-contents contents-won">
						<input type="text" placeholder="0" readonly />
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header">농특세</div>
					<div class="grid-contents contents-won">
						<input type="text" placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header">다중매매</div>
					<div class="grid-contents contents-won">
						<input type="text" placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header header-medium">소계</div>
					<div class="grid-contents contents-won">
						<input type="text" placeholder="0" readonly />
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header">인지</div>
					<div class="grid-contents contents-won">
						<input type="text" placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header">수수료계</div>
					<div class="grid-contents contents-won">
						<input type="text" readonly placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column"></div>
				<div class="grid-4 grid-column">
					<div class="grid-header">중지</div>
					<div class="grid-contents contents-won">
						<input type="text" placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header">부가세</div>
					<div class="grid-contents contents-won">
						<input type="text" readonly placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column"></div>
				<div class="grid-4 grid-column">
					<div class="grid-header">채권매입금</div>
					<div class="grid-contents contents-won">
						<input type="text" placeholder="0" readonly />
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header header-medium">소계</div>
					<div class="grid-contents contents-won">
						<input type="text" readonly placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column"></div>
				<div class="grid-4 grid-column">
					<div class="grid-header">채권부담금</div>
					<div class="grid-contents contents-won">
						<input type="text" placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column"></div>
				<div class="grid-4 grid-column"></div>
				<div class="grid-4 grid-column">
					<div class="grid-header header-medium">소계</div>
					<div class="grid-contents contents-won">
						<input type="text" readonly placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column"></div>
				<div class="grid-4 grid-column"></div>
				<div class="grid-8 grid-column">
					<div class="grid-header header-bold">총 합계</div>
					<div class="grid-contents gap-0">
						<div class="grid-contents contents-won flex-1">
							<input type="text" readonly placeholder="0" />
						</div>
						<button class="apply-button">합계 적용하기</button>
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header header-bold">대출실행금</div>
					<div class="grid-contents contents-won">
						<input type="text" readonly placeholder="0" />
					</div>
				</div>
				<div class="grid-4 grid-column">
					<div class="grid-header header-bold">입금계좌</div>
					<div class="grid-contents">
						<select>
							<option value="">계좌 선택</option>
						</select>
					</div>
				</div>
				<div class="grid-8 grid-column">
					<div class="grid-header">&ensp;</div>
					<div class="grid-contents flex-1">
						<input
							class="ft-14"
							type="text"
							placeholder="등기비용 받을 계좌를 입력하세요 (마이페이지 > 환경설정에서 자주 사용하는 계좌 저장 가능)"
						/>
					</div>
				</div>
			</div>
			<div class="grid-top grid-12 m-large bb-none">
				견적안내문
				<select>
					<option value="">저장된 안내 목록</option>
				</select>
			</div>
			<textarea class="help-area" maxlength="1000"></textarea>
			<p class="help-length">0/1000</p>
		</div>
		<div class="estimate-buttons">
			<button class="button--gray">채권수정보고</button>
			<button class="button--blue">견적보고</button>
		</div>
	</CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue';
</script>

<style scoped lang="scss">
@import '~/assets/scss/modal/estimate-report.scss';
</style>
