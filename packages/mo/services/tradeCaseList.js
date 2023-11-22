import {API_URL, GET_AUTH} from "~/composables/useApi.js";

export const tradeCaseList = {
  async counter() {
    return await GET_AUTH(API_URL.TRADE_CASE_ACCEPT.COUNTER)
  }, 
  async listAll(filter) {
    return await GET_AUTH(API_URL.TRADE_CASE_ACCEPT.LIST_ALL, filter)
  }, 
  async listProgress(filter) {
    return await GET_AUTH(API_URL.TRADE_CASE_ACCEPT.LIST_PROGRESS, filter)
  }, 
  async listReceive(filter) {
    return await GET_AUTH(API_URL.TRADE_CASE_ACCEPT.LIST_RECEIVE, filter)
  }
}