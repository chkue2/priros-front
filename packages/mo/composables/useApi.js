const userSessionKey = 'auth-user';

const useApi = async (endpoint, options = {}, data = null) => {

    const $config = useRuntimeConfig();
    const method = options.method || 'GET';
    const useData = {...options.data, ...data};

    const optionsForMethod = options.method === 'POST' ? {body: useData} : {params: useData}
    console.log(optionsForMethod)

    return await useFetch(endpoint, {
        baseURL: $config.public.apiURL, method: method, ...optionsForMethod, onRequest({request, options}) {

            const token = sessionStorage.getItem(userSessionKey);


            options.headers = options.headers || {};
            options.headers.Accept = "application/json";

            // 토큰 방식일때 샘플
            if (token) {
                options.headers.Authrization = `Bearer ${JSON.parse(token).token}`;
            }

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