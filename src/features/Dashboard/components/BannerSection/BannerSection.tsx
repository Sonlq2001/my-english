import { FC } from "react";

import {
  BannerSectionWrap,
  BannerContent,
  BannerText,
} from "./BannerSection.styles";
import BannerImage from "@app/assets/images/banner-section.png";

const BannerSection: FC = () => {
  return (
    <BannerSectionWrap>
      <BannerContent>
        <BannerText>
          <h1>Welcome Sown</h1>
          <p>
            Start learning english and <br /> explore the world now.
          </p>
        </BannerText>

        <img src={BannerImage} alt="banner-image" className="banner-image" />
      </BannerContent>
    </BannerSectionWrap>
  );
};

export default BannerSection;
