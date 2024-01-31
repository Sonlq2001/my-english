import { FC } from "react";

import IconSpeaking from "@app/assets/images/icon-svg/icon-speaking.svg?react";
import IconListening from "@app/assets/images/icon-svg/icon-listening.svg?react";
import IconReading from "@app/assets/images/icon-svg/icon-reading.svg?react";
import IconWriting from "@app/assets/images/icon-svg/icon-writing.svg?react";
import IconNotepad from "@app/assets/images/icon-svg/icon-notepad.svg?react";
import IconSetting from "@app/assets/images/icon-svg/icon-setting.svg?react";
import AppButton from "@app/components/AppButton/AppButton";

import { SidebarWrap, TitleSidebar, ListMenu } from "./Sidebar.styles";

const Sidebar: FC = () => {
  return (
    <SidebarWrap>
      <TitleSidebar>MyEnglish</TitleSidebar>

      <ListMenu>
        <AppButton
          leftIcon={<IconListening />}
          variant="text"
          className="btn-sidebar"
          size="large"
          to="/"
        >
          Listening
        </AppButton>
        <AppButton
          leftIcon={<IconSpeaking />}
          variant="text"
          className="btn-sidebar"
          size="large"
          to="/listening"
        >
          Speaking
        </AppButton>
        <AppButton
          leftIcon={<IconReading />}
          variant="text"
          className="btn-sidebar"
          size="large"
        >
          Reading
        </AppButton>
        <AppButton
          leftIcon={<IconWriting />}
          variant="text"
          className="btn-sidebar"
          size="large"
        >
          Writing
        </AppButton>
        <AppButton
          leftIcon={<IconNotepad />}
          variant="text"
          className="btn-sidebar"
          size="large"
        >
          Notepad
        </AppButton>
        <AppButton
          leftIcon={<IconSetting />}
          variant="text"
          className="btn-sidebar"
          size="large"
        >
          Settings
        </AppButton>
      </ListMenu>
    </SidebarWrap>
  );
};

export default Sidebar;
