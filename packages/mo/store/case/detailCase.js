import { defineStore } from "pinia"
import { tradeCaseDetail } from '~/services/tradeCaseDetail.js'

export const useDetailCaseStore = defineStore('detailCase', {
  state: () => ({
    fetchedDetailCase: {},
    fetchedChangedList: [],
    fetchedMemoList: [],
    fetchedProcessedList: [],
    fetchedFilesList: [],
    fetcehdEstimate: {},
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
    requestRegApplication(tradeCaseId) {
      return tradeCaseDetail.regApplication(tradeCaseId, {registrationApplication: this.registrationApplication})
    },
  }
})