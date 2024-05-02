import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

import { store } from "@app/redux/store";
import { toSnakeCase, toCamel } from "@app/helpers/convert-object";
import { KEYS_HEADERS } from "@app/constants/app.constants";
import { refreshToken } from "@app/features/auth/auth";

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
  return Promise.reject(error);
};

const refreshAuthLogic = async () => {
  await store.dispatch(refreshToken());
  return Promise.resolve();
};

createAuthRefreshInterceptor(api, refreshAuthLogic, { statusCodes: [408] });

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(responseInterceptor, errorInterceptor);

export default api;
