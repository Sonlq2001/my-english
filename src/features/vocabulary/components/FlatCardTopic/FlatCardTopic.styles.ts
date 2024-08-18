import { styled } from "styled-components";

export const WrapFlatCard = styled.article<{ themeColor: string }>`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  .flat-bg {
    background-color: ${(props) => props.themeColor};
    min-width: 5rem;
    min-height: 5rem;
    border-radius: 1rem;
  }
  .flat-title {
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-word;
    width: 15rem;
    line-height: 2.2rem;
  }
`;
