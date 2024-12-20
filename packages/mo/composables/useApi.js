import { tokenApi } from "@priros/common/utils/tokenApi";
import {
  API_URL,
  defineApi,
  getEndpoint,
  getEndpointOfRepay,
} from "@priros/common/api/api.js";

const $runtimeConfig = useRuntimeConfig();
const { api, apiAuth } = defineApi({
  host: $runtimeConfig.public.apiURL,
  tokenApi: tokenApi,
});

const POST = async (url, data = {}) => {
  return await api.post(url, data);
};

const POST_AUTH = async (url, data = {}) => {
  return await apiAuth.post(url, data);
};

const PUT = async (url, data = {}) => {
  return await api.put(url, data);
};

const PUT_AUTH = async (url, data = {}) => {
  return await apiAuth.put(url, data);
};

const DELETE = async (url, data = {}) => {
  return await api.delete(url, data);
};

const DELETE_AUTH = async (url, data = {}) => {
  return await apiAuth.delete(url, data);
};

const GET = async (url, data = {}) => {
  return await api.get(url, {
    params: {
      ...data,
    },
  });
};
const GET_AUTH = async (url, data = {}) => {
  return await apiAuth.get(url, {
    params: {
      ...data,
    },
  });
};

const GET_DOWNLOAD = async (url, data = {}) => {
  return await apiAuth.get(url, {
    responseType: "blob",
    params: {
      ...data,
    },
  });
};

export {
  API_URL,
  getEndpoint,
  getEndpointOfRepay,
  POST,
  POST_AUTH,
  GET,
  GET_AUTH,
  PUT,
  PUT_AUTH,
  DELETE,
  DELETE_AUTH,
  GET_DOWNLOAD,
};
