import { FC, useState, memo } from "react";
import clsx from "clsx";
import { Formik, Form } from "formik";

import Modal from "@app/components/Modal/Modal";
import {
  TABS_UPLOAD_IMAGES,
  TABS_UPLOAD,
} from "@app/constants/icon-editor-list.constants";

import { ContentTabs, TabHeader } from "./MenuImage.styles";
import TabInsertLink from "./TabInsertLink/TabInsertLink";
import TabUpload from "./TabUpload/TabUpload";

interface MenuImageProps {
  setIsOpenImage: (open: false) => void;
}
const MenuImage: FC<MenuImageProps> = ({ setIsOpenImage }) => {
  const [tabUpload, setTabUpload] = useState<TABS_UPLOAD>(
    TABS_UPLOAD.INSERT_LINK
  );

  const handleSubmitImage = () => {
    console.log("submit");
  };

  const handleTabImage = (tab: TABS_UPLOAD) => {
    setTabUpload(tab);
  };

  return (
    <Modal
      open
      textOK="Apply"
      title="Upload Image"
      onClosed={() => setIsOpenImage(false)}
      onSubmit={handleSubmitImage}
    >
      <Formik initialValues={{}} onSubmit={() => handleSubmitImage()}>
        {() => (
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
                  onClick={() => handleTabImage(tab.value)}
                >
                  {tab.title}
                </button>
              ))}
            </TabHeader>

            <ContentTabs>
              {TABS_UPLOAD.INSERT_LINK === tabUpload && <TabInsertLink />}
              {TABS_UPLOAD.UPLOAD === tabUpload && <TabUpload />}
            </ContentTabs>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default memo(MenuImage);
