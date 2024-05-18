import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BaseResponse } from "@app/types/app.types";

import { ListeningEndpointsEnum } from "../constants/listening.endpoints";
import { ResPodcast, ResListPodcast } from "../types/listening.type";
import { toCamel } from "@app/helpers/convert-object";

export const podcastQuery = createApi({
  reducerPath: "podcastQuery",
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
  podcastQuery;
