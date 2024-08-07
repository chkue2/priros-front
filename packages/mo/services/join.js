import { API_URL, POST, GET } from "~/composables/useApi.js";

export const join = {
  async expert(formData) {
    return await POST(API_URL.JOIN.EXPERT, formData);
  },
  async getNice(data) {
    return await GET(API_URL.NICE.CHECK_PHONE, { checkId: data.checkId });
  },
  async getNiceInfo(data) {
    return await POST(API_URL.NICE.DECRYPT, data);
  },
  async checkId(userId) {
    return await GET(API_URL.JOIN.CHECK_ID, { userId });
  },
};
