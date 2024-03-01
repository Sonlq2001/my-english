import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

import { ReadingPathsEnum } from "../constants/reading.paths";

const ReadingScreen = lazy(
  () => import("../screens/ReadingScreen/ReadingScreen")
);

const ArticleDetail = lazy(
  () => import("../screens/ArticleDetail/ArticleDetail")
);

const READING_SCREEN: RouteItemDef = {
  id: "reading-screen",
  path: ReadingPathsEnum.READING,
  component: ReadingScreen,
};

const ARTICLE_DETAIL: RouteItemDef = {
  id: "article-detail-screen",
  path: ReadingPathsEnum.ARTICLE_DETAIL,
  component: ArticleDetail,
};

export const READING_ROUTES = [READING_SCREEN, ARTICLE_DETAIL];
