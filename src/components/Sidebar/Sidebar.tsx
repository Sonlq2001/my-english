import { FC, ElementType } from "react";
import clsx from "clsx";

import AppButton from "@app/components/AppButton/AppButton";
import { NAVBAR_MENUS } from "@app/constants/navbar.constants";
import { SettingPathsEnum } from "@app/features/setting/setting";
import SwitchTheme from "@app/features/dashboard/components/SwitchTheme/SwitchTheme";

import {
  SidebarWrap,
  TitleSidebar,
  ListMenu,
  GroupMenus,
} from "./Sidebar.styles";

const Sidebar: FC = () => {
  return (
    <SidebarWrap>
      <TitleSidebar>MyEnglish</TitleSidebar>

      <ListMenu>
        {NAVBAR_MENUS.map((groups, index) => {
          return (
            <GroupMenus key={`group-${index}`}>
              <div className="title">{groups.title}</div>
              <div className="list-item">
                {groups.menus.map((menu) => {
                  const IconMenu = menu.icon as ElementType;
                  const isActiveMenu =
                    (menu?.customActive &&
                      window.location.pathname.includes(
                        SettingPathsEnum.SETTINGS
                      )) ||
                    menu.path === window.location.pathname;
                  return (
                    <AppButton
                      key={menu.id}
                      leftIcon={<IconMenu />}
                      variant="text"
                      className={clsx(
                        "btn-sidebar",
                        isActiveMenu && "btn-active"
                      )}
                      size="large"
                      to={menu.path}
                    >
                      {menu.label}
                    </AppButton>
                  );
                })}
              </div>
            </GroupMenus>
          );
        })}
      </ListMenu>

      <SwitchTheme />
    </SidebarWrap>
  );
};

export default Sidebar;
