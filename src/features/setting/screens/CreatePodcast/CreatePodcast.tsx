import { FC, useState } from "react";
import { Formik } from "formik";

import TextField from "@app/components/TextField/TextField";
import AppButton from "@app/components/AppButton/AppButton";
import ImageUpload from "@app/components/ImageUpload/ImageUpload";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import {
  SettingPathsEnum,
  SettingSubPathsEnum,
} from "@app/features/setting/setting";
import { LIST_TOPICS_PODCAST } from "@app/features/setting/constants/setting.constants";
import RadioGroup from "@app/components/RadioGroup/RadioGroup";
import {
  initCreatePodcast,
  schemaPodcast,
} from "@app/features/setting/helpers/create-podcast.helper";
import HelperText from "@app/components/HelperText/HelperText";
import { InitCreatePodcast } from "@app/features/setting/types/create-podcast.type";
import TitleSetting from "@app/features/setting/components/TitleSetting/TitleSetting";
import { useAppDispatch } from "@app/redux/store";
import { createPodcast } from "@app/features/setting/redux/setting.slice";

import { WrapBackPage, WrapFormik } from "./CreatePodcast.styles";
import { unwrapResult } from "@reduxjs/toolkit";
import { uploadFile } from "@app/features/app/app";
import { useNavigate } from "react-router-dom";
import { ListeningPathsEnum } from "@app/features/listening/listening";

const CreatePodcast: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoadingCeratePodcast, setIsLoadingCreatePodcast] =
    useState<boolean>(false);

  const handleCreatePodcast = async ({ file, ...reset }: InitCreatePodcast) => {
    try {
      setIsLoadingCreatePodcast(true);
      let dataImage = null;
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        dataImage = unwrapResult(await dispatch(uploadFile(formData)));
      }

      const res = unwrapResult(
        await dispatch(createPodcast({ ...reset, thumbnail: dataImage }))
      );

      navigate(
        ListeningPathsEnum.PODCAST_DETAIL.replace(":podcast_id", res.id)
      );
    } catch (error) {
      // TODO: Error
    } finally {
      setIsLoadingCreatePodcast(false);
    }
  };

  return (
    <>
      <TitleSetting title="Podcast" subtitle="Create your podcast." />

      <WrapBackPage>
        <ReturnButton
          to={`${SettingPathsEnum.SETTINGS}/${SettingSubPathsEnum.PODCAST}`}
        />
      </WrapBackPage>

      <Formik
        initialValues={initCreatePodcast}
        onSubmit={handleCreatePodcast}
        validationSchema={schemaPodcast}
      >
        {({ values, setFieldValue, resetForm, errors }) => (
          <WrapFormik>
            <TextField
              label="Title"
              fullWidth
              name="title"
              placeholder="Title podcast"
              isRequire
            />

            <RadioGroup
              options={LIST_TOPICS_PODCAST}
              name="topic"
              label="Topic"
            />

            <TextField
              label="Author"
              fullWidth
              name="author"
              placeholder="Podcast author"
              isRequire
            />

            <TextField
              label="Id of the youtube video"
              fullWidth
              name="videoId"
              placeholder="Paste or type the youtube video id"
              isRequire
            />

            <TextField
              label="Description"
              fullWidth
              name="description"
              placeholder="Description video or podcast"
              isRequire
            />

            <div>
              <ImageUpload
                label="Thumbnail"
                fullWidth
                name="file"
                getFile={(file) => {
                  setFieldValue("file", file);
                }}
                handleResetFile={() => {
                  resetForm({
                    values: { ...values, file: null },
                  });
                }}
                imageUrl={values.file ?? ""}
              />
              {errors?.file && <HelperText text={errors.file} />}
            </div>

            <div className="row-btn">
              <AppButton type="submit" disabled={isLoadingCeratePodcast}>
                Create
              </AppButton>
            </div>
          </WrapFormik>
        )}
      </Formik>
    </>
  );
};

export default CreatePodcast;
