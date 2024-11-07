import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithAuth } from "@app/features/setting/helpers/get-base-query-auth";

import { AuthEndpointsEnum } from "../constants/auth.endpoints";
import { AuthResponse, ResUserInfo } from "../types/auth.type";

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
    getUserInfo: build.query<ResUserInfo, void>({
      query: () => AuthEndpointsEnum.USER_INFO,
    }),
    addMarkDocument: build.mutation<void, string>({
      query: (documentId) => {
        return {
          url: AuthEndpointsEnum.MARK_CONTENT,
          body: { documentId },
          method: "PATCH",
        };
      },
    }),
  }),
});

export const {
  usePostLoginSuccessMutation,
  useGetUserInfoQuery,
  useAddMarkDocumentMutation,
} = authQuery;
