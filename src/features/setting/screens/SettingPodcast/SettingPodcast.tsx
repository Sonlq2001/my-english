import { FC } from "react";

import AppButton from "@app/components/AppButton/AppButton";
import {
  SettingPathsEnum,
  SettingSubPathsEnum,
} from "@app/features/setting/setting";

import TitleSetting from "../../components/TitleSetting/TitleSetting";
import {
  HeaderSetting,
  Table,
  WrapAction,
  WrapTable,
  WrapTile,
} from "./SettingPodcast.styles";

const SettingPodcast: FC = () => {
  return (
    <>
      <TitleSetting title="Podcast" subtitle="Customize your podcast" />

      <HeaderSetting>
        <AppButton
          size="small"
          to={`${SettingPathsEnum.SETTINGS}/${SettingSubPathsEnum.CREATE_PODCAST}`}
        >
          Create
        </AppButton>
      </HeaderSetting>

      <WrapTable>
        <Table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>STT</th>
              <th>Title</th>
              <th>Author</th>
              <th>Topic</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>1</td>
              <td>
                <WrapTile>
                  <img
                    src="https://cdn.pixabay.com/photo/2019/09/02/10/00/lemon-4446934_640.jpg"
                    alt=""
                  />
                  <p>Green World environmental protection</p>
                </WrapTile>
              </td>
              <td>Mr. Son</td>
              <td>Environment</td>
              <td>
                <WrapAction>
                  <AppButton variant="outlined" size="small">
                    Delete
                  </AppButton>
                  <AppButton variant="outlined" size="small">
                    Edit
                  </AppButton>
                </WrapAction>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>2</td>
              <td>
                <WrapTile>
                  <img
                    src="https://cdn.pixabay.com/photo/2024/04/20/11/47/ai-generated-8708404_640.jpg"
                    alt=""
                  />
                  <p>Green World environmental protection</p>
                </WrapTile>
              </td>
              <td>Mr. Son</td>
              <td>Environment</td>
              <td>
                <WrapAction>
                  <AppButton variant="outlined" size="small">
                    Delete
                  </AppButton>
                  <AppButton variant="outlined" size="small">
                    Edit
                  </AppButton>
                </WrapAction>
              </td>
            </tr>
          </tbody>
        </Table>
      </WrapTable>
    </>
  );
};

export default SettingPodcast;
