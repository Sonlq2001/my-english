import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const WrapReturnButton = styled(Link)`
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.5rem;
  padding: 0.2rem 0.6rem;
  border-radius: 0.5rem;
  transition: ease 0.4s;
  width: fit-content;
  color: ${(props) => props.theme.palette.gray.extrabold};
  svg {
    width: 2rem;
  }
  &:hover {
    background-color: #f3f3f3;
  }
`;
