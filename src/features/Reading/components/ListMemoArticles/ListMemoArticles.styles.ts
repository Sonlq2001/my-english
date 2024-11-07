import { styled } from "styled-components";

export const WrapListMemoArticles = styled.section`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemMemoArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h4 {
    font-weight: 500;
    line-height: 2.2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .last-open {
    font-size: 1.3rem;
    color: ${(props) => props.theme.palette.gray.medium};
  }
  .btn-continue {
    margin-left: auto;
    font-size: 1.3rem;
    padding: 6px 18px;
    border-radius: 1.5rem;
    background-color: ${(props) => props.theme.palette.gray.extraLight};
  }
`;
