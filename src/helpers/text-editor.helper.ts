import { object, string } from "yup";

import { urlRegex } from "@app/constants/regex.constants";

export const schemaInsertLink = object({
  link: string().matches(urlRegex, "Invalid URL format").nonNullable(),
});
