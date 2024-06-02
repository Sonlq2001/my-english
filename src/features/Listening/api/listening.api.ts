import api from "@app/api/api";
import { ListeningEndpointsEnum } from "@app/features/listening/constants/listening.endpoints";

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

export const listeningApi = {
  getListPodcastsApi,
  getPodcastApi,
  deletePodcastApi,
};
