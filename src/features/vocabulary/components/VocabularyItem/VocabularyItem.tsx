import { FC } from "react";

import {
  VocabularyPathsEnum,
  ResVocabulary,
} from "@app/features/vocabulary/vocabulary";
import { encodeKeyword } from "@app/helpers/encode-decode-word";

import { Vocabulary } from "./VocabularyItem.styles";

interface VocabularyItemProps {
  vocabulary: ResVocabulary;
}

const VocabularyItem: FC<VocabularyItemProps> = ({ vocabulary }) => {
  return (
    <Vocabulary
      to={VocabularyPathsEnum.VOCABULARY_DETAIL.replace(
        ":word",
        encodeKeyword(vocabulary.name)
      )}
    >
      <img
        src={
          vocabulary.reminiscentPhoto?.imageUrl ??
          "https://cdn.pixabay.com/photo/2024/03/31/06/16/bird-8666099_1280.jpg"
        }
        alt="img-vocabulary"
      />
      <div className="vocabulary-info">
        <h4>{vocabulary.name}</h4>
        <p>( {vocabulary.partOfSpeech.en} )</p>
      </div>

      <div className="vocabulary-mean">{vocabulary.meanings[0].meaning}</div>
    </Vocabulary>
  );
};

export default VocabularyItem;
