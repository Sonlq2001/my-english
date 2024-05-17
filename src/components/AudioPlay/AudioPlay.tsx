import { FC } from "react";

import IconPlayAudio from "@app/assets/images/icon-svg/icon-play-audio.svg?react";
import IconPlayBack from "@app/assets/images/icon-svg/icon-play-back.svg?react";
import IconPlayTrackPrev from "@app/assets/images/icon-svg/icon-play-track-prev.svg?react";
import IconPlayTrackNext from "@app/assets/images/icon-svg/icon-play-track-next.svg?react";
import IconVolume from "@app/assets/images/icon-svg/icon-volume.svg?react";
import InputRange from "@app/components/InputRange/InputRange";

import {
  AudioPlayWrap,
  AudioInfo,
  AudioControl,
  AudioPlayControl,
  AudioTimeLine,
} from "./AudioPlay.styles";

const AudioPlay: FC = () => {
  return (
    <AudioPlayWrap>
      <AudioInfo>
        <img
          src="https://cdn.pixabay.com/photo/2023/04/13/17/49/dare-7923106_1280.jpg"
          alt=""
        />
        <p>le quang son</p>
      </AudioInfo>
      <AudioControl>
        <AudioPlayControl>
          <IconPlayTrackPrev />

          <IconPlayBack />

          <IconPlayAudio className="icon-play" />

          <IconPlayBack className="icon-play-back-right" />

          <IconPlayTrackNext />
        </AudioPlayControl>

        <AudioTimeLine>
          <span>04:50</span>
          <InputRange type="range" min={0} max={100} defaultValue={0} />
          <span>06:54</span>

          <IconVolume className="icon-volume" />
        </AudioTimeLine>
      </AudioControl>
    </AudioPlayWrap>
  );
};

export default AudioPlay;
