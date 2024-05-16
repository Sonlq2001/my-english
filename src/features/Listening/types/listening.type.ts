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

export type ProgressVideo = {
  loaded: number;
  loadedSeconds: number;
  played: number;
  playedSeconds: number;
};

export type ControlVideo = {
  playing: boolean;
  duration: number;
  loadedSeconds: number;
  volume: number;
};
