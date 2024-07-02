import { API_URL, GET_AUTH, POST, POST_AUTH } from "~/composables/useApi.js";

export const user = {
  async vertifyPassword(data) {
    return await POST_AUTH(API_URL.USER.VERIFY, data);
  },
  async getUserInfo() {
    return await GET_AUTH(API_URL.USER.INFO);
  },
  async setUserInfo(data) {
    return await POST_AUTH(API_URL.USER.INFO, data);
  },
  async findId(data) {
    return await POST(API_URL.USER.FIND_ID, data);
  },
  async findPw(data) {
    return await POST(API_URL.USER.FIND_PW, data);
  },
  async sendProfile(data) {
    return await POST_AUTH(API_URL.USER.PROFILE_SEND, data);
  },
};
