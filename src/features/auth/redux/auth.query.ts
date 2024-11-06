import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithAuth } from "@app/features/setting/helpers/get-base-query-auth";

import { AuthEndpointsEnum } from "../constants/auth.endpoints";
import { AuthResponse } from "../types/auth.type";

export const authQuery = createApi({
  reducerPath: "authQuery",
  baseQuery: baseQueryWithAuth,
  endpoints: (build) => ({
    postLoginSuccess: build.mutation<AuthResponse, string>({
      query: (code) => ({
        url: AuthEndpointsEnum.LOGIN_SUCCESS,
        body: { code },
        method: "POST",
      }),
    }),
    getUserInfo: build.query<void, void>({
      query: () => AuthEndpointsEnum.USER_INFO,
    }),
    addMarkDocument: build.mutation({
      query: () => {
        return {
          url: "",
        };
      },
    }),
  }),
});

export const { usePostLoginSuccessMutation, useGetUserInfoQuery } = authQuery;
