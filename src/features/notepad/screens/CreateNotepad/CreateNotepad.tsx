import { FC, useMemo, useEffect, useState } from "react";
import { Formik } from "formik";
import debounce from "lodash.debounce";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate, useParams } from "react-router-dom";

import AppButton from "@app/components/AppButton/AppButton";
import TextField from "@app/components/TextField/TextField";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import IconPlusInCircle from "@app/assets/images/icon-svg/icon-plus-in-circle.svg?react";
import TextEditor2 from "@app/components/TextEditor2/TextEditor2";
import HelperText from "@app/components/HelperText/HelperText";
import TitlePage from "@app/components/TitlePage/TitlePage";
import { useAppDispatch, useAppSelector } from "@app/redux/store";
import {
  createNotepad,
  getNotepad,
  ReqCreateNotepad,
  resetNotepad,
  updateNotepad,
} from "@app/features/notepad/notepad";

import { NotepadPathsEnum } from "../../constants/notepad.paths";
import { WrapCreateNotepad, WrapFormik } from "./CreateNotepad.styles";
import { notepadSchema } from "../../helpers/notepad.helpers";

const CreateNotepad: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const notepadItem = useAppSelector((state) => state.notepad.notepadDetail);
  const [isLoadingNotepadDetail, setIsLoadingNotepadDetail] =
    useState<boolean>(false);
  const [disabledBtnAction, setDisabledBtnAction] = useState<boolean>(false);
  const { notepad_id: notepadId } = useParams<{ notepad_id: string }>();

  // get notepad api details when notepad id is present
  useEffect(() => {
    if (!notepadId) return;
    setIsLoadingNotepadDetail(true);
    dispatch(getNotepad(notepadId)).finally(() =>
      setIsLoadingNotepadDetail(false)
    );
  }, [dispatch, notepadId]);

  useEffect(() => {
    return () => {
      dispatch(resetNotepad());
    };
  }, [dispatch]);

  // create or update notepad
  const handleCreateNotepad = (values: ReqCreateNotepad) => {
    setDisabledBtnAction(true);
    const dispatchAction = notepadId
      ? dispatch(updateNotepad({ ...values, notepadId }))
      : dispatch(createNotepad(values));

    dispatchAction
      .then(unwrapResult)
      .then((res) => {
        navigate(
          NotepadPathsEnum.NOTEPAD_DETAIL.replace(":notepad_id", res.id)
        );
      })
      .finally(() => setDisabledBtnAction(false));
  };

  const { title, subtitle } = useMemo(() => {
    if (notepadId) {
      return {
        title: "Update the notebook",
        subtitle: "Update additional information in the notebook.",
      };
    }
    return {
      title: "Create a new notebook",
      subtitle:
        "Create a new notebook so you can easily refer back to it when necessary.",
    };
  }, [notepadId]);

  const initialValuesNotepad = useMemo(() => {
    return {
      title: notepadItem?.title ?? "",
      description: notepadItem?.description ?? "",
    };
  }, [notepadItem?.description, notepadItem?.title]);

  return (
    <main>
      <TitlePage title={title} subtitle={subtitle} />

      <WrapCreateNotepad>
        <ReturnButton to={NotepadPathsEnum.NOTEPAD} />

        {isLoadingNotepadDetail ? (
          <div>Loading...</div>
        ) : (
          <Formik
            initialValues={initialValuesNotepad}
            onSubmit={handleCreateNotepad}
            validationSchema={notepadSchema}
          >
            {({ setFieldValue, errors }) => (
              <WrapFormik>
                <TextField
                  label="Title notepad"
                  fullWidth
                  name="title"
                  placeholder="ex: better version"
                  isRequire
                />

                <div>
                  <TextEditor2
                    label="Notepad"
                    isRequire
                    value={initialValuesNotepad.description}
                    getValue={debounce((value) => {
                      setFieldValue("description", value);
                    }, 300)}
                  />
                  {errors.description && (
                    <HelperText text={errors.description} />
                  )}
                </div>

                <div className="row-btn">
                  <AppButton
                    type="submit"
                    rightIcon={<IconPlusInCircle />}
                    disabled={disabledBtnAction}
                  >
                    {notepadId ? "Update" : "Create"}
                  </AppButton>
                </div>
              </WrapFormik>
            )}
          </Formik>
        )}
      </WrapCreateNotepad>
    </main>
  );
};

export default CreateNotepad;
