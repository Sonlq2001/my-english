import { FC } from "react";

import { convertSeconds } from "@app/helpers/time";

import { WrapTranscript, SectionTranscript } from "./TranscriptPodcast.styles";

interface TranscriptPodcastProps {
  transcripts: { text: string; duration: number; offset: number }[];
}

const TranscriptPodcast: FC<TranscriptPodcastProps> = ({
  transcripts = [],
}) => {
  return (
    <WrapTranscript>
      <div className="list-transcript">
        {transcripts.map((transcript, index) => {
          return (
            <SectionTranscript key={index}>
              <div className="time-part">
                {convertSeconds(transcript.offset)}
              </div>
              <div className="content-section">
                <p>{transcript.text}</p>
              </div>
            </SectionTranscript>
          );
        })}
      </div>
    </WrapTranscript>
  );
};

export default TranscriptPodcast;
