import { styled } from "styled-components";

export const WrapArticleDetail = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme.palette.white};
  > h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .content {
    margin-top: 2rem;
  }
`;

export const HeaderArticleDetail = styled.div`
  text-align: right;
  margin-bottom: 2rem;
  svg {
    cursor: pointer;
  }
  svg.active {
    color: #ff9100;
  }
`;

export const InfoArticle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  .dot {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background-color: ${(props) => props.theme.palette.gray.black};
  }
`;
