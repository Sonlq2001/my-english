import { FC, memo, useEffect, Dispatch, SetStateAction, useRef } from "react";

import { convertSeconds } from "@app/helpers/time";

import { WrapTranscript, SectionTranscript } from "./TranscriptPodcast.styles";
import { ControlVideo } from "../../types/listening.type";

interface TranscriptPodcastProps {
  transcripts: { text: string; duration: number; offset: number }[];
  handleSeekTo: (seekTo: number) => void;
  duration: number;
  isPlay: boolean;
  setControlVideo: Dispatch<SetStateAction<ControlVideo>>;
}

const TranscriptPodcast: FC<TranscriptPodcastProps> = ({
  transcripts = [],
  handleSeekTo,
  duration,
  isPlay,
  setControlVideo,
}) => {
  const isSCroll = useRef<boolean>(false);
  const elementListTranscript = useRef<HTMLDivElement>(null);
  const handleSpecifyVideoTime = (seconds: number): void => {
    handleSeekTo(seconds);
    setControlVideo((prev) => ({ ...prev, playing: true }));
    isSCroll.current = true;
  };

  useEffect(() => {
    if (!isPlay || isSCroll.current || !elementListTranscript.current) return;
    const currentTranscript =
      elementListTranscript.current.querySelector(".active");

    if (currentTranscript) {
      // TODO: not working
      currentTranscript.scrollTo({
        behavior: "smooth",
        top: currentTranscript.clientHeight + 100,
      });
    }
  }, [isPlay, duration]);

  const handleMouseOver = () => {
    isSCroll.current = true;
  };

  const handleMouseLeave = () => {
    isSCroll.current = false;
  };

  return (
    <WrapTranscript
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="list-transcript" ref={elementListTranscript}>
        {transcripts.map((transcript, index) => {
          const isActive =
            duration >= transcript.offset &&
            duration < transcripts[index + 1]?.offset;

          return (
            <SectionTranscript
              key={`transcript-${index}`}
              className={isActive ? "active" : ""}
            >
              <div className="time-part">
                {convertSeconds(transcript.offset)}
              </div>
              <div
                className="content-section"
                onClick={() => handleSpecifyVideoTime(transcript.offset)}
              >
                <p>{transcript.text}</p>
              </div>
            </SectionTranscript>
          );
        })}
      </div>
    </WrapTranscript>
  );
};

export default memo(TranscriptPodcast);
