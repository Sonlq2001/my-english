import { DashboardPathsEnum } from "@app/features/dashboard/dashboard";
import { ListeningPathsEnum } from "@app/features/listening/listening";
import { ReadingPathsEnum } from "@app/features/reading/reading";
import { SpeakingPathsEnum } from "@app/features/speaking/speaking";
import { VocabularyPathsEnum } from "@app/features/vocabulary/constants/vocabulary.paths";
import { NotepadPathsEnum } from "@app/features/notepad/notepad";
import { WritingPathsEnum } from "@app/features/writing/writing";
import {
  SettingPathsEnum,
  SettingSubPathsEnum,
} from "@app/features/setting/setting";

import IconDashboard from "@app/assets/images/icon-svg/icon-dashboard.svg?react";
import IconListening from "@app/assets/images/icon-svg/icon-listening.svg?react";
import IconSpeaking from "@app/assets/images/icon-svg/icon-speaking.svg?react";
import IconReading from "@app/assets/images/icon-svg/icon-reading.svg?react";
import IconWriting from "@app/assets/images/icon-svg/icon-writing.svg?react";
import IconVocabulary from "@app/assets/images/icon-svg/icon-vocabulary.svg?react";
import IconNotepad from "@app/assets/images/icon-svg/icon-notepad.svg?react";
import IconSetting from "@app/assets/images/icon-svg/icon-setting.svg?react";
import { NavbarMenus } from "@app/types/app.types";

export const NAVBAR_MENUS: { title: string; menus: NavbarMenus[] }[] = [
  {
    title: "Menu",
    menus: [
      {
        id: "home", //TODO: id
        path: DashboardPathsEnum.DASHBOARD,
        icon: IconDashboard,
        label: "Dashboard",
      },
    ],
  },
  {
    title: "Skills",
    menus: [
      {
        id: "listening",
        path: ListeningPathsEnum.LISTENING,
        icon: IconListening,
        label: "Listening",
      },
      {
        id: "Speaking",
        path: SpeakingPathsEnum.SPEAKING,
        icon: IconSpeaking,
        label: "Speaking",
      },
      {
        id: "Reading",
        path: ReadingPathsEnum.READING,
        icon: IconReading,
        label: "Reading",
      },
      {
        id: "Writing",
        path: WritingPathsEnum.WRITING,
        icon: IconWriting,
        label: "Writing",
      },
    ],
  },
  {
    title: "Manage",
    menus: [
      {
        id: "Vocabulary",
        path: VocabularyPathsEnum.LIST_VOCABULARY_TOPICS,
        icon: IconVocabulary,
        label: "Vocabulary",
      },
      {
        id: "Notepad",
        path: NotepadPathsEnum.NOTEPAD,
        icon: IconNotepad,
        label: "Notepad",
      },
      {
        id: "Settings",
        path: `${SettingPathsEnum.SETTINGS}/${SettingSubPathsEnum.GENERAL}`,
        icon: IconSetting,
        label: "Settings",
        customActive: true,
      },
    ],
  },
];
