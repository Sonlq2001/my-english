import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BaseResponse } from "@app/types/app.types";
import { toCamel } from "@app/helpers/convert-object";

import { ReadingEndpointsEnum } from "../constants/reading.endpoints";
import { ResListDocuments } from "../types/reading.type";

export const readingQuery = createApi({
  reducerPath: "readingQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
  }),

  endpoints: (build) => ({
    getListDocuments: build.query<ResListDocuments[], void>({
      query: () => ReadingEndpointsEnum.GET_LIST_DOCUMENTS,
      transformResponse: (rawResult: BaseResponse<ResListDocuments[]>) => {
        return toCamel(rawResult.metadata) as ResListDocuments[];
      },
    }),
  }),
});

export const { useGetListDocumentsQuery } = readingQuery;
