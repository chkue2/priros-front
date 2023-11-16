import {API_URL, GET} from "~/composables/useApi.js";


export const intro = {
    async get() {
        return await GET(API_URL.INTRO.GET)
    }
}