import { FC, useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";

import AppButton from "@app/components/AppButton/AppButton";
import {
  SettingPathsEnum,
  SettingSubPathsEnum,
} from "@app/features/setting/setting";
import {
  deletePodcast,
  getListPodcasts,
} from "@app/features/listening/listening";
import { useAppDispatch, useAppSelector } from "@app/redux/store";
import { HEADER_CELLS } from "@app/features/setting/constants/setting.constants";
import IconWarning from "@app/assets/images/icon-svg/icon-warning.svg?react";
import Modal from "@app/components/Modal/Modal";

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
  const [isLoadingListPodcasts, setIsLoadingListPodcasts] =
    useState<boolean>(true);
  const [openModalConfirmDelete, setOpenModalConfirmDelete] =
    useState<boolean>(false);
  const [disabledBtnDelete, setDisabledBtnDelete] = useState<boolean>(false);

  const listPodcasts = useAppSelector(
    (state) => state.listening.podcastData.list
  );

  useEffect(() => {
    dispatch(getListPodcasts())
      .then(unwrapResult)
      .finally(() => setIsLoadingListPodcasts(false));
  }, [dispatch]);

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
          to={`${SettingPathsEnum.SETTINGS}/${SettingSubPathsEnum.CREATE_PODCAST}`}
        >
          Create
        </AppButton>
      </HeaderSetting>

      {isLoadingListPodcasts ? (
        <div>Loading...</div>
      ) : (
        <WrapTable>
          {listPodcasts && listPodcasts.length > 0 ? (
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
                {listPodcasts.map((item, index) => (
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
                        >
                          Edit
                        </AppButton>
                        <AppButton
                          variant="outlined"
                          size="small"
                          onClick={() => setOpenModalConfirmDelete(true)}
                        >
                          Delete
                        </AppButton>
                      </WrapAction>
                    </td>

                    {openModalConfirmDelete && (
                      <Modal
                        title="You really want to delete !"
                        open
                        onClosed={() => setOpenModalConfirmDelete(false)}
                        textOK="Delete"
                        onSubmit={() => handleDeleteNotepad(item.id)}
                        disabled={disabledBtnDelete}
                      >
                        <ContentConfirm>
                          <IconWarning />
                          <p>
                            You will not be able to restore it after deletion.
                          </p>
                        </ContentConfirm>
                      </Modal>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div>No data</div>
          )}
        </WrapTable>
      )}
    </main>
  );
};

export default SettingPodcast;
