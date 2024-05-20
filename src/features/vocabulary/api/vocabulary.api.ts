import api from "@app/api/api";

import { VocabularyEndpointsEnum } from "../constants/vocabulary.endpoints";
import { ReqVocabulary } from "../types/vocabulary.type";

const postCreateVocabularyApi = (payload: ReqVocabulary) => {
  return api.post(VocabularyEndpointsEnum.POST_VOCABULARY, payload);
};

export const vocabularyApi = { postCreateVocabularyApi };
