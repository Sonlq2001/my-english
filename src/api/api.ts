import { store } from "@app/redux/store";
import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";

import { toSnakeCase, toCamel } from "@app/helpers/convert-object";
import { KEYS_HEADERS } from "@app/constants/app.constants";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const requestInterceptor = (req: InternalAxiosRequestConfig) => {
  const accessToken = store.getState().auth.accessToken;
  const userId = store.getState().auth.user?.id;

  req.params = toSnakeCase(req.params, true);
  req.data = toSnakeCase(req.data, true);

  if (accessToken && userId) {
    req.headers[KEYS_HEADERS.AUTHORIZATION] = `Bearer ${accessToken}`;
    req.headers[KEYS_HEADERS.CLIENT_ID] = userId;
  }

  return req;
};

const responseInterceptor = (res: AxiosResponse) => {
  res.data = toCamel(res.data);
  return res;
};

const errorInterceptor = (error: AxiosError) => {
  console.log(error);
  return Promise.reject(error);
};

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(responseInterceptor, errorInterceptor);

export default api;
