export type ResListTopics = {
  name: string;
  id: string;
}[];

export type TypeInitVocabulary = {
  name: string;
  meanings: { meaning: string }[];
  examples: { example: string }[];
  topic: string[];
  file: File | null;
  partOfSpeech: string;
};

export type ReqVocabulary = Omit<TypeInitVocabulary, "file"> & {
  reminiscentPhoto: { publicId: string; imageUrl: string } | null;
};

export type ResListPartsOfSpeech = {
  en: string;
  vn: string;
  id: string;
}[];
