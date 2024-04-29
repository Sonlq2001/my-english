import api from "@app/api/api";

import { AuthEndpointsEnum } from "../constants/auth.endpoints";
import { PayloadLoginSuccess } from "../types/auth.type";

const loginSuccessApi = (payload: PayloadLoginSuccess) => {
  return api.post(AuthEndpointsEnum.LOGIN_SUCCESS, payload);
};

export const authApi = { loginSuccessApi };
