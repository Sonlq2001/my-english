import { FC, memo, useState, useEffect } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import IconUploadImage from "@app/assets/images/icon-svg/icon-upload-image.svg?react";
import IconTrash from "@app/assets/images/icon-svg/icon-trash.svg?react";

import { WrapImageUpload, BoxImageUpload } from "./ImageUpload.styles";

interface ImageUploadProps {
  label?: string;
  name: string;
  fullWidth?: boolean;
  getFile: (file: File) => void;
  handleResetFile: () => void;
  imageUrl: File | string;
}

const ImageUpload: FC<ImageUploadProps> = ({
  label,
  name,
  fullWidth,
  getFile,
  handleResetFile,
  imageUrl,
}) => {
  const [linkImage, setLinkImage] = useState<File | string>(imageUrl);

  const handlePreviewImage = (file: File | null) => {
    if (!file) return;

    const linkRenderImage = URL.createObjectURL(file);
    setLinkImage(linkRenderImage);
    getFile(file);
  };

  useEffect(() => {
    if ((!linkImage && imageUrl) || linkImage instanceof File) return;
    return () => {
      URL.revokeObjectURL(linkImage);
    };
  }, [imageUrl, linkImage]);

  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === "string"
          ? isPropValid(propName)
          : true;
      }}
    >
      <WrapImageUpload
        fullWidth={fullWidth}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files ? e.dataTransfer.files[0] : null;
          handlePreviewImage(file);
        }}
      >
        {label && <div className="title-upload">{label}</div>}

        <BoxImageUpload htmlFor={name}>
          {linkImage && typeof linkImage === "string" && imageUrl ? (
            <>
              <img src={linkImage} alt="preview-file" className="show-image" />
              <button
                className="btn-clear"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleResetFile();
                }}
              >
                <IconTrash />
              </button>
            </>
          ) : (
            <>
              <IconUploadImage />
              <span className="des-upload">
                <span className="highlight-upload">Click to upload</span> or
                drag and drop
              </span>
              <span className="warning-upload">Max. File Size: 3MB</span>
            </>
          )}
        </BoxImageUpload>
        <input
          type="file"
          id={name}
          hidden
          name={name}
          onChange={(e) => {
            const file = e.target.files ? e.target.files[0] : null;
            handlePreviewImage(file);
          }}
          accept="image/png, image/jpeg"
        />
      </WrapImageUpload>
    </StyleSheetManager>
  );
};

export default memo(ImageUpload);
