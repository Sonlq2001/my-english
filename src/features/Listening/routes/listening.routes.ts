import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

import { ListeningPathsEnum } from "../constants/listening.paths";

const ListeningScreen = lazy(
  () => import("../screens/ListeningScreen/ListeningScreen")
);
const PodcastDetail = lazy(
  () => import("../screens/PodcastDetail/PodcastDetail")
);
const PodcastTopicList = lazy(
  () => import("../screens/PodcastTopicList/PodcastTopicList")
);

const LISTENING_SCREEN: RouteItemDef = {
  id: "listening-screen",
  path: ListeningPathsEnum.LISTENING,
  component: ListeningScreen,
};

const PODCAST_DETAIL_SCREEN: RouteItemDef = {
  id: "podcast-detail-screen",
  path: ListeningPathsEnum.PODCAST_DETAIL,
  component: PodcastDetail,
};

const PODCAST_TOPIC_LIST_SCREEN: RouteItemDef = {
  id: "podcast-topic-list",
  path: ListeningPathsEnum.PODCAST_LIST_TOPIC,
  component: PodcastTopicList,
};

export const LISTENING_ROUTES = [
  LISTENING_SCREEN,
  PODCAST_DETAIL_SCREEN,
  PODCAST_TOPIC_LIST_SCREEN,
];
