import {
  API_URL,
  GET_AUTH,
  POST_AUTH,
  getEndpoint,
  getEndpointOfRepay,
} from "~/composables/useApi.js";

export const tradeCaseReceptionReport = {
  async get(tradeCaseId) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE.RECEIVE, {
      trade_case_id: tradeCaseId,
    });
    return await GET_AUTH(endpoint);
  },
  async post(tradeCaseId, data, formData) {
    const endpoint = getEndpointOfRepay(
      API_URL.TRADE_CASE.RECEIVE,
      {
        trade_case_id: tradeCaseId,
      },
      data
    );
    return await POST_AUTH(endpoint, formData);
  },
};
