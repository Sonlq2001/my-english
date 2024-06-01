import { object, string } from "yup";

import { ruleFile } from "@app/helpers/text-editor.helper";
import { InitCreatePodcast } from "@app/features/setting/types/create-podcast.type";
import { TOPIC_KEY } from "@app/features/setting/constants/setting.constants";

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

export const initCreatePodcast: InitCreatePodcast = {
  title: "",
  author: "",
  topic: TOPIC_KEY.Life,
  videoId: "",
  file: null,
  description: "",
};
