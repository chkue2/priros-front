import {API_URL, GET} from "~/composables/useApi.js";

export const faq = {
    async list(pageNo) {
        return await GET(API_URL.FAQ.LIST, {pageNo})
    }
}