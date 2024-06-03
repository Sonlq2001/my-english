import { FC, useState, useMemo, useEffect } from "react";
import { Formik } from "formik";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate, useParams } from "react-router-dom";

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
  getInitPodcast,
  schemaPodcast,
} from "@app/features/setting/helpers/create-podcast.helper";
import HelperText from "@app/components/HelperText/HelperText";
import TitleSetting from "@app/features/setting/components/TitleSetting/TitleSetting";
import { useAppDispatch, useAppSelector } from "@app/redux/store";
import { uploadFile } from "@app/features/app/app";
import {
  ListeningPathsEnum,
  createPodcast,
  getPodcast,
  resetPodcast,
  updatePodcast,
} from "@app/features/listening/listening";

import { WrapBackPage, WrapFormik } from "./CreatePodcast.styles";
import { InitCreatePodcast } from "@app/features/listening/types/listening.type";

const CreatePodcast: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { podcast_id: podcastId } = useParams<{ podcast_id: string }>();
  const [isLoadingCeratePodcast, setIsLoadingCreatePodcast] =
    useState<boolean>(false);
  const [isLoadingGetPodcast, setIsLoadingGetPodcast] =
    useState<boolean>(false);
  const podcastDetail = useAppSelector(
    (state) => state.listening.podcastDetail
  );

  useEffect(() => {
    if (!podcastId) return;
    setIsLoadingGetPodcast(true);
    dispatch(getPodcast(podcastId)).finally(() =>
      setIsLoadingGetPodcast(false)
    );
  }, [dispatch, podcastId]);

  useEffect(() => {
    return () => {
      dispatch(resetPodcast());
    };
  }, [dispatch]);

  const handleCreatePodcast = async ({ file, ...reset }: InitCreatePodcast) => {
    try {
      setIsLoadingCreatePodcast(true);
      let dataImage = null;
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        dataImage = unwrapResult(await dispatch(uploadFile(formData)));
      }

      const dispatchAction = podcastId
        ? dispatch(updatePodcast({ ...reset, thumbnail: dataImage, podcastId }))
        : dispatch(createPodcast({ ...reset, thumbnail: dataImage }));

      const res = unwrapResult(await dispatchAction);

      navigate(
        ListeningPathsEnum.PODCAST_DETAIL.replace(":podcast_id", res.id)
      );
    } catch (error) {
      // TODO: Error
    } finally {
      setIsLoadingCreatePodcast(false);
    }
  };

  const { title, subtitle } = useMemo(() => {
    if (podcastId) {
      return { title: "Podcast editing", subtitle: "Edit your podcast." };
    }
    return { title: "Podcast create", subtitle: "Create your podcast." };
  }, [podcastId]);

  return (
    <>
      <TitleSetting title={title} subtitle={subtitle} />

      <WrapBackPage>
        <ReturnButton
          to={`${SettingPathsEnum.SETTINGS}/${SettingSubPathsEnum.PODCAST}`}
        />
      </WrapBackPage>

      {isLoadingGetPodcast ? (
        <div>Loading...</div>
      ) : (
        <Formik
          initialValues={getInitPodcast(podcastDetail)}
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
                      values: { ...values, file: null, thumbnail: "" },
                    });
                  }}
                  imageUrl={values.file ?? values.thumbnail ?? ""}
                />
                {errors?.file && <HelperText text={errors.file} />}
              </div>

              <div className="row-btn">
                <AppButton type="submit" disabled={isLoadingCeratePodcast}>
                  {podcastId ? "Edit" : "Create"}
                </AppButton>
              </div>
            </WrapFormik>
          )}
        </Formik>
      )}
    </>
  );
};

export default CreatePodcast;
