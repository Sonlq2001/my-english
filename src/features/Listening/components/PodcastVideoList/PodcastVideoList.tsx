import { FC } from "react";

import AppButton from "@app/components/AppButton/AppButton";
import IconRight from "@app/assets/images/icon-svg/icon-right.svg?react";
import {
  ListeningPathsEnum,
  useGetListPodcastQuery,
} from "@app/features/listening/listening";
import { WrapContentContainer } from "@app/components/ContentContainer/ContentContainer.styles";
import ItemAudio from "../../components/ItemAudio/ItemAudio";

import { HeaderBox, ListDataPodcast } from "./PodcastVideoList.styles";

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
              podcastList.data.map((item) => (
                <ItemAudio
                  key={item.id}
                  data={{
                    title: item.title,
                    author: item.author,
                    id: item.id,
                    type: item.type,
                    image: item.thumbnail?.imageUrl,
                  }}
                />
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
