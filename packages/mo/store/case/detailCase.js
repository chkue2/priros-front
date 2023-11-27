import { defineStore } from "pinia"
import { tradeCaseDetail } from '~/services/tradeCaseDetail.js'

export const useDetailCaseStore = defineStore('detailCase', {
  state: () => ({
    fetchedDetailCase: {},
    fetchedChangedList: [],
    fetchedMemoList: [],
    fetchedProcessedList: [],
    fetchedFilesList: [],
    fetcehdEstimate: {}
  }),
  actions: {
    fetchDetailCase(tradeCaseId) {
      this.fetchedDetailCase = {}
      tradeCaseDetail.detail(tradeCaseId).then(({data}) => {
        this.fetchedDetailCase = data
      })
    },
    fetchDetailEstimate(tradeCaseId) {
      this.fetcehdEstimate = {}
      tradeCaseDetail.estimate(tradeCaseId).then(({data}) => {
        this.fetcehdEstimate = data
      })
    }
  }
})