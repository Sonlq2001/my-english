import { FC, memo, useEffect, useRef, useContext } from "react";

import { convertSeconds } from "@app/helpers/time";
import { WrapTranscript, SectionTranscript } from "./TranscriptPodcast.styles";
import { PlayerContext } from "@app/components/PlayerProvider/PlayerProvider";

interface TranscriptPodcastProps {
  transcripts: { text: string; duration: number; offset: number }[];
  handleSeekTo: (seekTo: number) => void;
}

const TranscriptPodcast: FC<TranscriptPodcastProps> = ({
  transcripts = [],
  handleSeekTo,
}) => {
  const isSCroll = useRef<boolean>(false);
  const elementListTranscript = useRef<HTMLDivElement>(null);
  const { autoPlayVideo, controlVideo } = useContext(PlayerContext);

  const handleSpecifyVideoTime = (seconds: number): void => {
    handleSeekTo(seconds);
    if (autoPlayVideo) {
      autoPlayVideo();
    }
    isSCroll.current = true;
  };

  useEffect(() => {
    if (
      !controlVideo.playing ||
      isSCroll.current ||
      !elementListTranscript.current
    ) {
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
  }, [controlVideo.playing, controlVideo.loadedSeconds]);

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
