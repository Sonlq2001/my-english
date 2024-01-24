import { FC } from "react";

import IconSpeaking from "@app/assets/images/icon-svg/icon-speaking.svg?react";
import AppButton from "@app/components/AppButton/AppButton";

import { SidebarWrap, TitleSidebar, ListMenu } from "./Sidebar.styles";

const Sidebar: FC = () => {
  return (
    <SidebarWrap>
      <TitleSidebar>MyEnglish</TitleSidebar>

      <ListMenu>
        <AppButton leftIcon={<IconSpeaking />} variant="contained" size="small">
          Speaking
        </AppButton>
      </ListMenu>
    </SidebarWrap>
  );
};

export default Sidebar;
