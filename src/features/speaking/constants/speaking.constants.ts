import { VocabularyPathsEnum } from "@app/features/vocabulary/vocabulary";

// import ThumbnailOne from "@app/assets/images/voice-assistant.png";
// import ThumbnailTwo from "@app/assets/images/voice-assistant-amico.png";
// import ThumbnailThree from "@app/assets/images/voice-assistant-pana.png";

import { TABS_ACTIONS_READING } from "./speaking.enum";
import { TypesTabsActions } from "../types/speaking.types";

export const LIST_SPEAKING_STYLE = [
  {
    title: "Vocabulary",
    subTitle: "Pronunciation according to vocabulary",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/27/14/01/ai-generated-8659195_640.jpg",
    path: VocabularyPathsEnum.LIST_VOCABULARY_TOPICS,
    styleColor: "rgb(120 14 14 / 50%)",
  },
  {
    title: "Short text",
    subTitle: "Sample sentences and examples",
    thumbnail:
      "https://cdn.pixabay.com/photo/2020/09/23/02/01/microphone-5594702_1280.jpg",
    path: "/speaking/phrases",
    styleColor: "rgb(14 90 120 / 50%)",
  },
  {
    title: "Voice to text",
    subTitle: "Practice your voice with phrases and short sentences",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/02/13/16/24/podcast-8571329_640.jpg",
    path: "/voice-to-text",
    styleColor: "rgb(120 69 14 / 50%)",
  },
  {
    title: "Voice to text 2",
    subTitle: "Practice your voice with phrases and short sentences",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/06/06/20/06/singer-8813370_640.png",
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
