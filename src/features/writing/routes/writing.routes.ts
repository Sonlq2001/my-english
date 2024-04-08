import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

import { WritingPathsEnum } from "../constants/writing.paths";

const WritingScreen = lazy(
  () => import("../screens/WritingScreen/WritingScreen")
);
const WriteTopicScreen = lazy(
  () => import("../screens/WriteTopicScreen/WriteTopicScreen")
);
const WritingModelScreen = lazy(
  () => import("../screens/WritingModelScreen/WritingModelScreen")
);

const WRITING_SCREEN: RouteItemDef = {
  id: "writing-screen",
  path: WritingPathsEnum.WRITING,
  component: WritingScreen,
};

const WRITE_TOPIC_SCREEN: RouteItemDef = {
  id: "write-topic-screen",
  path: WritingPathsEnum.WITE_TOPIC,
  component: WriteTopicScreen,
};

const WRITING_MODEL_SCREEN: RouteItemDef = {
  id: "writing-model-screen",
  path: WritingPathsEnum.WRITING_MODEL,
  component: WritingModelScreen,
};

export const WRITING_ROUTES = [
  WRITING_SCREEN,
  WRITE_TOPIC_SCREEN,
  WRITING_MODEL_SCREEN,
];
