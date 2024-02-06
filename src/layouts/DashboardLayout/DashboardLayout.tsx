import { FC, ReactNode } from "react";

import Navbar from "@app/components/Navbar/Navbar";
import Sidebar from "@app/components/Sidebar/Sidebar";

import { LayoutDefault, Content } from "../Layout.styles";

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div id="dashboard-layout">
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

export default DashboardLayout;
