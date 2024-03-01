import { styled } from "styled-components";

export const WrapRadioGroup = styled.div`
  .title-radio {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: inline-block;
  }
`;

export const ListRadio = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const WrapRadio = styled.div`
  border-radius: 1rem;
  color: ${(props) => props.theme.palette.gray.extrabold};
  overflow: hidden;
  .input-radio:checked + .label-radio {
    color: ${(props) => props.theme.palette.white};
    background-color: ${(props) => props.theme.palette.primary.main};
  }
  .label-radio {
    user-select: none;
    background-color: ${(props) => props.theme.palette.gray.thin};
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;
