import { styled } from "styled-components";

export const ItemWriting = styled.article<{ color: string }>`
  flex: 1;
  border-radius: 2rem;
  overflow: hidden;
  padding: 2.5rem;
  background-color: ${(props) => `${props.color}40`};
  display: flex;
  flex-direction: column;
  .box-image {
    background-color: ${(props) => props.color};
    padding: 3rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 8rem;
      height: 8rem;
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 2rem;
  }
  .title-topic {
    font-size: 1.7rem;
    font-weight: 500;
    flex: 1;
  }
  .btn-join {
    display: flex;
    margin-left: auto;
    padding: 8px;
    border-radius: 1rem;
    background-color: ${(props) => props.color};
    color: ${(props) => props.theme.palette.white};
    &:hover {
      opacity: 0.9;
    }
  }
`;
