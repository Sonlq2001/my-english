import { useMemo } from "react";

import { TypePodCast } from "@app/types/app.types";
import { decodeKeyword } from "@app/helpers/encode-decode-word";

import { useGetListPodcastQuery } from "../../listening";
import {
  BannerSection,
  Container,
  SectionList,
} from "./PodcastListScreen.styles";
import ItemAudio from "../../components/ItemAudio/ItemAudio";
import { LIST_TOPICS_PODCAST } from "@app/features/setting/constants/setting.constants";

type MappingTopic = {
  [key: string]: {
    thumbnail: string;
    label: string;
  };
};

const PodcastListScreen = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const typePodcast = queryParams.get("type");
  const topic = decodeKeyword(queryParams.get("topic") || "");

  const { data: podcastList, isLoading } = useGetListPodcastQuery({
    page: 1,
    perPage: 20,
    type: (typePodcast?.toUpperCase() as TypePodCast) || "VIDEO",
    filter: topic || undefined,
  });

  const thumbnailTopic = useMemo(() => {
    if (!topic) return {};
    return LIST_TOPICS_PODCAST.reduce((acc, item) => {
      acc[item.label] = { thumbnail: item.thumbnail, label: item.label };
      return acc;
    }, {} as MappingTopic);
  }, [topic]);

  return (
    <main>
      <Container>
        <BannerSection>
          <img
            src={
              thumbnailTopic[topic]?.thumbnail ||
              "https://cdn.pixabay.com/photo/2024/02/02/22/05/audio-8549150_1280.jpg"
            }
            alt="thumbnail-topic"
          />
          <h1>{thumbnailTopic[topic]?.label || "Podcast"}</h1>
          <p>Total: {podcastList?.meta.total} podcast</p>
        </BannerSection>

        <SectionList>
          <h3>{typePodcast}</h3>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {podcastList?.data && podcastList.data.length > 0 && (
                <ol>
                  {podcastList?.data.map((item, index) => (
                    <ItemAudio
                      key={item.id}
                      data={{
                        title: item.title,
                        author: item.author,
                        index: index + 1,
                        id: item.id,
                        type: item.type,
                        image: item.thumbnail?.imageUrl,
                      }}
                    />
                  ))}
                </ol>
              )}
            </>
          )}
        </SectionList>
      </Container>
    </main>
  );
};

export default PodcastListScreen;
