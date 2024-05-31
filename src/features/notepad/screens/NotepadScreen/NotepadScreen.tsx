import { FC, useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";

import AppButton from "@app/components/AppButton/AppButton";
import IconWriting from "@app/assets/images/icon-svg/icon-writing.svg?react";
import TitlePage from "@app/components/TitlePage/TitlePage";
import { useAppDispatch, useAppSelector } from "@app/redux/store";
import { getListNotepads } from "@app/features/notepad/notepad";
import NotepadSection from "@app/features/notepad/components/NotepadSection/NotepadSection";

import { WrapNotepad, ListNotepad } from "./NotepadScreen.styles";

const NotepadScreen: FC = () => {
  const dispatch = useAppDispatch();
  const listNotepads = useAppSelector(
    (state) => state.notepad.notepadData.list
  );
  const [isLoadingListNotepads, setIsLoadingListNotepads] =
    useState<boolean>(true);

  useEffect(() => {
    dispatch(getListNotepads())
      .then(unwrapResult)
      .finally(() => setIsLoadingListNotepads(false));
  }, [dispatch]);

  return (
    <>
      <TitlePage
        title="Personal notebook"
        subtitle="Record useful information."
      />
      <WrapNotepad>
        <div className="row-header">
          <AppButton
            className="btn-add"
            to="/create-notepad"
            leftIcon={<IconWriting />}
          />
        </div>

        {isLoadingListNotepads ? (
          // TODO: Loading
          <div>Loading...</div>
        ) : (
          <ListNotepad>
            {listNotepads?.map((item) => (
              <NotepadSection key={item.id} notepad={item} />
            ))}
          </ListNotepad>
        )}
      </WrapNotepad>
    </>
  );
};

export default NotepadScreen;
