import { FC, useContext } from "react";

import SectionTitle from "@app/components/SectionTitle/SectionTitle";
import IconPlayAudio from "@app/assets/images/icon-svg/icon-play-audio.svg?react";
import IconPlayBack from "@app/assets/images/icon-svg/icon-play-back.svg?react";

import {
  WrapPlayPodcasts,
  BoxPlayer,
  WrapControlPlayer,
} from "./PlayPodcasts.styles";
import { PlayerContext } from "@app/components/PlayerProvider/PlayerProvider";

const PlayPodcasts: FC = () => {
  const { playVideo } = useContext(PlayerContext);

  const handlePlayVideo = () => {
    if (playVideo) {
      playVideo("https://www.youtube.com/watch?v=zJ_Cp5ZfvlU");
    }
  };
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

          <IconPlayAudio className="icon-play" onClick={handlePlayVideo} />

          <IconPlayBack className="icon-play-back-right" />
        </WrapControlPlayer>
      </BoxPlayer>
    </WrapPlayPodcasts>
  );
};

export default PlayPodcasts;
