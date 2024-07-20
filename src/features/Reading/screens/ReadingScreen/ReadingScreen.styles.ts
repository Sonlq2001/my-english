import { styled } from "styled-components";

export const WrapReadingScreen = styled.section`
  padding-top: 3.5rem;
`;

export const ListTopics = styled.div`
  margin-top: 3.5rem;
  display: flex;
  gap: 2rem;
`;

export const SectionLayoutReading = styled.section`
  display: flex;
  margin-top: 3rem;
  gap: 3rem;
  .article-list {
    width: 70%;
  }
  .memo-article {
    width: 30%;
  }
`;

export const SectionArticleList = styled.section`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
