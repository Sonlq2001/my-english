import { styled } from "styled-components";

export const WrapReadingScreen = styled.main`
  padding-top: 3.5rem;
`;

export const ListTopics = styled.ul`
  margin-top: 3.5rem;
  display: flex;
  gap: 2rem;
  list-style-type: none;
`;

export const SectionLayoutReading = styled.section`
  display: flex;
  margin-top: 3rem;
  gap: 3rem;
  align-items: flex-start;
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
  .pagination {
    margin-top: 2rem;
  }
`;
