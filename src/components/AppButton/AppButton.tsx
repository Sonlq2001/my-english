import { FC, ButtonHTMLAttributes, ReactNode, memo } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

import { Button } from "./AppButton.styles";
import { Attributes } from "@app/types/them.types";

type AppButtonProps = Attributes &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    to?: string;
    fullWidth?: boolean;
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
  fullWidth,
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
    >
      <Button
        className={clsx(className, disabled && "disabled")}
        variant={variant}
        size={size}
        disabled={disabled}
        fullWidth={fullWidth}
        {...rest}
      >
        {leftIcon && (
          <span className={`icon ${children ? "left-icon" : ""}`}>
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && <span className="icon right-icon">{rightIcon}</span>}
      </Button>
    </StyleSheetManager>
  );

  if (to) {
    return <NavLink to={to}>{WrapButton}</NavLink>;
  }

  return WrapButton;
};

export default memo(AppButton);
