import { FC } from "react";

import { LIST_SPEAKING_STYLE } from "../../constants/speaking.constants";
import SpeakingStyle from "../../components/SpeakingStyle/SpeakingStyle";
import { WrapSpeaking } from "./SpeakingScreen.styles";

const SpeakingScreen: FC = () => {
  return (
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
  );
};

export default SpeakingScreen;
