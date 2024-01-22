import { FC, ButtonHTMLAttributes, ReactNode, memo } from "react";

import { Button } from "./AppButton.styles";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const AppButton: FC<AppButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  return (
    <Button {...rest}>
      {leftIcon && <span className="icon left-icon">{leftIcon}</span>}
      <span className="text">{children}</span>
      {rightIcon && <span className="icon right-icon">{rightIcon}</span>}
    </Button>
  );
};

export default memo(AppButton);
