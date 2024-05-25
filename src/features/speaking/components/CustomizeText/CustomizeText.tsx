import { FC, useState } from "react";

import GroupFunctionButton from "@app/components/GroupFunctionButton/GroupFunctionButton";
import TranscriptText from "../TranscriptText/TranscriptText";

import { WrapCustomizeText } from "./CustomizeText.styles";

const CustomizeText: FC = () => {
  const [customContent, setCustomContent] = useState<string>("");
  const [isActiveTranscript, isSetActiveTranscript] = useState<boolean>(false);
  const handleTranscriptText = () => {
    isSetActiveTranscript(!isActiveTranscript);
  };

  const isLayout = Boolean(isActiveTranscript && customContent);

  return (
    <WrapCustomizeText>
      <GroupFunctionButton
        textSpeak={customContent}
        onClickTranscript={handleTranscriptText}
        disabled={{ transcript: !customContent }}
      />

      <div className="wrap-content">
        <textarea
          name=""
          rows={5}
          placeholder="Paste content text content"
          onChange={(e) => setCustomContent(e.target.value.trim())}
          value={customContent}
          className={isLayout ? "width-textarea" : ""}
        />

        {isLayout && (
          <TranscriptText
            textTranscript={customContent}
            className="transcript-text"
          />
        )}
      </div>
    </WrapCustomizeText>
  );
};

export default CustomizeText;
