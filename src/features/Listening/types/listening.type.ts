export type ResPodcast = {
  id: string;
  title: string;
  author: string;
  description: string;
  topic: {
    id: string;
    name: string;
  };
  videoId: string;
  transcripts: {
    text: string;
    duration: number;
    lang: string;
    offset: number;
  }[];
  createdAt: string;
  updatedAt: string;
};
