import axios from 'axios'

const userTokenkey = 'token-user';

const $runtimeConfig = useRuntimeConfig();

const useApi = async (endpoint, options = {}, data = null) => {

    const $config = useRuntimeConfig();
    const method = options.method || 'GET';
    const useData = {...options.data, ...data};

    const optionsForMethod = options.method === 'POST' ? {body: useData} : {params: useData}

    return await useFetch(endpoint, {
        baseURL: $config.public.apiURL, method: method, ...optionsForMethod, onRequest({request, options}) {

            const token = sessionStorage.getItem(userTokenkey);
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

const GET = async (url, data = {}) => {
    return await axios.get($runtimeConfig.public.apiURL + url, {
        params: {
            ...data
        }
    })
}

const GET_AUTH = async (url, data = {}) => {
    const token = sessionStorage.getItem(userTokenkey);
    if(!token) {
        alert('토큰 없슴')
    }
    return await axios.get($runtimeConfig.public.apiURL + url, {
        params: {
            ...data
        }, 
        headers: {
            Authorization: `Bearer ${JSON.parse(token).token}`
        }
    })
}

export default useApi;
export {callApi, getEndpoint, POST, GET, GET_AUTH};