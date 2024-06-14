import { defineStore } from "pinia"
import { tradeCaseList } from '~/services/tradeCaseList.js'

export const myCaseStore = defineStore('myCase', {
  state: () => ({
    tab: 'today',
    filter: 'progress',
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
    async fetchCaseCounter(searchDate) {
      const filterData = {
        fromDate: searchDate,
        toDate: searchDate,
        searchKeyword: this.keyword,
      }
      await tradeCaseList.counter(filterData).then(({data}) => {
        this.counter = data
      })
    },
    async fetchCaseList(searchDate) {
      const filterData = {
        fromDate: searchDate,
        toDate: searchDate,
        searchKeyword: this.keyword,
        limit: 9999
      }

      if(this.filter === 'progress') {
        await tradeCaseList.listProgress(filterData).then(({data}) => {
          this.fetchedCaseList = data.list
        })
      } else if(this.filter === 'receive') {
        await tradeCaseList.listReceive(filterData).then(({data}) => {
          this.fetchedCaseList = data.list
        })
      } else {
        await tradeCaseList.listAll(filterData).then(({data}) => {
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