export default (url, options = {}, data = null,) => {

    const method = options.method || 'GET';
    const useData = {...data, ...data2}

    return useFetch(url, {
        baseURL: $config.public.apiURL,
        method: method,
        data: useData,
        onRequest(context) {

            // 토큰 방식일때 샘플
            // context.options.headers = new Headers(context.options.headers)
            // context.options.headers.append('Authrization', 'Bearer TOKEN_FOR_DEV')
            return context;
        }
    })
}

