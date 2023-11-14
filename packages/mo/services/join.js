import {POST} from "~/composables/useApi.js";
import {API_JOIN} from "./apiConstatns.js";

export const join = {
  async expert(formData) {
    return await POST(API_JOIN.EXPERT, formData)
  }
}