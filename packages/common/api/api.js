import axios from "axios";
import API_URL from "./apiConstants";

const getEndpoint = (url, params) => {
  let endpoint = url;

  for (const key in params) {
    endpoint = endpoint.replace(`:${key}`, params[key]);
  }

  return endpoint;
};

const getEndpointOfRepay = (url, params, data) => {
  let endpoint = getEndpoint(url, params);

  for (const key in data) {
    if (!endpoint.includes("?")) endpoint += `?${key}=${data[key]}`;
    else endpoint += `&${key}=${data[key]}`;
  }

  return endpoint;
};

const defineApi = (config) => {
  const { host, tokenApi } = config;
  // axios
  axios.defaults.baseURL = host;

  const api = axios.create();
  const apiAuth = axios.create();

  async function requestRefreshTokenUpdate() {
    const refreshToken = tokenApi.getRefreshToken();
    if (refreshToken) {
      const response = await api
        .post(API_URL.AUTH.REFRESH, {
          refreshToken: refreshToken,
        })
        .catch((e) => {
          if (
            e.response.data.errorCode === "A011" ||
            e.response.data.errorCode === "A009"
          ) {
            tokenApi.clearAll();
            alert("인증 토큰 만료로 로그아웃되었습니다. 다시 로그인해주세요.");
            location.href = "/";
          }
        });

      if (response && response.data) {
        tokenApi.setToken(response.data.token, response.data.refreshToken);
        return true;
      }
    }

    return false;
  }

  apiAuth.interceptors.request.use(
    async (config) => {
      const token = tokenApi.getAccessToken();
      // if (!token) {
      //     tokenApi.clearAll()
      //     location.href = '/'
      //     alert('로그아웃되었습니다. 다시 로그인해주세요.')
      //     return Promise.reject("토큰 없어")
      // }
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  apiAuth.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const response = error.response;
      if (response) {
        const request = error.config;
        if (response.status === 401 && !request._retry) {
          // token 인증만료
          if (response.data.errorCode === "A010") {
            const isOk = await requestRefreshTokenUpdate();
            if (isOk) {
              request._retry = 1;
              return apiAuth(request);
            }
          }
        }
      }

      return Promise.reject(error);
    }
  );

  return { api, apiAuth };
};

export { API_URL, defineApi, getEndpoint, getEndpointOfRepay };
