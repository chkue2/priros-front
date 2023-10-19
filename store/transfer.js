import { defineStore } from 'pinia'

export const useTransferStore = defineStore('transfer', {
  state: () => ({
    depth: 1,
    transfer: [{}],
    memo: '',
  }),
  actions: {
    nextDepth() {
      this.depth++
    },
    prevDepth() {
      this.depth--
    },
    firstDepth() { 
      this.depth = 1
    },
    setTransferData({value, idx}) {
      this.transfer[idx] = value
    },
    setTransferDataPlus(){
      this.transfer.push({})
      setTimeout(() => {
        window.scrollTo({top: 9999, behavior: 'smooth'})
      }, 100)
    },
    setTransferDataMinus() {
      this.transfer.pop()
    }
  }
})