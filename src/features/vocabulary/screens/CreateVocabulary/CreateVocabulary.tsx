import { FC } from "react";

import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import TextField from "@app/components/TextField/TextField";
import AppButton from "@app/components/AppButton/AppButton";
import IconPlusInCircle from "@app/assets/images/icon-svg/icon-plus-in-circle.svg?react";
import RadioGroup from "@app/components/RadioGroup/RadioGroup";
import ImageUpload from "@app/components/ImageUpload/ImageUpload";

import { WrapPage, WrapForm } from "./CreateVocabulary.styles";
import { PartsOfSpeech } from "../../constants/vocabulary.constants";

const CreateVocabulary: FC = () => {
  return (
    <WrapPage>
      <ReturnButton to="/" />

      <WrapForm>
        <TextField
          name="vocabulary"
          fullWidth
          label="Vocabulary"
          placeholder="ex: Hello"
        />

        <RadioGroup
          options={PartsOfSpeech}
          name="type"
          label="Parts of speech"
        />

        <ImageUpload label="Upload photos" name="image" />

        <div className="row-btn">
          <AppButton rightIcon={<IconPlusInCircle />}>Add</AppButton>
        </div>
      </WrapForm>
    </WrapPage>
  );
};

export default CreateVocabulary;
