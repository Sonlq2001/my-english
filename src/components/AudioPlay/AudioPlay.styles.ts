import { styled } from "styled-components";

export const AudioPlayWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem 4rem;
  background-color: ${(props) => props.theme.palette.white};
  display: flex;
  align-items: center;
  gap: 5rem;
  z-index: 10;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const AudioInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-right: 1.5rem;
  }
`;

export const AudioControl = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const AudioPlayControl = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  svg {
    cursor: pointer;
  }

  svg.icon-play-back-right {
    transform: rotate(180deg);
  }

  svg.icon-play {
    width: 5rem;
    height: 5rem;
  }
`;

export const AudioTimeLine = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  .input-track {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    cursor: pointer;
    outline: none;
    border-radius: 0.4rem;
    height: 0.5rem;
    background: ${(props) => props.theme.palette.gray.medium};
  }

  /* Thumb: webkit */
  .input-track::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 1.2rem;
    width: 1.2rem;
    background-color: ${(props) => props.theme.palette.primary.main};
    border-radius: 50%;
    border: none;
    transition: 0.2s ease-in-out;
  }

  /* Thumb: Firefox */
  .input-track::-moz-range-thumb {
    height: 1.2rem;
    width: 1.2rem;
    background-color: ${(props) => props.theme.palette.primary.main};
    border-radius: 50%;
    transition: 0.2s ease-in-out;
  }

  /* Hover, active & focus Thumb: Webkit */
  .input-track::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 0.8rem rgba(25, 118, 210, 0.1);
  }
  .input-track:active::-webkit-slider-thumb {
    box-shadow: 0 0 0 1.1rem rgba(25, 118, 210, 0.2);
  }
  .input-track:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1.1rem rgba(25, 118, 210, 0.2);
  }

  /* Hover, active & focus Thumb: Firfox */
  .input-track::-moz-range-thumb:hover {
    box-shadow: 0 0 0 0.8rem rgba(25, 118, 210, 0.1);
  }
  .input-track:active::-moz-range-thumb {
    box-shadow: 0 0 0 1.1rem rgba(25, 118, 210, 0.2);
  }
  .input-track:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1.1rem rgba(25, 118, 210, 0.2);
  }

  .icon-volume {
    margin-left: 2.5rem;
    cursor: pointer;
  }
`;
