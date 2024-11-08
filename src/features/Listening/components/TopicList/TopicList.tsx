import { FC, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import IconLeft from "@app/assets/images/icon-svg/icon-left.svg?react";
import IconRight from "@app/assets/images/icon-svg/icon-right.svg?react";
import LazyImage from "@app/components/LazyImage/LazyImage";
import { encodeKeyword } from "@app/helpers/encode-decode-word";
import { LIST_TOPICS_PODCAST } from "@app/features/setting/constants/setting.constants";

import {
  HeaderBox,
  ItemCarousel,
  WrapCarousel,
  WrapTopicList,
} from "./TopicList.styles";

import { ListeningPathsEnum } from "../../listening";

const TopicList: FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    touchMove: false,
    arrows: false,
    centerMode: true,
    draggable: false,
  };

  return (
    <WrapTopicList>
      <HeaderBox>
        <h2>Topic list</h2>

        <div className="control-carousel">
          <IconLeft
            onClick={() => {
              sliderRef.current?.slickPrev();
            }}
          />
          <IconRight
            onClick={() => {
              sliderRef.current?.slickNext();
            }}
          />
        </div>
      </HeaderBox>

      <WrapCarousel>
        <Slider {...settings} ref={sliderRef}>
          {LIST_TOPICS_PODCAST.map((topic, index) => (
            <ItemCarousel key={index}>
              <div className="cate-image">
                <LazyImage
                  src={topic.thumbnail}
                  alt={`thumbnail-topic-${index}`}
                />
              </div>
              <h3>{topic.label}</h3>
              <p>
                <Link
                  to={`${
                    ListeningPathsEnum.PODCAST_LIST
                  }?type=video&topic=${encodeKeyword(topic.value)}`}
                >
                  Video
                </Link>
                /
                <Link
                  to={`${
                    ListeningPathsEnum.PODCAST_LIST
                  }?type=audio&topic=${encodeKeyword(topic.value)}`}
                >
                  Audio
                </Link>
              </p>
            </ItemCarousel>
          ))}
        </Slider>
      </WrapCarousel>
    </WrapTopicList>
  );
};

export default TopicList;
