import {API_URL, GET_AUTH} from "~/composables/useApi.js";

export const enquiry = {
  async get(data) {
    return await GET_AUTH(API_URL.TASK.REGIST, data)
  },
  async bond() {
    return await GET_AUTH(API_URL.TASK.BOND)
  },
}