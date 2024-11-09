export type ResListTopics = {
  name: string;
  id: string;
  theme: string;
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

export type ResVocabulary = Omit<
  TypeInitVocabulary,
  "file" | "partOfSpeech" | "meanings" | "topic" | "examples"
> & {
  reminiscentPhoto: { publicId: string; imageUrl: string } | null;
  id: string;
  partOfSpeech: { en: string; vn: string; id: string };
  topic: { id: string; name: string }[];
  updatedAt: string;
  createdAt: string;
  meanings: { meaning: string; id: string }[];
  examples: { example: string; id: string }[];
};

export type ResListPartsOfSpeech = {
  en: string;
  vn: string;
  id: string;
}[];

export type ResMarkVocabularyList = {
  id: string;
  markVocabulary: ItemMarkVocabulary[];
};

export type ItemMarkVocabulary = {
  id: string;
  name: string;
  meanings: string;
};
