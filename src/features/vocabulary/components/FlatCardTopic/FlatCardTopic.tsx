import { FC } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import { WrapFlatCard } from "./FlatCardTopic.styles";

interface FlatCardTopicProps {
  title: string;
  theme: string;
}

const FlatCardTopic: FC<FlatCardTopicProps> = ({ title, theme }) => {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === "string"
          ? isPropValid(propName)
          : true;
      }}
    >
      <WrapFlatCard themeColor={theme}>
        <div className="flat-bg" />
        <p className="flat-title">{title}</p>
      </WrapFlatCard>
    </StyleSheetManager>
  );
};

export default FlatCardTopic;
