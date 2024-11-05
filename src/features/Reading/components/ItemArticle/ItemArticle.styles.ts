import styled from "styled-components";

export const WrapItemArticle = styled.article`
  display: flex;
  gap: 2rem;
  img {
    max-width: 12rem;
    border-radius: 1rem;
  }
  .article-content {
    flex: 1;
    .article-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.2rem;
    }
    .article-cate {
      background-color: #b8040433;
      padding: 2px 6px;
      border-radius: 1rem;
    }
    h3 {
      font-weight: 500;
      font-size: 1.7rem;
      margin: 8px 0;
      max-width: 80%;
    }
    .article-date {
      color: ${(props) => props.theme.palette.gray.medium};
    }
    .btn-read {
      display: flex;
      align-items: center;
      margin-left: auto;
      padding: 0.3rem 1.2rem;
      border-radius: 2rem;
      font-size: 1.3rem;
      background-color: ${(props) => props.theme.palette.primary.main};
      color: ${(props) => props.theme.palette.white};
      width: fit-content;
      &:hover svg {
        transform: translateX(5px);
      }
      svg {
        transition: 0.3s ease;
        width: 2rem;
      }
    }
  }
`;
