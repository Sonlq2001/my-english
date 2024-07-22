import { VocabularyPathsEnum } from "@app/features/vocabulary/vocabulary";
import ThumbnailOne from "@app/assets/images/idea.jpg";
import ThumbnailTwo from "@app/assets/images/step.jpg";
import ThumbnailThree from "@app/assets/images/success.jpg";

import ThumbnailVocabulary from "@app/assets/images/speak-1.jpg";
import ThumbnailShortText from "@app/assets/images/speak-2.jpg";
import ThumbnailVoiceText from "@app/assets/images/speak-3.jpg";
import ThumbnailSpeaking from "@app/assets/images/speak-4.png";

import { TABS_ACTIONS_READING } from "./speaking.enum";
import { TypesTabsActions } from "../types/speaking.types";

export const LIST_SPEAKING_STYLE = [
  {
    title: "Vocabulary",
    subTitle: "Pronunciation according to vocabulary",
    thumbnail: ThumbnailVocabulary,
    path: VocabularyPathsEnum.LIST_VOCABULARY_TOPICS,
    styleColor: "rgb(120 14 14 / 50%)",
  },
  {
    title: "Short text",
    subTitle: "Sample sentences and examples",
    thumbnail: ThumbnailShortText,
    path: "/speaking/phrases",
    styleColor: "rgb(14 90 120 / 50%)",
  },
  {
    title: "Voice to text",
    subTitle: "Practice your voice with phrases and short sentences",
    thumbnail: ThumbnailVoiceText,
    path: "/voice-to-text",
    styleColor: "rgb(120 69 14 / 50%)",
  },
  {
    title: "Voice to text 2",
    subTitle: "Practice your voice with phrases and short sentences",
    thumbnail: ThumbnailSpeaking,
    path: "/voice-to-text",
    styleColor: "rgb(14 120 58 / 50%)",
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

export const LIST_STEPS = [
  {
    title: "Beginning",
    description: "Planning and setting goals is always a good start.",
    thumbnail: ThumbnailOne,
  },
  {
    title: "Ascent process",
    description:
      "Every journey of a thousand miles must begin with the first small step.",
    thumbnail: ThumbnailTwo,
  },
  {
    title: "Destination",
    description: "Enjoy the joy of victory after months of effort.",
    thumbnail: ThumbnailThree,
  },
];
