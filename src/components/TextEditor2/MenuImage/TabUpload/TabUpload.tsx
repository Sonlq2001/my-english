import { FC } from "react";
import { useFormikContext } from "formik";

import ImageUpload from "@app/components/ImageUpload/ImageUpload";
import HelperText from "@app/components/HelperText/HelperText";
import { TypeMenuImage } from "@app/types/app.types";
import { TABS_UPLOAD } from "@app/constants/icon-editor-list.constants";

import { initMenuImage } from "../MenuImage";

interface TabUploadProps {
  name: string;
}

const TabUpload: FC<TabUploadProps> = ({ name }) => {
  const { errors, resetForm, setFieldValue, values } =
    useFormikContext<TypeMenuImage>();

  const handleResetFile = () => {
    resetForm({ values: { ...initMenuImage, tab: TABS_UPLOAD.UPLOAD } });
  };

  return (
    <>
      <ImageUpload
        name={name}
        fullWidth
        getFile={(file) => setFieldValue(name, file)}
        handleResetFile={handleResetFile}
        imageUrl={values.link}
      />
      {errors?.link && <HelperText text={errors.link} />}
    </>
  );
};

export default TabUpload;
