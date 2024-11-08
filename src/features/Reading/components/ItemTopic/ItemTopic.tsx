import { FC, memo, ReactNode } from "react";
import clsx from "clsx";

import { QueryParamsUrl } from "@app/types/app.types";

import { WrapItemTopic } from "./ItemTopic.styles";

interface ItemTopicProps {
  label: string;
  thumbnail: ReactNode;
  setQueryParams: (params: QueryParamsUrl) => void;
  queryParams: QueryParamsUrl;
}

const ItemTopic: FC<ItemTopicProps> = ({
  label,
  thumbnail,
  setQueryParams,
  queryParams,
}) => {
  const handleChooseTopic = () => {
    setQueryParams({
      ...queryParams,
      filter: queryParams.filter === label ? "" : label,
    });
  };
  return (
    <WrapItemTopic
      onClick={handleChooseTopic}
      className={clsx(queryParams.filter === label && "active")}
    >
      {thumbnail}
      <span>{label}</span>
    </WrapItemTopic>
  );
};

export default memo(ItemTopic);
