import { styled } from "styled-components";

export const WrapInputRange = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 0.4rem;
  height: 0.5rem;
  background: ${(props) => props.theme.palette.gray.medium};

  /* Thumb: webkit */
  &::-webkit-slider-thumb {
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
  &::-moz-range-thumb {
    height: 1.2rem;
    width: 1.2rem;
    background-color: ${(props) => props.theme.palette.primary.main};
    border-radius: 50%;
    transition: 0.2s ease-in-out;
  }

  /* Hover, active & focus Thumb: Webkit */
  &::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 0.8rem rgba(25, 118, 210, 0.1);
  }
  &:active::-webkit-slider-thumb {
    box-shadow: 0 0 0 1.1rem rgba(25, 118, 210, 0.2);
  }
  &:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1.1rem rgba(25, 118, 210, 0.2);
  }

  /* Hover, active & focus Thumb: Firfox */
  &::-moz-range-thumb:hover {
    box-shadow: 0 0 0 0.8rem rgba(25, 118, 210, 0.1);
  }
  &:active::-moz-range-thumb {
    box-shadow: 0 0 0 1.1rem rgba(25, 118, 210, 0.2);
  }
  &:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1.1rem rgba(25, 118, 210, 0.2);
  }
`;
