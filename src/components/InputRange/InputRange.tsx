import { FC, InputHTMLAttributes } from "react";

import { WrapInputRange } from "./InputRange.styles";

interface InputRangeProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputRange: FC<InputRangeProps> = ({ ...props }) => {
  return <WrapInputRange type="range" {...props} />;
};

export default InputRange;
