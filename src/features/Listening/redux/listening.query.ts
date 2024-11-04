import { createApi } from "@reduxjs/toolkit/query/react";

import { BaseResponse } from "@app/types/app.types";
import { toCamel } from "@app/helpers/convert-object";
import { baseQueryWithAuth } from "@app/features/setting/helpers/get-base-query-auth";
import {
  ResListPodcast,
  ResPodcast,
} from "@app/features/listening/types/listening.type";
import { ListeningEndpointsEnum } from "@app/features/listening/constants/listening.endpoints";

export const listeningQuery = createApi({
  reducerPath: "listeningQuery",
  baseQuery: baseQueryWithAuth,

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
