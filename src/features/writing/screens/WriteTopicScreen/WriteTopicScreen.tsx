import { FC } from "react";

import { Formik } from "formik";

import TextEditor from "@app/components/TextEditor/TextEditor";
import AppButton from "@app/components/AppButton/AppButton";
import TextField from "@app/components/TextField/TextField";
import IconPlusInCircle from "@app/assets/images/icon-svg/icon-plus-in-circle.svg?react";

import { WrapWriting, WrapFormik } from "./WriteTopicScreen.styles";

const WriteTopicScreen: FC = () => {
  return (
    <WrapWriting>
      <Formik
        initialValues={{
          notepad: "",
          content: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <WrapFormik>
          <TextField
            label="Title notepad"
            fullWidth
            name="notepad"
            placeholder="ex: better version"
            isRequire
          />

          <TextEditor label="Description" name="content" />
          <div className="row-btn">
            <AppButton type="submit" rightIcon={<IconPlusInCircle />}>
              Add
            </AppButton>
          </div>
        </WrapFormik>
      </Formik>
    </WrapWriting>
  );
};

export default WriteTopicScreen;
