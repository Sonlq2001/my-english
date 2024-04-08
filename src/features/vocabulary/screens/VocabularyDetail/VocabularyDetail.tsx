import { FC } from "react";

import IconSpeaking2 from "@app/assets/images/icon-svg/icon-speaking-2.svg?react";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import { convertTextToSpeech } from "@app/helpers/text-to-speech";

import {
  WrapVocabularyDetail,
  ListInfoVocabulary,
  InnerContentInfo,
} from "./VocabularyDetail.styles";
import { VocabularyPathsEnum } from "../../vocabulary";

const VocabularyDetail: FC = () => {
  const handleVoiceText = () => {
    convertTextToSpeech("This word has been used prior to the 1980s "); // TODO: text
  };
  return (
    <WrapVocabularyDetail>
      <ReturnButton
        to={VocabularyPathsEnum.LIST_VOCABULARY.replace(":topic", "school")}
      />

      <div className="name-vocabulary">
        <span className="vocabulary">Hello</span>
        <IconSpeaking2 onClick={handleVoiceText} />
      </div>
      <div className="type-vocabulary">( Verb )</div>

      <ListInfoVocabulary>
        <InnerContentInfo>
          <div className="info-head">
            <span className="title-mean">Meaning: </span>
            <ol className="list-mean">
              <li>Xin chao</li>
            </ol>
          </div>

          <img
            src="https://cdn.pixabay.com/photo/2024/01/25/12/30/forest-8531787_1280.jpg"
            alt=""
          />
        </InnerContentInfo>
      </ListInfoVocabulary>

      <ListInfoVocabulary>
        <span className="title-mean">Example: </span>
        <ol className="list-mean">
          <li>
            This word has been used prior to the 1980s to mean “an old,
            decrepit, or unpretentious automobile.”
            <IconSpeaking2 />
          </li>
        </ol>
      </ListInfoVocabulary>
    </WrapVocabularyDetail>
  );
};

export default VocabularyDetail;
