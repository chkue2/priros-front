import { defineStore } from "pinia"
import { user } from '~/services/user.js'

export const myPageStore = defineStore('myPage', {
  state: () => ({
    vertifyPassword: '',
  }),
  actions: {
    requestVertifyPassword() {
      return user.vertifyPassword({password: this.vertifyPassword})
    },
    setVertifyPassword(value) {
      this.vertifyPassword = value
    },
    fetchUserInfo() {
      return user.getUserInfo()
    },
    requestUserInfo(data) {
      return user.setUserInfo(data)
    }
  }
})