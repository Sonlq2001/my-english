export enum TOPIC_KEY {
  Life = "Life",
  Study = "Study",
  Business = "Business",
  Vlog = "Vlog",
  Music = "Music",
}

export const LIST_TOPICS_PODCAST = [
  {
    label: TOPIC_KEY.Life,
    value: TOPIC_KEY.Life,
  },
  {
    label: TOPIC_KEY.Study,
    value: TOPIC_KEY.Study,
  },
  {
    label: TOPIC_KEY.Business,
    value: TOPIC_KEY.Business,
  },
  {
    label: TOPIC_KEY.Vlog,
    value: TOPIC_KEY.Vlog,
  },
  {
    label: TOPIC_KEY.Music,
    value: TOPIC_KEY.Music,
  },
];

export const HEADER_CELLS = ["STT", "Title", "Author", "Topic", "Action"];
