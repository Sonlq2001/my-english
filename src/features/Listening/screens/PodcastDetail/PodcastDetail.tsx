import { FC, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import TitlePage from "@app/components/TitlePage/TitlePage";
import { formatDate } from "@app/helpers/time";

import {
  WrapPodcast,
  ContentVideo,
  InfoVideo,
  DescriptionVideo,
  WrapTranscript,
} from "./PodcastDetail.styles";
import { useGetPodcastDetailQuery } from "../../redux/listening.query";
import TranscriptPodcast from "../../components/TranscriptPodcast/TranscriptPodcast";
import VideoPlay from "../../components/VideoPlay/VideoPlay";
import { ControlVideo } from "../../types/listening.type";

const PodcastDetail: FC = () => {
  const { podcast_id } = useParams<{ podcast_id: string }>();
  const [controlVideo, setControlVideo] = useState<ControlVideo>({
    playing: false,
    duration: 0,
    loadedSeconds: 0,
    volume: 100,
  });

  const videoPlayRef = useRef<{
    setSeekTo: (seekTo: number) => void;
  }>(null);

  const { data, isLoading, error } = useGetPodcastDetailQuery(podcast_id || "");

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
          <VideoPlay
            ref={videoPlayRef}
            videoId={data.videoId}
            controlVideo={controlVideo}
            setControlVideo={setControlVideo}
          />

          <InfoVideo>
            <h2>{data.title}</h2>
            <p>{formatDate(data.updatedAt)}</p>
          </InfoVideo>
          <DescriptionVideo>{data?.description}</DescriptionVideo>
        </ContentVideo>
        <WrapTranscript>
          <h4>Transcript</h4>
          <TranscriptPodcast
            handleSeekTo={handleSeekTo}
            transcripts={data.transcripts}
            duration={controlVideo.loadedSeconds}
            isPlay={controlVideo.playing}
            setControlVideo={setControlVideo}
          />
        </WrapTranscript>
      </WrapPodcast>
    </>
  );
};

export default PodcastDetail;
