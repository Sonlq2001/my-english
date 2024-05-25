import { FC } from "react";

import TitlePage from "@app/components/TitlePage/TitlePage";

import { LIST_SPEAKING_STYLE } from "../../constants/speaking.constants";
import SpeakingStyle from "../../components/SpeakingStyle/SpeakingStyle";
import { WrapSpeaking } from "./SpeakingScreen.styles";

const SpeakingScreen: FC = () => {
  return (
    <>
      <TitlePage
        title="Practice speaking"
        subtitle="Practice speaking in many different forms."
      />

      <WrapSpeaking>
        {LIST_SPEAKING_STYLE.map((item, index) => (
          <SpeakingStyle
            key={index}
            title={item.title}
            thumbnail={item.thumbnail}
            path={item.path}
          />
        ))}
      </WrapSpeaking>
    </>
  );
};

export default SpeakingScreen;
