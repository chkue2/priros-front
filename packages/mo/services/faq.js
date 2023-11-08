import {callApi, getEndpoint} from "~/composables/useApi.js";
import {API_FAQ} from "./apiConstatns.js";

export const faq = {
  async list() {
    const endpoint = getEndpoint(API_FAQ.LIST)
    return await callApi(endpoint)
  }
}