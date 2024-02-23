<template>
	<CommonHeaderModal
		modal-id="costCalculationModal"
		modal-title="등기비용"
		width="717px"
	>
		<div class="cost-calculation">
			<p class="cost-field-title">설정비용산출 정보</p>
			<div class="cost-grid">
				<div class="cost-grid-header">채권최고액</div>
				<div class="cost-grid-contents">
					<input type="text" placeholder="0" />
				</div>
				<div class="cost-grid-header">대출금</div>
				<div class="cost-grid-contents">
					<input type="text" placeholder="0" />
				</div>
				<div class="cost-grid-header">채권발행일</div>
				<div class="cost-grid-contents contents--big">
					<input type="date" class="input-min" />
				</div>
			</div>
			<div class="cost-button button--right">
				<button>설정비용 산출</button>
			</div>
			<p class="cost-field-title">공과금 내역</p>
			<div class="cost-grid">
				<div class="cost-grid-header">채권매입금</div>
				<div class="cost-grid-contents">
					<input type="text" placeholder="0" />
				</div>
				<div class="cost-grid-header">부담율(%)</div>
				<div class="cost-grid-contents">
					<input type="text" placeholder="0.0" />
				</div>
				<div class="cost-grid-header">채권부담금</div>
				<div class="cost-grid-contents">
					<input type="text" placeholder="0" />
				</div>
				<div class="cost-grid-header">설정인지</div>
				<div class="cost-grid-contents">
					<input type="text" placeholder="0" />
				</div>
				<div class="cost-grid-header">대출실행금</div>
				<div class="cost-grid-contents contents--big">
					<input type="text" placeholder="0" />
				</div>
			</div>
			<div class="cost-button">
				<button>설정비용 내역서 생성</button>
			</div>
		</div>
	</CommonHeaderModal>
</template>

<script setup>
import CommonHeaderModal from '~/components/modal/CommonHeaderModal.vue';
</script>

<style scoped lang="scss">
.cost-calculation {
	padding: 26px;
}
.cost-field-title {
	font-size: 18px;
	font-weight: $ft-semibold;
	margin-bottom: 22px;
}
.cost-grid {
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	.cost-grid-header {
		height: 85px;
		grid-column: 1 span;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f9f9f9;
		font-weight: $ft-semibold;
		border-bottom: 1px solid #ebebeb;
	}
	.cost-grid-contents {
		grid-column: 3 span;
		display: flex;
		align-items: center;
		padding: 0 25px 0 12px;
		border-bottom: 1px solid #ebebeb;
		& > input {
			width: 100%;
			height: 58px;
			border: 1px solid #ebebeb;
			padding: 0 12px;
			text-align: right;
			&.input-min {
				width: 207px;
			}
		}
		& > input[type='date'] {
			text-align: left;
		}
		&.contents--big {
			grid-column: 7 span;
		}
	}
}
.cost-button {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 40px 0 0;

	&.button--right {
		justify-content: flex-end;
		margin: 8px 0 80px;
	}
	& > button {
		width: 200px;
		height: 44px;
		border-radius: 4px;
		border: none;
		background-color: #000000;
		font-size: 16px;
		font-weight: $ft-bold;
		color: #ffffff;
		cursor: pointer;
	}
}
</style>
