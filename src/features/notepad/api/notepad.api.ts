import api from "@app/api/api";

import { NotepadEndpointsEnum } from "@app/features/notepad/constants/notepad.endpoints";
import { ReqCreateNotepad } from "@app/features/notepad/types/notepad.type";

const createNotepadApi = (payload: ReqCreateNotepad) => {
  return api.post(NotepadEndpointsEnum.CREATE_NOTEPAD, payload);
};

const getListNotepadsApi = () => {
  return api.get(NotepadEndpointsEnum.GET_LIST_NOTEPADS);
};

const getNotepadApi = (notepadId: string) => {
  return api.get(
    NotepadEndpointsEnum.GET_NOTEPAD.replace(":notepad_id", notepadId)
  );
};

const deleteNotepadApi = (notepadId: string) => {
  return api.delete(
    NotepadEndpointsEnum.DELETE_NOTEPAD.replace(":notepad_id", notepadId)
  );
};

export const notepadApi = {
  createNotepadApi,
  getListNotepadsApi,
  getNotepadApi,
  deleteNotepadApi,
};
