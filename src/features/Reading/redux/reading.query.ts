import { createApi } from "@reduxjs/toolkit/query/react";

import { ReadingEndpointsEnum } from "../constants/reading.endpoints";
import { ResDocument } from "../types/reading.type";
import { baseQueryWithAuth } from "@app/features/setting/helpers/get-base-query-auth";

export const readingQuery = createApi({
  reducerPath: "readingQuery",
  baseQuery: baseQueryWithAuth,

  endpoints: (build) => ({
    getListDocuments: build.query<ResDocument[], void>({
      query: () => ReadingEndpointsEnum.GET_LIST_DOCUMENTS,
    }),

    getDocument: build.query<ResDocument, string>({
      query: (documentId) =>
        ReadingEndpointsEnum.GET_DOCUMENT.replace(":document_id", documentId),
    }),
  }),
});

export const { useGetListDocumentsQuery, useGetDocumentQuery } = readingQuery;
