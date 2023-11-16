import {API_URL, POST} from "~/composables/useApi.js";

export const join = {
    async expert(formData) {
        return await POST(API_URL.JOIN.EXPERT, formData)
    }
}