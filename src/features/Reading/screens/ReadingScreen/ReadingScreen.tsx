import { FC, useEffect, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";

import TitlePage from "@app/components/TitlePage/TitlePage";
import AppButton from "@app/components/AppButton/AppButton";
import { ReadingPathsEnum } from "@app/features/reading/reading";
import { useAppDispatch, useAppSelector } from "@app/redux/store";
import { getDocumentList } from "@app/features/reading/redux/reading.slice";

import Article from "../../components/Article/Article";
import {
  WrapContentReading,
  LayoutReading,
  ColumnLeft,
  ColumnRight,
  ListArticle,
} from "./ReadingScreen.styles";

const ReadingScreen: FC = () => {
  const dispatch = useAppDispatch();
  const documentList = useAppSelector(
    (state) => state.reading.documentData.list
  );
  const [isLoadingDocumentList, setIsLoadingDocumentList] =
    useState<boolean>(true);

  useEffect(() => {
    dispatch(getDocumentList())
      .then(unwrapResult)
      .finally(() => setIsLoadingDocumentList(false));
  }, [dispatch]);

  return (
    <>
      <TitlePage
        title="Read the document"
        subtitle="Repository for all your documents."
      />

      <WrapContentReading>
        {isLoadingDocumentList ? (
          <div>Loading...</div>
        ) : (
          <LayoutReading>
            <ColumnLeft>
              <h3>All documents</h3>

              <ListArticle>
                {documentList &&
                  documentList.length > 0 &&
                  documentList.map((doc) => (
                    <Article article={doc} key={doc.id} />
                  ))}
              </ListArticle>
            </ColumnLeft>

            <ColumnRight>
              <AppButton fullWidth to={ReadingPathsEnum.CREATE_DOCUMENT}>
                Create
              </AppButton>
            </ColumnRight>
          </LayoutReading>
        )}
      </WrapContentReading>
    </>
  );
};

export default ReadingScreen;
