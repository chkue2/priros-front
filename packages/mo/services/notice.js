import {GET} from "~/composables/useApi.js";
import {API_NOTICE} from "./apiConstatns.js";

export const notice = {
  async list(pageNo) {
    return await GET(API_NOTICE.LIST, {pageNo})
  }
}