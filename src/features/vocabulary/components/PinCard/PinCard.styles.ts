import { styled } from "styled-components";

export const WrapPinCard = styled.section`
  padding: 2rem;
  background-color: ${(props) => props.theme.palette.white};
  border-radius: 1rem;
  position: relative;
  & + & {
    margin-top: 1.5rem;
  }
  .mean {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  .icon-pin {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    transform: rotate(45deg);
    cursor: pointer;
  }
`;
