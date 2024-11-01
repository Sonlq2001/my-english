import { FC, forwardRef, useContext, useImperativeHandle, useRef } from "react";

// import IconPlayAudio from "@app/assets/images/icon-svg/icon-play-audio.svg?react";
// import IconPause from "@app/assets/images/icon-svg/icon-pause.svg?react";
// import IconVolume from "@app/assets/images/icon-svg/icon-volume.svg?react";
// import IconMute from "@app/assets/images/icon-svg/icon-mute.svg?react";
// import InputRange from "@app/components/InputRange/InputRange";
// import { convertSeconds } from "@app/helpers/time";

import {
  WrapVideoPlay,
  // WrapControlVideo,
  // ButtonPlay,
  // WrapProgressVideo,
  // WrapVolume,
} from "./VideoPlay.styles";
import ReactPlayerVideo from "@app/components/ReactPlayerVideo/ReactPlayerVideo";
import { PlayerContext } from "@app/components/PlayerProvider/PlayerProvider";
import ReactPlayer from "react-player";

// const MIN_VOLUME = 0;
// const MAX_VOLUME = 100;

interface VideoPlayProps {
  videoId: string;
  ref: React.Ref<{
    setSeekTo: (seekTo: number) => void;
  }>;
}

const VideoPlay: FC<VideoPlayProps> = forwardRef(({ videoId }, ref) => {
  const videoRef = useRef<ReactPlayer>(null);
  // const preVolume = useRef<number>(MIN_VOLUME);

  const {
    playVideo,
    controlVideo,
    // videoRunningTime,
    pauseVideo,
    // videoId: videoIdContext,
    durationVideo,
    endVideo,
    progressVideo,
    playPause,
  } = useContext(PlayerContext);

  useImperativeHandle(ref, () => ({
    setSeekTo: (value: number) => {
      if (!videoRef.current || value === controlVideo.loadedSeconds) return;

      videoRef.current.seekTo(Number(value));
    },
  }));

  const handlePlayVideo = () => {
    if (playVideo) {
      playVideo(videoId);
    }
  };

  // const handleSeekTo = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!videoRef.current) return;
  //   const valueSeekTo = Number(e.target.value);
  //   videoRef.current.seekTo(valueSeekTo);

  //   if (valueSeekTo === controlVideo.duration && endVideo) {
  //     return;
  //   }
  //   if (autoPlayVideo) {
  //     autoPlayVideo();
  //   }
  // };

  // const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setControlVideo({ ...controlVideo, volume: Number(e.target.value) });
  //   preVolume.current = Number(e.target.value);
  // };

  // const handleMuteVideo = () => {
  //   setControlVideo({
  //     ...controlVideo,
  //     volume: controlVideo.volume
  //       ? MIN_VOLUME
  //       : preVolume.current || MAX_VOLUME,
  //   });
  // };

  return (
    <>
      <WrapVideoPlay>
        <ReactPlayerVideo
          ref={videoRef}
          videoId={videoId}
          onDuration={durationVideo}
          onProgress={progressVideo}
          onEnded={endVideo}
          playing={controlVideo.playing}
          volume={controlVideo.volume}
          width="auto"
          height="auto"
          controls
          onReady={playPause}
          onPlay={handlePlayVideo}
          onPause={pauseVideo}
        />
        {!controlVideo.playing && <div className="thumbnail" />}
      </WrapVideoPlay>

      {/* <WrapControlVideo>
        <ButtonPlay
          onClick={() => {
            if (!controlVideo.playing) {
              playVideo && playVideo(videoIdContext || videoId);
            } else {
              pauseVideo && pauseVideo();
            }
          }}
        >
          {controlVideo.playing ? <IconPause /> : <IconPlayAudio />}
        </ButtonPlay>

        <WrapProgressVideo>
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
            onChange={handleSeekTo}
          />
          <div className="time-progress">
            <span className="start">
              {convertSeconds(controlVideo.loadedSeconds, true)}
            </span>
            /
            <span className="end">
              {convertSeconds(controlVideo.duration, true)}
            </span>
          </div>
        </WrapProgressVideo>

        <WrapVolume>
            <div className="btn-volume" onClick={handleMuteVideo}>
              {controlVideo.volume === MIN_VOLUME ? (
                <IconMute />
              ) : (
                <IconVolume />
              )}
            </div>
            <InputRange
              className="range-volume"
              min={MIN_VOLUME}
              step={1}
              max={MAX_VOLUME}
              value={controlVideo.volume}
              onChange={handleVolume}
            />
          </WrapVolume>
      </WrapControlVideo> */}
    </>
  );
});

export default VideoPlay;
