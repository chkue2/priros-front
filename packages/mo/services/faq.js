import {callApi, getEndpoint} from "~/composables/useApi.js";
import {API_FAQ} from "./apiConstatns.js";

export const faq = {
  async list(pageNo) {
    const endpoint = getEndpoint(API_FAQ.LIST, {pageNo})
    return await callApi(endpoint, {data: {pageNo}})
  }
}