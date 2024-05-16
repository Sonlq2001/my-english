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

export const WrapControlVideo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: ${(props) => props.theme.palette.gray.extraLight};
  padding: 0.8rem;
`;

export const ButtonPlay = styled.button`
  background-color: transparent;
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
