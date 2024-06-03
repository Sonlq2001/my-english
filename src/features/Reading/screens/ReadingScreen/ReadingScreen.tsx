import { FC } from "react";

import TitlePage from "@app/components/TitlePage/TitlePage";
import AppButton from "@app/components/AppButton/AppButton";

import Article from "../../components/Article/Article";
import {
  WrapContentReading,
  LayoutReading,
  ColumnLeft,
  ColumnRight,
  ListArticle,
} from "./ReadingScreen.styles";
import { useGetListDocumentsQuery } from "../../redux/reading.query";
import { ReadingPathsEnum } from "@app/features/reading/reading";

const ReadingScreen: FC = () => {
  const { data, error, isLoading } = useGetListDocumentsQuery();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (!data || error) {
    return <div>Error</div>;
  }

  return (
    <>
      <TitlePage
        title="Read the document"
        subtitle="Repository for all your documents."
      />

      <WrapContentReading>
        <LayoutReading>
          <ColumnLeft>
            <h3>All documents</h3>

            <ListArticle>
              {data.length > 0 &&
                data.map((doc) => <Article article={doc} key={doc.id} />)}
            </ListArticle>
          </ColumnLeft>

          <ColumnRight>
            <AppButton fullWidth to={ReadingPathsEnum.CREATE_DOCUMENT}>
              Create
            </AppButton>
          </ColumnRight>
        </LayoutReading>
      </WrapContentReading>
    </>
  );
};

export default ReadingScreen;
