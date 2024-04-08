import { styled } from "styled-components";

export const WrapCustomizeText = styled.div`
  textarea {
    border: none;
    outline: none;
    width: 100%;
    resize: none;
    background-color: ${(props) => props.theme.palette.gray.extraLight};
    padding: 1.5rem;
    border-radius: 0.5rem;
  }
`;
