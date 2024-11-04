import { FC } from "react";

import ImagePodcast from "@app/assets/images/headphone-amico.png";
import IconMedal from "@app/assets/images/icon-svg/icon-medal.svg?react";
import IconFire from "@app/assets/images/icon-svg/icon-fire.svg?react";
import IconLeaf from "@app/assets/images/icon-svg/icon-four-leaf-clover.svg?react";
import TopicList from "@app/features/listening/components/TopicList/TopicList";
import VideoPodcastList from "@app/features/listening/components/VideoPodcastList/VideoPodcastList";
import LazyImage from "@app/components/LazyImage/LazyImage";

import {
  BannerListening,
  BoxUser,
  PodcastList,
  WrapListening,
} from "./ListeningScreen.styles";
import PodcastAudioList from "@app/features/listening/components/PodcastAudioList/PodcastAudioList";

const ListeningScreen: FC = () => {
  return (
    <WrapListening>
      <BannerListening>
        <div className="box-image">
          <div className="content-banner">
            <h1>Mind the music</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur saepe nihil repellat doloribus numquam reiciendis
            </p>
          </div>
          <LazyImage src={ImagePodcast} alt="" />
        </div>

        <BoxUser>
          <LazyImage
            src="https://cdn.pixabay.com/photo/2022/10/17/15/02/photography-7527978_640.jpg"
            alt=""
          />
          <div className="user-info">
            <h3 className="user-name">Le Quang Son</h3>
            <span className="total-podcast">50 podcast</span>

            <div className="list-icon">
              <IconFire />
              <IconMedal />
              <IconLeaf />
            </div>
          </div>
        </BoxUser>
      </BannerListening>

      <TopicList />

      <PodcastList>
        <VideoPodcastList />
        <PodcastAudioList />
      </PodcastList>
    </WrapListening>
  );
};

export default ListeningScreen;
