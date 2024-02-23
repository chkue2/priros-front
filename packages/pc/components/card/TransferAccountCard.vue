<template>
	<div
		class="transfer-account-card"
		:class="[{ bd: idx > 0 || isSaved }, { saved: isSaved }, { pc: isPc }]"
	>
		<p class="transfer-account-card-title">계좌 {{ idx + 1 }}</p>
		<button
			v-if="idx > 0 && !isSaved"
			class="transfer-account-delete-button"
			@click="transferStore.setTransferDataMinus"
		>
			삭제<img src="/img/icon/delete-black.svg" />
		</button>
		<div class="transfer-account-amount">
			<p class="transfer-account-amount-title">이체금액</p>
			<div class="transfer-account-amount-input">
				<input
					v-model="accountInfoSelectedValue['amount']"
					type="text"
					:readonly="isSaved"
				/>
				<span>원</span>
			</div>
		</div>
		<p class="transfer-account-amount-title mt-30">입금계좌</p>
		<DropDown
			height="36px"
			placeholder="계좌를 선택해주세요"
			:is-readonly="isSaved"
			:options="transferStore.cardOptions"
			:selected-text="selectedText"
			:is-body-lock="!isPc"
			@click-option="handlerSelectValue"
		/>
		<div class="transfer-account-card-double-block">
			<div class="transfer-account-card-block">
				<p class="transfer-account-amount-title">은행명</p>
				<DropDown
					height="36px"
					placeholder="은행 선택"
					:is-readonly="isReadonly"
					:options="transferStore.bankOptions"
					:selected-text="bankSelectedText"
					:is-body-lock="!isPc"
					@click-option="handlerBankSelectValue"
				/>
			</div>
			<div class="transfer-account-card-block">
				<p class="transfer-account-amount-title">예금주</p>
				<div class="transfer-account-amount-input">
					<input
						v-model="accountInfoSelectedValue['holder']"
						type="text"
						:readonly="isReadonly"
					/>
				</div>
			</div>
		</div>
		<p class="transfer-account-amount-title mt-11">계좌번호</p>
		<div class="transfer-account-amount-input">
			<input
				v-model="accountInfoSelectedValue['account']"
				type="tel"
				:readonly="isReadonly"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useTransferStore } from '~/store/case/transfer.js';
import DropDown from '@priros/common/components/form/DropDown.vue';

const props = defineProps({
	idx: Number,
	isSaved: Boolean,
	isPc: {
		type: Boolean,
		default: false,
	},
});
const transferStore = useTransferStore();

const selectedValue = ref({});
const accountInfoSelectedValue = ref(transferStore.transfer[props.idx]);

const handlerSelectValue = ({ value }) => {
	selectedValue.value = value;
	if (value.account !== '') {
		accountInfoSelectedValue.value['bank'] = value.bank;
		accountInfoSelectedValue.value['bankCode'] = value.bankCode;
		accountInfoSelectedValue.value['account'] = value.account;
		accountInfoSelectedValue.value['holder'] = value.holder;
	}
};
const selectedText = computed(() => {
	return selectedValue.value['bank'] === undefined
		? ''
		: `${selectedValue.value['bank']} ${selectedValue.value['account']}`;
});

const isReadonly = computed(() => {
	return selectedValue.value['bank'] !== '직접 입력하기' || props.isSaved;
});
const handlerBankSelectValue = ({ value }) => {
	accountInfoSelectedValue.value['bank'] = value.bank;
	accountInfoSelectedValue.value['bankCode'] = value.bankCode;
};
const bankSelectedText = computed(() => {
	return accountInfoSelectedValue.value['bank'];
});

watch(
	() => accountInfoSelectedValue,
	() => {
		accountInfoSelectedValue.value.amount = Number(
			accountInfoSelectedValue.value?.amount?.replace(/[^0-9]/g, ''),
		).toLocaleString();
		transferStore.setTransferData({
			value: accountInfoSelectedValue.value,
			idx: props.idx,
		});
	},
	{ deep: true },
);
</script>

<style lang="scss" scoped>
.transfer-account-card {
	border-top: $border-bottom-between-header;
	position: relative;
	&.pc {
		width: calc(50% - 24px);
		flex: 1;
	}
	&.bd {
		padding: 16px 7px 27px;
		border: 1px dotted #2d2d2d;
		border-radius: 4px;
	}
	&.saved {
		background-color: #f8f8f8;
	}
	&.pc:not(.bd) {
		border-top: none;
	}
}
.transfer-account-card-title {
	font-size: 18px;
	font-weight: $ft-bold;
	color: #000000;
	margin-bottom: 11px;
	&.ft-16 {
		font-size: 16px;
	}
	&.ft-14 {
		font-size: 14px;
	}
	&.mt-12 {
		margin-top: 12px;
	}
}
.transfer-account-delete-button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px 3px;
	border-radius: 5px;
	border: 1px solid #000000;
	background-color: #ffffff;
	font-size: 12px;
	font-weight: $ft-medium;
	gap: 4px;
	position: absolute;
	top: 10px;
	right: 13px;
	& > img {
		width: 13px;
		height: 13px;
	}
}
.transfer-account-amount {
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
}
.transfer-account-amount-title {
	font-size: 14px;
	font-weight: $ft-medium;
	color: rgba(27, 43, 65, 0.69);
	line-height: 17px;
	margin-bottom: 6px;
	&.mt-11 {
		margin-top: 11px;
	}
	&.mt-30 {
		margin-top: 30px;
	}
}
.transfer-account-amount-input {
	flex: 1;
	width: 100%;
	height: 36px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	border-radius: 4px;
	border: 1px solid #e1e1e1;
	padding: 4px 10px;
	& > input[type='text'] {
		font-size: 16px;
		font-weight: $ft-medium;
		border: none;
		text-align: right;
		background-color: transparent;
	}
	& > input[type='tel'] {
		font-size: 16px;
		font-weight: $ft-medium;
		border: none;
		text-align: left;
		background-color: transparent;
	}
	& > span {
		font-size: 16px;
		color: rgba(27, 43, 65, 0.69);
	}
}
.transfer-account-card-double-block {
	display: flex;
	margin-top: 12px;
	gap: 14px;
	width: 100%;
	.transfer-account-card-block {
		&:first-child {
			width: calc(65% - 7px);
		}
		&:last-child {
			width: calc(35% - 7px);
		}
	}
}
</style>
