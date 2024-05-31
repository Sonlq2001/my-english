import { FC, ReactNode } from "react";

import Navbar from "@app/components/Navbar/Navbar";
import Sidebar from "@app/components/Sidebar/Sidebar";

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
    </div>
  );
};

export default DefaultLayout;
