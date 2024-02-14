import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

const ListeningScreen = lazy(
  () => import("../screens/ListeningScreen/ListeningScreen")
);
const PodcastDetail = lazy(
  () => import("../screens/PodcastDetail/PodcastDetail")
);

const LISTENING_SCREEN: RouteItemDef = {
  id: "listening-screen",
  path: "/listening",
  component: ListeningScreen,
};

const PODCAST_DETAIL_SCREEN: RouteItemDef = {
  id: "podcast-detail-screen",
  path: "/podcast/:slug",
  component: PodcastDetail,
};

export const LISTENING_ROUTES = [LISTENING_SCREEN, PODCAST_DETAIL_SCREEN];
