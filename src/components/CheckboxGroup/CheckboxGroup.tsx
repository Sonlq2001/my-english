import { FC, InputHTMLAttributes, memo } from "react";
import { Field, FieldProps } from "formik";

import { OptionsType } from "@app/types/app.types";
import {
  ListCheckbox,
  WrapCheckbox,
  WrapCheckboxGroup,
} from "@app/components/CheckboxGroup/CheckBoxGroup.styles";

interface CheckboxGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  options: OptionsType;
  name: string;
  label?: string;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  options,
  name,
  label,
  ...props
}) => {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => {
        return (
          <WrapCheckboxGroup>
            {label && (
              <label htmlFor="" className="title-checkbox">
                {label}
              </label>
            )}

            <ListCheckbox>
              {options.map((option, index) => (
                <WrapCheckbox key={`key-${option.value}`}>
                  <input
                    type="checkbox"
                    id={`${option.value}-${index}`}
                    hidden
                    className="input-checkbox"
                    {...props}
                    {...field}
                    value={option.value}
                    checked={[...field.value].includes(option.value)}
                  />
                  <label
                    htmlFor={`${option.value}-${index}`}
                    className="label-checkbox"
                  >
                    {option.label}
                  </label>
                </WrapCheckbox>
              ))}
            </ListCheckbox>
          </WrapCheckboxGroup>
        );
      }}
    </Field>
  );
};

export default memo(CheckboxGroup);
