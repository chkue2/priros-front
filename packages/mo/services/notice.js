import {API_URL, GET} from "~/composables/useApi.js";

export const notice = {
    async list(pageNo) {
        return await GET(API_URL.NOTICE.LIST, {pageNo})
    }
}