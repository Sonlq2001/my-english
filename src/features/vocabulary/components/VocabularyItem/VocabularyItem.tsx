import { FC } from "react";

import { encodeKeyword } from "@app/helpers/encode-decode-word";
import LazyImage from "@app/components/LazyImage/LazyImage";

import {
  VocabularyPathsEnum,
  ResVocabulary,
} from "@app/features/vocabulary/vocabulary";

import { Vocabulary } from "./VocabularyItem.styles";

interface VocabularyItemProps {
  vocabulary: ResVocabulary;
  topic: string;
}

const VocabularyItem: FC<VocabularyItemProps> = ({ vocabulary, topic }) => {
  return (
    <li>
      <Vocabulary
        to={`${VocabularyPathsEnum.VOCABULARY_DETAIL.replace(
          ":word",
          encodeKeyword(vocabulary.name)
        )}?topic=${encodeKeyword(topic)}`}
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
