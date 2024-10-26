import { FC, HTMLAttributes, ReactNode } from "react";

import { WrapContentContainer } from "./ContentContainer.styles";

interface ContentContainerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: ReactNode;
}

const ContentContainer: FC<ContentContainerProps> = ({
  title,
  children,
  ...props
}) => {
  return (
    <WrapContentContainer {...props}>
      {title && <h1>{title}</h1>}
      {children}
    </WrapContentContainer>
  );
};

export default ContentContainer;
