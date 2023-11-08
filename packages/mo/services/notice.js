import {callApi, getEndpoint} from "~/composables/useApi.js";
import {API_NOTICE} from "./apiConstatns.js";

export const notice = {
  async list() {
    const endpoint = getEndpoint(API_NOTICE.LIST)
    return await callApi(endpoint)
  }
}