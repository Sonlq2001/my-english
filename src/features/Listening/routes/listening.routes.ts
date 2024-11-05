import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

import { ListeningPathsEnum } from "../constants/listening.paths";

const ListeningScreen = lazy(
  () => import("../screens/ListeningScreen/ListeningScreen")
);
const PodcastVideoDetail = lazy(
  () => import("../screens/PodcastVideoDetail/PodcastVideoDetail")
);
const PodcastListScreen = lazy(
  () => import("../screens/PodcastListScreen/PodcastListScreen")
);
const PodcastAudioDetail = lazy(
  () => import("../screens/PodcastAudioDetail/PodcastAudioDetail")
);

const LISTENING_SCREEN: RouteItemDef = {
  id: "listening-screen",
  path: ListeningPathsEnum.LISTENING,
  component: ListeningScreen,
};

const PODCAST_VIDEO_DETAIL_SCREEN: RouteItemDef = {
  id: "podcast-video-detail-screen",
  path: ListeningPathsEnum.PODCAST_VIDEO_DETAIL,
  component: PodcastVideoDetail,
};

const PODCAST_LIST_SCREEN: RouteItemDef = {
  id: "podcast-list-screen",
  path: ListeningPathsEnum.PODCAST_LIST,
  component: PodcastListScreen,
};

const PODCAST_AUDIO_DETAIL_SCREEN: RouteItemDef = {
  id: "podcast-audio-detail-screen",
  path: ListeningPathsEnum.PODCAST_AUDIO_DETAIL,
  component: PodcastAudioDetail,
};

export const LISTENING_ROUTES = [
  LISTENING_SCREEN,
  PODCAST_VIDEO_DETAIL_SCREEN,
  PODCAST_LIST_SCREEN,
  PODCAST_AUDIO_DETAIL_SCREEN,
];
