import { FC, useEffect, useMemo, useState } from "react";
import { Formik } from "formik";
import debounce from "lodash.debounce";
import { useParams, useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";

import TitlePage from "@app/components/TitlePage/TitlePage";

import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import TextField from "@app/components/TextField/TextField";
import TextEditor2 from "@app/components/TextEditor2/TextEditor2";
import AppButton from "@app/components/AppButton/AppButton";
import IconPlusInCircle from "@app/assets/images/icon-svg/icon-plus-in-circle.svg?react";
import HelperText from "@app/components/HelperText/HelperText";
import {
  ReadingPathsEnum,
  getDocument,
  resetDocumentDetail,
  updateDocument,
  createDocument,
  schemaCreateDocument,
  ReqDocument,
  LIST_TOPICS,
  TOPIC_KEY,
} from "@app/features/reading/reading";
import RadioGroup from "@app/components/RadioGroup/RadioGroup";
import { useAppDispatch, useAppSelector } from "@app/redux/store";

import { WrapCreateDocument, WrapFormik } from "./CreateDocument.styles";
import {
  SettingPathsEnum,
  SettingSubPathsEnum,
} from "@app/features/setting/setting";

const CreateDocument: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoadingDocument, setIsLoadingDocument] = useState<boolean>(false);
  const { document_id: documentId } = useParams<{ document_id: string }>();
  const [isLoadingDoc, setIsLoadingDoc] = useState<boolean>(false);
  const documentDetail = useAppSelector(
    (state) => state.reading.documentDetail
  );

  useEffect(() => {
    if (!documentId) return;

    setIsLoadingDoc(true);
    dispatch(getDocument(documentId))
      .then(unwrapResult)
      .finally(() => setIsLoadingDoc(false));
  }, [documentId, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(resetDocumentDetail());
    };
  }, [dispatch]);

  const handleActionDocument = (values: ReqDocument) => {
    setIsLoadingDocument(true);
    const actionDispatchDoc = documentId
      ? dispatch(updateDocument({ ...values, documentId }))
      : dispatch(createDocument(values));

    actionDispatchDoc
      .then(unwrapResult)
      .then((res) => {
        navigate(
          ReadingPathsEnum.DOCUMENT_DETAIL.replace(":document_id", res.id)
        );
      })
      .finally(() => setIsLoadingDocument(false));
  };

  const { title, subtitle } = useMemo(() => {
    if (documentId) {
      return {
        title: "Edit the document",
        subtitle: "Edit additional information in the document.",
      };
    }
    return {
      title: "Create a new document",
      subtitle:
        "Create a new document so you can easily refer back to it when necessary.",
    };
  }, [documentId]);

  const initDoc = useMemo(() => {
    return {
      title: documentDetail?.title || "",
      description: documentDetail?.description || "",
      author: documentDetail?.author || "",
      shortDescription: documentDetail?.shortDescription || "",
      topic: documentDetail?.topic || TOPIC_KEY.Study,
    };
  }, [documentDetail]);

  return (
    <main>
      <TitlePage title={title} subtitle={subtitle} />

      <WrapCreateDocument>
        <ReturnButton
          to={`${SettingPathsEnum.SETTINGS}/${SettingSubPathsEnum.DOCUMENTS}`}
        />

        {isLoadingDoc ? (
          <div>Loading...</div>
        ) : (
          <Formik
            initialValues={initDoc}
            onSubmit={handleActionDocument}
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

                <RadioGroup options={LIST_TOPICS} name="topic" label="Topic" />

                <TextField
                  label="Author"
                  fullWidth
                  name="author"
                  placeholder="Article author"
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
                  {errors.description && (
                    <HelperText text={errors.description} />
                  )}
                </div>

                <div className="row-btn">
                  <AppButton
                    type="submit"
                    rightIcon={<IconPlusInCircle />}
                    disabled={isLoadingDocument}
                  >
                    {documentId ? "Edit" : "Create"}
                  </AppButton>
                </div>
              </WrapFormik>
            )}
          </Formik>
        )}
      </WrapCreateDocument>
    </main>
  );
};

export default CreateDocument;
