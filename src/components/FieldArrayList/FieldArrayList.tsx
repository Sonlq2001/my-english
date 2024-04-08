import { FC, memo, InputHTMLAttributes } from "react";
import { FieldArray, useFormikContext, ErrorMessage } from "formik";
import get from "lodash.get";

import IconPlusInCircle from "@app/assets/images/icon-svg/icon-plus-in-circle.svg?react";
import IconMinusInCircle from "@app/assets/images/icon-svg/icon-minus-in-circle.svg?react";
import AppButton from "@app/components/AppButton/AppButton";
import TextField from "@app/components/TextField/TextField";

import {
  FieldArrayWrap,
  FieldList,
  FieldArrayItem,
  FieldArrayItemInner,
} from "./FieldArrayList.styles";

interface FieldArrayListProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  dataReset?: unknown;
  isRequire?: boolean;
  min?: number;
  max?: number;
  keyObject: string;
}

const FieldArrayList: FC<FieldArrayListProps> = ({
  name,
  label,
  placeholder,
  dataReset,
  isRequire,
  min = 1,
  max = 5,
  keyObject,
  ...props
}) => {
  const { values } = useFormikContext();
  const listData = get(values, name);

  return (
    <FieldArrayWrap>
      {label && (
        <label htmlFor="">
          {label}
          {isRequire && <span className="label-require">*</span>}
        </label>
      )}

      <FieldArray
        name={name}
        render={(arrayHelpers) => {
          return (
            <FieldList>
              {listData &&
                listData.length > 0 &&
                listData.map((_: unknown, index: number) => {
                  const total = listData.length;
                  const nameField = `${name}[${index}].${keyObject}`;

                  return (
                    <FieldArrayItem key={`item-${index}`}>
                      <FieldArrayItemInner>
                        <AppButton
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                          leftIcon={<IconMinusInCircle />}
                          variant="outlined"
                          disabled={total === min}
                        />
                        <TextField
                          name={nameField}
                          fullWidth
                          placeholder={`${placeholder}_${index + 1}`}
                          isHiddenHelperText
                          {...props}
                        />

                        <AppButton
                          type="button"
                          onClick={() => arrayHelpers.push(dataReset)}
                          leftIcon={<IconPlusInCircle />}
                          variant="outlined"
                          disabled={total === max}
                        />
                      </FieldArrayItemInner>

                      <ErrorMessage
                        name={nameField}
                        className="error-message"
                        component="span"
                      />
                    </FieldArrayItem>
                  );
                })}
            </FieldList>
          );
        }}
      />
    </FieldArrayWrap>
  );
};

export default memo(FieldArrayList);
