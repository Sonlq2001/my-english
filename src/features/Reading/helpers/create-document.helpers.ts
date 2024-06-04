import { object, string } from "yup";

import { TOPIC_KEY } from "@app/features/reading/constants/reading.constants";

export const schemaCreateDocument = object({
  title: string()
    .required("You have not entered a value")
    .max(100, "Length must not exceed 100 characters"),
  description: string().required("You have not entered a value"),
  author: string()
    .required("You have not entered a value")
    .max(100, "Length must not exceed 100 characters"),
  shortDescription: string()
    .nullable()
    .max(100, "Length must not exceed 100 characters"),
});

export const initDocument = {
  title: "",
  description: "",
  author: "",
  shortDescription: "",
  topic: TOPIC_KEY.SocialScience,
};
