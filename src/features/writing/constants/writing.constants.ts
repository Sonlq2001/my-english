import { WritingPathsEnum } from "../constants/writing.paths";

import ImageOne from "@app/assets/images/writing-1.jpeg";
import ImageTwo from "@app/assets/images/writing-2.png";
import ImageThree from "@app/assets/images/writing-3.jpeg";

export const LIST_WRITING_STYLE = [
  {
    title: "Write according to the model",
    thumbnail: ImageOne,
    path: WritingPathsEnum.WRITING_MODEL,
  },
  {
    title: "Write by topic",
    thumbnail: ImageTwo,
    path: WritingPathsEnum.WITE_TOPIC,
  },
  {
    title: "Write freely",
    thumbnail: ImageThree,
    path: "/voice-to-text", // TODO: path
  },
];
