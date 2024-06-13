import { styled } from "styled-components";

export const WrapMenuEditor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: ${(props) => props.theme.palette.gray.extraLight};
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  .menu-heading {
    position: absolute;
    z-index: 5;
    top: 4.5rem;
  }

  .btn-menu {
    padding: 0.2rem;
    line-height: 0;
    background-color: transparent;
    border-radius: 0.5rem;
    display: block;
    &:hover {
      background-color: #cbe5ff;
    }
  }

  .btn-menu.is-active {
    background-color: #cbe5ff;
  }

  .btn-menu:disabled {
    svg {
      fill: #bbb;
    }
    cursor: default;
    pointer-events: none;
    &:hover {
      background-color: transparent;
    }
  }
`;
