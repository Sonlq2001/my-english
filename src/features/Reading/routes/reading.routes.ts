import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

const ReadingScreen = lazy(
  () => import("../screens/ReadingScreen/ReadingScreen")
);

const ArticleDetail = lazy(
  () => import("../screens/ArticleDetail/ArticleDetail")
);

const READING_SCREEN: RouteItemDef = {
  id: "reading-screen",
  path: "/reading",
  component: ReadingScreen,
};

const ARTICLE_DETAIL: RouteItemDef = {
  id: "article-detail-screen",
  path: "/article/:slug",
  component: ArticleDetail,
};

export const READING_ROUTES = [READING_SCREEN, ARTICLE_DETAIL];
