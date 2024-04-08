import { object, string, array } from "yup";

export const vocabularySchema = object({
  vocabulary: string().required("You have not entered a value"),
  meanings: array(
    object({
      meaning: string().required("You have not entered a value"),
    })
  )
    .min(1, "it qua")
    .max(5, "nhieu qua"),

  examples: array(
    object({
      example: string().required("You have not entered a value"),
    })
  )
    .min(1, "it qua")
    .max(5, "nhieu qua"),
});
