import { FC, ButtonHTMLAttributes, ReactNode, memo } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import { Button } from "./AppButton.styles";
import { Attributes } from "@app/types/them.types";

type AppButtonProps = Attributes &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
  };

const AppButton: FC<AppButtonProps> = ({
  children,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === "string"
          ? isPropValid(propName)
          : true;
      }}
      {...rest}
    >
      <Button>
        {leftIcon && <span className="icon left-icon">{leftIcon}</span>}
        <span className="text">{children}</span>
        {rightIcon && <span className="icon right-icon">{rightIcon}</span>}
      </Button>
    </StyleSheetManager>
  );
};

export default memo(AppButton);
