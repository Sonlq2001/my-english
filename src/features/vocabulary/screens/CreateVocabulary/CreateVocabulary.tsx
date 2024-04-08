import { FC } from "react";
import { Formik } from "formik";

import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import TextField from "@app/components/TextField/TextField";
import AppButton from "@app/components/AppButton/AppButton";
import IconPlusInCircle from "@app/assets/images/icon-svg/icon-plus-in-circle.svg?react";
import RadioGroup from "@app/components/RadioGroup/RadioGroup";
import ImageUpload from "@app/components/ImageUpload/ImageUpload";
import FieldArrayList from "@app/components/FieldArrayList/FieldArrayList";

import { WrapPage, WrapForm } from "./CreateVocabulary.styles";
import { PartsOfSpeech } from "../../constants/vocabulary.constants";
import { vocabularySchema } from "../../helpers/vocabulary.helpers";

const CreateVocabulary: FC = () => {
  return (
    <WrapPage>
      <ReturnButton to="/" />

      <Formik
        initialValues={{
          vocabulary: "",
          meanings: [{ meaning: "" }],
          examples: [{ example: "" }],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={vocabularySchema}
      >
        {() => (
          <WrapForm>
            <TextField
              name="vocabulary"
              fullWidth
              label="Vocabulary"
              placeholder="ex: Hello"
              isRequire
            />

            <RadioGroup
              options={PartsOfSpeech}
              name="type"
              label="Parts of speech"
            />

            <FieldArrayList
              name="meanings"
              label="Meanings"
              placeholder="Meaning"
              dataReset={{ meaning: "" }}
              isRequire
              keyObject="meaning"
            />

            <FieldArrayList
              name="examples"
              label="Examples"
              placeholder="Examples"
              dataReset={{ example: "" }}
              isRequire
              max={3}
              keyObject="example"
            />

            <ImageUpload label="Upload photos" name="image" />

            <div className="row-btn">
              <AppButton type="submit" rightIcon={<IconPlusInCircle />}>
                Add
              </AppButton>
            </div>
          </WrapForm>
        )}
      </Formik>
    </WrapPage>
  );
};

export default CreateVocabulary;
