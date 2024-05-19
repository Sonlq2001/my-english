import { object, string, mixed } from "yup";

import { urlRegex } from "@app/constants/regex.constants";
import { TABS_UPLOAD } from "@app/constants/icon-editor-list.constants";
import {
  RULES_ACCEPT_IMAGE,
  SIZE_UPLOAD_IMAGE,
} from "@app/constants/app.constants";

export const schemaInsertLink = object({
  link: string().matches(urlRegex, "Invalid URL format").nonNullable(),
});

export const ruleFile = (name: string) => {
  return mixed()
    .test(name, "File format not supported.", (file) => {
      if (file instanceof File) {
        return RULES_ACCEPT_IMAGE.includes(file.type);
      }
      return true;
    })
    .test(name, "Image file is too large, 3mb max.", (file) => {
      if (file instanceof File) {
        return file.size < SIZE_UPLOAD_IMAGE; // max size 3mb
      }
      return true;
    });
};

export const schemaInsertLinkImage = object({
  link: ruleFile("link").nullable(),
  alt: string()
    .when(["link", "tab"], {
      is: (linkImage: string, tab: number) =>
        tab === TABS_UPLOAD.INSERT_LINK && Boolean(linkImage),
      then: () => string().required("Please enter image alt text!"),
      otherwise: () => string().nullable(),
    })
    .nonNullable(),
});
