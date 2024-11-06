import { FC } from "react";
import { Link } from "react-router-dom";

import AppButton from "@app/components/AppButton/AppButton";
import IconRight from "@app/assets/images/icon-svg/icon-right.svg?react";
import IconPlay from "@app/assets/images/icon-svg/icon-play.svg?react";
import LazyImage from "@app/components/LazyImage/LazyImage";
import {
  ListeningPathsEnum,
  useGetListPodcastQuery,
} from "@app/features/listening/listening";
import { WrapContentContainer } from "@app/components/ContentContainer/ContentContainer.styles";

import {
  HeaderBox,
  ListDataPodcast,
  ItemPodcast,
  ActionPodcast,
} from "./PodcastVideoList.styles";

const PodcastVideoList: FC = () => {
  const { data: podcastList, isLoading } = useGetListPodcastQuery({
    page: 1,
    perPage: 5,
    type: "VIDEO",
  });

  return (
    <WrapContentContainer>
      <HeaderBox>
        <h2>Video podcast list</h2>

        <AppButton
          variant="outlined"
          size="small"
          rightIcon={<IconRight />}
          className="btn-see-all"
          to={`${ListeningPathsEnum.PODCAST_LIST}?type=video`}
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
            {podcastList?.data && podcastList.data.length > 0 ? (
              podcastList.data.map((podcastItem) => (
                <ItemPodcast key={podcastItem.id}>
                  <Link
                    to={ListeningPathsEnum.PODCAST_VIDEO_DETAIL.replace(
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
                    <IconPlay className="svg-play" />
                  </ActionPodcast>
                </ItemPodcast>
              ))
            ) : (
              // TODO: Component empty
              <div>Empty</div>
            )}
          </>
        )}
      </ListDataPodcast>
    </WrapContentContainer>
  );
};

export default PodcastVideoList;
