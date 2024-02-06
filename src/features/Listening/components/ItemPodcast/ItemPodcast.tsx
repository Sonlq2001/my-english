import { FC } from "react";

import ImagePodcast from "@app/assets/images/image-podcast.png";
import IconPlayAudio from "@app/assets/images/icon-svg/icon-play-audio.svg?react";

import {
  WrapContentPodcast,
  ContentPodcast,
  ContentThumbnail,
} from "./ItemPodcast.styles";

const ItemPodcast: FC = () => {
  return (
    <WrapContentPodcast>
      <ContentPodcast>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicin</h3>
        <p>Video</p>
        <ContentThumbnail>
          <IconPlayAudio />
          <img
            src="https://cdn.pixabay.com/photo/2023/08/18/16/19/bridge-8198882_640.jpg"
            alt=""
            className="image-thumbnail"
          />
        </ContentThumbnail>
      </ContentPodcast>
      <img src={ImagePodcast} alt="img-podcast" />
    </WrapContentPodcast>
  );
};

export default ItemPodcast;
