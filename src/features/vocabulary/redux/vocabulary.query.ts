import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BaseResponse } from "@app/types/app.types";
import { toCamel } from "@app/helpers/convert-object";

import { VocabularyEndpointsEnum } from "../constants/vocabulary.endpoints";
import {
  ResListPartsOfSpeech,
  ResListTopics,
  ResVocabulary,
} from "../types/vocabulary.type";

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
    getPartsOfSpeech: build.query<ResListPartsOfSpeech, void>({
      query: () => VocabularyEndpointsEnum.GET_PARTS_OF_SPEECH,
      transformResponse: (rawResult: BaseResponse<ResListPartsOfSpeech>) => {
        return toCamel(rawResult.metadata) as ResListPartsOfSpeech;
      },
    }),
    getVocabularyDetail: build.query<ResVocabulary, string>({
      query: (word) =>
        VocabularyEndpointsEnum.GET_VOCABULARY.replace(":word", word),
      transformResponse: (rawResult: BaseResponse<ResVocabulary>) => {
        return toCamel(rawResult.metadata) as ResVocabulary;
      },
    }),
    getListVocabularyByTopic: build.query<ResVocabulary[], string>({
      query: (topic) =>
        VocabularyEndpointsEnum.GET_LIST_VOCABULARY.replace(":topic", topic),
      transformResponse: (rawResult: BaseResponse<ResVocabulary[]>) => {
        return toCamel(rawResult.metadata) as ResVocabulary[];
      },
    }),
  }),
});

export const {
  useGetListTopicsQuery,
  useGetPartsOfSpeechQuery,
  useGetVocabularyDetailQuery,
  useGetListVocabularyByTopicQuery,
} = vocabularyQuery;
