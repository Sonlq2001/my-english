import { FC, memo } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import IconUploadImage from "@app/assets/images/icon-svg/icon-upload-image.svg?react";

import { WrapImageUpload, BoxImageUpload } from "./ImageUpload.styles";

interface ImageUploadProps {
  label?: string;
  name: string;
  fullWidth?: boolean;
}

const ImageUpload: FC<ImageUploadProps> = ({ label, name, fullWidth }) => {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === "string"
          ? isPropValid(propName)
          : true;
      }}
    >
      <WrapImageUpload fullWidth={fullWidth}>
        {label && <div className="title-upload">{label}</div>}

        <BoxImageUpload htmlFor={name}>
          <IconUploadImage />
          <span className="des-upload">
            <span className="highlight-upload">Click to upload</span> or drag
            and drop
          </span>
          <span className="warning-upload">Max. File Size: 3MB</span>
          <input type="file" id={name} hidden name={name} />
        </BoxImageUpload>
      </WrapImageUpload>
    </StyleSheetManager>
  );
};

export default memo(ImageUpload);
