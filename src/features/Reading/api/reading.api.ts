import api from "@app/api/api";
import { ReadingEndpointsEnum } from "@app/features/reading/constants/reading.endpoints";
import { ReqDocument } from "@app/features/reading/types/reading.type";

const createDocumentApi = (payload: ReqDocument) => {
  return api.post(ReadingEndpointsEnum.CREATE_DOCUMENT, payload);
};

export const readingApi = { createDocumentApi };
