import { object, string } from "yup";

import { ruleFile } from "@app/helpers/text-editor.helper";
import { TOPIC_KEY } from "@app/features/setting/constants/setting.constants";
import {
  InitCreatePodcast,
  ResPodcast,
} from "@app/features/listening/types/listening.type";

export const schemaPodcast = object({
  title: string()
    .required("You have not entered a value")
    .max(100, "Length must not exceed 100 characters"),
  author: string()
    .required("You have not entered a value")
    .max(100, "Length must not exceed 100 characters"),
  videoId: string().required("You have not entered a value"),
  description: string().required("You have not entered a value"),
  file: ruleFile("file").nullable(),
});

export const getInitPodcast = (
  podcast: ResPodcast | null
): InitCreatePodcast => {
  return {
    title: podcast?.title ?? "",
    author: podcast?.author ?? "",
    topic: podcast?.topic ?? TOPIC_KEY.Life,
    videoId: podcast?.videoId ?? "",
    file: null,
    description: podcast?.description ?? "",
    thumbnail: podcast?.thumbnail?.imageUrl,
    type: "VIDEO",
  };
};
