import { styled } from "styled-components";

export const WrapPagination = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 5px;
  justify-content: flex-end;
  & > li {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.6rem;
    width: 3.5rem;
    height: 3.5rem;
    background-color: ${(props) => props.theme.palette.gray.extraLight};
    font-size: 1.5rem;
    font-weight: 500;
    border-radius: 8px;
    &:hover {
      color: ${(props) => props.theme.palette.primary.main};
    }
    &.active {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      background-color: ${(props) => props.theme.palette.primary.main};
      color: ${(props) => props.theme.palette.white};
    }
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
  & > li:first-child,
  & > li:last-child {
    border-radius: 100%;
    &:hover {
      background-color: ${(props) => props.theme.palette.primary.main};
      color: ${(props) => props.theme.palette.white};
    }
  }
  & > li:first-child {
    margin-right: 1rem;
  }
  & > li:last-child {
    margin-left: 1rem;
  }
`;
