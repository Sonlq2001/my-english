import { FC, memo } from "react";

import { convertSeconds } from "@app/helpers/time";

import { WrapTranscript, SectionTranscript } from "./TranscriptPodcast.styles";

interface TranscriptPodcastProps {
  transcripts: { text: string; duration: number; offset: number }[];
  handleSeekTo: (seekTo: number) => void;
}

const TranscriptPodcast: FC<TranscriptPodcastProps> = ({
  transcripts = [],
  handleSeekTo,
}) => {
  const handleSpecifyVideoTime = (seconds: number) => {
    handleSeekTo(seconds);
  };

  return (
    <WrapTranscript>
      <div className="list-transcript">
        {transcripts.map((transcript, index) => {
          return (
            <SectionTranscript key={index}>
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
