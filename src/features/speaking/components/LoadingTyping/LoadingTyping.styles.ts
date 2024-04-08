import { styled } from "styled-components";

export const WrapLoadingTyping = styled.div`
  display: inline-block;
  @keyframes blink {
    50% {
      fill: transparent;
    }
  }
  .dot {
    animation: 2s blink infinite;
    fill: grey;
  }
  .dot:nth-child(2) {
    animation-delay: 250ms;
  }
  .dot:nth-child(3) {
    animation-delay: 500ms;
  }
`;
