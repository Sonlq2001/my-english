import { FC, useMemo, useState } from "react";
import { Formik } from "formik";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

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
  VocabularyPathsEnum,
} from "@app/features/vocabulary/vocabulary";
import { useAppDispatch } from "@app/redux/store";
import TitlePage from "@app/components/TitlePage/TitlePage";
import { uploadFile } from "@app/features/app/app";
import { decodeKeyword, encodeKeyword } from "@app/helpers/encode-decode-word";

import { WrapPage, WrapForm, WrapContent } from "./CreateVocabulary.styles";
import {
  initVocabulary,
  vocabularySchema,
} from "../../helpers/vocabulary.helpers";
import { postCreateVocabulary } from "../../redux/vocabulary.slice";
import { TypeInitVocabulary } from "../../types/vocabulary.type";

const CreateVocabulary: FC = () => {
  const { data, isLoading, error } = useGetPartsOfSpeechQuery();
  const {
    data: dataTopic,
    isLoading: isLoadingTopic,
    error: errorTopic,
  } = useGetListTopicsQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoadingCreate, setLoadingCreate] = useState<boolean>(false);

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

  const initDataVocabulary = useMemo(() => {
    const word = new URLSearchParams(window.location.search).get("word") || "";
    return {
      ...initVocabulary,
      name: decodeKeyword(word),
    };
  }, []);

  const handleSubmit = async ({ file, ...reset }: TypeInitVocabulary) => {
    try {
      setLoadingCreate(true);
      let dataImage = null;
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        dataImage = unwrapResult(await dispatch(uploadFile(formData)));
      }
      await dispatch(
        postCreateVocabulary({ ...reset, reminiscentPhoto: dataImage })
      );

      navigate(
        VocabularyPathsEnum.VOCABULARY_DETAIL.replace(
          ":word",
          encodeKeyword(reset.name)
        )
      );
    } catch (error) {
      // TODO: Error
    } finally {
      setLoadingCreate(false);
    }
  };

  if (isLoading || isLoadingTopic) {
    return <div>Loading...</div>;
  }

  if (error || !data || errorTopic || !dataTopic) {
    return <div>Error</div>;
  }

  return (
    <>
      <TitlePage
        title="Create vocabulary"
        subtitle="Fill more of your vocabulary."
      />
      <WrapPage>
        <WrapContent>
          <ReturnButton to="/" />

          <Formik
            initialValues={initDataVocabulary}
            onSubmit={handleSubmit}
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
                    imageUrl={values.file ?? ""}
                    label="Upload photos"
                    name="file"
                    getFile={(file) => {
                      setFieldValue("file", file);
                    }}
                    handleResetFile={() => {
                      resetForm({
                        values: { ...initVocabulary, file: null },
                      });
                    }}
                    fullWidth
                  />
                  {errors?.file && <HelperText text={errors.file} />}
                </div>

                <div className="row-btn">
                  <AppButton
                    type="submit"
                    rightIcon={<IconPlusInCircle />}
                    disabled={isLoadingCreate}
                  >
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
