import { FC, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import TitlePage from "@app/components/TitlePage/TitlePage";
import { formatDate } from "@app/helpers/time";
import { useAppDispatch, useAppSelector } from "@app/redux/store";
import { ControlVideo } from "@app/features/listening/types/listening.type";
import TranscriptPodcast from "@app/features/listening/components/TranscriptPodcast/TranscriptPodcast";
import VideoPlay from "@app/features/listening/components/VideoPlay/VideoPlay";

import {
  WrapPodcast,
  ContentVideo,
  InfoVideo,
  DescriptionVideo,
  WrapTranscript,
} from "./PodcastDetail.styles";
import { getPodcast } from "@app/features/listening/listening";
import { unwrapResult } from "@reduxjs/toolkit";

const PodcastDetail: FC = () => {
  const dispatch = useAppDispatch();
  const { podcast_id: podcastId } = useParams<{ podcast_id: string }>();
  const [controlVideo, setControlVideo] = useState<ControlVideo>({
    playing: false,
    duration: 0,
    loadedSeconds: 0,
    volume: 100,
  });
  const [isLoadingGetPodcast, setIsLoadingGetPodcast] = useState<boolean>(true);

  const videoPlayRef = useRef<{
    setSeekTo: (seekTo: number) => void;
  }>(null);

  const podcastDetailData = useAppSelector(
    (state) => state.listening.podcastDetail
  );

  const handleSeekTo = (seekTo: number) => {
    if (videoPlayRef.current?.setSeekTo) {
      videoPlayRef.current.setSeekTo(seekTo);
    }
  };

  useEffect(() => {
    if (!podcastId) return;

    dispatch(getPodcast(podcastId))
      .then(unwrapResult)
      .finally(() => setIsLoadingGetPodcast(false));
  }, [dispatch, podcastId]);

  if (!podcastDetailData) return;

  return (
    <main>
      <TitlePage
        title="Discovery podcasts"
        subtitle="Listening practice is easier with podcast transcripts."
      />

      <WrapPodcast>
        {isLoadingGetPodcast ? (
          <div>Loading...</div>
        ) : (
          <>
            <ContentVideo>
              <VideoPlay
                ref={videoPlayRef}
                videoId={podcastDetailData.videoId}
                controlVideo={controlVideo}
                setControlVideo={setControlVideo}
              />

              <InfoVideo>
                <h2>{podcastDetailData.title}</h2>
                <p>{formatDate(podcastDetailData.updatedAt)}</p>
              </InfoVideo>
              <DescriptionVideo>
                {podcastDetailData?.description}
              </DescriptionVideo>
            </ContentVideo>

            <WrapTranscript>
              <h4>Transcript</h4>
              <TranscriptPodcast
                handleSeekTo={handleSeekTo}
                transcripts={podcastDetailData.transcripts}
                duration={controlVideo.loadedSeconds}
                isPlay={controlVideo.playing}
                setControlVideo={setControlVideo}
              />
            </WrapTranscript>
          </>
        )}
      </WrapPodcast>
    </main>
  );
};

export default PodcastDetail;
