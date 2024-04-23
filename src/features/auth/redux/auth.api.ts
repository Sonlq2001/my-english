import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { AuthEndpointsEnum } from "../constants/auth.endpoints";
import { AuthResponse } from "../types/auth.type";
import { BaseResponse } from "@app/types/app.types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
  }),

  endpoints: (build) => ({
    postLoginSuccess: build.mutation<AuthResponse, string>({
      query: (code) => ({
        url: AuthEndpointsEnum.LOGIN_SUCCESS,
        body: { code },
        method: "POST",
      }),
      transformResponse: (response: BaseResponse<AuthResponse>) => {
        return response.metadata;
      },
    }),
  }),
});

export const { usePostLoginSuccessMutation } = authApi;
