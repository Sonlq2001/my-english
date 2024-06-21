import { object, string } from "yup";

export const schemaCreateDocument = object({
  title: string()
    .required("You have not entered a value")
    .max(100, "Length must not exceed 100 characters"),
  description: string().required("You have not entered a value"),
  author: string().max(100, "Length must not exceed 100 characters").nullable(),
  shortDescription: string()
    .nullable()
    .max(100, "Length must not exceed 100 characters"),
});
