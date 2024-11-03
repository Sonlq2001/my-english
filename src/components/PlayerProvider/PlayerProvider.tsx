import { createContext, ReactNode, useMemo, useRef, useState } from "react";
import ReactPlayer from "react-player";

import AudioPlay from "@app/components/AudioPlay/AudioPlay";
import {
  ControlVideo,
  ProgressVideo,
} from "@app/features/listening/types/listening.type";
import ReactPlayerVideo from "@app/components/ReactPlayerVideo/ReactPlayerVideo";

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
  playVideo?: (id: string) => void;
  pauseVideo: () => void;
  durationVideo?: (value: number) => void;
  endVideo: () => void;
  progressVideo?: (value: ProgressVideo) => void;
  videoId: string;
  toggleNavbarAudioPlay?: (open: boolean) => void;
  autoPlayVideo: () => void;
  playPause: () => void;
}>({
  isOpenAudio: false,
  videoRunningTime: 0,
  controlVideo: initControlVideo,
  videoId: "",
  playPause: () => {},
  pauseVideo: () => {},
  endVideo: () => {},
  autoPlayVideo: () => {},
});

const PlayerProvider = ({ children }: { children: ReactNode }) => {
  const videoRef = useRef<ReactPlayer>(null);
  const [videoId, setVideoId] = useState<string>("");
  const [isOpenAudio, setIsOpenAudio] = useState<boolean>(false);
  const [controlVideo, setControlVideo] =
    useState<ControlVideo>(initControlVideo);

  const playVideo = (id: string) => {
    setVideoId(id);
    autoPlayVideo();
  };

  const playPause = () => {
    setControlVideo({ ...controlVideo, playing: !controlVideo.playing });
  };

  const pauseVideo = () => {
    setControlVideo({ ...controlVideo, playing: false });
  };

  const autoPlayVideo = () => {
    if (!controlVideo.playing) {
      setControlVideo({ ...controlVideo, playing: true });
    }
  };

  const toggleNavbarAudioPlay = (open: boolean) => {
    setIsOpenAudio(Boolean(open));
  };

  const durationVideo = (e: number) => {
    setControlVideo({ ...controlVideo, duration: e });
  };

  const progressVideo = (e: ProgressVideo) => {
    if (Math.round(e.loadedSeconds) === controlVideo.duration) {
      return;
    }
    setControlVideo({ ...controlVideo, loadedSeconds: e.playedSeconds });
  };

  const endVideo = () => {
    setControlVideo({
      ...controlVideo,
      playing: false,
      loadedSeconds: controlVideo.duration,
    });
  };

  const videoRunningTime = useMemo(() => {
    return (controlVideo.loadedSeconds / controlVideo.duration) * 100 || 0;
  }, [controlVideo.duration, controlVideo.loadedSeconds]);

  // function is not use in context
  const seekToVideo = (value: number) => {
    if (!videoRef.current) return;
    videoRef.current.seekTo(value);
    setControlVideo({ ...controlVideo, playing: true, loadedSeconds: value });
  };

  const provider = {
    playVideo,
    controlVideo,
    isOpenAudio,
    durationVideo,
    progressVideo,
    endVideo,
    videoRunningTime,
    pauseVideo,
    videoId,
    toggleNavbarAudioPlay,
    autoPlayVideo,
    playPause,
  };

  return (
    <PlayerContext.Provider value={provider}>
      {isOpenAudio && (
        <ReactPlayerVideo
          ref={videoRef}
          videoId={videoId}
          onDuration={durationVideo}
          onProgress={progressVideo}
          onEnded={endVideo}
          style={{ display: "none" }}
          playing={controlVideo.playing}
          volume={controlVideo.volume}
          onPause={pauseVideo}
          onReady={playPause}
        />
      )}
      {children}
      <AudioPlay seekToVideo={seekToVideo} />
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
