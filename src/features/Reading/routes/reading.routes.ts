import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

const ReadingScreen = lazy(
  () => import("../screens/ReadingScreen/ReadingScreen")
);

const READING_SCREEN: RouteItemDef = {
  id: "reading-screen",
  path: "/reading",
  component: ReadingScreen,
};

export const READING_ROUTES = [READING_SCREEN];
