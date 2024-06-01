import { FC, useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import TitlePage from "@app/components/TitlePage/TitlePage";
import { useAppDispatch, useAppSelector } from "@app/redux/store";
import { getNotepad, resetNotepad } from "@app/features/notepad/notepad";
import { formatDate } from "@app/helpers/time";

import { WrapNotepadDetail, ContentDetail } from "./NotepadDetail.styles";
import { NotepadPathsEnum } from "../../constants/notepad.paths";

const NotepadDetail: FC = () => {
  const [isLoadingNotepad, setIsLoadingNotepad] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { notepad_id } = useParams<{ notepad_id: string }>();
  const notepadItem = useAppSelector((state) => state.notepad.notepadDetail);

  useEffect(() => {
    if (!notepad_id) return;

    dispatch(getNotepad(notepad_id))
      .then(unwrapResult)
      .finally(() => setIsLoadingNotepad(false));
  }, [dispatch, notepad_id]);

  useEffect(() => {
    return () => {
      dispatch(resetNotepad());
    };
  }, [dispatch]);

  if (!notepadItem) {
    return <div>Not found</div>;
  }

  return (
    <>
      <TitlePage title="Notebook content" subtitle="Review knowledge." />

      <WrapNotepadDetail>
        <ReturnButton to={NotepadPathsEnum.NOTEPAD} />

        {isLoadingNotepad ? (
          <div>Loading...</div>
        ) : (
          <ContentDetail>
            <div className="time-notepad">
              {formatDate(notepadItem.createdAt)}
            </div>
            <h3>{notepadItem.title}</h3>
            <div
              className="content-editor"
              dangerouslySetInnerHTML={{ __html: notepadItem.description }}
            />
          </ContentDetail>
        )}
      </WrapNotepadDetail>
    </>
  );
};

export default NotepadDetail;
