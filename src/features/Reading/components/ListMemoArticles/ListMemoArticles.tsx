import { FC } from "react";

import {
  ItemMemoArticle,
  WrapListMemoArticles,
} from "./ListMemoArticles.styles";

const ListMemoArticles: FC = () => {
  return (
    <WrapListMemoArticles>
      <ItemMemoArticle>
        <span>I don't see the point of doing that</span>
        <span className="last-open">
          Last open: <i>10:30 21/07/2024</i>
        </span>
        <button className="btn-continue">Continue</button>
      </ItemMemoArticle>
    </WrapListMemoArticles>
  );
};

export default ListMemoArticles;
