import { defineStore } from 'pinia'

export const useTransferStore = defineStore('transfer', {
  state: () => ({
    transfer: [{}],
    memo: '',
    validate: ['bank', 'account', 'holder', 'amount']
  }),
  actions: {
    setTransferData({value, idx}) {
      this.transfer[idx] = value
    },
    setTransferDataPlus(){
      this.transfer.push({})
    },
    setTransferDataMinus() {
      this.transfer.pop()
    }
  }
})