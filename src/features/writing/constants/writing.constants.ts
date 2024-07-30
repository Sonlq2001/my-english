import { WritingPathsEnum } from "../constants/writing.paths";

import ImageOne from "@app/assets/images/icon-svg/icon-world-map.svg?react";
import ImageTwo from "@app/assets/images/icon-svg/icon-pinia-light.svg?react";
import ImageThree from "@app/assets/images/icon-svg/icon-game.svg?react";
import ImageFour from "@app/assets/images/icon-svg/icon-fish.svg?react";

export const LIST_WRITING_STYLE = [
  {
    title: "Write topic",
    icon: ImageOne,
    path: WritingPathsEnum.WITE_TOPIC,
    color: "#fbab5e",
  },
  {
    title: "Write according to the model",
    icon: ImageTwo,
    path: WritingPathsEnum.WRITING_MODEL,
    color: "#8970d5",
  },
  {
    title: "Play game",
    icon: ImageThree,
    path: WritingPathsEnum.WRITING_MODEL,
    color: "#ff4e4e",
  },
  {
    title: "Write freely",
    icon: ImageFour,
    path: WritingPathsEnum.WRITING_MODEL,
    color: "#579be2",
  },
];
