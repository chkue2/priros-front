import { defineStore } from 'pinia'

export const useDetailCaseStore = defineStore('detailCase', {
  state: () => ({
    fetchedDetailCase: {},
    fetchedChangedList: [],
    fetchedMemoList: [],
    fetchedProcessedList: [],
    fetchedFilesList: []
  }),
  actions: {
    setFetchedDetailCase(data) {
      this.fetchedDetailCase = data
    },
    setFetchedChangedList(data) {
      this.fetchedChangedList = data
    },
    setFetchedMemoList(data) {
      this.fetchedMemoList = data
    },
    setFetchedProcessedList(data) {
      this.fetchedProcessedList = data
    },
    setFetchedFilesList(data) {
      this.fetchedFilesList = data
    }
  }
})