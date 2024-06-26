import { FC, useState, memo } from "react";
import clsx from "clsx";
import { Formik, Form } from "formik";
import { Editor as CoreEditor } from "@tiptap/core";
import { unwrapResult } from "@reduxjs/toolkit";

import Modal from "@app/components/Modal/Modal";
import {
  TABS_UPLOAD_IMAGES,
  TABS_UPLOAD,
} from "@app/constants/icon-editor-list.constants";
import { schemaInsertLinkImage } from "@app/helpers/text-editor.helper";
import { TypeMenuImage } from "@app/types/app.types";
import { useAppDispatch } from "@app/redux/store";

import { ContentTabs, TabHeader } from "./MenuImage.styles";
import TabInsertLink from "./TabInsertLink/TabInsertLink";
import TabUpload from "./TabUpload/TabUpload";
import { uploadFile } from "@app/features/app/app";

interface MenuImageProps {
  setIsOpenImage: (open: false) => void;
  editor: CoreEditor;
}

export const initMenuImage = {
  link: "",
  alt: "",
  tab: TABS_UPLOAD.INSERT_LINK,
};

const MenuImage: FC<MenuImageProps> = ({ setIsOpenImage, editor }) => {
  const dispatch = useAppDispatch();
  const [tabUpload, setTabUpload] = useState<TABS_UPLOAD>(
    TABS_UPLOAD.INSERT_LINK
  );

  const handleSubmitImage = async ({ link, alt }: TypeMenuImage) => {
    if (link instanceof File) {
      const formData = new FormData();
      formData.append("file", link);

      await dispatch(uploadFile(formData))
        .then(unwrapResult)
        .then((res) => {
          editor
            .chain()
            .focus()
            .setImage({ src: res.imageUrl, alt: res.publicId })
            .run();
        });
    }

    if (link && typeof link === "string") {
      editor.chain().focus().setImage({ src: link, alt }).run();
    }

    setIsOpenImage(false);
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleTabImage = (tab: TABS_UPLOAD, setValues: Function) => {
    setTabUpload(tab);
    setValues({ ...initMenuImage, tab });
  };

  return (
    <Formik
      initialValues={initMenuImage}
      onSubmit={handleSubmitImage}
      validationSchema={schemaInsertLinkImage}
    >
      {({ submitForm, setValues, isSubmitting }) => (
        <Modal
          open
          textOK="Apply"
          title="Upload Image"
          onClosed={() => setIsOpenImage(false)}
          onSubmit={submitForm}
          disabled={isSubmitting}
        >
          <Form>
            <TabHeader>
              {TABS_UPLOAD_IMAGES.map((tab) => (
                <button
                  key={tab.value}
                  className={clsx(
                    "btn-tab",
                    tabUpload === tab.value ? "tab-active" : ""
                  )}
                  type="button"
                  onClick={() => handleTabImage(tab.value, setValues)}
                >
                  {tab.title}
                </button>
              ))}
            </TabHeader>

            <ContentTabs>
              {TABS_UPLOAD.INSERT_LINK === tabUpload && <TabInsertLink />}
              {TABS_UPLOAD.UPLOAD === tabUpload && <TabUpload name="link" />}
            </ContentTabs>
          </Form>
        </Modal>
      )}
    </Formik>
  );
};

export default memo(MenuImage);
