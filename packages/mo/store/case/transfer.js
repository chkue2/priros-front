import { isEmpty } from "@priros/common/assets/js/utils.js";
import { defineStore } from "pinia";
import { tradeCaseRemit } from "~/services/tradeCaseRemit.js";
import { useAlertStore } from "~/store/alert.js";

export const useTransferStore = defineStore("transfer", {
  state: () => ({
    seq: 0,
    mortgageLoan: "",
    mortgageExecution: "",
    transfer: [{}, {}],
    memo: "",
    remitState: "",
    remitRequestFlag: "",
    rejectMessage: "",
    approveYn: "",
    validate: ["bank", "account", "holder", "amount"],
    cardOptions: [
      {
        text: "직접 입력하기",
        value: {
          bank: "직접 입력하기",
          account: "",
        },
      },
    ],
    bankOptions: [],
    deductionYn: false,
    directLawYn: false,
    alertStore: useAlertStore(),
  }),
  actions: {
    async fetchRemit(tradeCaseId) {
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
          this.cardOptions = [
            {
              text: "직접 입력하기",
              value: {
                bank: "직접 입력하기",
                account: "",
              },
            },
          ];
          if (data.myAccountInfos !== null) {
            this.cardOptions = data.myAccountInfos.reduce((prev, curr) => {
              const bankName = this.bankOptions.filter(
                (b) => b.value.bankCode === curr.bankId
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
          this.transfer = [{}, {}];
          this.deductionYn = false;
          this.directLawYn = false;
          this.seq = data.seq;
          this.mortgageLoan = data.mortgageLoan.toLocaleString();
          this.mortgageExecution = data.mortgageExecution.toLocaleString();
          this.memo = data.memo;
          this.remitState = data.remitState;
          this.remitRequestFlag = data.remitRequestFlag;
          this.rejectMessage = data.rejectMessage;
          this.approveYn = data.approveYn;
          this.deductionYn = data.deductionYn === "N";
          this.directLawYn = data.directLawYn;
          if (!isEmpty(data.repayAmount)) {
            this.transfer[0].amount = data.repayAmount.toLocaleString();
            this.transfer[0].bank = data.repayBankName;
            this.transfer[0].bankCode = data.repayBankCode;
            this.transfer[0].holder = data.repayAccountHolder;
            this.transfer[0].account = data.repayAccountNumber;
          } else {
            this.transfer[0] = {};
            this.transfer[0].amount = "0";
            this.transfer[0].bank = "";
            this.transfer[0].bankCode = "";
            this.transfer[0].holder = "";
            this.transfer[0].account = "";
          }
          if (!isEmpty(data.buyerPayout) && data.buyerPayout > 0) {
            this.transfer[1].amount = data.buyerPayout.toLocaleString();
            this.transfer[1].bank = data.buyerPayoutBankName;
            this.transfer[1].bankCode = data.buyerPayoutBankCode;
            this.transfer[1].holder = data.buyerPayoutAccountHolder;
            this.transfer[1].account = data.buyerPayoutAccountNumber;
          }
        })
        .catch((e) => {
          this.alertStore.open(e.response.data.message);
        });
    },
    postRemit(tradeCaseId) {
      let formData = {
        repayAmount: Number(this.transfer[0].amount?.replace(/,/g, "")),
        repayBankName: this.transfer[0].bank || "",
        repayBankCode: this.transfer[0].bankCode || "",
        repayAccountHolder: this.transfer[0].holder || "",
        repayAccountNumber: this.transfer[0].account || "",
        buyerPayout: Number(this.transfer[1].amount?.replace(/,/g, "")),
        buyerPayoutBankName: this.transfer[1].bank || "",
        buyerPayoutBankCode: this.transfer[1].bankCode || "",
        buyerPayoutAccountHolder: this.transfer[1].holder || "",
        buyerPayoutAccountNumber: this.transfer[1].account || "",
        memo: this.memo,
        deductionYn: this.deductionYn ? "N" : "Y",
      };
      if (this.seq > 0 && this.seq !== null) {
        formData = { ...formData, seq: this.seq };
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
