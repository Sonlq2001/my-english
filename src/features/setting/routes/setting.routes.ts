import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";
import SettingLayout from "@app/layouts/SettingLayout/SettingLayout";

import { SettingPathsEnum } from "../constants/setting.path";
import SettingPodcast from "../screens/SettingPodcast/SettingPodcast";
import SettingGeneral from "../screens/SettingGeneral/SettingGeneral";

const SettingScreen = lazy(
  () => import("../screens/SettingScreen/SettingScreen")
);

const SETTING_SCREEN: RouteItemDef = {
  id: "setting-screen",
  path: SettingPathsEnum.SETTINGS,
  layout: SettingLayout,
  component: SettingScreen,
  index: true,
  subMenu: [
    {
      id: "podcast-setting",
      path: "podcast",
      component: SettingPodcast,
      index: true,
    },
    {
      id: "general-setting",
      path: "general",
      component: SettingGeneral,
    },
  ],
};

export const SETTING_ROUTES = [SETTING_SCREEN];
