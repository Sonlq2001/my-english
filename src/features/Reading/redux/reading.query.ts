import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BaseResponse } from "@app/types/app.types";
import { toCamel } from "@app/helpers/convert-object";

import { ReadingEndpointsEnum } from "../constants/reading.endpoints";
import { ResDocument } from "../types/reading.type";

export const readingQuery = createApi({
  reducerPath: "readingQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
  }),

  endpoints: (build) => ({
    getListDocuments: build.query<ResDocument[], void>({
      query: () => ReadingEndpointsEnum.GET_LIST_DOCUMENTS,
      transformResponse: (rawResult: BaseResponse<ResDocument[]>) => {
        return toCamel(rawResult.metadata) as ResDocument[];
      },
    }),

    getDocument: build.query<ResDocument, string>({
      query: (documentId) =>
        ReadingEndpointsEnum.GET_DOCUMENT.replace(":document_id", documentId),
      transformResponse: (rawResult: BaseResponse<ResDocument>) => {
        return toCamel(rawResult.metadata) as ResDocument;
      },
    }),
  }),
});

export const { useGetListDocumentsQuery, useGetDocumentQuery } = readingQuery;
