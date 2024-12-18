import { styled } from "styled-components";

export const WrapSpeaking = styled.main`
  padding-top: 3.5rem;
`;

export const ListTypes = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 3.5rem;
`;

export const ItemTypeSpeaking = styled.article<{ styleColor: string }>`
  width: calc(100% / 4);
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.styleColor};
  }
  img {
    width: 100%;
    max-height: 25rem;
    height: 100%;
  }
  .content-item {
    padding: 2.5rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: ${(props) => props.theme.palette.white};
    p {
      flex: 1;
      line-height: 2rem;
    }
    .btn-join {
      background-color: ${(props) => props.theme.palette.white};
      border: none;
      border-radius: 2rem;
      margin-left: auto;
      & span {
        margin-left: 4px;
      }
      svg {
        transition: 0.3s ease;
      }
      &:hover svg {
        transform: translateX(5px);
      }
    }
  }
`;
