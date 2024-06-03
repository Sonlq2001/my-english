import api from "@app/api/api";
import { ListeningEndpointsEnum } from "@app/features/listening/constants/listening.endpoints";
import {
  ReqCreatePodcast,
  ReqUpdatePodcast,
} from "@app/features/listening/types/listening.type";

const getListPodcastsApi = () => {
  return api.get(ListeningEndpointsEnum.GET_LIST_PODCAST);
};

const getPodcastApi = (podcastId: string) => {
  return api.get(
    ListeningEndpointsEnum.GET_PODCAST_DETAIL.replace(":podcast_id", podcastId)
  );
};

const deletePodcastApi = (podcastId: string) => {
  return api.delete(
    ListeningEndpointsEnum.DELETE_PODCAST.replace(":podcast_id", podcastId)
  );
};

const createPodcastApi = (payload: ReqCreatePodcast) => {
  return api.post(ListeningEndpointsEnum.CREATE_PODCAST, payload);
};

const updatePodcastApi = ({ podcastId, ...rest }: ReqUpdatePodcast) => {
  return api.patch(
    ListeningEndpointsEnum.UPDATE_PODCAST.replace(":podcast_id", podcastId),
    rest
  );
};

export const listeningApi = {
  getListPodcastsApi,
  getPodcastApi,
  deletePodcastApi,
  updatePodcastApi,
  createPodcastApi,
};
