import { FC, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";

import { useAppDispatch, useAppSelector } from "@app/redux/store";
import IconBookmark from "@app/assets/images/icon-svg/icon-bookmark.svg?react";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import ModalTranslate from "@app/components/ModalTranslate/ModalTranslate";
import TitlePage from "@app/components/TitlePage/TitlePage";
import ClickOutside from "@app/components/ClickOutside/ClickOutside";
import { getDocument } from "@app/features/reading/reading";
import { formatDate } from "@app/helpers/time";

import {
  WrapArticleDetail,
  HeaderArticleDetail,
  InfoArticle,
} from "./ArticleDetail.styles";
import { ReadingPathsEnum } from "../../constants/reading.paths";

const ArticleDetail: FC = () => {
  const dispatch = useAppDispatch();
  const [isLoadingDoc, setIsLoadingDoc] = useState<boolean>(true);
  const { article_id: articleId } = useParams<{ article_id: string }>();
  const [positionModal, setPositionModal] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>("");
  const documentDetail = useAppSelector(
    (state) => state.reading.documentDetail
  );

  useEffect(() => {
    if (!articleId) return;

    dispatch(getDocument(articleId))
      .then(unwrapResult)
      .finally(() => setIsLoadingDoc(false));
  }, [articleId, dispatch]);

  const handleShowModalTranslate = (e: React.MouseEvent<HTMLElement>) => {
    const instanceSelect = document.all
      ? document.createRange()
      : document.getSelection();

    if (instanceSelect) {
      const selection = window.getSelection();
      const valueSelected = String(selection).trim();

      if (!selection || !valueSelected) {
        return;
      }
      const viewportWidth =
        window.innerWidth || document.documentElement.clientWidth;

      const rectInfo = selection.getRangeAt(0).getBoundingClientRect();

      const scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      // 330 = (300 = width of modal, 30 = padding-right content), 15 = height between lines
      setIsOpenModal(true);
      setPositionModal({
        x:
          rectInfo.x + 330 + rectInfo.width >= viewportWidth
            ? e.clientX - 330
            : e.clientX,
        y: e.clientY + scrollTop + 15,
      });
      setCurrentValue(valueSelected);
    }
  };

  const handleCloseModal = useCallback(() => {
    setPositionModal({ x: 0, y: 0 });
    setIsOpenModal(false);
  }, []);

  useEffect(() => {
    if (!isOpenModal) {
      setCurrentValue("");
    }
  }, [isOpenModal]);

  return (
    <>
      <TitlePage title="Reading document" subtitle="" />

      <WrapArticleDetail>
        <ReturnButton to={ReadingPathsEnum.READING} />

        <HeaderArticleDetail>
          <IconBookmark />
        </HeaderArticleDetail>

        {isLoadingDoc ? (
          <div>Loading...</div>
        ) : (
          <>
            {documentDetail ? (
              <>
                <h2>{documentDetail.title}</h2>

                <InfoArticle>
                  {documentDetail.author && (
                    <span>By: {documentDetail.author}</span>
                  )}
                  <span className="dot"></span>
                  <span>{formatDate(documentDetail.createdAt)}</span>
                </InfoArticle>

                <div
                  className="content"
                  onDoubleClick={handleShowModalTranslate}
                  onMouseUp={handleShowModalTranslate}
                  onClick={() => setIsOpenModal(false)}
                >
                  {documentDetail.shortDescription && (
                    <h4>{documentDetail.shortDescription}</h4>
                  )}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: documentDetail.description,
                    }}
                  />
                </div>

                {isOpenModal && (
                  <ClickOutside onOutsideClick={handleCloseModal}>
                    <ModalTranslate
                      x={positionModal.x}
                      y={positionModal.y}
                      onCloseModal={handleCloseModal}
                      currentValue={currentValue}
                    />
                  </ClickOutside>
                )}
              </>
            ) : (
              <div>Not found</div>
            )}
          </>
        )}
      </WrapArticleDetail>
    </>
  );
};

export default ArticleDetail;
