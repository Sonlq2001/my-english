import { FC } from "react";

import IconBookmark from "@app/assets/images/icon-svg/icon-bookmark.svg?react";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";

import {
  WrapArticleDetail,
  HeaderArticleDetail,
  InfoArticle,
} from "./ArticleDetail.styles";
import { ReadingPathsEnum } from "../../constants/reading.paths";

const ArticleDetail: FC = () => {
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

      <div className="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
        maiores recusandae suscipit totam facere unde eum nesciunt molestiae,
        quod corrupti quos officiis dolore sunt ea dignissimos adipisci enim,
        maxime perferendis!
      </div>
    </WrapArticleDetail>
  );
};

export default ArticleDetail;
