import { FC } from "react";
import { Link } from "react-router-dom";

import AppButton from "@app/components/AppButton/AppButton";
import IconRight from "@app/assets/images/icon-svg/icon-right.svg?react";
import IconPlay from "@app/assets/images/icon-svg/icon-play.svg?react";
import IconStar from "@app/assets/images/icon-svg/icon-star.svg?react";
import IconThreeDotsVertical from "@app/assets/images/icon-svg/icon-three-dots-vertical.svg?react";
import LazyImage from "@app/components/LazyImage/LazyImage";
import {
  ListeningPathsEnum,
  useGetListPodcastQuery,
} from "@app/features/listening/listening";

import {
  HeaderBox,
  ListDataPodcast,
  WrapPodcastList,
  ItemPodcast,
  ActionPodcast,
} from "./PodcastList.styles";

const PodcastList: FC = () => {
  const { data, isLoading } = useGetListPodcastQuery({ page: 1, perPage: 20 });

  return (
    <WrapPodcastList>
      <HeaderBox>
        <h2>Podcast list</h2>

        <AppButton
          variant="outlined"
          size="small"
          rightIcon={<IconRight />}
          className="btn-see-all"
          to="/listening/podcast/list"
        >
          See all
        </AppButton>
      </HeaderBox>

      <ListDataPodcast>
        {isLoading ? (
          // TODO: Loading skeleton
          <div>Loading...</div>
        ) : (
          <>
            {data && data?.length > 0 ? (
              data.map((podcastItem) => (
                <ItemPodcast key={podcastItem.id}>
                  <Link
                    to={ListeningPathsEnum.PODCAST_DETAIL.replace(
                      ":podcast_id",
                      podcastItem.id
                    )}
                    className="info-podcast"
                  >
                    <LazyImage
                      src={podcastItem.thumbnail?.imageUrl || ""}
                      alt={podcastItem.title}
                    />
                    <div className="text-podcast">
                      <h3 className="title-podcast">{podcastItem.title}</h3>
                      <span className="auth-podcast">{podcastItem.topic}</span>
                    </div>
                  </Link>

                  <ActionPodcast>
                    <span>9:52</span>
                    <IconStar className="svg-star" />
                    <IconPlay className="svg-play" />
                  </ActionPodcast>
                  <IconThreeDotsVertical />
                </ItemPodcast>
              ))
            ) : (
              // TODO: Component empty
              <div>Empty</div>
            )}
          </>
        )}
      </ListDataPodcast>
    </WrapPodcastList>
  );
};

export default PodcastList;
