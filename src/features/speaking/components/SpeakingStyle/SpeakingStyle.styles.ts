import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const WrapSpeakingStyle = styled(Link)`
  position: relative;
  max-height: 22rem;
  max-width: 22rem;
  height: 100%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  overflow: hidden;
  border-radius: 0.5rem;

  img {
    width: 100%;
  }
`;

export const SpeakingStyleContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  margin: 0 2rem;
  padding: 1.5rem;
  text-align: center;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(1rem);
    z-index: -1;
    border-radius: 0.3rem;
  }

  h3 {
    word-break: break-word;
    color: ${(props) => props.theme.palette.gray.black};
  }
`;
