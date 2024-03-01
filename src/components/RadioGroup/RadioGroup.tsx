import { FC, memo } from "react";

import { OptionsType } from "@app/types/app.types";

import { WrapRadioGroup, ListRadio, WrapRadio } from "./RadioGroup.styles";

interface RadioGroupProps {
  options: OptionsType;
  name: string;
  label?: string;
}

const RadioGroup: FC<RadioGroupProps> = ({ options, name, label }) => {
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
              name={name}
              value={option.value}
            />
            <label htmlFor={`${option.value}-${index}`} className="label-radio">
              {option.label}
            </label>
          </WrapRadio>
        ))}
      </ListRadio>
    </WrapRadioGroup>
  );
};

export default memo(RadioGroup);
