import { FC } from "react";

import { Formik } from "formik";

import TextField from "@app/components/TextField/TextField";
import AppButton from "@app/components/AppButton/AppButton";
import ImageUpload from "@app/components/ImageUpload/ImageUpload";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import {
  SettingPathsEnum,
  SettingSubPathsEnum,
} from "@app/features/setting/setting";

import TitleSetting from "../../components/TitleSetting/TitleSetting";
import { WrapBackPage, WrapFormik } from "./CreatePodcast.styles";

const CreatePodcast: FC = () => {
  return (
    <>
      <TitleSetting title="Podcast" subtitle="Customize your podcast" />

      <WrapBackPage>
        <ReturnButton
          to={`${SettingPathsEnum.SETTINGS}/${SettingSubPathsEnum.PODCAST}`}
        />
      </WrapBackPage>

      <Formik
        initialValues={{
          title: "",
          author: "",
          linkYoutube: "",
          thumbnail: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <WrapFormik>
            <TextField
              label="Title"
              fullWidth
              name="title"
              placeholder="Title podcast"
              isRequire
            />

            <TextField
              label="Author"
              fullWidth
              name="author"
              placeholder="Podcast author"
              isRequire
            />

            <TextField
              label="Link video youtube"
              fullWidth
              name="linkYoutube"
              placeholder="Paste or type link video youtube"
              isRequire
            />

            <ImageUpload
              label="Thumbnail"
              fullWidth
              name="thumbnail"
              getFile={(file) => {
                setFieldValue("thumbnail", file);
              }}
              handleResetFile={() => {
                console.log("reset");
              }}
              imageUrl={values.thumbnail}
            />

            <div className="row-btn">
              <AppButton type="submit">Save</AppButton>
            </div>
          </WrapFormik>
        )}
      </Formik>
    </>
  );
};

export default CreatePodcast;
