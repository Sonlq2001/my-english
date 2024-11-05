import { FC, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import TitlePage from "@app/components/TitlePage/TitlePage";
import { formatDate } from "@app/helpers/time";
import TranscriptPodcast from "@app/features/listening/components/TranscriptPodcast/TranscriptPodcast";
import VideoPlay from "@app/features/listening/components/VideoPlay/VideoPlay";
import { useGetPodcastDetailQuery } from "@app/features/listening/listening";
import { ControlVideo } from "@app/features/listening/types/listening.type";
import { initControlVideo } from "@app/constants/app.constants";

import {
  WrapPodcast,
  ContentVideo,
  InfoVideo,
  DescriptionVideo,
  WrapTranscript,
} from "./PodcastVideoDetail.styles";

const PodcastVideoDetail: FC = () => {
  const { podcast_id } = useParams<{ podcast_id: string }>();
  const [controlVideo, setControlVideo] =
    useState<ControlVideo>(initControlVideo);
  const { data, isLoading } = useGetPodcastDetailQuery(podcast_id || "");

  const videoPlayRef = useRef<{
    setSeekTo: (seekTo: number) => void;
  }>(null);

  const handleSeekTo = (seekTo: number) => {
    if (videoPlayRef.current?.setSeekTo) {
      videoPlayRef.current.setSeekTo(seekTo);
    }
  };

  if (!data) return;

  return (
    <main>
      <TitlePage
        title="Discovery podcasts"
        subtitle="Listening practice is easier with podcast transcripts."
      />

      <WrapPodcast>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <ContentVideo>
              <VideoPlay
                ref={videoPlayRef}
                videoId={data.videoId}
                setControlVideo={setControlVideo}
                controlVideo={controlVideo}
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
                setControlVideo={setControlVideo}
                controlVideo={controlVideo}
              />
            </WrapTranscript>
          </>
        )}
      </WrapPodcast>
    </main>
  );
};

export default PodcastVideoDetail;
