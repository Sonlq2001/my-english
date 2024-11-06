import { createApi } from "@reduxjs/toolkit/query/react";

import { BaseResponse, QueryParamsUrl } from "@app/types/app.types";
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
      }),
    }),
    getListPodcast: build.query<BaseResponse<ResListPodcast>, QueryParamsUrl>({
      query: (params) => {
        return {
          url: ListeningEndpointsEnum.GET_LIST_PODCAST,
          params,
        };
      },
    }),
  }),
});

export const { useGetPodcastDetailQuery, useGetListPodcastQuery } =
  listeningQuery;
