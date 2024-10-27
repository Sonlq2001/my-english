import { FC, useContext } from "react";

import IconPlayAudio from "@app/assets/images/icon-svg/icon-play-audio.svg?react";
import IconPlayBack from "@app/assets/images/icon-svg/icon-play-back.svg?react";
import IconPlayTrackPrev from "@app/assets/images/icon-svg/icon-play-track-prev.svg?react";
import IconPlayTrackNext from "@app/assets/images/icon-svg/icon-play-track-next.svg?react";
import IconVolume from "@app/assets/images/icon-svg/icon-volume.svg?react";
import IconPause from "@app/assets/images/icon-svg/icon-pause.svg?react";
import InputRange from "@app/components/InputRange/InputRange";

import {
  AudioPlayWrap,
  AudioInfo,
  AudioControl,
  AudioPlayControl,
  AudioTimeLine,
  ButtonControlPlay,
} from "./AudioPlay.styles";
import { PlayerContext } from "@app/components/PlayerProvider/PlayerProvider";
import { convertSeconds } from "@app/helpers/time";

const AudioPlay: FC = () => {
  const {
    isOpenAudio,
    playVideo,
    seekToVideo,
    controlVideo,
    videoRunningTime,
  } = useContext(PlayerContext);

  if (!isOpenAudio) return;

  const handlePlayVideo = () => {
    if (playVideo) {
      playVideo("https://www.youtube.com/watch?v=zJ_Cp5ZfvlU");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (seekToVideo) {
      seekToVideo(Number(e.target.value));
    }
  };

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

          <ButtonControlPlay onClick={handlePlayVideo}>
            {controlVideo.playing ? (
              <IconPause className="icon-play" />
            ) : (
              <IconPlayAudio className="icon-play" />
            )}
          </ButtonControlPlay>

          <IconPlayBack className="icon-play-back-right" />

          <IconPlayTrackNext />
        </AudioPlayControl>

        <AudioTimeLine>
          <span className="start-time">
            {convertSeconds(controlVideo.loadedSeconds, true)}
          </span>
          <InputRange
            type="range"
            min={1}
            step={1}
            value={controlVideo.loadedSeconds}
            max={controlVideo.duration}
            style={{
              background: `linear-gradient(
              to right,
              #1976d2 ${videoRunningTime}%,
              #999999 ${videoRunningTime}%
            )`,
            }}
            onChange={handleChange}
          />
          <span className="end-time">
            {convertSeconds(controlVideo.duration, true)}
          </span>

          <IconVolume className="icon-volume" />
        </AudioTimeLine>
      </AudioControl>
    </AudioPlayWrap>
  );
};

export default AudioPlay;
