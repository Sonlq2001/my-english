import { TypePodCast } from "@app/types/app.types";
import { useGetListPodcastQuery } from "../../listening";
import {
  BannerSection,
  Container,
  SectionList,
} from "./PodcastListScreen.styles";
import ItemAudio from "../../components/ItemAudio/ItemAudio";

const PodcastListScreen = () => {
  const typePodcast = new URLSearchParams(window.location.search)
    .get("type")
    ?.toLocaleUpperCase() as TypePodCast;

  const { data: podcastList, isLoading } = useGetListPodcastQuery({
    page: 1,
    perPage: 20,
    type: typePodcast || "VIDEO",
  });

  return (
    <main>
      <Container>
        <BannerSection>
          <img
            src="https://cdn.pixabay.com/photo/2024/02/02/22/05/audio-8549150_1280.jpg"
            alt=""
          />
          <h1>Social science</h1>
        </BannerSection>

        <SectionList>
          <h3>List</h3>
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
