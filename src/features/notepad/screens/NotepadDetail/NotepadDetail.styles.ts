import { styled } from "styled-components";

export const WrapNotepadDetail = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.palette.white};
`;

export const ContentDetail = styled.div`
  margin-top: 2rem;
  line-height: 2.5rem;
  .time-notepad {
    text-align: center;
    font-size: 1.3rem;
    color: ${(props) => props.theme.palette.gray.semibold};
  }
  h3 {
    margin: 1.5rem 0;
  }
  .content-editor {
    margin-top: 2rem;
  }
`;
