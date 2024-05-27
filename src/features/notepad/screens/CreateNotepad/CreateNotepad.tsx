import { FC } from "react";
import { Formik } from "formik";
import debounce from "lodash.debounce";

import AppButton from "@app/components/AppButton/AppButton";
import TextField from "@app/components/TextField/TextField";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import IconPlusInCircle from "@app/assets/images/icon-svg/icon-plus-in-circle.svg?react";
import TextEditor2 from "@app/components/TextEditor2/TextEditor2";
import HelperText from "@app/components/HelperText/HelperText";

import { NotepadPathsEnum } from "../../constants/notepad.paths";
import { WrapCreateNotepad, WrapFormik } from "./CreateNotepad.styles";
import { notepadSchema } from "../../helpers/notepad.helpers";
import TitlePage from "@app/components/TitlePage/TitlePage";

const CreateNotepad: FC = () => {
  return (
    <>
      <TitlePage
        title="Create a new notebook"
        subtitle="Create a new notebook so you can easily refer back to it when necessary."
      />

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
          {({ setFieldValue, errors }) => (
            <WrapFormik>
              <TextField
                label="Title notepad"
                fullWidth
                name="notepad"
                placeholder="ex: better version"
                isRequire
              />

              <div>
                <TextEditor2
                  label="Notepad"
                  isRequire
                  getValue={debounce((value) => {
                    setFieldValue("description", value);
                  }, 300)}
                />
                {errors.description && <HelperText text={errors.description} />}
              </div>

              <div className="row-btn">
                <AppButton type="submit" rightIcon={<IconPlusInCircle />}>
                  Add
                </AppButton>
              </div>
            </WrapFormik>
          )}
        </Formik>
      </WrapCreateNotepad>
    </>
  );
};

export default CreateNotepad;
