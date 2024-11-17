import { FC, useState } from "react";

import AppButton from "@app/components/AppButton/AppButton";
import {
  SettingPathsEnum,
  SettingSubPathsEnum,
} from "@app/features/setting/setting";
import {
  deletePodcast,
  useGetListPodcastQuery,
} from "@app/features/listening/listening";
import { useAppDispatch } from "@app/redux/store";
import { HEADER_CELLS } from "@app/features/setting/constants/setting.constants";
import IconWarning from "@app/assets/images/icon-svg/icon-warning.svg?react";
import Modal from "@app/components/Modal/Modal";
import IconTrash from "@app/assets/images/icon-svg/icon-trash.svg?react";
import IconWritingNotepad from "@app/assets/images/icon-svg/icon-pencil.svg?react";
import IconPlus from "@app/assets/images/icon-svg/icon-plus.svg?react";

import TitleSetting from "../../components/TitleSetting/TitleSetting";
import {
  ContentConfirm,
  HeaderSetting,
  Table,
  WrapAction,
  WrapTable,
  WrapTile,
} from "./SettingPodcast.styles";

const SettingPodcast: FC = () => {
  const dispatch = useAppDispatch();
  const [idPodcast, setIdPodcast] = useState<string | null>(null);
  const [openModalConfirmDelete, setOpenModalConfirmDelete] =
    useState<boolean>(false);
  const [disabledBtnDelete, setDisabledBtnDelete] = useState<boolean>(false);

  const { data: podcastList, isLoading } = useGetListPodcastQuery({
    page: 1,
    perPage: 10,
  });

  const handleDeleteNotepad = async (podcastId: string) => {
    setDisabledBtnDelete(true);
    dispatch(deletePodcast(podcastId)).finally(() => {
      setOpenModalConfirmDelete(false);
      setDisabledBtnDelete(false);
    });
  };

  return (
    <main>
      <TitleSetting title="Podcast" subtitle="Customize your podcast" />

      <HeaderSetting>
        <AppButton
          size="small"
          leftIcon={<IconPlus />}
          variant="outlined"
          to={`${SettingPathsEnum.SETTINGS}/${SettingSubPathsEnum.CREATE_PODCAST}`}
        />
      </HeaderSetting>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <WrapTable>
          {podcastList?.data && podcastList.data.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  {HEADER_CELLS.map((cell) => (
                    <th key={cell}>{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {podcastList.data.map((item, index) => (
                  <tr key={item.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{index + 1}</td>
                    <td>
                      <WrapTile>
                        <img
                          src={
                            item.thumbnail?.imageUrl ||
                            "https://cdn.pixabay.com/photo/2024/04/20/11/47/ai-generated-8708404_640.jpg"
                          }
                          alt=""
                        />
                        <p>{item.title}</p>
                      </WrapTile>
                    </td>
                    <td>{item.author}</td>
                    <td>
                      <span className="topic">{item.topic}</span>
                    </td>
                    <td>
                      <WrapAction>
                        <AppButton
                          to={`${
                            SettingPathsEnum.SETTINGS
                          }/${SettingSubPathsEnum.EDIT_PODCAST.replace(
                            ":podcast_id",
                            item.id
                          )}`}
                          variant="outlined"
                          size="small"
                          leftIcon={<IconWritingNotepad />}
                        />
                        <AppButton
                          variant="outlined"
                          size="small"
                          onClick={() => {
                            setOpenModalConfirmDelete(true);
                            setIdPodcast(item.id);
                          }}
                          leftIcon={<IconTrash />}
                        />
                      </WrapAction>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div>No data</div>
          )}
        </WrapTable>
      )}

      {openModalConfirmDelete && idPodcast && (
        <Modal
          title="You really want to delete !"
          open
          onClosed={() => setOpenModalConfirmDelete(false)}
          textOK="Delete"
          onSubmit={() => handleDeleteNotepad(idPodcast)}
          disabled={disabledBtnDelete}
        >
          <ContentConfirm>
            <IconWarning />
            <p>You will not be able to restore it after deletion.</p>
          </ContentConfirm>
        </Modal>
      )}
    </main>
  );
};

export default SettingPodcast;
