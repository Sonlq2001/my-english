import IconPlayAudio from "@app/assets/images/icon-svg/icon-play-audio.svg?react";

import {
  SectionContent,
  SectionInfo,
  WrapContent,
} from "./PodcastAudioDetail.styles";

const PodcastAudioDetail = () => {
  return (
    <main>
      <WrapContent>
        <SectionInfo>
          <h1>5 ways leaders can adapt to shifting geopolitics</h1>
          <p className="date-audio">Wednesday, July 3, 2024</p>
          <div>
            <IconPlayAudio />
          </div>
        </SectionInfo>
        <SectionContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, atque suscipit. Aliquid eligendi, omnis molestias sed,
            et alias animi non laboriosam sit culpa hic fugiat recusandae illum
            ipsa cupiditate placeat.
          </p>
        </SectionContent>
      </WrapContent>
    </main>
  );
};

export default PodcastAudioDetail;
