import { FC } from "react";

import AppButton from "@app/components/AppButton/AppButton";
import IconRight from "@app/assets/images/icon-svg/icon-right.svg?react";
import IconPlay from "@app/assets/images/icon-svg/icon-play.svg?react";
import IconStar from "@app/assets/images/icon-svg/icon-star.svg?react";
import IconThreeDotsVertical from "@app/assets/images/icon-svg/icon-three-dots-vertical.svg?react";

import {
  HeaderBox,
  ListDataPodcast,
  WrapPodcastList,
  ItemPodcast,
  ActionPodcast,
} from "./PodcastList.styles";

const PodcastList: FC = () => {
  return (
    <WrapPodcastList>
      <HeaderBox>
        <h2>Podcast list</h2>

        <AppButton
          variant="outlined"
          size="small"
          rightIcon={<IconRight />}
          className="btn-see-all"
        >
          See all
        </AppButton>
      </HeaderBox>

      {/* TODO: map data */}
      <ListDataPodcast>
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <ItemPodcast key={index}>
              <div className="info-podcast">
                <img
                  src="https://cdn.pixabay.com/photo/2018/03/20/13/22/sound-3243259_640.jpg"
                  alt=""
                />
                <div className="text-podcast">
                  <span className="title-podcast">
                    If you need anything, just say
                  </span>
                  <span className="auth-podcast">English today</span>
                </div>
              </div>

              <ActionPodcast>
                <span>9:52</span>
                <IconStar className="svg-star" />
                <IconPlay className="svg-play" />
              </ActionPodcast>

              <IconThreeDotsVertical />
            </ItemPodcast>
          ))}
      </ListDataPodcast>
    </WrapPodcastList>
  );
};

export default PodcastList;
