import { FC } from "react";
import { useParams } from "react-router-dom";

import IconSpeaking2 from "@app/assets/images/icon-svg/icon-speaking-2.svg?react";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import { convertTextToSpeech } from "@app/helpers/text-to-speech";
import { decodeKeyword } from "@app/helpers/encode-decode-word";
import TitlePage from "@app/components/TitlePage/TitlePage";

import {
  WrapVocabularyDetail,
  ListInfoVocabulary,
  InnerContentInfo,
} from "./VocabularyDetail.styles";
import {
  VocabularyPathsEnum,
  useGetVocabularyDetailQuery,
} from "../../vocabulary";

const VocabularyDetail: FC = () => {
  const { word } = useParams<{ word: string }>();
  const { isLoading, error, data } = useGetVocabularyDetailQuery(
    decodeKeyword(word || "")
  );

  const handleVoiceText = (text: string) => {
    convertTextToSpeech(text);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <>
      <TitlePage title="Vocabulary" subtitle="Every day a new word." />

      <WrapVocabularyDetail>
        <ReturnButton
          to={VocabularyPathsEnum.LIST_VOCABULARY.replace(":topic", "school")}
        />

        <div className="name-vocabulary">
          <span className="vocabulary">{data.name}</span>
          <IconSpeaking2 onClick={() => handleVoiceText(data.name)} />
        </div>
        <div className="type-vocabulary">( {data.partOfSpeech.en} )</div>

        <ListInfoVocabulary>
          <InnerContentInfo>
            <div className="info-head">
              <span className="title-mean">Meaning: </span>
              <ol className="list-mean">
                {data.meanings.map((mean) => (
                  <li key={mean.id}>
                    {mean.meaning}
                    <IconSpeaking2 />
                  </li>
                ))}
              </ol>
            </div>

            {data.reminiscentPhoto?.imageUrl && (
              <img src={data.reminiscentPhoto?.imageUrl} alt="img-vocabulary" />
            )}
          </InnerContentInfo>
        </ListInfoVocabulary>

        <ListInfoVocabulary>
          <span className="title-mean">Example: </span>
          <ol className="list-mean">
            {data.examples.map((ex) => (
              <li key={ex.id}>
                {ex.example}
                <IconSpeaking2 onClick={() => handleVoiceText(ex.example)} />
              </li>
            ))}
          </ol>
        </ListInfoVocabulary>
      </WrapVocabularyDetail>
    </>
  );
};

export default VocabularyDetail;
