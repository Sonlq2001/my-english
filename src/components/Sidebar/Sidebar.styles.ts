import { styled } from "styled-components";

export const SidebarWrap = styled.div`
  min-height: 100vh;
  width: 22rem;
  padding: 2rem 0;
  background-color: ${(props) => props.theme.palette.white};
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: -2px;
    bottom: 0;
    width: 2px;
    height: 100%;
    background-color: #dbe4e8;
  }
`;

export const TitleSidebar = styled.h1`
  margin: 0;
  font-size: 2.4rem;
  text-align: right;
  padding-right: 2.5rem;
`;

export const ListMenu = styled.div`
  margin-top: 3rem;

  .btn-sidebar {
    width: 100%;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    justify-content: flex-start;
  }

  a button.btn-active {
    background-color: ${(props) => props.theme.palette.button.lightBg};
    overflow: hidden;
    color: ${(props) => props.theme.palette.primary.main};
    border-right: 3px solid ${(props) => props.theme.palette.primary.main};
    border-radius: 0;
    .btn-sidebar {
      color: inherit;
    }
  }
`;
