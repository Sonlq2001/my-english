import { FC } from "react";
import { Link } from "react-router-dom";

import IconDoubleArrowRight from "@app/assets/images/icon-svg/icon-keyboard-double-arrow-right.svg?react";
// import LazyImage from "@app/components/LazyImage/LazyImage";

import { ReadingPathsEnum, ResDocument } from "@app/features/reading/reading";
import { formatDate } from "@app/helpers/time";

import { WrapItemArticle } from "./ItemArticle.styles";
import textParser from "@app/helpers/text-parser";

interface ItemArticleProps {
  document: Pick<
    ResDocument,
    "title" | "topic" | "createdAt" | "id" | "shortDescription" | "description"
  >;
}

const ItemArticle: FC<ItemArticleProps> = ({ document }) => {
  return (
    <WrapItemArticle>
      {/* <LazyImage
        src="https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg"
        alt=""
      /> */}
      <div className="article-content">
        <div className="article-header">
          <span className="article-cate">{document.topic}</span>
          <span className="article-date">{formatDate(document.createdAt)}</span>
        </div>
        <h3>{document.title}</h3>
        <p>{document?.shortDescription || textParser(document.description)}</p>
        <Link
          to={ReadingPathsEnum.DOCUMENT_DETAIL.replace(
            ":document_id",
            document.id
          )}
          className="btn-read"
        >
          <span className="text-read">Read</span>
          <IconDoubleArrowRight />
        </Link>
      </div>
    </WrapItemArticle>
  );
};

export default ItemArticle;
