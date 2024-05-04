import { styled } from "styled-components";

export const WrapMenuEditor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: ${(props) => props.theme.palette.gray.extraLight};
  padding: 1rem;

  .btn-menu {
    padding: 0.2rem;
    line-height: 0;
    background-color: transparent;
    border-radius: 0.5rem;
    &:hover {
      background-color: #cbe5ff;
    }
  }

  .btn-menu.is-active {
    background-color: #cbe5ff;
  }
`;
