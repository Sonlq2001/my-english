import { FC, useEffect } from "react";
import api from "@app/api/api";

import BannerSection from "../components/BannerSection/BannerSection";
import { DashboardWrap } from "./Dashboard.styles";

const DashboardScreen: FC = () => {
  // TODO:
  useEffect(() => {
    api.get("/vocabulary/list-vocabulary");
  }, []);

  return (
    <DashboardWrap>
      <BannerSection />
    </DashboardWrap>
  );
};

export default DashboardScreen;
