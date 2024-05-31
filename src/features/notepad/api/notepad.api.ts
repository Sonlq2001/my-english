import api from "@app/api/api";

import { NotepadEndpointsEnum } from "@app/features/notepad/constants/notepad.endpoints";
import { ReqCreateNotepad } from "@app/features/notepad/types/notepad.type";

const createNotepadApi = (payload: ReqCreateNotepad) => {
  return api.post(NotepadEndpointsEnum.CREATE_NOTEPAD, payload);
};

export const notepadApi = {
  createNotepadApi,
};
