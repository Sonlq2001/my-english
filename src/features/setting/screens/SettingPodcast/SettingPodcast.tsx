import { FC } from "react";

import AppButton from "@app/components/AppButton/AppButton";
import {
  SettingPathsEnum,
  SettingSubPathsEnum,
} from "@app/features/setting/setting";

import TitleSetting from "../../components/TitleSetting/TitleSetting";
import { HeaderSetting } from "./SettingPodcast.styles";

const SettingPodcast: FC = () => {
  return (
    <>
      <TitleSetting title="Podcast" subtitle="Customize your podcast" />

      <HeaderSetting>
        <AppButton
          variant="text"
          to={`${SettingPathsEnum.SETTINGS}/${SettingSubPathsEnum.CREATE_PODCAST}`}
        >
          Create
        </AppButton>
      </HeaderSetting>
      <table>
        <thead>
          <tr>
            <th>STT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SettingPodcast;
