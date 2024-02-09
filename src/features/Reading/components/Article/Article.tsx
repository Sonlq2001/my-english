import { FC } from "react";

import { WrapArticle } from "./Article.styles";

const Article: FC = () => {
  return (
    <WrapArticle>
      <span className="topic-article">Design</span>
      <h4 className="title-article">
        House GOP fails to impeach Homeland Security Secretary Mayorkas
      </h4>
      <p className="des-article">
        House Republicans were exasperated after the stunning defeat of their
        resolution to impeach Homeland Security Secretary Alejandro Mayorkas
      </p>

      <span className="time-article">07/02/2024</span>
    </WrapArticle>
  );
};

export default Article;
