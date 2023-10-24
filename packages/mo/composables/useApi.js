
export default (url,data = null, options = {}) => {

    const method = options.method || 'GET';
    return useFetch(url,{
        baseURL: $config.public.apiURL,
        method: method,
        data: data,
        onRequest(context) {

            // 토큰 방식일때 샘플
            // context.options.headers = new Headers(context.options.headers)
            // context.options.headers.append('Authrization', 'Bearer TOKEN_FOR_DEV')
            return context;
        }
    })
}

