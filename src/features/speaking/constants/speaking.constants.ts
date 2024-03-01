import { VocabularyPathsEnum } from "@app/features/vocabulary/vocabulary";

import ThumbnailOne from "@app/assets/images/voice-assistant.png";
import ThumbnailTwo from "@app/assets/images/voice-assistant-amico.png";
import ThumbnailThree from "@app/assets/images/voice-assistant-pana.png";

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
