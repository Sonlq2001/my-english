import { ElementType, FC } from "react";
import { Outlet } from "react-router-dom";
import clsx from "clsx";

import Navbar from "@app/components/Navbar/Navbar";
import Sidebar from "@app/components/Sidebar/Sidebar";
import AppButton from "@app/components/AppButton/AppButton";
import { NAVBAR_SETTINGS_MENUS } from "@app/constants/navbar-setting.constants";

import { LayoutDefault, Content, InnerContent } from "../Layout.styles";
import {
  SidebarMenu,
  TitleSetting,
  WrapSettingLayout,
} from "./SettingLayout.styles";

const SettingLayout: FC = () => {
  return (
    <div id="setting-layout">
      <LayoutDefault>
        <Sidebar />

        <Content>
          <Navbar />
          <InnerContent>
            <TitleSetting>
              <h2>Settings</h2>
              <p>Customize util match to your work</p>
            </TitleSetting>
            <WrapSettingLayout>
              <SidebarMenu>
                {NAVBAR_SETTINGS_MENUS.map((nav) => {
                  const IconMenu = nav.icon as ElementType;

                  return (
                    <AppButton
                      key={nav.id}
                      variant="text"
                      size="large"
                      leftIcon={<IconMenu />}
                      className={clsx("nav-link")}
                      to={nav.path}
                    >
                      {nav.label}
                    </AppButton>
                  );
                })}
              </SidebarMenu>

              {/* Outlet: render content submenu  */}
              <div className="content-setting">
                <Outlet />
              </div>
            </WrapSettingLayout>
          </InnerContent>
        </Content>
      </LayoutDefault>
    </div>
  );
};

export default SettingLayout;
