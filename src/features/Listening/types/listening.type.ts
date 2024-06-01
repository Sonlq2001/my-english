export type ResPodcast = {
  id: string;
  title: string;
  author: string;
  description: string;
  topic: string;
  videoId: string;
  transcripts: {
    text: string;
    duration: number;
    lang: string;
    offset: number;
  }[];
  createdAt: string;
  updatedAt: string;
  thumbnail: null | { imageUrl: string; publicId: string; id: string };
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

export type ResListPodcast = Omit<ResPodcast, "transcripts" | "description">[];

export type InitialStateListening = {
  podcastData: {
    list: null | ResListPodcast;
  };
  podcastDetail: ResPodcast | null;
};
