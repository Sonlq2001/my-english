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

import BannerSection from "../components/BannerSection/BannerSection";
import {
  ContentLeft,
  ContentRight,
  DashboardWrap,
  SectionPodcast,
  TabsFavorite,
  WrapPodcast,
} from "./Dashboard.styles";

const DashboardScreen: FC = () => {
  const [currentTabFavorite, setCurrentTabFavorite] = useState(
    TabFavorite.Tab1
  );

  return (
    <DashboardWrap>
      <ContentLeft>
        <BannerSection />

        <Skills />

        <WrapPodcast>
          <h3>Most popular</h3>

          <div className="list-section">
            <SectionPodcast>
              <span className="index-podcast">01</span>

              <div className="content-podcast">
                <LazyImage
                  src="https://cdn.pixabay.com/photo/2023/06/11/01/24/flowers-8055013_640.jpg"
                  alt=""
                />
                <div className="info-podcast">
                  <h4>How to be a productive person</h4>
                  <span>Johnson Alert</span>
                </div>
              </div>

              <div className="time-podcast">
                <IconClock />
                <span>4:30</span>
              </div>
            </SectionPodcast>

            <SectionPodcast>
              <span className="index-podcast">01</span>

              <div className="content-podcast">
                <LazyImage
                  src="https://cdn.pixabay.com/photo/2023/06/11/01/24/flowers-8055013_640.jpg"
                  alt=""
                />
                <div className="info-podcast">
                  <h4>How to be a productive person</h4>
                  <span>Johnson Alert</span>
                </div>
              </div>

              <div className="time-podcast">
                <IconClock />
                <span>4:30</span>
              </div>
            </SectionPodcast>
          </div>
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
