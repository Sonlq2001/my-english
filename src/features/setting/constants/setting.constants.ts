export enum TOPIC_KEY {
  Life = "Life",
  Study = "Study",
  Movie = "Movie",
  Vlog = "Vlog",
  Music = "Music",
  Podcast = "Podcast",
  Social = "Social",
}

export const LIST_TOPICS_PODCAST = [
  {
    label: TOPIC_KEY.Life,
    value: TOPIC_KEY.Life,
    thumbnail:
      "https://cdn.pixabay.com/photo/2020/01/30/21/24/shop-4806610_640.jpg",
  },
  {
    label: TOPIC_KEY.Study,
    value: TOPIC_KEY.Study,
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_640.jpg",
  },
  {
    label: TOPIC_KEY.Movie,
    value: TOPIC_KEY.Movie,
    thumbnail:
      "https://cdn.pixabay.com/photo/2017/04/05/15/36/film-2205325_640.jpg",
  },
  {
    label: TOPIC_KEY.Vlog,
    value: TOPIC_KEY.Vlog,
    thumbnail:
      "https://cdn.pixabay.com/photo/2023/03/09/06/46/camera-7839355_640.jpg",
  },
  {
    label: TOPIC_KEY.Music,
    value: TOPIC_KEY.Music,
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
  },
  {
    label: TOPIC_KEY.Podcast,
    value: TOPIC_KEY.Podcast,
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/03/18/06/09/ai-generated-8640296_640.jpg",
  },
  {
    label: TOPIC_KEY.Social,
    value: TOPIC_KEY.Social,
    thumbnail:
      "https://cdn.pixabay.com/photo/2020/11/24/10/37/tokyo-5772125_640.jpg",
  },
];

export const HEADER_CELLS = ["STT", "Title", "Author", "Topic", "Action"];

export const OPTIONS_TYPE_PODCAST = [
  { label: "Video", value: "VIDEO" },
  { label: "Audio", value: "AUDIO" },
];
