import { FC } from "react";

import Article from "../../components/Article/Article";
import {
  WrapContentReading,
  LayoutReading,
  ColumnLeft,
  ColumnRight,
  ListArticle,
} from "./ReadingScreen.styles";

const ReadingScreen: FC = () => {
  return (
    <WrapContentReading>
      <h2>Reading</h2>

      <LayoutReading>
        <ColumnLeft>
          <h3>Read the document</h3>

          <ListArticle>
            <Article />
            <Article />
            <Article />
            <Article />
          </ListArticle>
        </ColumnLeft>

        <ColumnRight>column 2</ColumnRight>
      </LayoutReading>
    </WrapContentReading>
  );
};

export default ReadingScreen;
