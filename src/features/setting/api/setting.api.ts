import api from "@app/api/api";

import { SettingEndpointsEnum } from "@app/features/setting/setting";
import { ReqCreatePodcast } from "@app/features/setting/types/create-podcast.type";

const createPodcastApi = (payload: ReqCreatePodcast) => {
  return api.post(SettingEndpointsEnum.CREATE_PODCAST, payload);
};

export const settingApi = {
  createPodcastApi,
};
