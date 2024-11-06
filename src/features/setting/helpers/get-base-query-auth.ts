import get from "lodash.get";
import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { unwrapResult } from "@reduxjs/toolkit";

import {
  AuthPathsEnum,
  logoutAction,
  refreshToken,
} from "@app/features/auth/auth";
import { RootState } from "@app/redux/rootReducer";
import { toSnakeCase, toCamel } from "@app/helpers/convert-object";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API,
  prepareHeaders: (headers, { getState }) => {
    const { accessToken, user } = (getState() as RootState).auth;

    if (accessToken && user?.id) {
      headers.set("Authorization", `Bearer ${accessToken}`);
      headers.set("Client-id", user.id);
    }
    return headers;
  },
  credentials: "include",
});

export const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  if (typeof args !== "string") {
    args.params = toSnakeCase(args.params);
  }

  let result = await baseQuery(args, api, extraOptions);

  // TODO: refactor code later
  if (result.error) {
    const status = result.error.status;
    if (status === 408) {
      const res = unwrapResult(await api.dispatch(refreshToken()));

      if (res.accessToken) {
        // retry the initial query
        result = await baseQuery(args, api, extraOptions);
      } else {
        // TODO: refresh token fail -> logout
        api.dispatch(logoutAction());
        window.location.href = AuthPathsEnum.LOGIN;
      }
    }

    if (status == 403) {
      api.dispatch(logoutAction());
      window.location.href = AuthPathsEnum.LOGIN;
    }
  }

  result.data = toCamel(get(result, "data.metadata"));
  return result;
};
