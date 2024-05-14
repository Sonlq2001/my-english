import { FC } from "react";

import { WrapTranscript, SectionTranscript } from "./TranscriptPodcast.styles";

interface TranscriptPodcastProps {
  transcripts: { text: string }[];
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
              <div className="time-part">00:00</div>
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
