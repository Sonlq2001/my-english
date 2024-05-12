import { FC, ElementType } from "react";
import clsx from "clsx";

import AppButton from "@app/components/AppButton/AppButton";
import { NAVBAR_MENUS } from "@app/constants/navbar.constants";
import { SettingPathsEnum } from "@app/features/setting/setting";

import { SidebarWrap, TitleSidebar, ListMenu } from "./Sidebar.styles";

const Sidebar: FC = () => {
  return (
    <SidebarWrap>
      <TitleSidebar>MyEnglish</TitleSidebar>

      <ListMenu>
        {NAVBAR_MENUS.map((menu) => {
          const IconMenu = menu.icon as ElementType;
          return (
            <AppButton
              key={menu.id}
              leftIcon={<IconMenu />}
              variant="text"
              className={clsx(
                "btn-sidebar",
                menu?.customActive &&
                  window.location.pathname.includes(
                    SettingPathsEnum.SETTINGS
                  ) &&
                  "active"
              )}
              size="large"
              to={menu.path}
            >
              {menu.label}
            </AppButton>
          );
        })}
      </ListMenu>
    </SidebarWrap>
  );
};

export default Sidebar;
