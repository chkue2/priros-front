import axios from 'axios';
import API_URL from "./apiConstants";

const getEndpoint = (url, params) => {
    let endpoint = url;

    for (const key in params) {
        endpoint = endpoint.replace(`:${key}`, params[key]);
    }

    return endpoint;
}

const defineApi = (config) => {
    const {host, tokenApi} = config;

    // axios
    axios.defaults.baseURL = host;
    const api = axios.create();
    const apiAuth = axios.create();


    async function requestRefreshTokenUpdate() {
        const refreshToken = tokenApi.getRefreshToken();
        if (refreshToken) {
            const response = await api.post(API_URL.AUTH.REFRESH, {
                refreshToken: refreshToken
            });

            if (response && response.data) {
                tokenApi.setToken(response.data.token, response.data.refreshToken);
                return true;
            }
        }

        return false;
    }


    apiAuth.interceptors.request.use(
        async config => {
            const token = tokenApi.getAccessToken();
            if (!token) {
                return Promise.reject("토큰 없어")
            }
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        },
        error => {
            return Promise.reject(error)
        }
    );

    apiAuth.interceptors.response.use(
        response => {
            return response;
        }, async error => {
            console.log("response ERROR");
            console.log(error);
            const response = error.response;
            if (response) {
                const request = error.config;
                if (response.status === 401 && !request._retry) {
                    console.log(response.data);
                    // token 재발급
                    const isOk = await requestRefreshTokenUpdate();
                    if (isOk) {
                        request._retry = 1;
                        return apiAuth(request);
                    }
                }
            }


            return Promise.reject(error)
        }
    );

    return {api, apiAuth}
};


export {API_URL, defineApi, getEndpoint};