import IconDashboard from "@app/assets/images/icon-svg/icon-dashboard.svg?react";
import IconListening from "@app/assets/images/icon-svg/icon-listening.svg?react";
import IconSpeaking from "@app/assets/images/icon-svg/icon-speaking.svg?react";
import IconReading from "@app/assets/images/icon-svg/icon-reading.svg?react";
import IconWriting from "@app/assets/images/icon-svg/icon-writing.svg?react";
import IconNotepad from "@app/assets/images/icon-svg/icon-notepad.svg?react";
import IconSetting from "@app/assets/images/icon-svg/icon-setting.svg?react";
import { NavbarMenus } from "@app/types/app.types";

export const NAVBAR_MENUS: NavbarMenus[] = [
  {
    id: "home", //TODO: id
    path: "/",
    icon: IconDashboard,
    label: "Dashboard",
  },
  {
    id: "listening",
    path: "/listening",
    icon: IconListening,
    label: "Listening",
  },
  {
    id: "Speaking",
    path: "/speaking",
    icon: IconSpeaking,
    label: "Speaking",
  },
  {
    id: "Reading",
    path: "/reading",
    icon: IconReading,
    label: "Reading",
  },
  {
    id: "Writing",
    path: "/writing",
    icon: IconWriting,
    label: "Writing",
  },
  {
    id: "Notepad",
    path: "/notepad",
    icon: IconNotepad,
    label: "Notepad",
  },
  {
    id: "Settings",
    path: "/settings",
    icon: IconSetting,
    label: "Settings",
  },
];
