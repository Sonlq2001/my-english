import { FC } from "react";
import { Link } from "react-router-dom";

import ImagePodcast from "@app/assets/images/image-podcast.png";
import IconPlayAudio from "@app/assets/images/icon-svg/icon-play-audio.svg?react";
import { ListeningPathsEnum } from "@app/features/listening/listening";

import {
  WrapContentPodcast,
  ContentPodcast,
  ContentThumbnail,
} from "./ItemPodcast.styles";

interface ItemPodcastProps {
  title: string;
  topic: string;
  thumbnail?: string;
  id: string;
}

const ItemPodcast: FC<ItemPodcastProps> = ({ title, topic, id, thumbnail }) => {
  return (
    <Link to={ListeningPathsEnum.PODCAST_DETAIL.replace(":podcast_id", id)}>
      <WrapContentPodcast>
        <ContentPodcast>
          <h3>{title}</h3>
          <p>{topic}</p>
          <ContentThumbnail>
            <IconPlayAudio />
            <img
              src={
                thumbnail ||
                "https://cdn.pixabay.com/photo/2021/09/22/11/34/horse-6646593_640.jpg"
              }
              alt="img-thumbnail"
              className="image-thumbnail"
            />
          </ContentThumbnail>
        </ContentPodcast>
        <img src={ImagePodcast} alt="img-podcast" />
      </WrapContentPodcast>
    </Link>
  );
};

export default ItemPodcast;
