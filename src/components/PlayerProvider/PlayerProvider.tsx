import { createContext, ReactNode, useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player";

import AudioPlay from "@app/components/AudioPlay/AudioPlay";
import {
  ControlVideo,
  ProgressVideo,
} from "@app/features/listening/types/listening.type";
import { YOUTUBE_EMBEDDED_LINK } from "@app/constants/app.constants";

const initControlVideo = {
  playing: false,
  duration: 0,
  loadedSeconds: 0,
  volume: 100,
};

export const PlayerContext = createContext<{
  isOpenAudio: boolean;
  controlVideo: ControlVideo;
  videoRunningTime: number;
  playVideo?: (videoId: string) => void;
  seekToVideo?: (value: number) => void;
  durationVideo?: (value: number) => void;
  endVideo?: (value: number) => void;
  progressVideo?: (value: ProgressVideo) => void;
}>({
  isOpenAudio: false,
  videoRunningTime: 0,
  controlVideo: initControlVideo,
});

const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const videoRef = useRef<ReactPlayer>(null);
  const [videoId, setVideoId] = useState<string>("");
  const [isOpenAudio, setIsOpenAudio] = useState<boolean>(false);
  const [controlVideo, setControlVideo] =
    useState<ControlVideo>(initControlVideo);

  const playVideo = (id: string) => {
    setVideoId(id);
    setIsOpenAudio(true);
    setControlVideo({ ...controlVideo, playing: !controlVideo.playing });
  };

  const durationVideo = (e: number) => {
    setControlVideo({ ...controlVideo, duration: e });
  };

  const progressVideo = (e: ProgressVideo) => {
    setControlVideo({ ...controlVideo, loadedSeconds: e.playedSeconds });
  };

  const endVideo = () => {
    setControlVideo({ ...controlVideo, playing: false });
  };

  const seekToVideo = (value: number) => {
    if (!videoRef.current) return;
    videoRef.current.seekTo(value);
  };

  const videoRunningTime = useMemo(() => {
    return (controlVideo.loadedSeconds / controlVideo.duration) * 100;
  }, [controlVideo.duration, controlVideo.loadedSeconds]);

  const provider = {
    playVideo,
    controlVideo,
    isOpenAudio,
    durationVideo,
    progressVideo,
    endVideo,
    seekToVideo,
    videoRunningTime,
  };

  return (
    <PlayerContext.Provider value={provider}>
      <ReactPlayer
        ref={videoRef}
        url={YOUTUBE_EMBEDDED_LINK.replace(":youtube_id", videoId)}
        onDuration={durationVideo}
        onProgress={progressVideo}
        onEnded={endVideo}
        style={{ display: "none" }}
        playing={controlVideo.playing}
        volume={controlVideo.volume}
      />
      {children}
      <AudioPlay />
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
