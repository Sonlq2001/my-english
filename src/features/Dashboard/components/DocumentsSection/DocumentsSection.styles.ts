import { styled } from "styled-components";

export const WrapListDoc = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const WrapDoc = styled.article`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 4.2rem;
  font-size: 1.4rem;
  img {
    width: 100%;
    max-width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  span {
    line-height: 2.1rem;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    flex: 1;
  }
  button {
    padding: 0.5rem 1.3rem;
    border-radius: 2rem;
    font-weight: 500;
    color: ${(props) => props.theme.palette.primary.main};
    background-color: #f7f7f7;
    &:hover {
      background-color: #f4f4f4;
    }
  }
`;
