import { FC, HTMLAttributes, useMemo, memo } from "react";

import IconGoogleTranslate from "@app/assets/images/icon-svg/icon-google-translate.svg?react";
import IconSpeaking2 from "@app/assets/images/icon-svg/icon-speaking-2.svg?react";
import { convertTextToSpeech } from "@app/helpers/text-to-speech";

import { WrapTranscriptText } from "./TranscriptText.styles";

interface TranscriptTextProps extends HTMLAttributes<HTMLDivElement> {
  textTranscript: string;
}

const TranscriptText: FC<TranscriptTextProps> = ({
  textTranscript,
  ...props
}) => {
  const convertTextToTranscript = useMemo(() => {
    return textTranscript.split(/(?<=[.,!?])\s+/);
  }, [textTranscript]);

  const handleSpeakTranscript = (transcript: string) => {
    convertTextToSpeech(transcript);
  };

  const handleTranslateTranscript = () => {
    // TODO: translate
  };

  return (
    <WrapTranscriptText {...props}>
      {convertTextToTranscript.map((transcript, index) => (
        <div className="item-transcript" key={`transcript-${index}`}>
          {transcript}
          <div className="groups-btn">
            <IconGoogleTranslate onClick={handleTranslateTranscript} />
            <IconSpeaking2 onClick={() => handleSpeakTranscript(transcript)} />
          </div>
        </div>
      ))}
    </WrapTranscriptText>
  );
};

export default memo(TranscriptText);
