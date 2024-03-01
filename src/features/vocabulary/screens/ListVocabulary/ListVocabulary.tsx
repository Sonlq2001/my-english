import { FC } from "react";

import ReturnButton from "@app/components/ReturnButton/ReturnButton";

import { WrapListVocabulary } from "./ListVocabulary.styles";
import VocabularyItem from "../../components/VocabularyItem/VocabularyItem";
import { VocabularyPathsEnum } from "../../constants/vocabulary.paths";

const ListVocabulary: FC = () => {
  return (
    <div>
      <ReturnButton to={VocabularyPathsEnum.LIST_VOCABULARY_TOPICS} />

      <WrapListVocabulary>
        <VocabularyItem />
        <VocabularyItem />
        <VocabularyItem />
      </WrapListVocabulary>
    </div>
  );
};

export default ListVocabulary;
