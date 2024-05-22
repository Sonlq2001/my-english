import { FC } from "react";
import { Link } from "react-router-dom";

import { formatDate } from "@app/helpers/time";

import { WrapArticle } from "./Article.styles";
import { ResListDocuments } from "../../types/reading.type";
import { ReadingPathsEnum } from "../../constants/reading.paths";

interface ArticleProps {
  article: ResListDocuments;
}

const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <WrapArticle>
      <span className="topic-article">{article.topic}</span>
      <Link
        to={ReadingPathsEnum.ARTICLE_DETAIL.replace(":article_id", article.id)}
        className="title-article"
      >
        {article.title}
      </Link>
      {article.shortDescription && (
        <p className="des-article">{article.shortDescription}</p>
      )}
      <span className="time-article">{formatDate(article.createdAt)}</span>
    </WrapArticle>
  );
};

export default Article;
