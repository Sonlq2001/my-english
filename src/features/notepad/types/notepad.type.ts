export type ReqCreateNotepad = {
  title: string;
  description: string;
};

export type ResNotepad = ReqCreateNotepad & {
  id: string;
  user: string;
};
