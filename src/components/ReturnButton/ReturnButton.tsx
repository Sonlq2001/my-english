import { FC, memo } from "react";

import IconBackRound from "@app/assets/images/icon-svg/icon-back-round.svg?react";

import { WrapReturnButton } from "./ReturnButton.styles";

interface ReturnButtonProps {
  text?: string;
  to: string;
}

const ReturnButton: FC<ReturnButtonProps> = ({ text = "Page back", to }) => {
  return (
    <WrapReturnButton to={to}>
      <IconBackRound />
      {text}
    </WrapReturnButton>
  );
};

export default memo(ReturnButton);
