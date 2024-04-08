import { FC, InputHTMLAttributes, memo } from "react";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { Field, FieldProps } from "formik";

import HelperText from "../HelperText/HelperText";
import { WrapTextField, Input } from "./TextField.styles";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fullWidth?: boolean;
  name: string;
  isRequire?: boolean;
  isHiddenHelperText?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  label,
  fullWidth,
  name,
  isRequire,
  isHiddenHelperText,
  ...props
}) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => {
        const isError = meta.touched && meta.error;
        return (
          <StyleSheetManager
            enableVendorPrefixes
            shouldForwardProp={(propName, elementToBeRendered) => {
              return typeof elementToBeRendered === "string"
                ? isPropValid(propName)
                : true;
            }}
          >
            <WrapTextField
              fullWidth={fullWidth}
              className={isError ? "error" : ""}
            >
              {label && (
                <label htmlFor={label}>
                  {label}
                  {isRequire && <span className="label-require">*</span>}
                </label>
              )}
              <Input
                type="text"
                id={label}
                {...props}
                {...field}
                className="input-field"
              />

              {isError &&
                typeof meta.error === "string" &&
                !isHiddenHelperText && <HelperText text={meta.error} />}
            </WrapTextField>
          </StyleSheetManager>
        );
      }}
    </Field>
  );
};

export default memo(TextField);
