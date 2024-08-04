import { FC } from "react";

import SectionTitle from "@app/components/SectionTitle/SectionTitle";
import IconParty from "@app/assets/images/icon-svg/icon-party-popper.svg?react";
import IconStarBold from "@app/assets/images/icon-svg/icon-star-bold.svg?react";
import IconHeart from "@app/assets/images/icon-svg/icon-heart.svg?react";
import ImagePodcast from "@app/assets/images/image-podcast.png";

import {
  BannerSectionWrap,
  BannerContent,
  DecoBanner,
} from "./BannerSection.styles";
import Fireworks from "@app/components/Fireworks/Fireworks";

const BannerSection: FC = () => {
  return (
    <BannerSectionWrap>
      <SectionTitle title="Out Now" icon={<IconParty />} />
      <BannerContent>
        <div className="banner-start">
          <span className="icon-star">
            <IconStarBold className="icon-banner" />
          </span>
          Just released
        </div>
        <h1 className="title-banner">Latest recent podcasts</h1>
        <div className="banner-heart">
          <span className="icon-heart">
            <IconHeart className="icon-banner" />
          </span>
          Start enjoying
        </div>
        <button className="btn-listen">Listen Now</button>

        <DecoBanner>
          <Fireworks className="firework1" />
          <Fireworks className="firework2" size="small" time={2.4} />
          <Fireworks className="firework3" size="larger" time={2.2} />
        </DecoBanner>

        <img src={ImagePodcast} alt="" className="img-rock-band" />
      </BannerContent>
    </BannerSectionWrap>
  );
};

export default BannerSection;
