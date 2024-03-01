import { FC, InputHTMLAttributes, memo } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import { WrapTextField, Input } from "./TextField.styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fullWidth?: boolean;
  name: string;
}

const TextField: FC<TextFieldProps> = ({
  label,
  fullWidth,
  name,
  ...props
}) => {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === "string"
          ? isPropValid(propName)
          : true;
      }}
    >
      <WrapTextField fullWidth={fullWidth}>
        {label && <label htmlFor={label}>{label}</label>}
        <Input type="text" id={label} name={name} {...props} />
      </WrapTextField>
    </StyleSheetManager>
  );
};

export default memo(TextField);
