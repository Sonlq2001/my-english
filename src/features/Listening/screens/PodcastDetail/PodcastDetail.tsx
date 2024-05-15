import { FC, useRef } from "react";

import TitlePage from "@app/components/TitlePage/TitlePage";

import {
  WrapPodcast,
  ContentVideo,
  InfoVideo,
  DescriptionVideo,
  WrapTranscript,
} from "./PodcastDetail.styles";
import { useGetPodcastDetailQuery } from "../../redux/auth.query";
import TranscriptPodcast from "../../components/TranscriptPodcast/TranscriptPodcast";
import VideoPlay from "../../components/VideoPlay/VideoPlay";

const PodcastDetail: FC = () => {
  const videoPlayRef = useRef<{ setSeekTo: (seekTo: number) => void }>(null);
  // TODO: id
  const { data, isLoading, error } = useGetPodcastDetailQuery(
    "66430d16974ee9a3e501dc57"
  );

  const handleSeekTo = (seekTo: number) => {
    if (videoPlayRef.current?.setSeekTo) {
      videoPlayRef.current.setSeekTo(seekTo);
    }
  };

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
          <VideoPlay ref={videoPlayRef} videoId={data.videoId} />

          <InfoVideo>
            <h2>{data.title}</h2>
            <p>14/02/2024</p>
          </InfoVideo>
          <DescriptionVideo>{data?.description}</DescriptionVideo>
        </ContentVideo>
        <WrapTranscript>
          <h4>Transcript</h4>
          <TranscriptPodcast
            handleSeekTo={handleSeekTo}
            transcripts={data.transcripts}
          />
        </WrapTranscript>
      </WrapPodcast>
    </>
  );
};

export default PodcastDetail;
