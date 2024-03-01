import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

import { SpeakingPathsEnum } from "../constants/speaking.paths";

const SpeakingScreen = lazy(
  () => import("../screens/SpeakingScreen/SpeakingScreen")
);

const SPEAKING_SCREEN: RouteItemDef = {
  id: "speaking-screen",
  path: SpeakingPathsEnum.SPEAKING,
  component: SpeakingScreen,
};

export const SPEAKING_ROUTES = [SPEAKING_SCREEN];
