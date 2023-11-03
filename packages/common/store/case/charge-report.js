import { defineStore } from 'pinia'

export const useChargeReportStore = defineStore('chargeReport', {
  state: () => ({
    fetchedCharges: []
  }),
  actions: {
    async fetchCharges() {
      this.fetchedCharges = [
        {
          mutual: '상호1',
          name: '이름1',
          tel: '010-1234-1234'
        },
        {
          mutual: '상호2',
          name: '이름2',
          tel: '010-1234-1234'
        },
        {
          mutual: '상호3',
          name: '이름3',
          tel: '010-1234-1234'
        },
      ]
    }
  }
})