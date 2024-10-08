import { defineStore } from 'pinia';
import { tradeCaseRemit } from '~/services/tradeCaseRemit.js';
import { isEmpty } from '@priros/common/assets/js/utils.js';

export const useTransferStore = defineStore('transfer', {
	state: () => ({
		seq: 0,
		mortgageLoan: '',
		mortgageExecution: '',
		transfer: [{}],
		memo: '',
		remitState: '',
		remitRequestFlag: '',
		rejectMessage: '',
		approveYn: '',
		validate: ['bank', 'account', 'holder', 'amount'],
		cardOptions: [
			{
				text: '직접 입력하기',
				value: {
					bank: '직접 입력하기',
					account: '',
				},
			},
		],
		bankOptions: [],
	}),
	actions: {
		async fetchRemit(tradeCaseId) {
			if (this.transfer.length > 1) {
				this.setTransferDataMinus();
			}
			await tradeCaseRemit
				.get(tradeCaseId)
				.then(({ data }) => {
					if (data.bankCodes !== null) {
						this.bankOptions = data.bankCodes.reduce((prev, curr) => {
							prev.push({
								text: curr.codeName,
								value: {
									bank: curr.codeName,
									bankCode: curr.codeId,
								},
							});
							return prev;
						}, []);
					}
					if (data.myAccountInfos !== null) {
						this.cardOptions = data.myAccountInfos.reduce((prev, curr) => {
							const bankName = this.bankOptions.filter(
								b => b.value.bankCode === curr.bankId,
							)[0].text;
							prev.push({
								text: `${bankName} ${curr.accountNumber}`,
								value: {
									bankCode: curr.bankId,
									bank: bankName,
									account: curr.accountNumber,
									holder: curr.accountHolder,
								},
							});
							return prev;
						}, this.cardOptions);
					}
					this.seq = data.seq;
					this.mortgageLoan = data.mortgageLoan.toLocaleString();
					this.mortgageExecution = data.mortgageExecution.toLocaleString();
					this.memo = data.memo;
					this.remitState = data.remitState;
					this.remitRequestFlag = data.remitRequestFlag;
					this.rejectMessage = data.rejectMessage;
					this.approveYn = data.approveYn;
					if (!isEmpty(data.buyerPayout)) {
						this.transfer[0].amount = data.buyerPayout.toLocaleString();
						this.transfer[0].bank = data.buyerPayoutBankName;
						this.transfer[0].bankCode = data.buyerPayoutBankCode;
						this.transfer[0].holder = data.buyerPayoutAccountHolder;
						this.transfer[0].account = data.buyerPayoutAccountNumber;
					} else {
						this.transfer[0] = {};
						this.transfer[0].bank = '';
						this.transfer[0].bankCode = '';
						this.transfer[0].holder = '';
						this.transfer[0].account = '';
					}
					if (!isEmpty(data.repayAmount) && data.repayAmount > 0) {
						this.setTransferDataPlus();
						this.transfer[1].amount = data.repayAmount.toLocaleString();
						this.transfer[1].bank = data.repayBankName;
						this.transfer[1].bankCode = data.repayBankCode;
						this.transfer[1].holder = data.repayAccountHolder;
						this.transfer[1].account = data.repayAccountNumber;
					}
				})
				.catch(e => {
					alert(e.response.data.message);
				});
		},
		postRemit(tradeCaseId) {
			let formData = {
				buyerPayout: Number(this.transfer[0].amount?.replace(/,/g, '')),
				buyerPayoutBankName: this.transfer[0].bank,
				buyerPayoutBankCode: this.transfer[0].bankCode,
				buyerPayoutAccountHolder: this.transfer[0].holder,
				buyerPayoutAccountNumber: this.transfer[0].account,
				memo: this.memo,
			};
			if (this.seq > 0 && this.seq !== null) {
				formData = { ...formData, seq: this.seq };
			}
			if (this.transfer.length > 1) {
				formData = {
					...formData,
					repayAmount: Number(this.transfer[1].amount?.replace(/,/g, '')),
					repayBankName: this.transfer[1].bank,
					repayBankCode: this.transfer[1].bankCode,
					repayAccountHolder: this.transfer[1].holder,
					repayAccountNumber: this.transfer[1].account,
				};
			}
			return tradeCaseRemit.post(tradeCaseId, formData);
		},
		requestRemit(tradeCaseId) {
			return tradeCaseRemit.request(tradeCaseId, {
				seq: this.seq,
			});
		},
		postAuth(tradeCaseId) {
			return tradeCaseRemit.auth(tradeCaseId, {
				seq: this.seq,
			});
		},
		postAuthCheck(tradeCaseId, authNum) {
			return tradeCaseRemit.authCheck(tradeCaseId, {
				seq: this.seq,
				authNum,
			});
		},
		setTransferData({ value, idx }) {
			this.transfer[idx] = value;
		},
		setTransferDataPlus() {
			this.transfer.push({});
		},
		setTransferDataMinus() {
			this.transfer.pop();
		},
	},
});
