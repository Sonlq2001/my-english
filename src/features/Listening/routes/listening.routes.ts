import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

const ListeningScreen = lazy(
  () => import("../screens/ListeningScreen/ListeningScreen")
);

const LISTENING_SCREEN: RouteItemDef = {
  id: "listening-screen",
  path: "/listening",
  component: ListeningScreen,
};

export const LISTENING_ROUTES = [LISTENING_SCREEN];
