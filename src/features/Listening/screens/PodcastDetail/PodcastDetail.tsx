import { FC } from "react";

import {
  WrapPodcast,
  ContentVideo,
  VideoPlay,
  InfoVideo,
  DescriptionVideo,
  WrapTranscript,
  SectionTranscript,
} from "./PodcastDetail.styles";

const PodcastDetail: FC = () => {
  return (
    <WrapPodcast>
      <ContentVideo>
        <VideoPlay>
          <iframe
            src="https://www.youtube.com/embed/5ylTfytfkh4"
            frameBorder="0"
          />
        </VideoPlay>

        <InfoVideo>
          <h2>A reframing of masculinity, rooted in empathy</h2>
          <p>14/02/2024</p>
        </InfoVideo>
        <DescriptionVideo>
          Urging us to turn away from voices perpetuating harmful stereotypes,
          gender equality advocate Gary Barker shares three insights on
          fostering a culture of care, compassion and connection among men. "We
          are the most wired-to-care species on the planet," he says. "But if
          you don't use it ... you don't get good at it."
        </DescriptionVideo>
      </ContentVideo>
      <WrapTranscript>
        <h4>Transcript</h4>

        <SectionTranscript>
          <div className="time-part">00:00</div>
          <div className="content-section">
            <p>This is a hard conversation. </p>
            <p>I want to start with that. Well, let's step into it.</p>
            <p>It was 1977. Jimmy Carter was president.</p>
            <p>
              I was having lunch in my high school cafeteria in Houston, Texas,
            </p>
          </div>
        </SectionTranscript>
      </WrapTranscript>
    </WrapPodcast>
  );
};

export default PodcastDetail;
