import { defineStore } from "pinia";
import { tradeCaseDetail } from "~/services/tradeCaseDetail.js";
import { useAlertStore } from "~/store/alert.js";

export const useDetailCaseStore = defineStore("detailCase", {
  state: () => ({
    limitCount: 5,
    fetchedDetailCase: {},
    fetchedChangedList: [],
    fetchedMemoList: [],
    fetchedProcessedList: [],
    fetchedFilesList: [],
    fetcehdEstimate: {},
    fetchedPaging: {
      startPage: 1,
      endPage: 1,
      pageNo: 1,
      totalPage: 1,
      prevPageGroup: 1,
      nextPageGroup: 1,
    },
    registrationApplication: "",
    alertStore: useAlertStore(),
  }),
  actions: {
    fetchDetailCase(tradeCaseId) {
      this.fetchedDetailCase = {};
      tradeCaseDetail
        .detail(tradeCaseId)
        .then(({ data }) => {
          this.fetchedDetailCase = data;
          this.registrationApplication = data.registrationApplication;
        })
        .catch((e) => {
          this.alertStore.open(e.response.data.message);
        });
    },
    fetchDetailEstimate(tradeCaseId, callback) {
      this.fetcehdEstimate = {};
      return tradeCaseDetail
        .estimate(tradeCaseId)
        .then(({ data }) => {
          this.fetcehdEstimate = data;
        })
        .catch((e) => {
          this.alertStore.open(e.response.data.message);
          callback();
        });
    },
    fetchContract(tradeCaseId) {
      return tradeCaseDetail.contract(tradeCaseId);
    },
    fetchMortgage(tradeCaseId) {
      return tradeCaseDetail.mortgage(tradeCaseId);
    },
    fetchHistory(tradeCaseId, pageNo) {
      tradeCaseDetail
        .history(tradeCaseId, {
          limit: this.limitCount,
          pageNo,
        })
        .then(({ data }) => {
          this.fetchedChangedList = data.list;
          this.fetchedPaging = data.paging;
        })
        .catch((e) => {
          this.alertStore.open(e.response.data.message);
        });
    },
    fetchHistoryTr(tradeCaseId, pageNo) {
      tradeCaseDetail
        .historyTr(tradeCaseId, {
          limit: this.limitCount,
          pageNo,
        })
        .then(({ data }) => {
          this.fetchedProcessedList = data.list;
          this.fetchedPaging = data.paging;
        })
        .catch((e) => {
          this.alertStore.open(e.response.data.message);
        });
    },
    fetchMemo(tradeCaseId, pageNo) {
      tradeCaseDetail
        .getMemo(tradeCaseId, {
          limit: this.limitCount,
          pageNo,
        })
        .then(({ data }) => {
          this.fetchedMemoList = data.list;
          this.fetchedPaging = data.paging;
        })
        .catch((e) => {
          this.alertStore.open(e.response.data.message);
        });
    },
    fetchDocument(tradeCaseId, pageNo) {
      tradeCaseDetail
        .getDocument(tradeCaseId, {
          limit: this.limitCount,
          pageNo,
        })
        .then(({ data }) => {
          this.fetchedFilesList = data.list;
          this.fetchedPaging = data.paging;
        })
        .catch((e) => {
          this.alertStore.open(e.response.data.message);
        });
    },
    fetchDocumentDetail(tradeCaseId, documentId) {
      return tradeCaseDetail.getDocumentDetail(tradeCaseId, documentId);
    },
    fetchDocumentDownload(tradeCaseId, documentId) {
      return tradeCaseDetail.getDocumentDownload(tradeCaseId, documentId);
    },
    requestDocumentDelete(tradeCaseId, documentId) {
      return tradeCaseDetail.deleteDocument(tradeCaseId, documentId);
    },
    requestMemo(tradeCaseId, memo) {
      return tradeCaseDetail.setMemo(tradeCaseId, { content: memo });
    },
    requestMemoDelete(tradeCaseId, memoId) {
      return tradeCaseDetail.deleteMemo(tradeCaseId, memoId);
    },
    requestRegApplication(tradeCaseId) {
      return tradeCaseDetail.regApplication(tradeCaseId, {
        registrationApplication: this.registrationApplication,
      });
    },
    requestInjiGenerate(tradeCaseId, data) {
      return tradeCaseDetail.injiGenerate(tradeCaseId, data);
    },
    fetchInjiPopupInfo() {
      return tradeCaseDetail.injiPopupInfo();
    },
  },
});
