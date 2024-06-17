import { styled } from "styled-components";

export const WrapArticle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover {
    opacity: 0.7;
  }
  &:hover .controls {
    visibility: visible;
    opacity: 1;
  }
  .topic-article {
    font-size: 1.4rem;
    background-color: #fcdbdc;
    padding: 0.4rem;
    border-radius: 0.8rem;
    width: max-content;
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
    color: ${(props) => props.theme.palette.gray.medium};
  }
  .controls {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    opacity: 0;
    visibility: hidden;
    padding: 0.5rem 1rem;
    transition: 0.3s ease;
    position: absolute;
    z-index: 10;
    right: 1rem;
    top: 0;
    &:hover {
      cursor: default;
    }
    svg:first-child {
      width: 2rem;
      height: 2rem;
    }
    svg {
      opacity: 0.6;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const ContentConfirm = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: red;
  svg {
    width: 3rem;
    height: 3rem;
  }
`;
