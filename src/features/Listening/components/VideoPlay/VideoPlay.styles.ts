import { styled } from "styled-components";

export const WrapVideoPlay = styled.div`
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;
  /* TODO: update fix */
  /* &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
  } */
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
  gap: 1.5rem;
  background-color: ${(props) => props.theme.palette.gray.extraLight};
  padding: 0.8rem;
`;

export const ButtonPlay = styled.button`
  background-color: transparent;
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const WrapProgressVideo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  .time-progress {
    display: flex;
    gap: 0.3rem;
    font-size: 1.3rem;
    span {
      white-space: nowrap;
    }
  }
`;

export const WrapVolume = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
  &:hover {
    cursor: pointer;
  }
  .range-volume {
    height: 0.3rem;
    width: 5rem;
    &::-webkit-slider-thumb {
      height: 1rem;
      width: 1rem;
    }
  }
  .btn-volume {
    line-height: 0;
  }
`;
