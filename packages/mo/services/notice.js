import {callApi, getEndpoint} from "~/composables/useApi.js";
import {API_NOTICE} from "./apiConstatns.js";

export const notice = {
  async list(pageNo) {
    const endpoint = getEndpoint(API_NOTICE.LIST, {pageNo})
    return await callApi(endpoint, {data: {pageNo}})
  }
}