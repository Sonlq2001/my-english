import { FC } from "react";

import {
  VocabularyPathsEnum,
  ResVocabulary,
} from "@app/features/vocabulary/vocabulary";
import { encodeKeyword } from "@app/helpers/encode-decode-word";
import LazyImage from "@app/components/LazyImage/LazyImage";

import { Vocabulary } from "./VocabularyItem.styles";

interface VocabularyItemProps {
  vocabulary: ResVocabulary;
}

const VocabularyItem: FC<VocabularyItemProps> = ({ vocabulary }) => {
  return (
    <li>
      <Vocabulary
        to={VocabularyPathsEnum.VOCABULARY_DETAIL.replace(
          ":word",
          encodeKeyword(vocabulary.name)
        )}
      >
        <LazyImage
          src={vocabulary.reminiscentPhoto?.imageUrl ?? ""}
          alt="img-vocabulary"
        />
        <div className="vocabulary-info">
          <h4>{vocabulary.name}</h4>
          <p>( {vocabulary.partOfSpeech.en} )</p>
        </div>

        <div className="vocabulary-mean">{vocabulary.meanings[0].meaning}</div>
      </Vocabulary>
    </li>
  );
};

export default VocabularyItem;
