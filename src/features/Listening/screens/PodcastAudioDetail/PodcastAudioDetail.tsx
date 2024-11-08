import { useParams } from "react-router-dom";
import { useContext } from "react";
import clsx from "clsx";

import IconPlayAudio from "@app/assets/images/icon-svg/icon-play-audio.svg?react";
import IconPauseAudio from "@app/assets/images/icon-svg/icon-pause.svg?react";
import { PlayerContext } from "@app/components/PlayerProvider/PlayerProvider";

import {
  ListTranscript,
  SectionContent,
  SectionInfo,
  WrapContent,
} from "./PodcastAudioDetail.styles";
import { useGetPodcastDetailQuery } from "../../listening";

const PodcastAudioDetail = () => {
  const { podcast_id } = useParams<{ podcast_id: string }>();
  const { data, isLoading } = useGetPodcastDetailQuery(podcast_id || "");
  const { playVideo, toggleNavbarAudioPlay, controlVideo, seekToVideo } =
    useContext(PlayerContext);

  const handlePlayAudio = () => {
    if (playVideo && data?.videoId) {
      playVideo(data?.videoId);
    }

    if (toggleNavbarAudioPlay) {
      toggleNavbarAudioPlay(true);
    }
  };

  const handleSeekToAudio = (offset: number) => {
    if (seekToVideo) {
      seekToVideo(offset);
    }
  };

  return (
    <main>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <WrapContent>
          <SectionInfo>
            <h1>{data?.title}</h1>
            <p className="date-audio">Wednesday, July 3, 2024</p>
            <p>Type: Audio</p>
            <button className="btn-play" onClick={handlePlayAudio}>
              {controlVideo.playing ? <IconPauseAudio /> : <IconPlayAudio />}
            </button>
          </SectionInfo>
          <SectionContent>
            <h4>Transcript</h4>
            <ListTranscript>
              {data?.transcripts.map((transcript, index, array) => {
                const isActive =
                  controlVideo.loadedSeconds >= transcript.offset &&
                  controlVideo.loadedSeconds < array[index + 1]?.offset;

                return (
                  <span
                    key={transcript.offset}
                    className={clsx(isActive && "active-transcript")}
                    onClick={() => handleSeekToAudio(transcript.offset)}
                  >
                    {transcript.text.replaceAll(`&amp;#39;`, `'`)}
                  </span>
                );
              })}
            </ListTranscript>
          </SectionContent>
        </WrapContent>
      )}
    </main>
  );
};

export default PodcastAudioDetail;
