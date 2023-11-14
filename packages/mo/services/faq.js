import {GET} from "~/composables/useApi.js";
import {API_FAQ} from "./apiConstatns.js";

export const faq = {
  async list(pageNo) {
    return await GET(API_FAQ.LIST, {pageNo})
  }
}