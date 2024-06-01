export type InitCreatePodcast = {
  title: string;
  author: string;
  topic: string;
  videoId: string;
  file: File | null;
  description: string;
};

export type ReqCreatePodcast = Omit<InitCreatePodcast, "file"> & {
  thumbnail: { publicId: string; imageUrl: string } | null;
};

export type ResPodcast = ReqCreatePodcast & {
  createdAt: string;
  id: string;
};
