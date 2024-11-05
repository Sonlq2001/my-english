import { FC, useState } from "react";

import IconClock from "@app/assets/images/icon-svg/icon-clock.svg?react";
import IconFire from "@app/assets/images/icon-svg/icon-fire.svg?react";
import SectionTitle from "@app/components/SectionTitle/SectionTitle";
import {
  LIST_TABS_FAVORITE,
  TabFavorite,
} from "@app/features/dashboard/constants/dashboard.constants";
import FavoritePodcasts from "@app/features/dashboard/components/FavoritePodcasts/FavoritePodcasts";
import DocumentsSection from "@app/features/dashboard/components/DocumentsSection/DocumentsSection";
import PlayPodcasts from "@app/features/dashboard/components/PlayPodcasts/PlayPodcasts";
import Skills from "@app/features/dashboard/components/Skills/Skills";
import LazyImage from "@app/components/LazyImage/LazyImage";
import { useGetListPodcastQuery } from "@app/features/listening/listening";

import BannerSection from "../components/BannerSection/BannerSection";
import {
  ContentLeft,
  ContentRight,
  DashboardWrap,
  LabelChipTypePodcast,
  SectionPodcast,
  TabsFavorite,
  WrapPodcast,
} from "./Dashboard.styles";

const DashboardScreen: FC = () => {
  const [currentTabFavorite, setCurrentTabFavorite] = useState(
    TabFavorite.Tab1
  );
  const { data } = useGetListPodcastQuery({ page: 1, perPage: 5 });

  return (
    <DashboardWrap>
      <ContentLeft>
        <BannerSection />

        <Skills />

        <WrapPodcast>
          <h3>Most popular</h3>

          {data && data.length > 0 && (
            <ul className="list-section">
              {data.map((podcastItem, index) => (
                <SectionPodcast key={podcastItem.id}>
                  <span className="index-podcast">{`0${index + 1}`}</span>

                  <div className="content-podcast">
                    <LazyImage
                      src={podcastItem.thumbnail?.imageUrl || ""}
                      alt={podcastItem.title}
                    />
                    <div className="info-podcast">
                      <h4>{podcastItem.title}</h4>
                      <span>{podcastItem.author}</span>
                    </div>
                  </div>

                  <div className="time-podcast">
                    <LabelChipTypePodcast type={podcastItem.type}>
                      {podcastItem.type}
                    </LabelChipTypePodcast>
                    <IconClock />
                    <span>4:30</span>
                  </div>
                </SectionPodcast>
              ))}
            </ul>
          )}
        </WrapPodcast>
      </ContentLeft>

      <ContentRight>
        <SectionTitle title="Your Favorite" icon={<IconFire />} />
        <TabsFavorite>
          {LIST_TABS_FAVORITE.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setCurrentTabFavorite(tab.value)}
              className={tab.value === currentTabFavorite ? "active" : ""}
            >
              {tab.title}
            </button>
          ))}
        </TabsFavorite>

        {currentTabFavorite === TabFavorite.Tab1 && <FavoritePodcasts />}

        {currentTabFavorite === TabFavorite.Tab2 && <DocumentsSection />}

        <PlayPodcasts />
      </ContentRight>
    </DashboardWrap>
  );
};

export default DashboardScreen;
