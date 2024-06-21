import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

import { ReadingPathsEnum } from "../constants/reading.paths";

const ReadingScreen = lazy(
  () => import("../screens/ReadingScreen/ReadingScreen")
);

const ArticleDetail = lazy(
  () => import("../screens/ArticleDetail/ArticleDetail")
);

const CreateDocument = lazy(
  () => import("../screens/CreateDocument/CreateDocument")
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

const CREATE_DOCUMENT: RouteItemDef = {
  id: "create-document-screen",
  path: ReadingPathsEnum.CREATE_DOCUMENT,
  component: CreateDocument,
};

const EDIT_DOCUMENT: RouteItemDef = {
  id: "edit-document-screen",
  path: ReadingPathsEnum.EDIT_DOCUMENT,
  component: CreateDocument,
};

export const READING_ROUTES = [
  READING_SCREEN,
  ARTICLE_DETAIL,
  CREATE_DOCUMENT,
  EDIT_DOCUMENT,
];
