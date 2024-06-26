import { FC, InputHTMLAttributes, memo } from "react";
import { Field, FieldProps } from "formik";

import { OptionsType } from "@app/types/app.types";

import { WrapRadioGroup, ListRadio, WrapRadio } from "./RadioGroup.styles";

interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  options: OptionsType;
  name: string;
  label?: string;
}

const RadioGroup: FC<RadioGroupProps> = ({
  options,
  name,
  label,
  ...props
}) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => {
        return (
          <WrapRadioGroup>
            {label && (
              <label htmlFor="" className="title-radio">
                {label}
              </label>
            )}

            <ListRadio>
              {options.map((option, index) => (
                <WrapRadio key={`key-${option.value}`}>
                  <input
                    type="radio"
                    id={`${option.value}-${index}`}
                    hidden
                    className="input-radio"
                    {...props}
                    {...field}
                    value={option.value}
                    checked={option.value === field.value}
                  />
                  <label
                    htmlFor={`${option.value}-${index}`}
                    className="label-radio"
                  >
                    {option.label}
                  </label>
                </WrapRadio>
              ))}
            </ListRadio>
          </WrapRadioGroup>
        );
      }}
    </Field>
  );
};

export default memo(RadioGroup);
