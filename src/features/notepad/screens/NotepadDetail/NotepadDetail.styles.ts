import { styled } from "styled-components";

export const WrapNotepadDetail = styled.div`
  max-width: 76.8rem;
  margin: 0 auto;
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
    margin: 1rem 0;
  }
`;
