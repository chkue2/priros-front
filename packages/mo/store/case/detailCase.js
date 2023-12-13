import { defineStore } from "pinia"
import { tradeCaseDetail } from '~/services/tradeCaseDetail.js'

export const useDetailCaseStore = defineStore('detailCase', {
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
    registrationApplication: '',
  }),
  actions: {
    fetchDetailCase(tradeCaseId) {
      this.fetchedDetailCase = {}
      tradeCaseDetail.detail(tradeCaseId).then(({data}) => {
        this.fetchedDetailCase = data
        this.registrationApplication = data.registrationApplication
      })
    },
    fetchDetailEstimate(tradeCaseId) {
      this.fetcehdEstimate = {}
      tradeCaseDetail.estimate(tradeCaseId).then(({data}) => {
        this.fetcehdEstimate = data
      })
    },
    fetchContract(tradeCaseId) {
      return tradeCaseDetail.contract(tradeCaseId)
    },
    fetchMortgage(tradeCaseId) {
      return tradeCaseDetail.mortgage(tradeCaseId)
    },
    fetchHistory(tradeCaseId, pageNo) {
      tradeCaseDetail.history(tradeCaseId, {
        limit: this.limitCount,
        pageNo
      })
      .then(({data}) => {
        this.fetchedChangedList = data.list
        this.fetchedPaging = data.paging
      })
    },
    fetchHistoryTr(tradeCaseId, pageNo) {
      tradeCaseDetail.historyTr(tradeCaseId, {
        limit: this.limitCount,
        pageNo
      })
      .then(({data}) => {
        this.fetchedProcessedList = data.list
        this.fetchedPaging = data.paging
      })
    },
    fetchMemo(tradeCaseId, pageNo) {
      tradeCaseDetail.getMemo(tradeCaseId, {
        limit: this.limitCount,
        pageNo
      })
      .then(({data}) => {
        this.fetchedMemoList = data.list
        this.fetchedPaging = data.paging
      })
    },
    fetchDocument(tradeCaseId, pageNo) {
      tradeCaseDetail.getDocument(tradeCaseId, {
        limit: this.limitCount,
        pageNo
      })
      .then(({data}) => {
        this.fetchedFilesList = data.list
        this.fetchedPaging = data.paging
      })
    },
    fetchDocumentDetail(tradeCaseId, documentId) {
      return tradeCaseDetail.getDocumentDetail(tradeCaseId, documentId)
    },
    fetchDocumentDownload(tradeCaseId, documentId) {
      return tradeCaseDetail.getDocumentDownload(tradeCaseId, documentId)
    },
    requestMemo(tradeCaseId, memo) {
      return tradeCaseDetail.setMemo(tradeCaseId, {content: memo})
    },
    requestRegApplication(tradeCaseId) {
      return tradeCaseDetail.regApplication(tradeCaseId, {registrationApplication: this.registrationApplication})
    },
  }
})