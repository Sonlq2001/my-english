import { styled } from "styled-components";

export const WrapFireworks = styled.section<{
  size: "small" | "medium" | "larger";
  time: number;
}>`
  .firework {
    position: absolute;
  }
  .explosion {
    position: absolute;
    left: -2px;
    bottom: 0;
    width: 4px;
    height: 8rem;
    transform-origin: 50% 100%;
    overflow: hidden;
  }
  .explosion:nth-child(1) {
    transform: rotate(0deg) translateY(-15px);
  }
  .explosion:nth-child(2) {
    transform: rotate(30deg) translateY(-15px);
  }
  .explosion:nth-child(3) {
    transform: rotate(60deg) translateY(-15px);
  }
  .explosion:nth-child(4) {
    transform: rotate(90deg) translateY(-15px);
  }
  .explosion:nth-child(5) {
    transform: rotate(120deg) translateY(-15px);
  }
  .explosion:nth-child(6) {
    transform: rotate(150deg) translateY(-15px);
  }
  .explosion:nth-child(7) {
    transform: rotate(180deg) translateY(-15px);
  }
  .explosion:nth-child(8) {
    transform: rotate(210deg) translateY(-15px);
  }
  .explosion:nth-child(9) {
    transform: rotate(240deg) translateY(-15px);
  }
  .explosion:nth-child(10) {
    transform: rotate(270deg) translateY(-15px);
  }
  .explosion:nth-child(11) {
    transform: rotate(300deg) translateY(-15px);
  }
  .explosion:nth-child(12) {
    transform: rotate(330deg) translateY(-15px);
  }

  .explosion::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 40px;
    background-color: #f5cf52;
  }
  @keyframes explosion {
    0% {
      top: 100%;
    }
    33%,
    100% {
      top: -50%;
    }
  }

  #firework1 {
    left: 50%;
    top: 50%;
    transform: ${(props) => {
      switch (props.size) {
        case "larger":
          return "scale(.7)";
        case "medium":
          return "scale(.5)";
        default:
          return "scale(.3)";
      }
    }};
  }
  #firework1 .explosion::before {
    animation: ${(props) => `explosion ${props.time}s ease-in-out infinite`};
  }
`;
