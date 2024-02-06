import { FC } from "react";

import BannerSection from "../components/BannerSection/BannerSection";
import { DashboardWrap } from "./Dashboard.styles";

const DashboardScreen: FC = () => {
  return (
    <DashboardWrap>
      <BannerSection />
    </DashboardWrap>
  );
};

export default DashboardScreen;
