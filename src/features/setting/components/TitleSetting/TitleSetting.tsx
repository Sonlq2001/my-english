import { FC, memo } from "react";

import { WrapTitleSetting } from "./TitleSetting.styles";

interface TitleSettingProps {
  title: string;
  subtitle: string;
}

const TitleSetting: FC<TitleSettingProps> = ({ title, subtitle }) => {
  return (
    <WrapTitleSetting>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </WrapTitleSetting>
  );
};

export default memo(TitleSetting);
