import { styled } from "styled-components";

export const WrapListVocabulary = styled.div`
  column-count: 2;
  gap: 6.4rem;
`;

export const WrapContent = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.palette.white};
  .wrap-list {
    max-width: 102.4rem;
    margin: 0 auto;
  }
`;
