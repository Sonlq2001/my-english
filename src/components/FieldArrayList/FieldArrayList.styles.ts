import { styled } from "styled-components";

export const FieldArrayWrap = styled.div`
  label {
    margin-bottom: 0.5rem;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .label-require {
    color: red;
    font-size: 1.8rem;
  }
`;

export const FieldList = styled.div`
  padding-left: 3rem;
`;

export const FieldArrayItem = styled.div`
  & + & {
    margin-top: 1.5rem;
  }
  .error-message {
    color: red;
    display: inline-block;
    font-size: 1.5rem;
    margin-left: 7.4rem;
    margin: 0.5rem 0 0 7.4rem;
  }
`;

export const FieldArrayItemInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
