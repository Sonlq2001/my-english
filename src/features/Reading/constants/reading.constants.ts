import IconHeadphone from "@app/assets/images/icon-svg/icon-headphone.svg?react";
import IconLeaf from "@app/assets/images/icon-svg/icon-leaf.svg?react";
import IconCityscape from "@app/assets/images/icon-svg/icon-cityscape.svg?react";
import IconBook from "@app/assets/images/icon-svg/icon-book.svg?react";
import IconExperiment from "@app/assets/images/icon-svg/icon-experiment-one.svg?react";
import IconCode from "@app/assets/images/icon-svg/icon-code.svg?react";

export enum TOPIC_KEY {
  SocialScience = "Social science",
  Environment = "Environment",
  Business = "Business",
  Music = "Music",
}

export const LIST_TOPICS_DOCUMENT = [
  {
    label: TOPIC_KEY.SocialScience,
    value: TOPIC_KEY.SocialScience,
  },
  {
    label: TOPIC_KEY.Environment,
    value: TOPIC_KEY.Environment,
  },
  {
    label: TOPIC_KEY.Business,
    value: TOPIC_KEY.Business,
  },
  {
    label: TOPIC_KEY.Music,
    value: TOPIC_KEY.Music,
  },
];

export const LIST_TOPICS = [
  {
    title: "Music",
    thumbnail: IconHeadphone,
    color: "#f4ce7433",
  },
  {
    title: "Environment",
    thumbnail: IconLeaf,
    color: "#399f2d33",
  },
  {
    title: "Society",
    thumbnail: IconCityscape,
    color: "#2d849f33",
  },
  {
    title: "Study",
    thumbnail: IconBook,
    color: "#b8040433",
  },
  {
    title: "Science",
    thumbnail: IconExperiment,
    color: "#b8045633",
  },
  {
    title: "Technology",
    thumbnail: IconCode,
    color: "#04b87433",
  },
];
