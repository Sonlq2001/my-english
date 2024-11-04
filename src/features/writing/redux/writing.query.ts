import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithAuth } from "@app/features/setting/helpers/get-base-query-auth";

import { WritingEndpointsEnum } from "../constants/writing.endpoints";
import { ResExampleRandom } from "@app/features/writing/types/writing.type";

export const writingQuery = createApi({
  reducerPath: "writingQuery",
  baseQuery: baseQueryWithAuth,

  endpoints: (build) => ({
    getListExampleRandom: build.query<ResExampleRandom, void>({
      query: () => WritingEndpointsEnum.GET_LIST_EXAMPLE_RANDOM,
    }),
  }),
});

export const { useGetListExampleRandomQuery } = writingQuery;
