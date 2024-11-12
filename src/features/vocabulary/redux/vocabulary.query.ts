import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithAuth } from "@app/features/setting/helpers/get-base-query-auth";

import { VocabularyEndpointsEnum } from "../constants/vocabulary.endpoints";
import {
  ResListPartsOfSpeech,
  ResListTopics,
  ResMarkVocabularyList,
  ResVocabulary,
} from "../types/vocabulary.type";

export const vocabularyQuery = createApi({
  reducerPath: "vocabularyQuery",
  baseQuery: baseQueryWithAuth,

  endpoints: (build) => ({
    getListTopics: build.query<ResListTopics, void>({
      query: () => VocabularyEndpointsEnum.GET_TOPICS,
    }),
    getPartsOfSpeech: build.query<ResListPartsOfSpeech, void>({
      query: () => VocabularyEndpointsEnum.GET_PARTS_OF_SPEECH,
    }),
    getVocabularyDetail: build.query<ResVocabulary, string>({
      query: (word) =>
        VocabularyEndpointsEnum.GET_VOCABULARY.replace(":word", word),
    }),
    getListVocabularyByTopic: build.query<ResVocabulary[], string>({
      query: (topic) =>
        VocabularyEndpointsEnum.GET_LIST_VOCABULARY.replace(":topic", topic),
    }),
    updateMarkVocabulary: build.mutation<
      unknown,
      { topicName: string; vocabularyId: string }
    >({
      query: (payload) => {
        return {
          url: VocabularyEndpointsEnum.POST_MARK_VOCABULARY,
          body: payload,
          method: "POST",
        };
      },
    }),
    getMarkVocabularyList: build.query<ResMarkVocabularyList, string>({
      query: (topicId) => {
        return {
          url: VocabularyEndpointsEnum.GET_MARK_VOCABULARY_LIST.replace(
            ":topic_name",
            topicId
          ),
        };
      },
    }),
  }),
});

export const {
  useGetListTopicsQuery,
  useGetPartsOfSpeechQuery,
  useGetVocabularyDetailQuery,
  useGetListVocabularyByTopicQuery,
  useUpdateMarkVocabularyMutation,
  useGetMarkVocabularyListQuery,
} = vocabularyQuery;
