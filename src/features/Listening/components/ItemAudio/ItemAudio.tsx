import { FC } from "react";
import { Link } from "react-router-dom";

import IconPlaySingle from "@app/assets/images/icon-svg/icon-play-single.svg?react";
import { IndexList, ThumbnailVideo, WrapItemAudio } from "./ItemAudio.styles";
import { TypePodCast } from "@app/types/app.types";
import { ListeningPathsEnum } from "../../listening";

interface ItemAudioProps {
  data: {
    title: string;
    author: string;
    id: string;
    index?: number;
    type: TypePodCast;
    image?: string;
  };
}

const ItemAudio: FC<ItemAudioProps> = ({ data }) => {
  return (
    <WrapItemAudio>
      {data.type === "AUDIO" && (
        <IndexList>
          <span>{data.index}</span>
          <IconPlaySingle />
        </IndexList>
      )}
      {data.type === "VIDEO" && (
        <ThumbnailVideo>
          <IconPlaySingle />
          <img src={data.image} alt="podcast-video" />
        </ThumbnailVideo>
      )}
      <Link
        to={(data.type === "VIDEO"
          ? ListeningPathsEnum.PODCAST_VIDEO_DETAIL
          : ListeningPathsEnum.PODCAST_AUDIO_DETAIL
        ).replace(":podcast_id", data.id)}
        className="link-audio"
      >
        <h3>{data.title}</h3>
        <p>{data.author}</p>
      </Link>
    </WrapItemAudio>
  );
};

export default ItemAudio;
