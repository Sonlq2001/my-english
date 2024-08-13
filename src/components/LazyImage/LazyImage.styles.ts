import { styled } from "styled-components";

export const WrapLazyImage = styled.section`
  position: relative;
  .lazyContent {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #eee;
    border-radius: 1rem;
    animation: skeleton-animation 1.5s ease-in-out infinite;
  }
  @keyframes skeleton-animation {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }

    100% {
      opacity: 0.4;
    }
  }
  img {
    opacity: 0;
    visibility: hidden;
  }
`;
