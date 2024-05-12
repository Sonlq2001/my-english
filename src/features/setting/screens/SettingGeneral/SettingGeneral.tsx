import { FC } from "react";
import { WrapGeneral, WrapTitleSetting } from "./SettingGeneral.styles";

const SettingGeneral: FC = () => {
  return (
    <WrapGeneral>
      <WrapTitleSetting>
        <h2>General</h2>
        <p>Cập nhật thông tin của bạn</p>
      </WrapTitleSetting>
    </WrapGeneral>
  );
};

export default SettingGeneral;
