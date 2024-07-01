import { FC, ReactNode, memo } from "react";

import { WrapSectionTitle } from "@app/components/SectionTitle/SectionTitle.styles";

interface SectionTitleProps {
  title: string;
  icon?: ReactNode;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, icon }) => {
  return (
    <WrapSectionTitle>
      <h3>{title}</h3>
      <span>{icon}</span>
    </WrapSectionTitle>
  );
};

export default memo(SectionTitle);
