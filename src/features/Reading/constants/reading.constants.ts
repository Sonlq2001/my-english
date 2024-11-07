import IconHeadphone from "@app/assets/images/icon-svg/icon-headphone.svg?react";
import IconLeaf from "@app/assets/images/icon-svg/icon-leaf.svg?react";
import IconCityscape from "@app/assets/images/icon-svg/icon-cityscape.svg?react";
import IconBook from "@app/assets/images/icon-svg/icon-book.svg?react";
import IconExperiment from "@app/assets/images/icon-svg/icon-experiment-one.svg?react";
import IconCode from "@app/assets/images/icon-svg/icon-code.svg?react";

export enum TOPIC_KEY {
  Environment = "Environment",
  Business = "Business",
  Society = "Society",
  Study = "Study",
  Music = "Music",
  Science = "Science",
  Technology = "Technology",
}

export const LIST_TOPICS = [
  {
    label: TOPIC_KEY.Music,
    value: TOPIC_KEY.Music,
    thumbnail: IconHeadphone,
  },
  {
    label: TOPIC_KEY.Environment,
    value: TOPIC_KEY.Environment,
    thumbnail: IconLeaf,
  },
  {
    label: TOPIC_KEY.Society,
    value: TOPIC_KEY.Society,
    thumbnail: IconCityscape,
  },
  {
    label: TOPIC_KEY.Study,
    value: TOPIC_KEY.Study,
    thumbnail: IconBook,
  },
  {
    label: TOPIC_KEY.Science,
    value: TOPIC_KEY.Science,
    thumbnail: IconExperiment,
  },
  {
    label: TOPIC_KEY.Technology,
    value: TOPIC_KEY.Technology,
    thumbnail: IconCode,
  },
];
