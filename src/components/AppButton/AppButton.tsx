import { FC, ButtonHTMLAttributes, ReactNode, memo } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { Button } from "./AppButton.styles";
import { Attributes } from "@app/types/them.types";

type AppButtonProps = Attributes &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    to?: string;
  };

const AppButton: FC<AppButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  variant,
  size,
  disabled,
  className,
  to,
  ...rest
}) => {
  const WrapButton = (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === "string"
          ? isPropValid(propName)
          : true;
      }}
      {...rest}
    >
      <Button
        className={clsx(className, disabled && "disabled")}
        variant={variant}
        size={size}
        disabled={disabled}
      >
        {leftIcon && <span className="icon left-icon">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="icon right-icon">{rightIcon}</span>}
      </Button>
    </StyleSheetManager>
  );

  if (to) {
    return <Link to={to}>{WrapButton}</Link>;
  }

  return WrapButton;
};

export default memo(AppButton);
