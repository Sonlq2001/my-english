import { FC, useMemo } from "react";
import { Formik } from "formik";

import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import TextField from "@app/components/TextField/TextField";
import AppButton from "@app/components/AppButton/AppButton";
import IconPlusInCircle from "@app/assets/images/icon-svg/icon-plus-in-circle.svg?react";
import RadioGroup from "@app/components/RadioGroup/RadioGroup";
import CheckboxGroup from "@app/components/CheckboxGroup/CheckboxGroup";
import ImageUpload from "@app/components/ImageUpload/ImageUpload";
import FieldArrayList from "@app/components/FieldArrayList/FieldArrayList";
import HelperText from "@app/components/HelperText/HelperText";
import {
  useGetPartsOfSpeechQuery,
  useGetListTopicsQuery,
} from "@app/features/vocabulary/vocabulary";

import { WrapPage, WrapForm, WrapContent } from "./CreateVocabulary.styles";
import {
  initVocabulary,
  vocabularySchema,
} from "../../helpers/vocabulary.helpers";
import TitlePage from "@app/components/TitlePage/TitlePage";

const CreateVocabulary: FC = () => {
  const { data, isLoading, error } = useGetPartsOfSpeechQuery();
  const {
    data: dataTopic,
    isLoading: isLoadingTopic,
    error: errorTopic,
  } = useGetListTopicsQuery();

  const partsOfSpeech = useMemo(() => {
    return (data ?? [])?.map((item) => ({
      label: `${item.en} (${item.vn})`,
      value: item.id,
    }));
  }, [data]);

  const listTopics = useMemo(() => {
    return (dataTopic ?? [])?.map((item) => ({
      label: item.name,
      value: item.id,
    }));
  }, [dataTopic]);

  if (isLoading || isLoadingTopic) {
    return <div>Loading...</div>;
  }

  if (error || !data || errorTopic || !dataTopic) {
    return <div>Error</div>;
  }

  return (
    <>
      <TitlePage title="Create vocabulary" subtitle="Every day a new word" />
      <WrapPage>
        <WrapContent>
          <ReturnButton to="/" />

          <Formik
            initialValues={initVocabulary}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={vocabularySchema}
          >
            {({ setFieldValue, resetForm, values, errors }) => (
              <WrapForm>
                <TextField
                  name="name"
                  fullWidth
                  label="Vocabulary"
                  placeholder="ex: Hello"
                  isRequire
                />

                <RadioGroup
                  options={partsOfSpeech}
                  name="partOfSpeech"
                  label="Parts of speech"
                />

                <CheckboxGroup
                  name="topic"
                  options={listTopics}
                  label="Topics"
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

                <div>
                  <ImageUpload
                    imageUrl={values.reminiscentPhoto ?? ""}
                    label="Upload photos"
                    name="reminiscentPhoto"
                    getFile={(file) => {
                      setFieldValue("reminiscentPhoto", file);
                    }}
                    handleResetFile={() => {
                      resetForm({
                        values: { ...initVocabulary, reminiscentPhoto: null },
                      });
                    }}
                    fullWidth
                  />
                  {errors?.reminiscentPhoto && (
                    <HelperText text={errors.reminiscentPhoto} />
                  )}
                </div>

                <div className="row-btn">
                  <AppButton type="submit" rightIcon={<IconPlusInCircle />}>
                    Add
                  </AppButton>
                </div>
              </WrapForm>
            )}
          </Formik>
        </WrapContent>
      </WrapPage>
    </>
  );
};

export default CreateVocabulary;
