import { FC, memo } from "react";

import { WrapTitlePage } from "./TitlePage.styles";

interface TitlePageProps {
  title: string;
  subtitle: string;
}

const TitlePage: FC<TitlePageProps> = ({ title, subtitle }) => {
  return (
    <WrapTitlePage>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </WrapTitlePage>
  );
};

export default memo(TitlePage);
