import { styled } from "styled-components";

export const WrapTextEditor = styled.div`
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.palette.gray.extraLight};
`;

export const WrapContentEditor = styled.div`
  height: 35rem;
  & .editor-tip-tab {
    height: 100%;
  }

  & .ProseMirror {
    height: 100%;
    outline: none;
    padding: 1.5rem;
  }
`;
