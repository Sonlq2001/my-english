import { FC, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";

import {
  NotepadPathsEnum,
  ResNotepadItem,
  deleteNotepad,
} from "@app/features/notepad/notepad";
import { formatDate } from "@app/helpers/time";
import IconTrash from "@app/assets/images/icon-svg/icon-trash.svg?react";
import IconWriting from "@app/assets/images/icon-svg/icon-writing.svg?react";
import IconWarning from "@app/assets/images/icon-svg/icon-warning.svg?react";
import Modal from "@app/components/Modal/Modal";
import { useAppDispatch } from "@app/redux/store";

import { ContentConfirm, WrapNotepadSection } from "./NotepadSection.styles";
interface NotepadSectionProps {
  notepad: ResNotepadItem;
}

const NotepadSection: FC<NotepadSectionProps> = ({ notepad }) => {
  const dispatch = useAppDispatch();
  const [openModalConfirmDelete, setOpenModalConfirmDelete] =
    useState<boolean>(false);
  const [disabledBtnDelete, setDisabledBtnDelete] = useState<boolean>(false);

  const handleDeleteNotepad = async () => {
    setDisabledBtnDelete(true);
    await dispatch(deleteNotepad(notepad.id))
      .then(unwrapResult)
      .then(() => {
        setOpenModalConfirmDelete(false);
      })
      .finally(() => {
        setDisabledBtnDelete(false);
      });
  };

  return (
    <>
      <WrapNotepadSection
        to={NotepadPathsEnum.NOTEPAD_DETAIL.replace(":notepad_id", notepad.id)}
      >
        <div className="content">
          <h3>{notepad.title}</h3>
          <div className="info-notepad">
            <span className="date">{formatDate(notepad.createdAt)}</span>
            <p
              className="des-notepad"
              dangerouslySetInnerHTML={{ __html: notepad.description }}
            />
          </div>
        </div>

        <div className="controls" onClick={(e) => e.preventDefault()}>
          <IconWriting />
          <IconTrash onClick={() => setOpenModalConfirmDelete(true)} />
        </div>
      </WrapNotepadSection>

      {openModalConfirmDelete && (
        <Modal
          title="You really want to delete !"
          open
          onClosed={() => setOpenModalConfirmDelete(false)}
          textOK="Delete"
          onSubmit={handleDeleteNotepad}
          disabled={disabledBtnDelete}
        >
          <ContentConfirm>
            <IconWarning />
            <p>You will not be able to restore it after deletion.</p>
          </ContentConfirm>
        </Modal>
      )}
    </>
  );
};

export default NotepadSection;
