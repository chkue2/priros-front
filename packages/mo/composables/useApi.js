const useApi = async (endpoint, options = {}, data = null) => {

    const $config = useRuntimeConfig();
    const method = options.method || 'GET';
    const useData = {...options.data, ...data};


    return await useFetch(endpoint, {
        baseURL: $config.public.apiURL, method: method, data: useData, onRequest(context) {

            // 토큰 방식일때 샘플
            // context.options.headers = new Headers(context.options.headers)
            // context.options.headers.append('Authrization', 'Bearer TOKEN_FOR_DEV')
            return context;
        }
    })
}

const callApi = async (endpoint, options = {}, data = null) => {
    const response = await useApi(endpoint, options, data);
    if (response.error.value) {
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