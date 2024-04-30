import { FC, ReactNode } from "react";

import Navbar from "@app/components/Navbar/Navbar";
import Sidebar from "@app/components/Sidebar/Sidebar";
import AudioPlay from "@app/components/AudioPlay/AudioPlay";

import { LayoutDefault, Content, InnerContent } from "../Layout.styles";

interface DefaultLayoutProps {
  children?: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div id="default-layout">
      <LayoutDefault>
        <Sidebar />

        <Content>
          <Navbar />
          <InnerContent>{children}</InnerContent>
        </Content>
      </LayoutDefault>

      <AudioPlay />
    </div>
  );
};

export default DefaultLayout;
