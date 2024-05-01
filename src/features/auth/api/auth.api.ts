import api from "@app/api/api";

import { AuthEndpointsEnum } from "../constants/auth.endpoints";
import { PayloadLoginSuccess } from "../types/auth.type";

const loginSuccessApi = (payload: PayloadLoginSuccess) => {
  return api.post(AuthEndpointsEnum.LOGIN_SUCCESS, payload);
};

const logoutApi = () => {
  return api.post(AuthEndpointsEnum.LOGOUT);
};

const refreshTokenApi = () => {
  return api.post(AuthEndpointsEnum.REFRESH_TOKEN);
};

export const authApi = { loginSuccessApi, logoutApi, refreshTokenApi };
