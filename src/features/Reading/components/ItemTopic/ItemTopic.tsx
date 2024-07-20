import { FC, memo, ReactNode } from "react";

import { WrapItemTopic } from "./ItemTopic.styles";

interface ItemTopicProps {
  title: string;
  thumbnail: ReactNode;
  color: string;
}

const ItemTopic: FC<ItemTopicProps> = ({ title, thumbnail, color }) => {
  return (
    <WrapItemTopic color={color}>
      {thumbnail}
      <span>{title}</span>
    </WrapItemTopic>
  );
};

export default memo(ItemTopic);
