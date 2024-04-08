import { FC } from "react";

import { WrapWritingStyle } from "./WritingStyle.styles";

interface WritingStyleProps {
  image: string;
  title: string;
  path: string;
}

const WritingStyle: FC<WritingStyleProps> = ({ image, title, path }) => {
  return (
    <WrapWritingStyle to={path}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </WrapWritingStyle>
  );
};

export default WritingStyle;
