
import { tokenApi } from '@priros/common/utils/tokenApi';
import {API_URL, defineApi, getEndpoint} from "@priros/common/api/api.js";


const $runtimeConfig = useRuntimeConfig();
const {api, apiAuth} = defineApi({
    host: $runtimeConfig.public.apiURL,
    tokenApi: tokenApi
});

const POST = async (url, data = {}) => {
    return await api.post(url, data);
}

const POST_AUTH = async (url, data = {}) => {
    return await apiAuth.post(url, data);
}

const GET = async (url, data = {}) => {
    return await api.get(url, {
        params: {
            ...data
        }
    })
}

const GET_AUTH = async (url, data = {}) => {
    return await apiAuth.get(url, {
        params: {
            ...data
        }
    })
}

export {API_URL, getEndpoint, POST, POST_AUTH, GET, GET_AUTH};