import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BaseResponse } from "@app/types/app.types";
import { toCamel } from "@app/helpers/convert-object";

import { WritingEndpointsEnum } from "../constants/writing.endpoints";
import { ResExampleRandom } from "@app/features/writing/types/writing.type";

export const writingQuery = createApi({
  reducerPath: "writingQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
  }),

  endpoints: (build) => ({
    getListExampleRandom: build.query<ResExampleRandom, void>({
      query: () => WritingEndpointsEnum.GET_LIST_EXAMPLE_RANDOM,
      transformResponse: (rawResult: BaseResponse<ResExampleRandom>) => {
        return toCamel(rawResult.metadata) as ResExampleRandom;
      },
    }),
  }),
});

export const { useGetListExampleRandomQuery } = writingQuery;
