import { FC, memo, useEffect } from "react";

import { convertSeconds } from "@app/helpers/time";

import { WrapTranscript, SectionTranscript } from "./TranscriptPodcast.styles";

interface TranscriptPodcastProps {
  transcripts: { text: string; duration: number; offset: number }[];
  handleSeekTo: (seekTo: number) => void;
  duration: number;
}

const TranscriptPodcast: FC<TranscriptPodcastProps> = ({
  transcripts = [],
  handleSeekTo,
  duration,
}) => {
  const handleSpecifyVideoTime = (seconds: number) => {
    handleSeekTo(seconds);
  };

  useEffect(() => {
    const currentTranscript = document.querySelector(
      ".list-transcript .active"
    );

    if (currentTranscript) {
      currentTranscript.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  }, [duration]);

  return (
    <WrapTranscript>
      <div className="list-transcript">
        {transcripts.map((transcript, index) => {
          return (
            <SectionTranscript
              key={`transcript-${index}`}
              className={
                duration < transcripts[index + 1]?.offset &&
                Math.floor(duration) === Math.floor(transcript.offset)
                  ? "active"
                  : ""
              }
              id=""
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
