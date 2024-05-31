import { object, string } from "yup";

export const notepadSchema = object({
  title: string().required("You have not entered a value"),
  description: string().required("You have not entered a value"),
});
