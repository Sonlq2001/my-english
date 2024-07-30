import { FC, ReactNode } from "react";

import IconRight from "@app/assets/images/icon-svg/icon-right.svg?react";

import { ItemWriting } from "./ItemTypeWriting.styles";

interface ItemTypeWritingProps {
  title: string;
  icon: ReactNode;
  path: string;
  color: string;
}

const ItemTypeWriting: FC<ItemTypeWritingProps> = ({ title, icon, color }) => {
  return (
    <ItemWriting color={color}>
      <div className="box-image">{icon}</div>
      <div className="content">
        <h3 className="title-topic">{title}</h3>
        <button className="btn-join">
          <IconRight />
        </button>
      </div>
    </ItemWriting>
  );
};

export default ItemTypeWriting;
