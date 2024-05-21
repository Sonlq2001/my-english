import { FC } from "react";
import { useParams } from "react-router-dom";

import ReturnButton from "@app/components/ReturnButton/ReturnButton";
import TitlePage from "@app/components/TitlePage/TitlePage";
import { decodeKeyword } from "@app/helpers/encode-decode-word";

import { WrapContent, WrapListVocabulary } from "./ListVocabulary.styles";
import VocabularyItem from "../../components/VocabularyItem/VocabularyItem";
import { VocabularyPathsEnum } from "../../constants/vocabulary.paths";
import { useGetListVocabularyByTopicQuery } from "../../vocabulary";

const ListVocabulary: FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const { data, error, isLoading } = useGetListVocabularyByTopicQuery(
    decodeKeyword(topic || "")
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <>
      <TitlePage
        title={`Vocabulary list by topic ${decodeKeyword(topic || "")}`}
        subtitle="Summary of all vocabulary by topic."
      />

      <WrapContent>
        <div className="wrap-list">
          <ReturnButton to={VocabularyPathsEnum.LIST_VOCABULARY_TOPICS} />
          <WrapListVocabulary>
            {data.length > 0 &&
              data.map((item) => (
                <VocabularyItem key={item.id} vocabulary={item} />
              ))}
          </WrapListVocabulary>
        </div>
      </WrapContent>
    </>
  );
};

export default ListVocabulary;
