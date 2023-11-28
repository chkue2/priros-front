import { defineStore } from "pinia"
import { myPage } from '~/services/myPage.js'

export const myPageStore = defineStore('myPage', {
  state: () => ({
    vertifyPassword: ''
  }),
  actions: {
    requestVertifyPassword() {
      return myPage.vertifyPassword({password: this.vertifyPassword})
    },
    setVertifyPassword(value) {
      this.vertifyPassword = value
    }
  }
})