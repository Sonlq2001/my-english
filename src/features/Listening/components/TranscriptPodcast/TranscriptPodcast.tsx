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
  const { playVideo, controlVideo, videoId } = useContext(PlayerContext);

  const handleSpecifyVideoTime = (seconds: number): void => {
    handleSeekTo(seconds);
    if (playVideo) {
      playVideo(videoId);
    }
    isSCroll.current = true;
  };

  useEffect(() => {
    if (
      !controlVideo.playing ||
      isSCroll.current ||
      !elementListTranscript.current
    )
      return;
    const currentTranscript =
      elementListTranscript.current.querySelector(".active-transcript");

    if (currentTranscript) {
      // TODO: not working
      currentTranscript.scrollTo({
        behavior: "smooth",
        top: currentTranscript.clientHeight + 100,
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
    >
      <div className="list-transcript" ref={elementListTranscript}>
        {transcripts.map((transcript, index) => {
          const isActive =
            controlVideo.loadedSeconds >= transcript.offset &&
            controlVideo.loadedSeconds < transcripts[index + 1]?.offset;

          return (
            <SectionTranscript
              key={`transcript-${index}`}
              className={isActive ? "active-transcript" : ""}
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
