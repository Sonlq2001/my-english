import { FC, useRef, forwardRef, useImperativeHandle, useMemo } from "react";
import ReactPlayer from "react-player";

import { YOUTUBE_EMBEDDED_LINK } from "@app/constants/app.constants";
import IconPlayAudio from "@app/assets/images/icon-svg/icon-play-audio.svg?react";
import IconPause from "@app/assets/images/icon-svg/icon-pause.svg?react";
import InputRange from "@app/components/InputRange/InputRange";

import {
  WrapVideoPlay,
  WrapControlVideo,
  ButtonPlay,
} from "./VideoPlay.styles";
import { ProgressVideo, ControlVideo } from "../../types/listening.type";

interface VideoPlayProps {
  videoId: string;
  ref: React.Ref<unknown>;
  controlVideo: ControlVideo;
  setControlVideo: (control: ControlVideo) => void;
}

const VideoPlay: FC<VideoPlayProps> = forwardRef(
  ({ videoId, controlVideo, setControlVideo }, ref) => {
    const videoRef = useRef<ReactPlayer>(null);

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
        </WrapControlVideo>
      </>
    );
  }
);

export default VideoPlay;
