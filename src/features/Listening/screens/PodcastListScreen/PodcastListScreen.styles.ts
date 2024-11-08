import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 3rem;
  padding-top: 3rem;
`;

export const BannerSection = styled.section`
  text-align: center;
  position: sticky;
  top: 0;
  padding: 5rem 0;
  height: 100%;
  h1 {
    font-size: 2.3rem;
    margin-bottom: 1rem;
  }
  img {
    width: 25rem;
    height: 25rem;
    border-radius: 1rem;
  }
  p {
    font-size: 1.4rem;
  }
`;

export const SectionList = styled.section`
  flex: 1;
  background-color: ${(props) => props.theme.palette.white};
  padding: 2rem;
  border-radius: 5px;
  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    &::first-letter {
      text-transform: uppercase;
    }
  }
  ol {
    margin-top: 1.5rem;
  }
`;
