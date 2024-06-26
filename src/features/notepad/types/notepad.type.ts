export type ReqCreateNotepad = {
  title: string;
  description: string;
};

export type ResNotepad = ReqCreateNotepad & {
  id: string;
  user: string;
};

export type ResNotepadItem = ReqCreateNotepad & {
  id: string;
  createdAt: string;
};

export type InitialStateNotepad = {
  notepadData: { list: null | ResNotepadItem[] };
  notepadDetail: null | ResNotepadItem;
};

export type ReqUpdateNotepad = ReqCreateNotepad & { notepadId: string };
