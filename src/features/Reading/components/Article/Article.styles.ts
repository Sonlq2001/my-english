import { styled } from "styled-components";

export const WrapArticle = styled.div`
  .topic-article {
    font-size: 1.4rem;
    display: block;
  }
  .title-article {
    margin: 0.5rem 0;
    display: inline-block;
    font-size: 1.7rem;
    font-weight: ${(props) => props.theme.palette.weight.medium};
    color: ${(props) => props.theme.palette.gray.black};
  }
  .des-article {
    font-size: 1.3rem;
    line-height: 1.7rem;
    color: ${(props) => props.theme.palette.gray.black};
  }
  .time-article {
    display: block;
    margin-top: 1rem;
    font-size: 1.3rem;
    font-weight: ${(props) => props.theme.palette.weight.medium};
  }
`;
