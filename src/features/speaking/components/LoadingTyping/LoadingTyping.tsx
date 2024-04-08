import { FC, memo } from "react";
import IconTyping from "@app/assets/images/icon-svg/icon-typing.svg?react";

import { WrapLoadingTyping } from "./LoadingTyping.styles";

const LoadingTyping: FC = () => {
  return (
    <WrapLoadingTyping>
      <IconTyping />
    </WrapLoadingTyping>
  );
};

export default memo(LoadingTyping);
