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

export type InitialStateDocument = object; // TODO: init

export type ReqDocument = Omit<ResDocument, "id" | "createdAt" | "updatedAt">;
