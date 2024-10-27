import { FC, useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import IconMicrophone from "@app/assets/images/icon-svg/icon-microphone.svg?react";
import AppButton from "@app/components/AppButton/AppButton";
import TitlePage from "@app/components/TitlePage/TitlePage";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import { SpeakingPathsEnum } from "@app/features/speaking/speaking";

import { LIST_ACTIONS_READING } from "../../constants/speaking.constants";
import {
  WrapContent,
  InnerContent,
  ListActionReading,
  FooterContent,
  BoxIconVoice,
} from "./VoiceToTextScreen.styles";
import { TABS_ACTIONS_READING } from "../../constants/speaking.enum";
import RandomText from "../../components/RandomText/RandomText";
import CustomizeText from "../../components/CustomizeText/CustomizeText";
import FreestyleText from "../../components/FreestyleText/FreestyleText";
import LoadingTyping from "../../components/LoadingTyping/LoadingTyping";

const VoiceToTextScreen: FC = () => {
  const [tab, currentTab] = useState<TABS_ACTIONS_READING>(
    TABS_ACTIONS_READING.RANDOM
  );
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const handleStartListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
  };

  useEffect(() => {
    (async () => {
      await SpeechRecognition.stopListening();
      resetTranscript();
    })();
  }, [resetTranscript, tab]);

  return (
    <main>
      <TitlePage
        title="Speech to text"
        subtitle="Practice pronunciation and speaking in short paragraphs."
      />

      <WrapContent>
        <ReturnButton to={SpeakingPathsEnum.SPEAKING} />
        <InnerContent>
          <ListActionReading>
            {LIST_ACTIONS_READING.map((item, index) => (
              <AppButton
                size="small"
                variant={item.tab === tab ? "contained" : "outlined"}
                key={`btn-action-${index}`}
                onClick={() => currentTab(item.tab)}
                className="btn-action"
              >
                {item.label}
              </AppButton>
            ))}
          </ListActionReading>

          <div className="content-tab">
            {tab === TABS_ACTIONS_READING.RANDOM && <RandomText />}
            {tab === TABS_ACTIONS_READING.CUSTOMIZE && <CustomizeText />}
            {tab === TABS_ACTIONS_READING.FREESTYLE && <FreestyleText />}
          </div>

          <div className="content-render">
            <button className="btn-reset" onClick={resetTranscript}>
              Reset
            </button>

            <div>
              {transcript}
              {listening && <LoadingTyping />}
            </div>
          </div>
        </InnerContent>
        <FooterContent>
          {listening ? (
            <BoxIconVoice onClick={handleStopListening}>
              <div className="pulsate" />
              <IconMicrophone />
            </BoxIconVoice>
          ) : (
            <BoxIconVoice
              onClick={handleStartListening}
              onTouchStart={handleStartListening}
            >
              <IconMicrophone />
            </BoxIconVoice>
          )}
        </FooterContent>
      </WrapContent>
    </main>
  );
};

export default VoiceToTextScreen;
