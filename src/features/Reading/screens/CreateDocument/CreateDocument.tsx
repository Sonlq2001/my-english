import { FC, useMemo } from "react";
import { Formik } from "formik";
import debounce from "lodash.debounce";
import { useParams } from "react-router-dom";

import TitlePage from "@app/components/TitlePage/TitlePage";
import {
  WrapCreateDocument,
  WrapFormik,
} from "@app/features/reading/screens/CreateDocument/CreateDocument.styles";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import TextField from "@app/components/TextField/TextField";
import TextEditor2 from "@app/components/TextEditor2/TextEditor2";
import AppButton from "@app/components/AppButton/AppButton";
import IconPlusInCircle from "@app/assets/images/icon-svg/icon-plus-in-circle.svg?react";
import HelperText from "@app/components/HelperText/HelperText";
import { ReadingPathsEnum } from "@app/features/reading/reading";
import {
  initDocument,
  schemaCreateDocument,
} from "@app/features/reading/helpers/create-document.helpers";
import RadioGroup from "@app/components/RadioGroup/RadioGroup";
import { LIST_TOPICS_DOCUMENT } from "@app/features/reading/constants/reading.constants";

const CreateDocument: FC = () => {
  const { document_id: documentId } = useParams<{ document_id: string }>();

  const handleCreateDocument = () => {};

  const { title, subtitle } = useMemo(() => {
    if (documentId) {
      return {
        title: "Update the document",
        subtitle: "Update additional information in the document.",
      };
    }
    return {
      title: "Create a new document",
      subtitle:
        "Create a new document so you can easily refer back to it when necessary.",
    };
  }, [documentId]);

  return (
    <>
      <TitlePage title={title} subtitle={subtitle} />

      <WrapCreateDocument>
        <ReturnButton to={ReadingPathsEnum.READING} />
        <Formik
          initialValues={initDocument}
          onSubmit={handleCreateDocument}
          validationSchema={schemaCreateDocument}
        >
          {({ setFieldValue, errors, values }) => (
            <WrapFormik>
              <TextField
                label="Title document"
                fullWidth
                name="title"
                placeholder="Article title"
                isRequire
              />

              <TextField
                label="Short description"
                fullWidth
                name="shortDescription"
                placeholder="Brief description of the article"
              />

              <RadioGroup
                options={LIST_TOPICS_DOCUMENT}
                name="topic"
                label="Topic"
              />

              <TextField
                label="Author"
                fullWidth
                name="author"
                placeholder="Article author"
                isRequire
              />

              <div>
                <TextEditor2
                  label="Content document"
                  isRequire
                  value={values.description}
                  getValue={debounce((value) => {
                    setFieldValue("description", value);
                  }, 300)}
                />
                {errors.description && <HelperText text={errors.description} />}
              </div>

              <div className="row-btn">
                <AppButton type="submit" rightIcon={<IconPlusInCircle />}>
                  {documentId ? "Edit" : "Create"}
                </AppButton>
              </div>
            </WrapFormik>
          )}
        </Formik>
      </WrapCreateDocument>
    </>
  );
};

export default CreateDocument;
