import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";

import { formatDate } from "@app/helpers/time";
import IconWriting from "@app/assets/images/icon-svg/icon-writing.svg?react";
import IconTrash from "@app/assets/images/icon-svg/icon-trash.svg?react";
import IconWarning from "@app/assets/images/icon-svg/icon-warning.svg?react";
import Modal from "@app/components/Modal/Modal";
import { useAppDispatch } from "@app/redux/store";
import { deleteDocument } from "@app/features/reading/reading";

import { ContentConfirm, WrapArticle } from "./Article.styles";
import { ResDocument } from "../../types/reading.type";
import { ReadingPathsEnum } from "../../constants/reading.paths";

interface ArticleProps {
  article: ResDocument;
}

const Article: FC<ArticleProps> = ({ article }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [openModalConfirmDelete, setOpenModalConfirmDelete] =
    useState<boolean>(false);
  const [disabledBtnSubmit, setDisabledBtnSubmit] = useState<boolean>(false);

  const handleRemoveArticle = () => {
    setDisabledBtnSubmit(true);
    dispatch(deleteDocument(article.id))
      .then(unwrapResult)
      .finally(() => {
        setOpenModalConfirmDelete(false);
        setDisabledBtnSubmit(false);
      });
  };

  const handleRedirectToEditDoc = () => {
    navigate(
      ReadingPathsEnum.EDIT_DOCUMENT.replace(":document_id", article.id)
    );
  };

  return (
    <>
      <WrapArticle>
        <span className="topic-article">{article.topic}</span>
        <Link
          to={ReadingPathsEnum.DOCUMENT_DETAIL.replace(
            ":document_id",
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
          <IconWriting onClick={handleRedirectToEditDoc} />
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
          disabled={disabledBtnSubmit}
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
