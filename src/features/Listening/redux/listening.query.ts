import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BaseResponse } from "@app/types/app.types";
import { toCamel } from "@app/helpers/convert-object";

import { ListeningEndpointsEnum } from "../constants/listening.endpoints";
import { ResPodcast, ResListPodcast } from "../types/listening.type";

export const listeningQuery = createApi({
  reducerPath: "listeningQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
  }),

  endpoints: (build) => ({
    getPodcastDetail: build.query<ResPodcast, string>({
      query: (podcastId) => ({
        url: ListeningEndpointsEnum.GET_PODCAST_DETAIL.replace(
          ":podcast_id",
          podcastId
        ),
        method: "GET",
      }),
      transformResponse: (rawResult: BaseResponse<ResPodcast>) => {
        return toCamel(rawResult.metadata) as ResPodcast;
      },
    }),

    getListPodcast: build.query<ResListPodcast, void>({
      query: () => ListeningEndpointsEnum.GET_LIST_PODCAST,
      transformResponse: (rawResult: BaseResponse<ResListPodcast>) => {
        return toCamel(rawResult.metadata) as ResListPodcast;
      },
    }),
  }),
});

export const { useGetPodcastDetailQuery, useGetListPodcastQuery } =
  listeningQuery;
