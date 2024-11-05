import { FC, useMemo } from "react";

import SectionTitle from "@app/components/SectionTitle/SectionTitle";
import IconParty from "@app/assets/images/icon-svg/icon-party-popper.svg?react";
import IconStarBold from "@app/assets/images/icon-svg/icon-star-bold.svg?react";
import IconHeart from "@app/assets/images/icon-svg/icon-heart.svg?react";
import ImagePodcast from "@app/assets/images/image-podcast.png";
import Fireworks from "@app/components/Fireworks/Fireworks";
import {
  ListeningPathsEnum,
  useGetListPodcastQuery,
} from "@app/features/listening/listening";

import {
  BannerSectionWrap,
  BannerContent,
  DecoBanner,
} from "./BannerSection.styles";
import { Link } from "react-router-dom";

const BannerSection: FC = () => {
  const { data } = useGetListPodcastQuery({ page: 1, perPage: 5 });

  const podcastIdLatest = useMemo(() => {
    if (data && data.length > 0) {
      return data[0].id;
    }
    return null;
  }, [data]);

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
        <Link
          className="btn-listen"
          to={ListeningPathsEnum.PODCAST_VIDEO_DETAIL.replace(
            ":podcast_id",
            podcastIdLatest || ""
          )}
        >
          Listen Now
        </Link>

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
