import { RouteItemDef } from "@app/types/routes.types";
import SettingLayout from "@app/layouts/SettingLayout/SettingLayout";

import {
  SettingPathsEnum,
  SettingSubPathsEnum,
} from "../constants/setting.path";
import SettingPodcast from "../screens/SettingPodcast/SettingPodcast";
import SettingGeneral from "../screens/SettingGeneral/SettingGeneral";
import CreatePodcast from "../screens/CreatePodcast/CreatePodcast";
import SettingDocument from "../screens/SettingDocument/SettingDocument";
import CreateDocument from "../screens/CreateDocument/CreateDocument";

const SETTING_SCREEN: RouteItemDef = {
  id: "setting-screen",
  path: SettingPathsEnum.SETTINGS,
  layout: SettingLayout,
  subMenu: [
    {
      id: "podcast-setting",
      path: SettingSubPathsEnum.PODCAST,
      component: SettingPodcast,
      index: true,
    },
    {
      id: "create-podcast-setting",
      path: SettingSubPathsEnum.CREATE_PODCAST,
      component: CreatePodcast,
    },
    {
      id: "edit-podcast-setting",
      path: SettingSubPathsEnum.EDIT_PODCAST,
      component: CreatePodcast,
    },
    {
      id: "general-setting",
      path: SettingSubPathsEnum.GENERAL,
      component: SettingGeneral,
    },
    {
      id: "document-list",
      path: SettingSubPathsEnum.DOCUMENTS,
      component: SettingDocument,
    },
    {
      id: "create-document-list",
      path: SettingSubPathsEnum.DOCUMENT_CREATE,
      component: CreateDocument,
    },
    {
      id: "edit-document-list",
      path: SettingSubPathsEnum.DOCUMENT_EDIT,
      component: CreateDocument,
    },
  ],
};

export const SETTING_ROUTES = [SETTING_SCREEN];
