import { FC } from "react";

import IconDoubleArrowRight from "@app/assets/images/icon-svg/icon-keyboard-double-arrow-right.svg?react";
import LazyImage from "@app/components/LazyImage/LazyImage";

import { WrapItemArticle } from "./ItemArticle.styles";

const ItemArticle: FC = () => {
  return (
    <WrapItemArticle>
      <LazyImage
        src="https://cdn.pixabay.com/photo/2023/08/19/13/42/flowers-8200510_1280.jpg"
        alt=""
      />
      <div className="article-content">
        <header className="article-header">
          <span className="article-cate">Music</span>
          <span className="article-date">20/07/2024</span>
        </header>
        <h3>I don't see the point of doing that</h3>
        <button className="btn-read">
          <span className="text-read">Read</span>
          <IconDoubleArrowRight />
        </button>
      </div>
    </WrapItemArticle>
  );
};

export default ItemArticle;
