export type ResListTopics = {
  name: string;
  id: string;
}[];

export type TypeInitVocabulary = {
  name: string;
  meanings: { meaning: string }[];
  examples: { example: string }[];
  topic: string[];
  reminiscentPhoto: File | null;
  partOfSpeech: string;
};

export type ResListPartsOfSpeech = {
  en: string;
  vn: string;
  id: string;
}[];
