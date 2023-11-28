import {API_URL, POST_AUTH} from "~/composables/useApi.js";

export const myPage = {
  async vertifyPassword(data) {
    return await POST_AUTH(API_URL.USER.VERIFY, data)
  },
}