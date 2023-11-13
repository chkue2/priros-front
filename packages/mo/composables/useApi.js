const userSessionKey = 'auth-user';

const useApi = async (endpoint, options = {}, data = null) => {

    const $config = useRuntimeConfig();
    const method = options.method || 'GET';
    const useData = {...options.data, ...data};

    const optionsForMethod = options.method === 'POST' ? {body: useData} : {params: useData}
    console.log(optionsForMethod)

    return await useFetch(endpoint, {
        baseURL: $config.public.apiURL, method: method, ...optionsForMethod, onRequest(context) {

            // 토큰 방식일때 샘플
            const token = sessionStorage.getItem(userSessionKey)
            console.log(token)
            if(token) {
                context.options.headers = new Headers(context.options.headers)
                context.options.headers.append('Authrization', `Bearer ${JSON.parse(token).token}`)
                // context.options.headers.append('Authrization', JSON.parse(token).token)
            }
            return context;
        }, onResponse({request, response, options}) {
            console.log(request, 'request')
            console.log(response, 'response')
            console.log(options, 'options')
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