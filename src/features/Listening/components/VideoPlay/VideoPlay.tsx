import { FC, useRef, forwardRef, useImperativeHandle, useMemo } from "react";
import ReactPlayer from "react-player";

import { YOUTUBE_EMBEDDED_LINK } from "@app/constants/app.constants";
import IconPlayAudio from "@app/assets/images/icon-svg/icon-play-audio.svg?react";
import IconPause from "@app/assets/images/icon-svg/icon-pause.svg?react";
import IconVolume from "@app/assets/images/icon-svg/icon-volume.svg?react";
import IconMute from "@app/assets/images/icon-svg/icon-mute.svg?react";
import InputRange from "@app/components/InputRange/InputRange";
import { convertSeconds } from "@app/helpers/time";

import {
  WrapVideoPlay,
  WrapControlVideo,
  ButtonPlay,
  WrapProgressVideo,
  WrapVolume,
} from "./VideoPlay.styles";
import { ProgressVideo, ControlVideo } from "../../types/listening.type";

const MIN_VOLUME = 0;
const MAX_VOLUME = 100;

interface VideoPlayProps {
  videoId: string;
  ref: React.Ref<unknown>;
  controlVideo: ControlVideo;
  setControlVideo: (control: ControlVideo) => void;
}

const VideoPlay: FC<VideoPlayProps> = forwardRef(
  ({ videoId, controlVideo, setControlVideo }, ref) => {
    const videoRef = useRef<ReactPlayer>(null);
    const preVolume = useRef<number>(MIN_VOLUME);

    useImperativeHandle(ref, () => ({
      setSeekTo: (value: number) => {
        if (!videoRef.current) return;
        videoRef.current.seekTo(Number(value));
      },
    }));

    const handleDurationVideo = (e: number) => {
      setControlVideo({ ...controlVideo, duration: e });
    };

    const handleProgressVideo = (e: ProgressVideo) => {
      setControlVideo({ ...controlVideo, loadedSeconds: e.playedSeconds });
    };

    const handleEndVideo = () => {
      setControlVideo({ ...controlVideo, playing: false });
    };

    const handleSeekTo = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!videoRef.current) return;
      videoRef.current.seekTo(Number(e.target.value));
    };

    const progressVideo = useMemo(() => {
      return (controlVideo.loadedSeconds / controlVideo.duration) * 100;
    }, [controlVideo.duration, controlVideo.loadedSeconds]);

    const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
      setControlVideo({ ...controlVideo, volume: Number(e.target.value) });
      preVolume.current = Number(e.target.value);
    };

    const handleMuteVideo = () => {
      setControlVideo({
        ...controlVideo,
        volume: controlVideo.volume
          ? MIN_VOLUME
          : preVolume.current || MAX_VOLUME,
      });
    };

    return (
      <>
        <WrapVideoPlay>
          <ReactPlayer
            ref={videoRef}
            url={YOUTUBE_EMBEDDED_LINK.replace(":youtube_id", videoId)}
            width="auto"
            height="auto"
            onDuration={handleDurationVideo}
            onProgress={handleProgressVideo}
            onEnded={handleEndVideo}
            playing={controlVideo.playing}
            volume={controlVideo.volume}
          />
          {!controlVideo.playing && <div className="thumbnail" />}
        </WrapVideoPlay>

        <WrapControlVideo>
          <ButtonPlay
            onClick={() => {
              setControlVideo({
                ...controlVideo,
                playing: !controlVideo.playing,
              });
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
                #1976d2 ${progressVideo}%,
                #999999 ${progressVideo}%
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
        </WrapControlVideo>
      </>
    );
  }
);

export default VideoPlay;
