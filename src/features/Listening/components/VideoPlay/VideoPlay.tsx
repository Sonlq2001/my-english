import { FC, forwardRef, useImperativeHandle, useRef } from "react";

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
import ReactPlayer from "react-player";
import {
  ControlVideo,
  ProgressVideo,
} from "@app/features/listening/types/listening.type";

// const MIN_VOLUME = 0;
// const MAX_VOLUME = 100;

interface VideoPlayProps {
  videoId: string;
  ref: React.Ref<{
    setSeekTo: (seekTo: number) => void;
  }>;
  setControlVideo: (control: ControlVideo) => void;
  controlVideo: ControlVideo;
}

const VideoPlay: FC<VideoPlayProps> = forwardRef(
  ({ videoId, controlVideo, setControlVideo }, ref) => {
    const videoRef = useRef<ReactPlayer>(null);
    // const preVolume = useRef<number>(MIN_VOLUME);

    useImperativeHandle(ref, () => ({
      setSeekTo: (value: number) => {
        if (!videoRef.current) return;
        setControlVideo({
          ...controlVideo,
          loadedSeconds: value,
          playing: true,
        });
        videoRef.current.seekTo(Number(value));
      },
    }));

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
    const handleDurationVideo = (duration: number) => {
      setControlVideo({ ...controlVideo, duration: duration });
    };
    const handleProgressVideo = (e: ProgressVideo) => {
      setControlVideo({ ...controlVideo, loadedSeconds: e.playedSeconds });
    };

    return (
      <>
        <WrapVideoPlay>
          <ReactPlayerVideo
            ref={videoRef}
            videoId={videoId}
            onDuration={handleDurationVideo}
            onProgress={handleProgressVideo}
            playing={controlVideo.playing}
            width="auto"
            height="auto"
            controls
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
  }
);

export default VideoPlay;
