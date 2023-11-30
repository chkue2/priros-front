import {API_URL, GET_AUTH, POST_AUTH} from "~/composables/useApi.js";

export const firm = {
  async get() {
    return await GET_AUTH(API_URL.FIRM_INFO.GET)
  },
  async post(data) {
    return await POST_AUTH(API_URL.FIRM_INFO.POST, data)
  },
  async file() {
    return await GET_AUTH(API_URL.FIRM_INFO.FILE)
  }
}