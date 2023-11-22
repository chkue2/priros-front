import {API_URL, GET_AUTH, getEndpoint} from "~/composables/useApi.js";

export const tradeCaseDetail = {
  async detail(tradeCaseId) {
    const endpoint = getEndpoint(API_URL.TRADE_CASE_ACCEPT.DETAIL, {trade_case_id: tradeCaseId})
    return await GET_AUTH(endpoint)
  }
}