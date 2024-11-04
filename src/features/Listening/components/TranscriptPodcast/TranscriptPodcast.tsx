import { FC, memo, useEffect, useRef } from "react";

import { convertSeconds } from "@app/helpers/time";
import { WrapTranscript, SectionTranscript } from "./TranscriptPodcast.styles";
import { ControlVideo } from "@app/features/listening/types/listening.type";

interface TranscriptPodcastProps {
  transcripts: { text: string; duration: number; offset: number }[];
  handleSeekTo: (seekTo: number) => void;
  setControlVideo: (control: ControlVideo) => void;
  controlVideo: ControlVideo;
}

const TranscriptPodcast: FC<TranscriptPodcastProps> = ({
  transcripts = [],
  handleSeekTo,
  controlVideo,
  setControlVideo,
}) => {
  const isSCroll = useRef<boolean>(false);
  const elementListTranscript = useRef<HTMLDivElement>(null);

  const handleSpecifyVideoTime = (seconds: number): void => {
    handleSeekTo(seconds);
    setControlVideo({ ...controlVideo, playing: true });
    isSCroll.current = true;
  };

  useEffect(() => {
    if (isSCroll.current || !elementListTranscript.current) {
      return;
    }

    const currentTranscript =
      elementListTranscript.current.querySelector(".active-transcript");

    if (currentTranscript) {
      const indexTranscript = Number(currentTranscript.getAttribute("data-id"));

      elementListTranscript.current.scrollTo({
        behavior: "smooth",
        top:
          (Math.floor(currentTranscript.clientHeight) + 15) * indexTranscript,
      });
    }
  }, [controlVideo.loadedSeconds]);

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
      ref={elementListTranscript}
      className="wrap-transcript"
    >
      <div className="list-transcript">
        {transcripts.map((transcript, index) => {
          const isActive =
            controlVideo.loadedSeconds >= transcript.offset &&
            controlVideo.loadedSeconds < transcripts[index + 1]?.offset;

          return (
            <SectionTranscript
              key={`transcript-${index + 1}`}
              className={isActive ? "active-transcript" : ""}
              data-id={index}
            >
              <div className="time-part">
                {convertSeconds(transcript.offset)}
              </div>
              <div
                className="content-section"
                onClick={() => handleSpecifyVideoTime(transcript.offset)}
              >
                <p>{transcript.text.replaceAll(`&amp;#39;`, `'`)}</p>
              </div>
            </SectionTranscript>
          );
        })}
      </div>
    </WrapTranscript>
  );
};

export default memo(TranscriptPodcast);
