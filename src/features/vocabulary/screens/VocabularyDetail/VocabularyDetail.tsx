import { FC, useMemo } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";

import IconSpeaking2 from "@app/assets/images/icon-svg/icon-speaking-2.svg?react";
import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import { convertTextToSpeech } from "@app/helpers/text-to-speech";
import { decodeKeyword } from "@app/helpers/encode-decode-word";
import TitlePage from "@app/components/TitlePage/TitlePage";
import IconPin from "@app/assets/images/icon-svg/icon-pin.svg?react";

import {
  WrapVocabularyDetail,
  ListInfoVocabulary,
  InnerContentInfo,
} from "./VocabularyDetail.styles";
import {
  VocabularyPathsEnum,
  useGetMarkVocabularyListQuery,
  useGetVocabularyDetailQuery,
  useUpdateMarkVocabularyMutation,
} from "../../vocabulary";

const VocabularyDetail: FC = () => {
  const { word } = useParams<{ word: string }>();
  const topicName = new URLSearchParams(window.location.search).get("topic");
  const { isLoading, error, data } = useGetVocabularyDetailQuery(
    decodeKeyword(word || "")
  );
  const [toggleMarkVocabulary] = useUpdateMarkVocabularyMutation();
  const { data: markVocabularyList, refetch } = useGetMarkVocabularyListQuery(
    topicName || ""
  );

  const handleVoiceText = (text: string) => {
    convertTextToSpeech(text);
  };

  const handlePinVocabulary = async () => {
    if (
      !data?.id ||
      !topicName ||
      (markVocabularyList?.markVocabulary &&
        markVocabularyList?.markVocabulary.length >= 5)
    ) {
      return;
    }
    await toggleMarkVocabulary({
      vocabularyId: data?.id,
      topicName,
    });
    refetch();
  };

  const isActivePin = useMemo(() => {
    return markVocabularyList?.markVocabulary.some(
      (item) => item.id === data?.id
    );
  }, [markVocabularyList?.markVocabulary, data?.id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <main>
      <TitlePage title="Vocabulary" subtitle="Every day a new word." />

      <WrapVocabularyDetail>
        <ReturnButton to={VocabularyPathsEnum.LIST_VOCABULARY_TOPICS} />

        <section>
          <div className="name-vocabulary">
            <span className="vocabulary">{data.name}</span>
            <IconSpeaking2 onClick={() => handleVoiceText(data.name)} />
            <IconPin
              className={clsx(isActivePin && "active", "icon-pin")}
              onClick={handlePinVocabulary}
            />
          </div>

          <div className="type-vocabulary">( {data.partOfSpeech.en} )</div>
        </section>

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
    </main>
  );
};

export default VocabularyDetail;
