import { FC, memo } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import { WrapFlashcard } from "./FlashcardTopic.styles";

interface FlashcardTopicProps {
  title: string;
  theme: string;
}

const FlashcardTopic: FC<FlashcardTopicProps> = ({ title, theme }) => {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === "string"
          ? isPropValid(propName)
          : true;
      }}
    >
      <WrapFlashcard to="/list-vocabulary/Times" themecolor={theme}>
        <div className="flat-bg" />
        <p className="flat-title">{title}</p>
      </WrapFlashcard>
    </StyleSheetManager>
  );
};

export default memo(FlashcardTopic);
