import { FC, ReactNode } from "react";

import Navbar from "@app/components/Navbar/Navbar";
import Sidebar from "@app/components/Sidebar/Sidebar";

import { LayoutDefault, Content } from "./DefaultLayout.styles";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div id="default-layout">
      <LayoutDefault>
        <Sidebar />

        <Content>
          <Navbar />
          {children}
        </Content>
      </LayoutDefault>
    </div>
  );
};

export default DefaultLayout;
