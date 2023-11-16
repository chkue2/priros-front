import {API_URL, GET} from "~/composables/useApi.js";
import {GET_AUTH} from "../composables/useApi.js";

export const notice = {
    async list(pageNo) {
        return await GET_AUTH(API_URL.NOTICE.LIST, {pageNo})
    }
}