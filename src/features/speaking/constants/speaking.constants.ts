import { VocabularyPathsEnum } from "@app/features/vocabulary/vocabulary";

import ThumbnailOne from "@app/assets/images/voice-assistant.png";
import ThumbnailTwo from "@app/assets/images/voice-assistant-amico.png";
import ThumbnailThree from "@app/assets/images/voice-assistant-pana.png";

import { TABS_ACTIONS_READING } from "./speaking.enum";
import { TypesTabsActions } from "../types/speaking.types";

export const LIST_SPEAKING_STYLE = [
  {
    title: "Vocabulary pronunciation",
    thumbnail: ThumbnailOne,
    path: VocabularyPathsEnum.LIST_VOCABULARY_TOPICS,
  },
  {
    title: "Practice your voice with phrases and short sentences",
    thumbnail: ThumbnailTwo,
    path: "/speaking/phrases",
  },
  {
    title: "Voice to text",
    thumbnail: ThumbnailThree,
    path: "/voice-to-text",
  },
];

export const LIST_ACTIONS_READING: TypesTabsActions[] = [
  {
    label: "Random",
    tab: TABS_ACTIONS_READING.RANDOM,
  },
  { label: "Customize reading content", tab: TABS_ACTIONS_READING.CUSTOMIZE },
  { label: "Freestyle", tab: TABS_ACTIONS_READING.FREESTYLE },
];
