import { FC } from "react";

import IconPin from "@app/assets/images/icon-svg/icon-pin.svg?react";
import { ItemMarkVocabulary } from "@app/features/vocabulary/vocabulary";

import { WrapPinCard } from "./PinCard.styles";

interface PinCardProps {
  vocabulary: ItemMarkVocabulary;
}

const PinCard: FC<PinCardProps> = ({ vocabulary }) => {
  return (
    <WrapPinCard>
      <p className="name">{vocabulary.name}</p>
      <p className="mean">{vocabulary.meanings}</p>
      <IconPin className="icon-pin" />
    </WrapPinCard>
  );
};

export default PinCard;
