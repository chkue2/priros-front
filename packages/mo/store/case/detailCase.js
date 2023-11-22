import { defineStore } from "pinia"
import { tradeCaseDetail } from '~/services/tradeCaseDetail.js'

export const useDetailCaseStore = defineStore('detailCase', {
  state: () => ({
    fetchedDetailCase: {},
    fetchedChangedList: [],
    fetchedMemoList: [],
    fetchedProcessedList: [],
    fetchedFilesList: []
  }),
  actions: {
    fetchDetailCase(tradeCaseId) {
      this.fetchedDetailCase = {}
      tradeCaseDetail.detail(tradeCaseId).then(({data}) => {
        this.fetchedDetailCase = data
      })
    },
  }
})