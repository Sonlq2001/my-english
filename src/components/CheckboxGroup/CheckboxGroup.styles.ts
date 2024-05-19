import { styled } from "styled-components";

export const WrapCheckboxGroup = styled.div`
  .title-checkbox {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: inline-block;
  }
`;

export const ListCheckbox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const WrapCheckbox = styled.div`
  border-radius: 1rem;
  color: ${(props) => props.theme.palette.gray.extrabold};
  overflow: hidden;
  .input-checkbox:checked + .label-checkbox {
    color: ${(props) => props.theme.palette.white};
    background-color: ${(props) => props.theme.palette.primary.main};
  }
  .label-checkbox {
    user-select: none;
    background-color: ${(props) => props.theme.palette.gray.thin};
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;
