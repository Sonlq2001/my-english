import { FC, useState, useEffect, useCallback } from "react";

import IconBookmark from "@app/assets/images/icon-svg/icon-bookmark.svg?react";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import ModalTranslate from "@app/components/ModalTranslate/ModalTranslate";

import {
  WrapArticleDetail,
  HeaderArticleDetail,
  InfoArticle,
} from "./ArticleDetail.styles";
import { ReadingPathsEnum } from "../../constants/reading.paths";
import ClickOutside from "@app/components/ClickOutside/ClickOutside";

const ArticleDetail: FC = () => {
  const [positionModal, setPositionModal] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [previousSelection, setPreviousSelection] = useState("");

  const handleShowModalTranslate = (e: React.MouseEvent<HTMLElement>) => {
    const instanceSelect = document.all
      ? document.createRange()
      : document.getSelection();

    if (instanceSelect) {
      const selection = window.getSelection();
      const valueSelected = String(selection).trim();

      if (!selection || !valueSelected || valueSelected === previousSelection) {
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
      setPreviousSelection(valueSelected);
    }
  };

  const handleCloseModal = useCallback(() => {
    setPositionModal({ x: 0, y: 0 });
    setIsOpenModal(false);
  }, []);

  useEffect(() => {
    if (!isOpenModal) {
      setPreviousSelection("");
    }
  }, [isOpenModal]);

  useEffect(() => {}, []);

  return (
    <WrapArticleDetail>
      <ReturnButton to={ReadingPathsEnum.READING} />

      <HeaderArticleDetail>
        <IconBookmark />
      </HeaderArticleDetail>

      <h2>Learn Data Structures and Algorithms | DSA Tutorial</h2>

      <InfoArticle>
        <span>By: Sown</span>
        <span className="dot"></span>
        <span>18 Oct 2024</span>
      </InfoArticle>

      <div
        className="content"
        onDoubleClick={handleShowModalTranslate}
        onMouseUp={handleShowModalTranslate}
      >
        <h4>abc lasjj</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          maiores recusandae suscipit totam facere unde eum nesciunt molestiae,
          quod corrupti quos officiis dolore sunt ea dignissimos adipisci enim,
          maxime perferendis!
        </p>
        <span>f ajg23 pasdfi </span>
      </div>

      {isOpenModal && (
        <ClickOutside onOutsideClick={handleCloseModal}>
          <ModalTranslate
            x={positionModal.x}
            y={positionModal.y}
            onCloseModal={handleCloseModal}
          />
        </ClickOutside>
      )}
    </WrapArticleDetail>
  );
};

export default ArticleDetail;
