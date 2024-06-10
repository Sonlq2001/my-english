import { FC } from "react";

import IconSpeaking2 from "@app/assets/images/icon-svg/icon-speaking-2.svg?react";
import IconClose from "@app/assets/images/icon-svg/icon-close.svg?react";
import { convertTextToSpeech } from "@app/helpers/text-to-speech";
import {
  VocabularyPathsEnum,
  useGetVocabularyDetailQuery,
} from "@app/features/vocabulary/vocabulary";
import ImageNotfound from "@app/assets/images/not-found.png";
import { encodeKeyword } from "@app/helpers/encode-decode-word";

import { WrapModalTranslate, BodyModal } from "./ModalTranslate.styles";
import AppButton from "../AppButton/AppButton";
interface ModalTranslateProps {
  x: number;
  y: number;
  onCloseModal: () => void;
  currentValue: string;
}

const ModalTranslate: FC<ModalTranslateProps> = ({
  x,
  y,
  onCloseModal,
  currentValue,
}) => {
  const { data, isLoading, error } = useGetVocabularyDetailQuery(currentValue);

  const handleVoice = () => {
    if (!currentValue) return;
    convertTextToSpeech(currentValue);
  };

  if (isLoading || error) {
    return null;
  }

  return (
    <WrapModalTranslate
      style={{
        position: "absolute",
        top: `${y}px`,
        left: `${x}px`,
      }}
    >
      <div className="header-modal">
        <AppButton
          className="btn-close"
          size="small"
          leftIcon={<IconClose />}
          onClick={onCloseModal}
        />
        {!data && (
          <AppButton
            size="small"
            to={`${VocabularyPathsEnum.CREATE_VOCABULARY}?word=${encodeKeyword(
              currentValue
            )}`}
          >
            Save
          </AppButton>
        )}
      </div>
      <BodyModal>
        {data ? (
          <>
            <div className="vocabulary">
              <div className="key-vocabulary">
                {currentValue}
                <IconSpeaking2 onClick={handleVoice} />
              </div>
              <div className="type-vocabulary">( {data.partOfSpeech.en} )</div>
            </div>

            <ol className="meanings">
              {data.meanings.map((mean) => (
                <li key={mean.id}>{mean.meaning}</li>
              ))}
            </ol>
          </>
        ) : (
          <p className="box-notfound">
            <img src={ImageNotfound} alt="img-notfound" />
            This word is not in your dictionary yet
          </p>
        )}
      </BodyModal>
    </WrapModalTranslate>
  );
};

export default ModalTranslate;
