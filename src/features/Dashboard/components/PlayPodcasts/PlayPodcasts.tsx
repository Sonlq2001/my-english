import { FC } from "react";

import SectionTitle from "@app/components/SectionTitle/SectionTitle";
import IconPlayAudio from "@app/assets/images/icon-svg/icon-play-audio.svg?react";
import IconPlayBack from "@app/assets/images/icon-svg/icon-play-back.svg?react";

import {
  WrapPlayPodcasts,
  BoxPlayer,
  WrapControlPlayer,
} from "./PlayPodcasts.styles";

const PlayPodcasts: FC = () => {
  return (
    <WrapPlayPodcasts>
      <SectionTitle title="Now Playing" />

      <BoxPlayer>
        <div className="inner-player">
          <img
            src="https://cdn.pixabay.com/photo/2021/11/25/19/50/tape-6824489_640.jpg"
            alt=""
          />
          <h4>What is of Jakzel Fashion Week ?</h4>
          <p>Sown</p>
        </div>

        <WrapControlPlayer>
          <IconPlayBack />

          <IconPlayAudio className="icon-play" />

          <IconPlayBack className="icon-play-back-right" />
        </WrapControlPlayer>
      </BoxPlayer>
    </WrapPlayPodcasts>
  );
};

export default PlayPodcasts;
