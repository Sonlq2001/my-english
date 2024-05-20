import { object, string, array } from "yup";

import { TypeInitVocabulary } from "@app/features/vocabulary/types/vocabulary.type";

import { ruleFile } from "@app/helpers/text-editor.helper";

export const vocabularySchema = object({
  name: string().required("You have not entered a value"),
  meanings: array(
    object({
      meaning: string().required("You have not entered a value"),
    })
  ),
  examples: array(
    object({
      example: string().required("You have not entered a value"),
    })
  ),

  reminiscentPhoto: ruleFile("reminiscentPhoto").nullable(),
});

export const initVocabulary: TypeInitVocabulary = {
  name: "",
  meanings: [{ meaning: "" }],
  examples: [{ example: "" }],
  topic: ["663c42bbbaf18dd34a6c9cb0"],
  reminiscentPhoto: null,
  partOfSpeech: "663c37539ce13917b2e93813",
};
