import { SettingSubPathsEnum } from "@app/features/setting/setting";

import IconHome from "@app/assets/images/icon-svg/icon-home.svg?react";
import IconPodcast from "@app/assets/images/icon-svg/icon-podcast.svg?react";

import { NavbarMenus } from "@app/types/app.types";

export const NAVBAR_SETTINGS_MENUS: NavbarMenus[] = [
  {
    id: "general", //TODO: id
    path: SettingSubPathsEnum.GENERAL,
    icon: IconHome,
    label: "General",
  },
  {
    id: "podcast",
    path: SettingSubPathsEnum.PODCAST,
    icon: IconPodcast,
    label: "Podcast",
  },
];
