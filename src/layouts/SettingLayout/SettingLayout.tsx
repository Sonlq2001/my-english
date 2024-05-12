import { FC, ReactNode } from "react";
import { NavLink, Outlet } from "react-router-dom";

import Navbar from "@app/components/Navbar/Navbar";
import Sidebar from "@app/components/Sidebar/Sidebar";
import AudioPlay from "@app/components/AudioPlay/AudioPlay";

import { LayoutDefault, Content, InnerContent } from "../Layout.styles";

interface SettingLayoutProps {
  children?: ReactNode;
}

const SettingLayout: FC<SettingLayoutProps> = () => {
  return (
    <div id="setting-layout">
      <LayoutDefault>
        <Sidebar />

        <Content>
          <Navbar />
          <InnerContent>
            <div>
              <nav>
                <NavLink to="podcast">Podcast</NavLink>
                <NavLink to="general">general</NavLink>
              </nav>
            </div>
            <Outlet />
          </InnerContent>
        </Content>
      </LayoutDefault>

      <AudioPlay />
    </div>
  );
};

export default SettingLayout;
