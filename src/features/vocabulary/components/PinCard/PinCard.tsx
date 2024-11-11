import { FC, useMemo } from "react";
import clsx from "clsx";

import IconPin from "@app/assets/images/icon-svg/icon-pin.svg?react";
import {
  ItemMarkVocabulary,
  useGetMarkVocabularyListQuery,
  useUpdateMarkVocabularyMutation,
} from "@app/features/vocabulary/vocabulary";

import { WrapPinCard } from "./PinCard.styles";

interface PinCardProps {
  vocabulary: ItemMarkVocabulary;
  topic: string;
}

const PinCard: FC<PinCardProps> = ({ vocabulary, topic }) => {
  const [toggleMarkVocabulary] = useUpdateMarkVocabularyMutation();
  const { data: markVocabularyList, refetch } = useGetMarkVocabularyListQuery(
    topic || ""
  );
  const handlePinVocabulary = async () => {
    await toggleMarkVocabulary({
      vocabularyId: vocabulary.id,
      topicName: topic,
    });
    refetch();
  };

  const isActivePin = useMemo(() => {
    return markVocabularyList?.markVocabulary.some(
      (item) => item.id === vocabulary?.id
    );
  }, [markVocabularyList?.markVocabulary, vocabulary?.id]);

  return (
    <WrapPinCard>
      <p className="name">{vocabulary.name}</p>
      <p className="mean">{vocabulary.meanings}</p>
      <IconPin
        className={clsx(isActivePin && "active", "icon-pin")}
        onClick={handlePinVocabulary}
      />
    </WrapPinCard>
  );
};

export default PinCard;
