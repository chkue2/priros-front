import {GET} from "~/composables/useApi.js";
import {API_INTRO} from "./apiConstatns.js";

export const intro = {
  async get() {
    return await GET(API_INTRO.GET)
  }
}