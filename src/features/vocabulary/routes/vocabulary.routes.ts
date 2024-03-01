import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";
import CreateVocabularyLayout from "@app/layouts/CreateVocabularyLayout/CreateVocabularyLayout";

import { VocabularyPathsEnum } from "../constants/vocabulary.paths";

const ListVocabularyTopics = lazy(
  () => import("../screens/ListVocabularyTopics/ListVocabularyTopics")
);
const ListVocabulary = lazy(
  () => import("../screens/ListVocabulary/ListVocabulary")
);
const VocabularyDetail = lazy(
  () => import("../screens/VocabularyDetail/VocabularyDetail")
);
const CreateVocabulary = lazy(
  () => import("../screens/CreateVocabulary/CreateVocabulary")
);

const LIST_VOCABULARY_TOPICS: RouteItemDef = {
  id: "list-vocabulary-topics-screen",
  path: VocabularyPathsEnum.LIST_VOCABULARY_TOPICS,
  component: ListVocabularyTopics,
  layout: CreateVocabularyLayout,
};

const LIST_VOCABULARY: RouteItemDef = {
  id: "list-vocabulary-screen",
  path: VocabularyPathsEnum.LIST_VOCABULARY,
  component: ListVocabulary,
  layout: CreateVocabularyLayout,
};

const VOCABULARY_DETAIL: RouteItemDef = {
  id: "vocabulary-detail-screen",
  path: VocabularyPathsEnum.VOCABULARY_DETAIL,
  component: VocabularyDetail,
  layout: CreateVocabularyLayout,
};

const CREATE_VOCABULARY: RouteItemDef = {
  id: "create-vocabulary-screen",
  path: VocabularyPathsEnum.CREATE_VOCABULARY,
  component: CreateVocabulary,
};

export const VOCABULARY_ROUTES = [
  LIST_VOCABULARY_TOPICS,
  LIST_VOCABULARY,
  VOCABULARY_DETAIL,
  CREATE_VOCABULARY,
];
