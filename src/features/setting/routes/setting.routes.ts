import { lazy } from "react";

import { RouteItemDef } from "@app/types/routes.types";

import { SettingPathsEnum } from "../constants/setting.path";

const SettingScreen = lazy(
  () => import("../screens/SettingScreen/SettingScreen")
);

const SETTING_SCREEN: RouteItemDef = {
  id: "setting-screen",
  path: SettingPathsEnum.SETTINGS,
  component: SettingScreen,
};

export const SETTING_ROUTES = [SETTING_SCREEN];
