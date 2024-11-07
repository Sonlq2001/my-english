import { FC, memo, ReactNode } from "react";
import clsx from "clsx";

import { WrapItemTopic } from "./ItemTopic.styles";

interface ItemTopicProps {
  label: string;
  thumbnail: ReactNode;
  setFilterSearch: (topic: string) => void;
  filterSearch: string;
}

const ItemTopic: FC<ItemTopicProps> = ({
  label,
  thumbnail,
  setFilterSearch,
  filterSearch,
}) => {
  const handleChooseTopic = () => {
    setFilterSearch(filterSearch === label ? "" : label);
  };
  return (
    <WrapItemTopic
      onClick={handleChooseTopic}
      className={clsx(filterSearch === label && "active")}
    >
      {thumbnail}
      <span>{label}</span>
    </WrapItemTopic>
  );
};

export default memo(ItemTopic);
