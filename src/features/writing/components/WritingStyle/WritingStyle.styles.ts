import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const WrapWritingStyle = styled(Link)`
  max-width: 22rem;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.palette.white};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  img {
    width: 100%;
    border-radius: 1rem;
  }
  h2 {
    font-size: 1.5rem;
    position: absolute;
    top: 3rem;
    left: 1.5rem;
    right: 1.5rem;
    background-color: ${(props) => props.theme.palette.white};
    padding: 0.8rem 0;
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
      0px -4px 10px rgba(255, 255, 255, 0.3);
    line-height: 2rem;
  }
`;
