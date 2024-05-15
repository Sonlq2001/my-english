import { FC, useRef, useState, forwardRef, useImperativeHandle } from "react";
import ReactPlayer from "react-player";

import { YOUTUBE_EMBEDDED_LINK } from "@app/constants/app.constants";

import { WrapVideoPlay } from "./VideoPlay.styles";
import { ProgressVideo, ControlVideo } from "../../types/listening.type";

interface VideoPlayProps {
  videoId: string;
  ref: React.Ref<unknown>;
}

const VideoPlay: FC<VideoPlayProps> = forwardRef(({ videoId }, ref) => {
  const videoRef = useRef<ReactPlayer>(null);

  const [controlVideo, setControlVideo] = useState<ControlVideo>({
    playing: false,
    duration: 0,
    loadedSeconds: 0,
    volume: 100,
  });

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
          className="play-video"
        />
      </WrapVideoPlay>

      <button
        onClick={() => {
          setControlVideo({
            ...controlVideo,
            playing: !controlVideo.playing,
          });
        }}
      >
        {controlVideo.playing ? "pause" : "play"}
      </button>
      <input
        type="range"
        min={1}
        step={1}
        value={controlVideo.loadedSeconds}
        max={controlVideo.duration}
        onChange={handleSeekTo}
      />
    </>
  );
});

export default VideoPlay;
