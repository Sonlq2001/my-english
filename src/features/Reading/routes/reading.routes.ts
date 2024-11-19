import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

import { ReadingPathsEnum } from "../constants/reading.paths";

const ReadingScreen = lazy(
  () => import("../screens/ReadingScreen/ReadingScreen")
);

const DocumentDetail = lazy(
  () => import("../screens/DocumentDetail/DocumentDetail")
);

const READING_SCREEN: RouteItemDef = {
  id: "reading-screen",
  path: ReadingPathsEnum.READING,
  component: ReadingScreen,
};

const ARTICLE_DETAIL: RouteItemDef = {
  id: "document-detail-screen",
  path: ReadingPathsEnum.DOCUMENT_DETAIL,
  component: DocumentDetail,
};

export const READING_ROUTES = [READING_SCREEN, ARTICLE_DETAIL];
