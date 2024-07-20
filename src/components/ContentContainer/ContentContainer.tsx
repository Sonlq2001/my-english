import { FC, HTMLAttributes, ReactNode } from "react";

import { WrapContentContainer } from "./ContentContainer.styles";

interface ContentContainerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
}

const ContentContainer: FC<ContentContainerProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <WrapContentContainer {...props}>
      <h2>{title}</h2>
      {children}
    </WrapContentContainer>
  );
};

export default ContentContainer;
