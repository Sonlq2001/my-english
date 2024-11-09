import { FC, memo } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import { VocabularyPathsEnum } from "@app/features/vocabulary/vocabulary";
import { encodeKeyword } from "@app/helpers/encode-decode-word";

import { WrapFlashcard } from "./FlashcardTopic.styles";

interface FlashcardTopicProps {
  name: string;
  theme: string;
}

const FlashcardTopic: FC<FlashcardTopicProps> = ({ name, theme }) => {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === "string"
          ? isPropValid(propName)
          : true;
      }}
    >
      <li>
        <WrapFlashcard
          to={VocabularyPathsEnum.LIST_VOCABULARY.replace(
            ":topic",
            encodeKeyword(name)
          )}
          themecolor={theme}
        >
          <div className="flat-bg" />
          <p className="flat-title">{name}</p>
        </WrapFlashcard>
      </li>
    </StyleSheetManager>
  );
};

export default memo(FlashcardTopic);
