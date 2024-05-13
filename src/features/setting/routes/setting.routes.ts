import { RouteItemDef } from "@app/types/routes.types";
import SettingLayout from "@app/layouts/SettingLayout/SettingLayout";

import {
  SettingPathsEnum,
  SettingSubPathsEnum,
} from "../constants/setting.path";
import SettingPodcast from "../screens/SettingPodcast/SettingPodcast";
import SettingGeneral from "../screens/SettingGeneral/SettingGeneral";
import CreatePodcast from "../screens/CreatePodcast/CreatePodcast";

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
      id: "general-setting",
      path: SettingSubPathsEnum.GENERAL,
      component: SettingGeneral,
    },
  ],
};

export const SETTING_ROUTES = [SETTING_SCREEN];
