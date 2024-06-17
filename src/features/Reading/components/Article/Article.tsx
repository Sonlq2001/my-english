import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { formatDate } from "@app/helpers/time";
import IconWriting from "@app/assets/images/icon-svg/icon-writing.svg?react";
import IconTrash from "@app/assets/images/icon-svg/icon-trash.svg?react";
import IconWarning from "@app/assets/images/icon-svg/icon-warning.svg?react";
import Modal from "@app/components/Modal/Modal";

import { ContentConfirm, WrapArticle } from "./Article.styles";
import { ResDocument } from "../../types/reading.type";
import { ReadingPathsEnum } from "../../constants/reading.paths";

interface ArticleProps {
  article: ResDocument;
}

const Article: FC<ArticleProps> = ({ article }) => {
  const [openModalConfirmDelete, setOpenModalConfirmDelete] =
    useState<boolean>(false);

  const handleRemoveArticle = () => {
    // TODO: call api delete
  };

  return (
    <>
      <WrapArticle>
        <span className="topic-article">{article.topic}</span>
        <Link
          to={ReadingPathsEnum.ARTICLE_DETAIL.replace(
            ":article_id",
            article.id
          )}
          className="title-article"
        >
          {article.title}
        </Link>
        {article.shortDescription && (
          <p className="des-article">{article.shortDescription}</p>
        )}
        <span className="time-article">{formatDate(article.createdAt)}</span>

        <div className="controls" onClick={(e) => e.preventDefault()}>
          <IconWriting />
          <IconTrash onClick={() => setOpenModalConfirmDelete(true)} />
        </div>
      </WrapArticle>

      {openModalConfirmDelete && (
        <Modal
          title="You really want to delete !"
          open
          onClosed={() => setOpenModalConfirmDelete(false)}
          textOK="Delete"
          onSubmit={handleRemoveArticle}
        >
          <ContentConfirm>
            <IconWarning />
            <p>You will not be able to restore it after deletion.</p>
          </ContentConfirm>
        </Modal>
      )}
    </>
  );
};

export default Article;
