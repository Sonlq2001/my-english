import { FC } from "react";

import { Formik } from "formik";

import TextEditor from "@app/components/TextEditor/TextEditor";
import AppButton from "@app/components/AppButton/AppButton";
import TextField from "@app/components/TextField/TextField";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import IconPlusInCircle from "@app/assets/images/icon-svg/icon-plus-in-circle.svg?react";

import { NotepadPathsEnum } from "../../constants/notepad.paths";
import { WrapCreateNotepad, WrapFormik } from "./CreateNotepad.styles";
import { notepadSchema } from "../../helpers/notepad.helpers";

const CreateNotepad: FC = () => {
  return (
    <WrapCreateNotepad>
      <ReturnButton to={NotepadPathsEnum.NOTEPAD} />

      <Formik
        initialValues={{
          notepad: "",
          description: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={notepadSchema}
      >
        {() => (
          <WrapFormik>
            <TextField
              label="Title notepad"
              fullWidth
              name="notepad"
              placeholder="ex: better version"
              isRequire
            />

            <TextEditor label="Description" name="description" isRequire />
            <div className="row-btn">
              <AppButton type="submit" rightIcon={<IconPlusInCircle />}>
                Add
              </AppButton>
            </div>
          </WrapFormik>
        )}
      </Formik>
    </WrapCreateNotepad>
  );
};

export default CreateNotepad;
