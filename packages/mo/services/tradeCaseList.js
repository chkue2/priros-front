import {API_URL, GET_AUTH} from "~/composables/useApi.js";

export const tradeCaseList = {
  async counter() {
    return await GET_AUTH(API_URL.TRADE_CASE.COUNTER)
  }, 
  async listAll(filter) {
    return await GET_AUTH(API_URL.TRADE_CASE.LIST_ALL, filter)
  }, 
  async listProgress(filter) {
    return await GET_AUTH(API_URL.TRADE_CASE.LIST_PROGRESS, filter)
  }, 
  async listReceive(filter) {
    return await GET_AUTH(API_URL.TRADE_CASE.LIST_RECEIVE, filter)
  }
}