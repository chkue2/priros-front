import axios from 'axios'
import {useAuthStore, accessTokenKey} from "@priros/common/store/auth.js";


const auth = useAuthStore();
const $runtimeConfig = useRuntimeConfig();

// axios
const axiosAuth = axios.create();

axiosAuth.interceptors.request.use(
    async config => {
        const token = sessionStorage.getItem(accessTokenKey);
        if (!token) {
            throw new Error("토큰 없어");
        }
        config.headers = {Authorization: `Bearer ${JSON.parse(token).token}`}

    },
    error => {
        return Promise.reject(error)
    }
);

axiosAuth.interceptors.response.use(
    response => {
        return response;
    }, error => {
        const request = error.config;
        const response = error.response;
        if (response.status === 401 && !request._retry) {
            // token 재발급
            auth.requestRefreshTokenUpdate().then(() => {
                request._retry = 1;
                return axiosAuth(request);
            });
        }

        return Promise.reject(error)
    }
);


const useApi = async (endpoint, options = {}, data = null) => {

    const $config = useRuntimeConfig();
    const method = options.method || 'GET';
    const useData = {...options.data, ...data};

    const optionsForMethod = options.method === 'POST' ? {body: useData} : {params: useData}

    return await useFetch(endpoint, {
        baseURL: $config.public.apiURL, method: method, ...optionsForMethod, onRequest({request, options}) {

            const token = sessionStorage.getItem(accessTokenKey);
            options.headers = options.headers || {};
            // options.headers.Accept = "application/json";

            //
            if (token) {
                options.headers.Authorization = `Bearer ${JSON.parse(token).token}`;
            }
        }
    })
}

const callApi = async (endpoint, options = {}, data = null) => {
    const response = await useApi(endpoint, options, data);
    if (response.error.value) {
        console.log(response.error.value.data.status)
        console.log("throw error");
        throw new Error(response.error.value);
    }
    return response;
}

const getEndpoint = (url, params) => {
    let endpoint = url;

    for (const key in params) {
        endpoint = endpoint.replace(`$${key}`, params[key]);
    }

    return endpoint;
}

// axios 활용

const POST = async (url, data = {}) => {
    return await axios.post($runtimeConfig.public.apiURL + url, data)
}

const POST_AUTH = async (url, data = {}) => {
    // const token = sessionStorage.getItem(accessTokenKey);
    // if (!token) {
    //     alert('토큰 없슴')
    // }
    return await axiosAuth.post($runtimeConfig.public.apiURL + url, data, {
        headers: {Authorization: `Bearer ${JSON.parse(token).token}`}
    })
}

const GET = async (url, data = {}) => {
    return await axios.get($runtimeConfig.public.apiURL + url, {
        params: {
            ...data
        }
    })
}

const GET_AUTH = async (url, data = {}) => {
    // const token = sessionStorage.getItem(accessTokenKey);
    // if (!token) {
    //     alert('토큰 없슴')
    // }
    return await axiosAuth.get($runtimeConfig.public.apiURL + url, {
        params: {
            ...data
        }
    })
}

export default useApi;
export {callApi, getEndpoint, POST, POST_AUTH, GET, GET_AUTH};