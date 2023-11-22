import { defineStore } from "pinia"
import { tradeCaseList } from '~/services/tradeCaseList.js'

export const myCaseStore = defineStore('myCase', {
  state: () => ({
    tab: 'all',
    filter: 'all',
    keyword: '',
    fromDate: '',
    toDate: '',
    fetchedCaseList: [],
    counter: {
      total: 0,
      progress: 0,
      receive: 0,
    }
  }),
  actions: {
    fetchCaseCounter() {
      tradeCaseList.counter().then(({data}) => {
        this.counter = data
      })
    },
    fetchCaseList(searchDate) {
      const filterData = {
        fromDate: searchDate,
        toDate: searchDate,
        searchKeyword: this.keyword
      }

      if(this.filter === 'progress') {
        tradeCaseList.listProgress(filterData).then(({data}) => {
          this.fetchedCaseList = data.list
        })
      } else if(this.filter === 'receive') {
        tradeCaseList.listReceive(filterData).then(({data}) => {
          this.fetchedCaseList = data.list
        })
      } else {
        tradeCaseList.listAll(filterData).then(({data}) => {
          this.fetchedCaseList = data.list
        })
      }
    },
    setTab(value) {
      this.tab = value
    },
    setFilter(value) {
      this.filter = value
    },
    setKeyword(value) {
      this.keyword = value
    },
    setDate(s, e) {
      this.fromDate = s
      this.toDate = e
    }
  }
})