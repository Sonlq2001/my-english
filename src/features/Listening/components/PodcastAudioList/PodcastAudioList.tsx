import WrapContentContainer from "@app/components/ContentContainer/ContentContainer";

import IconRight from "@app/assets/images/icon-svg/icon-right.svg?react";
import AppButton from "@app/components/AppButton/AppButton";

import { HeaderBox } from "../PodcastVideoList/PodcastVideoList.styles";
import { ListeningPathsEnum, useGetListPodcastQuery } from "../../listening";
import ItemAudio from "../ItemAudio/ItemAudio";
import { AudioList } from "./PodcastAudioList.styles";

const PodcastAudioList = () => {
  const { data, isLoading } = useGetListPodcastQuery({
    page: 1,
    perPage: 5,
    type: "AUDIO",
  });
  return (
    <WrapContentContainer>
      <HeaderBox>
        <h2>Podcast audio list</h2>

        <AppButton
          variant="outlined"
          size="small"
          rightIcon={<IconRight />}
          className="btn-see-all"
          to={`${ListeningPathsEnum.PODCAST_LIST}?type=audio`}
        >
          See all
        </AppButton>
      </HeaderBox>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data && data.length > 0 && (
            <AudioList>
              {data.map((item, index) => (
                <ItemAudio
                  key={item.id}
                  data={{
                    title: item.title,
                    author: item.author,
                    index: index + 1,
                    id: item.id,
                    type: item.type,
                  }}
                />
              ))}
            </AudioList>
          )}
        </>
      )}
    </WrapContentContainer>
  );
};

export default PodcastAudioList;
