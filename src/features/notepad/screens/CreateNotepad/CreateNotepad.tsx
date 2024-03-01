import { FC } from "react";

import TextEditor from "@app/components/TextEditor/TextEditor";
import AppButton from "@app/components/AppButton/AppButton";
import TextField from "@app/components/TextField/TextField";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import IconPlusInCircle from "@app/assets/images/icon-svg/icon-plus-in-circle.svg?react";

import { NotepadPathsEnum } from "../../constants/notepad.paths";
import { WrapCreateNotepad, WrapForm } from "./CreateNotepad.styles";

const CreateNotepad: FC = () => {
  return (
    <WrapCreateNotepad>
      <ReturnButton to={NotepadPathsEnum.NOTEPAD} />
      <WrapForm>
        <TextField label="Title notepad" fullWidth />
        <TextEditor label="Description" />
        <div className="row-btn">
          <AppButton rightIcon={<IconPlusInCircle />}>Add</AppButton>
        </div>
      </WrapForm>
    </WrapCreateNotepad>
  );
};

export default CreateNotepad;
