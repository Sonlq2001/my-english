import { FC, useState } from "react";
import clsx from "clsx";

import GroupFunctionButton from "@app/components/GroupFunctionButton/GroupFunctionButton";

import TranscriptText from "../TranscriptText/TranscriptText";
import { GroupContent } from "./RandomText.styles";

const RandomText: FC = () => {
  const [isActiveTranscript, isSetActiveTranscript] = useState<boolean>(false);
  const handleTranscriptText = () => {
    isSetActiveTranscript(!isActiveTranscript);
  };

  return (
    <div>
      <GroupFunctionButton
        textSpeak={`As a tenth grader with a good command of English, Anh applied to be a
        volunteer at the Dien Bien Phu Victory Museum, which preserves
        documents and artifacts associated with the Battle of Dien Bien Phu,
        one of the most major confrontations in the First Indochina War,
        fought between the Viet Minh Communist Revolutionaries and the French
        Union's French Far East Expeditionary Corps.`}
        onClickTranscript={handleTranscriptText}
      />
      <GroupContent>
        <div
          className={clsx("text-random", isActiveTranscript && "text-content")}
        >
          As a tenth grader with a good command of English, Anh applied to be a
          volunteer at the Dien Bien Phu Victory Museum, which preserves
          documents and artifacts associated with the Battle of Dien Bien Phu,
          one of the most major confrontations in the First Indochina War,
          fought between the Viet Minh Communist Revolutionaries and the French
          Union's French Far East Expeditionary Corps.
        </div>

        {isActiveTranscript && (
          <TranscriptText
            textTranscript="One summer afternoon in 2017, a French man named Guillaume approached the 17-year-old girl, asking about the illuminated spots on a world map at the museum."
            className="transcript-text"
          />
        )}
      </GroupContent>
    </div>
  );
};

export default RandomText;
