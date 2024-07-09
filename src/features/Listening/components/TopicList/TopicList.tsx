import { FC, useRef } from "react";
import Slider from "react-slick";

import IconLeft from "@app/assets/images/icon-svg/icon-left.svg?react";
import IconRight from "@app/assets/images/icon-svg/icon-right.svg?react";

import {
  HeaderBox,
  ItemCarousel,
  WrapCarousel,
  WrapTopicList,
} from "./TopicList.styles";
import { TOPIC_LIST_PODCAST } from "../../constants/listening.constants";

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
          {TOPIC_LIST_PODCAST.map((topic, index) => (
            <ItemCarousel key={index}>
              <div className="cate-image">
                <img src={topic.thumbnail} alt={`thumbnail-topic-${index}`} />
              </div>
              <h3>{topic.title}</h3>
              <p>{topic.subTitle}</p>
            </ItemCarousel>
          ))}
        </Slider>
      </WrapCarousel>
    </WrapTopicList>
  );
};

export default TopicList;
