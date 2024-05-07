import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

import { store } from "@app/redux/store";
import { toSnakeCase, toCamel } from "@app/helpers/convert-object";
import {
  CONTENT_TYPES_HEADER,
  KEYS_HEADERS,
  LOGOUT_RULE_MESSAGE,
  STATUS_CODE,
} from "@app/constants/app.constants";
import { refreshToken, logoutAction } from "@app/features/auth/auth";
import { AuthPathsEnum } from "@app/features/auth/auth";

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
    req.headers[KEYS_HEADERS.CONTENT_TYPE] = req.headers?.useFormData
      ? CONTENT_TYPES_HEADER.FORM_DATA
      : CONTENT_TYPES_HEADER.JSON;
  }

  return req;
};

const responseInterceptor = (res: AxiosResponse) => {
  res.data = toCamel(res.data);
  return res;
};

const errorInterceptor = (error: AxiosError) => {
  if (error && error.response) {
    const status = error.response.status;
    const message = error.response.data?.message;

    if (
      status === STATUS_CODE.UNAUTHORIZED &&
      message === LOGOUT_RULE_MESSAGE
    ) {
      store.dispatch(logoutAction());
      window.location.href = AuthPathsEnum.LOGIN;
    }
    return Promise.reject(error.response);
  }
  return Promise.reject(error);
};

const refreshAuthLogic = async () => {
  const accessToken = store.getState().auth.accessToken;
  const user = store.getState().auth.user;
  if (accessToken && user) {
    await store.dispatch(refreshToken());
  }
  return Promise.resolve();
};

createAuthRefreshInterceptor(api, refreshAuthLogic, { statusCodes: [408] });

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(responseInterceptor, errorInterceptor);

export default api;
