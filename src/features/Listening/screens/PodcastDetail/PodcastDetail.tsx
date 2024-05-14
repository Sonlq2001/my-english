import { FC } from "react";

import TitlePage from "@app/components/TitlePage/TitlePage";
import { YOUTUBE_EMBEDDED_LINK } from "@app/constants/app.constants";

import {
  WrapPodcast,
  ContentVideo,
  VideoPlay,
  InfoVideo,
  DescriptionVideo,
  WrapTranscript,
} from "./PodcastDetail.styles";
import { useGetPodcastDetailQuery } from "../../redux/auth.query";
import TranscriptPodcast from "../../components/TranscriptPodcast/TranscriptPodcast";

const PodcastDetail: FC = () => {
  // TODO: id
  const { data, isLoading, error } = useGetPodcastDetailQuery(
    "66430d16974ee9a3e501dc57"
  );

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (!data || error) {
    return <div>Error</div>;
  }

  return (
    <>
      <TitlePage
        title="Discovery podcasts"
        subtitle="Listening practice is easier with podcast transcripts."
      />

      <WrapPodcast>
        <ContentVideo>
          <VideoPlay>
            <iframe
              src={YOUTUBE_EMBEDDED_LINK.replace(":youtube_id", data.videoId)}
              frameBorder="0"
            />
          </VideoPlay>

          <InfoVideo>
            <h2>{data.title}</h2>
            <p>14/02/2024</p>
          </InfoVideo>
          <DescriptionVideo>{data?.description}</DescriptionVideo>
        </ContentVideo>
        <WrapTranscript>
          <h4>Transcript</h4>
          <TranscriptPodcast transcripts={data.transcripts || []} />
        </WrapTranscript>
      </WrapPodcast>
    </>
  );
};

export default PodcastDetail;
