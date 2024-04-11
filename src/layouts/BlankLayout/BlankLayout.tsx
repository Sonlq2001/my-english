import { FC, ReactNode } from "react";

interface BlankLayoutProps {
  children?: ReactNode;
}

const BlankLayout: FC<BlankLayoutProps> = ({ children }) => {
  return <div id="blank-layout">{children}</div>;
};

export default BlankLayout;
