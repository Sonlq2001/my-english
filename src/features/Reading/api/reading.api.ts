import api from "@app/api/api";
import { ReadingEndpointsEnum } from "@app/features/reading/constants/reading.endpoints";
import {
  ReqDocument,
  ReqUpdateDoc,
} from "@app/features/reading/types/reading.type";

const createDocumentApi = (payload: ReqDocument) => {
  return api.post(ReadingEndpointsEnum.CREATE_DOCUMENT, payload);
};

const getDocumentListApi = () => {
  return api.get(ReadingEndpointsEnum.GET_LIST_DOCUMENTS);
};

const getDocumentApi = (documentId: string) => {
  return api.get(
    ReadingEndpointsEnum.GET_DOCUMENT.replace(":document_id", documentId)
  );
};

const deleteDocumentApi = (documentId: string) => {
  return api.delete(
    ReadingEndpointsEnum.DELETE_DOCUMENT.replace(":document_id", documentId)
  );
};

const updateDocumentApi = ({ documentId, ...rest }: ReqUpdateDoc) => {
  return api.patch(
    ReadingEndpointsEnum.EDIT_DOCUMENT.replace(":document_id", documentId),
    rest
  );
};

export const readingApi = {
  createDocumentApi,
  getDocumentApi,
  getDocumentListApi,
  deleteDocumentApi,
  updateDocumentApi,
};
