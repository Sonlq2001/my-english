import { FC } from "react";
import { Link } from "react-router-dom";

import { useGetUserInfoQuery } from "@app/features/auth/auth";

import {
  ItemMemoArticle,
  WrapListMemoArticles,
} from "./ListMemoArticles.styles";
import { ReadingPathsEnum } from "@app/features/reading/reading";

const ListMemoArticles: FC = () => {
  const { data } = useGetUserInfoQuery();
  return (
    <WrapListMemoArticles>
      {data?.markDocument && data.markDocument.length > 0 ? (
        data.markDocument.map((item) => (
          <ItemMemoArticle key={item.id}>
            <h4>{item.title}</h4>
            <span className="last-open">
              Last open: <i>10:30 21/07/2024</i>
            </span>
            <Link
              to={ReadingPathsEnum.DOCUMENT_DETAIL.replace(
                ":document_id",
                item.id
              )}
              className="btn-continue"
            >
              Continue
            </Link>
          </ItemMemoArticle>
        ))
      ) : (
        <div>Empty</div>
      )}
    </WrapListMemoArticles>
  );
};

export default ListMemoArticles;
