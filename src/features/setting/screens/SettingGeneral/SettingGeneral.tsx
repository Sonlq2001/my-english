import { FC } from "react";

import { WrapGeneral } from "./SettingGeneral.styles";
import TitleSetting from "../../components/TitleSetting/TitleSetting";

const SettingGeneral: FC = () => {
  return (
    <WrapGeneral>
      <TitleSetting title="General" subtitle="Update your information" />
    </WrapGeneral>
  );
};

export default SettingGeneral;
