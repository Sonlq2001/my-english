import { FC, memo } from "react";

import { WrapHelperText } from "./HelperText.styles";

interface HelperTextProps {
  text: string;
}

const HelperText: FC<HelperTextProps> = ({ text }) => {
  return <WrapHelperText>{text}</WrapHelperText>;
};

export default memo(HelperText);
