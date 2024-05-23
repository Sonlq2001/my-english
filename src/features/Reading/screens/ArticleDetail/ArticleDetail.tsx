import { FC, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import IconBookmark from "@app/assets/images/icon-svg/icon-bookmark.svg?react";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import ModalTranslate from "@app/components/ModalTranslate/ModalTranslate";
import TitlePage from "@app/components/TitlePage/TitlePage";
import ClickOutside from "@app/components/ClickOutside/ClickOutside";
import { useGetDocumentQuery } from "@app/features/reading/reading";
import { formatDate } from "@app/helpers/time";

import {
  WrapArticleDetail,
  HeaderArticleDetail,
  InfoArticle,
} from "./ArticleDetail.styles";
import { ReadingPathsEnum } from "../../constants/reading.paths";

const ArticleDetail: FC = () => {
  const { article_id } = useParams<{ article_id: string }>();
  const [positionModal, setPositionModal] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>("");
  const { data, error, isLoading } = useGetDocumentQuery(article_id || "");

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

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (!data || error) {
    return <div>Error</div>;
  }

  return (
    <>
      <TitlePage title="Reading document" subtitle="" />

      <WrapArticleDetail>
        <ReturnButton to={ReadingPathsEnum.READING} />

        <HeaderArticleDetail>
          <IconBookmark />
        </HeaderArticleDetail>

        <h2>{data.title}</h2>

        <InfoArticle>
          {data.author && <span>By: {data.author}</span>}
          <span className="dot"></span>
          <span>{formatDate(data.createdAt)}</span>
        </InfoArticle>

        <div
          className="content"
          onDoubleClick={handleShowModalTranslate}
          onMouseUp={handleShowModalTranslate}
          onClick={() => setIsOpenModal(false)}
        >
          {data.shortDescription && <h4>{data.shortDescription}</h4>}
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
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
      </WrapArticleDetail>
    </>
  );
};

export default ArticleDetail;
