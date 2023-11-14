const userTokenkey = 'token-user';

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

export default useApi;
export {callApi, getEndpoint};