import { ListeningPathsEnum } from "@app/features/listening/listening";
import { ReadingPathsEnum } from "@app/features/reading/reading";
import { SpeakingPathsEnum } from "@app/features/speaking/speaking";
import { WritingPathsEnum } from "@app/features/writing/writing";

import IconHeadphoneColor from "@app/assets/images/icon-svg/icon-headphone-color.svg?react";
import IconSoundCloud from "@app/assets/images/icon-svg/icon-sound-cloud.svg?react";
import IconBookColor from "@app/assets/images/icon-svg/icon-book-color.svg?react";
import IconWritingNotepad from "@app/assets/images/icon-svg/icon-pencil.svg?react";

export enum TabFavorite {
  Tab1,
  Tab2,
  Tab3,
}

export const LIST_TABS_FAVORITE = [
  {
    title: "Podcaster",
    value: TabFavorite.Tab1,
  },
  {
    title: "Recent",
    value: TabFavorite.Tab2,
  },
  {
    title: "Popular",
    value: TabFavorite.Tab3,
  },
];

export const SKILLS = [
  {
    title: "Listening",
    icon: IconHeadphoneColor,
    path: ListeningPathsEnum.LISTENING,
  },
  {
    title: "Speaking",
    icon: IconSoundCloud,
    path: SpeakingPathsEnum.SPEAKING,
  },
  {
    title: "Reading",
    icon: IconBookColor,
    path: ReadingPathsEnum.READING,
  },
  {
    title: "Writing",
    icon: IconWritingNotepad,
    path: WritingPathsEnum.WRITING,
  },
];
