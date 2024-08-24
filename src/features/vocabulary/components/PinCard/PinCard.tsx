import { WrapPinCard } from "./PinCard.styles";

import IconPin from "@app/assets/images/icon-svg/icon-pin.svg?react";

const PinCard = () => {
  return (
    <WrapPinCard>
      <p className="name">decade</p>
      <p className="mean">Thập kỉ</p>
      <IconPin className="icon-pin" />
    </WrapPinCard>
  );
};

export default PinCard;
