import { RootState } from "@app/redux/rootReducer";
import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { refreshToken } from "@app/features/auth/auth";
import { unwrapResult } from "@reduxjs/toolkit";

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
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 408) {
    const res = unwrapResult(await api.dispatch(refreshToken()));

    if (res.accessToken) {
      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      // TODO: refresh token fail -> logout
    }
  }
  return result;
};
