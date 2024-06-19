export type ResDocument = {
  id: string;
  title: string;
  author?: string;
  topic: string;
  shortDescription: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type InitialStateDocument = {
  documentDetail: null | ResDocument;
  documentData: {
    list: null | ResDocument[];
  };
};

export type ReqDocument = Omit<ResDocument, "id" | "createdAt" | "updatedAt">;
