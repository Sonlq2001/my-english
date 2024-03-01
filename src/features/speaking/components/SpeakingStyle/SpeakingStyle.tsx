import { FC, memo } from "react";

import {
  WrapSpeakingStyle,
  SpeakingStyleContent,
} from "./SpeakingStyle.styles";

interface SpeakingStyleProps {
  title: string;
  thumbnail: string;
  path: string;
}

const SpeakingStyle: FC<SpeakingStyleProps> = ({ title, thumbnail, path }) => {
  return (
    <WrapSpeakingStyle to={path}>
      <img src={thumbnail} alt="" />
      <SpeakingStyleContent>
        <h3>{title}</h3>
      </SpeakingStyleContent>
    </WrapSpeakingStyle>
  );
};

export default memo(SpeakingStyle);
