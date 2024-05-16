import { styled } from "styled-components";

export const WrapVideoPlay = styled.div`
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
  }
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
