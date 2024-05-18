import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BaseResponse } from "@app/types/app.types";
import { toCamel } from "@app/helpers/convert-object";

import { VocabularyEndpointsEnum } from "../constants/vocabulary.endpoints";
import { ResListTopics } from "../types/vocabulary.type";

export const vocabularyQuery = createApi({
  reducerPath: "vocabularyQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
  }),

  endpoints: (build) => ({
    getListTopics: build.query<ResListTopics, void>({
      query: () => VocabularyEndpointsEnum.GET_TOPICS,
      transformResponse: (rawResult: BaseResponse<ResListTopics>) => {
        return toCamel(rawResult.metadata) as ResListTopics;
      },
    }),
  }),
});

export const { useGetListTopicsQuery } = vocabularyQuery;
