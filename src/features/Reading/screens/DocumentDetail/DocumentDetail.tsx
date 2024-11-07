import { FC, useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";

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
} from "./DocumentDetail.styles";
import { ReadingPathsEnum } from "../../constants/reading.paths";
import {
  useAddMarkDocumentMutation,
  useGetUserInfoQuery,
} from "@app/features/auth/auth";

const DocumentDetail: FC = () => {
  const { document_id: documentId } = useParams<{ document_id: string }>();
  const [positionModal, setPositionModal] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>("");

  const { data: documentDetail, isLoading } = useGetDocumentQuery(
    documentId || ""
  );

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

  const [addMarkDocument] = useAddMarkDocumentMutation();
  const { data, refetch } = useGetUserInfoQuery();

  const handleMarkDocument = async () => {
    if (
      !documentId ||
      (data?.markDocument &&
        data.markDocument.length >= 3 &&
        !isActiveMarkDocument)
    ) {
      return;
    }
    await addMarkDocument(documentId);
    refetch();
  };

  const isActiveMarkDocument = useMemo(
    () => data?.markDocument.some((item) => item.id === documentId),
    [data?.markDocument, documentId]
  );

  return (
    <main>
      <TitlePage title="Reading document" subtitle="" />

      <WrapArticleDetail>
        <ReturnButton to={ReadingPathsEnum.READING} />

        <HeaderArticleDetail>
          <IconBookmark
            className={clsx(isActiveMarkDocument && "active")}
            onClick={handleMarkDocument}
          />
        </HeaderArticleDetail>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {documentDetail ? (
              <>
                <h2>{documentDetail.title}</h2>

                <InfoArticle>
                  {documentDetail.author && (
                    <span>
                      By: <i>{documentDetail.author}</i>
                    </span>
                  )}
                  <span className="dot"></span>
                  <i>{formatDate(documentDetail.createdAt)}</i>
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
                    className="content-editor"
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
    </main>
  );
};

export default DocumentDetail;
