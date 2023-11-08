import {callApi, getEndpoint} from "~/composables/useApi.js";
import {API_INTRO} from "./apiConstatns.js";

export const intro = {
  async get() {
    const endpoint = getEndpoint(API_INTRO.GET)
    return await callApi(endpoint)
  }
}